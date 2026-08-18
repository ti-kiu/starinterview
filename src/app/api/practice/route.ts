import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { jobTitle, question, userAnswer, jobDescription, language } = body;

    if (!jobTitle || !question || !userAnswer) {
      return NextResponse.json(
        { error: "Missing required fields: jobTitle, question, userAnswer" },
        { status: 400 }
      );
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const isChinese = language === "zh";
    const langInstruction = isChinese
      ? "IMPORTANT: Respond entirely in Chinese (Simplified). All feedback, suggestions, and example answers must be in Chinese."
      : "IMPORTANT: Respond entirely in English.";

    const systemPrompt = `You are an expert interview coach specializing in the STAR method (Situation, Task, Action, Result).

${langInstruction}

Analyze the user's answer to an interview question and provide:

1. STAR scores (each 1-10):
   - Situation: How well did they describe the context?
   - Task: How clearly did they explain their responsibility?
   - Action: How detailed were their specific actions?
   - Result: Did they include measurable outcomes?

2. Overall score (1-100): Based on STAR completeness, clarity, specificity, and professionalism.

3. Detailed feedback: Specific strengths and areas for improvement.

4. Per-dimension feedback: For each STAR dimension (Situation, Task, Action, Result), provide:
   - A brief comment explaining the score
   - One specific suggestion for improvement

5. High-scoring example: A 90+ score example answer for this specific question, demonstrating best practices.

6. An improved version: Rewrite their answer using the STAR method with better structure, more specific details, and stronger language.

IMPORTANT: You MUST respond with ONLY valid JSON (no markdown, no code blocks, no extra text). Use this exact format:
{
  "scores": {
    "situation": <number 1-10>,
    "task": <number 1-10>,
    "action": <number 1-10>,
    "result": <number 1-10>,
    "overall": <number 1-100>
  },
  "feedback": "<detailed feedback text>",
  "starFeedback": {
    "situation": "<comment and suggestion for Situation>",
    "task": "<comment and suggestion for Task>",
    "action": "<comment and suggestion for Action>",
    "result": "<comment and suggestion for Result>"
  },
  "highScoreExample": "<a complete 90+ score STAR answer example>",
  "improvedAnswer": "<improved STAR answer based on user's own content>"
}`;

    const userPrompt = `Job Title: ${jobTitle}
${jobDescription ? `Job Description: ${jobDescription}` : ""}
Interview Question: ${question}

My Answer:
${userAnswer}

Please evaluate my answer using the STAR method and provide scores, feedback, per-dimension feedback, a high-scoring example, and an improved version.`;

    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.7,
          max_tokens: 3000,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("DeepSeek API error:", errorText);
      return NextResponse.json(
        { error: "AI service error. Please try again." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "No response from AI service" },
        { status: 502 }
      );
    }

    // Parse JSON from response - handle potential markdown code blocks
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[1].trim());
      } else {
        const braceMatch = content.match(/\{[\s\S]*\}/);
        if (braceMatch) {
          parsed = JSON.parse(braceMatch[0]);
        } else {
          throw new Error("Could not parse AI response");
        }
      }
    }

    // Validate structure with fallbacks
    return NextResponse.json({
      scores: parsed.scores || { situation: 5, task: 5, action: 5, result: 5, overall: 50 },
      feedback: parsed.feedback || content,
      starFeedback: parsed.starFeedback || {
        situation: "No specific feedback available.",
        task: "No specific feedback available.",
        action: "No specific feedback available.",
        result: "No specific feedback available.",
      },
      highScoreExample: parsed.highScoreExample || "Example not available.",
      improvedAnswer: parsed.improvedAnswer || "Could not generate improved answer.",
    });
  } catch (error) {
    console.error("Practice API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

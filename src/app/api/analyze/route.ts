import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface AnswerRecord {
  question: string;
  questionType: string;
  answer: string;
  scores: {
    situation: number;
    task: number;
    action: number;
    result: number;
    overall: number;
  };
  feedback: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { jobTitle, answers } = body as {
      jobTitle: string;
      answers: AnswerRecord[];
    };

    if (!jobTitle || !answers || answers.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields: jobTitle, answers" },
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

    const answersSummary = answers
      .map(
        (a, i) =>
          `Q${i + 1} [${a.questionType}]: ${a.question}\nAnswer: ${a.answer}\nScores: S=${a.scores.situation} T=${a.scores.task} A=${a.scores.action} R=${a.scores.result} Overall=${a.scores.overall}\nFeedback: ${a.feedback}`
      )
      .join("\n\n");

    const systemPrompt = `You are an expert interview coach. Analyze the user's overall interview performance across multiple questions and provide a comprehensive post-interview report.

IMPORTANT: You MUST respond with ONLY valid JSON (no markdown, no code blocks). Use this exact format:
{
  "overallScore": <number 1-100>,
  "strengths": ["strength1", "strength2", "strength3"],
  "weaknesses": ["weakness1", "weakness2", "weakness3"],
  "patterns": "Analysis of recurring patterns in answers (e.g., consistently weak on Results, strong on Situation)",
  "topRecommendations": ["recommendation1", "recommendation2", "recommendation3"],
  "summary": "A 2-3 sentence executive summary of interview readiness"
}`;

    const userPrompt = `Job Title: ${jobTitle}
Number of Questions Answered: ${answers.length}

Individual Answer Results:
${answersSummary}

Provide a comprehensive post-interview analysis report.`;

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
          max_tokens: 1500,
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

    // Compute averages from answers
    const avgSituation =
      answers.reduce((s, a) => s + a.scores.situation, 0) / answers.length;
    const avgTask =
      answers.reduce((s, a) => s + a.scores.task, 0) / answers.length;
    const avgAction =
      answers.reduce((s, a) => s + a.scores.action, 0) / answers.length;
    const avgResult =
      answers.reduce((s, a) => s + a.scores.result, 0) / answers.length;

    return NextResponse.json({
      overallScore: parsed.overallScore || 50,
      avgScores: {
        situation: Math.round(avgSituation * 10) / 10,
        task: Math.round(avgTask * 10) / 10,
        action: Math.round(avgAction * 10) / 10,
        result: Math.round(avgResult * 10) / 10,
      },
      strengths: parsed.strengths || [],
      weaknesses: parsed.weaknesses || [],
      patterns: parsed.patterns || "",
      topRecommendations: parsed.topRecommendations || [],
      summary: parsed.summary || "",
      questionCount: answers.length,
    });
  } catch (error) {
    console.error("Analysis API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

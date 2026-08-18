import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const jobTitle = body.jobTitle || "";
    const jobDescription = body.jobDescription || "";
    const language = body.language || "en";

    if (!jobTitle && !jobDescription) {
      return NextResponse.json(
        { error: "Job title or description is required" },
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
      ? "Generate all questions in Chinese (Simplified)."
      : "Generate all questions in English.";

    const prompt = `You are an expert interview coach. Based on the following job information, generate exactly 10 interview questions.

Job Title: ${jobTitle || "General Position"}
${jobDescription ? `\nJob Description:\n${jobDescription}` : ""}

Requirements:
- Generate exactly 10 questions
- ${langInstruction}
- Mix of behavioral (STAR method), technical, and situational questions
- Questions should be relevant to the role
- Return ONLY a JSON array of question strings

Example format:
["Question 1?", "Question 2?", "Question 3?", "Question 4?", "Question 5?", "Question 6?", "Question 7?", "Question 8?", "Question 9?", "Question 10?"]

Return ONLY the JSON array, no additional text.`;

    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content:
                "You are an expert interview coach. Generate interview questions in JSON format only.",
            },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 2000,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("API Error:", error);
      return NextResponse.json(
        { error: "Failed to generate questions" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      );
    }

    // Parse the JSON array from the response
    let questions: string[];
    try {
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        questions = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("No JSON array found in response");
      }
    } catch (parseError) {
      console.error("Parse error:", parseError, "Content:", content);
      questions = content
        .split("\n")
        .map((q: string) => q.replace(/^\d+[.\)]\s*/, "").trim())
        .filter((q: string) => q.length > 10)
        .slice(0, 10);
    }

    // Ensure we have at least 5 questions
    if (questions.length < 5) {
      console.error("Too few questions, got:", questions.length);
      return NextResponse.json(
        { error: "Failed to generate enough questions" },
        { status: 500 }
      );
    }

    // Add IDs to questions
    const questionsWithIds = questions.map((q, i) => ({
      id: i + 1,
      question: q,
    }));

    return NextResponse.json({ questions: questionsWithIds });
  } catch (error) {
    console.error("Error generating questions:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

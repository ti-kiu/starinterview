import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { jobTitle, question } = body;

    if (!jobTitle || !question) {
      return NextResponse.json(
        { error: "Missing required fields: jobTitle, question" },
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

    const systemPrompt = `You are an expert interview coach. Generate a strong, professional interview answer using the STAR method (Situation, Task, Action, Result).

The answer should:
- Be tailored to the specific job title provided
- Use clear, natural English suitable for a job interview
- Be structured with clear STAR sections
- Include specific details and measurable outcomes where possible
- Be approximately 200-300 words (suitable for a 2-minute spoken answer)
- Sound confident and professional

Format your response as a complete STAR answer with clear section headers (Situation, Task, Action, Result). Use natural paragraph transitions between sections.`;

    const userPrompt = `Job Title: ${jobTitle}

Interview Question: ${question}

Please generate a strong STAR method answer for this question, tailored to the ${jobTitle} role.`;

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

    return NextResponse.json({ answer: content });
  } catch (error) {
    console.error("Generate API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

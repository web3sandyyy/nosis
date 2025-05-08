import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Store conversation history in memory
let conversationHistory: { role: string; parts: { text: string }[] }[] = [];

export async function POST(request: NextRequest) {
  try {
    // Extract prompt from request body
    const body = await request.json();
    const { prompt, startNewConversation = false } = body;

    // Reset conversation history if starting a new conversation
    if (startNewConversation) {
      conversationHistory = [];

      // Add system instruction for direct, concise formatting
      conversationHistory.push({
        role: "user",
        parts: [
          {
            text: "I will provide direct, concise plain text responses without conversational elements. I will focus on factual content only.",
          },
        ],
      });
    }

    // Format the prompt to encourage direct, concise responses
    const formattedPrompt = startNewConversation
      ? `${prompt}\n\nProvide a direct, concise response in plain text format without any conversational elements.`
      : `${prompt}\n\nRespond in plain text format. Be direct and concise.`;

    // Add this prompt to history
    conversationHistory.push({
      role: "user",
      parts: [{ text: formattedPrompt }],
    });

    // Get API key from environment
    const apiKey = process.env.NEXT_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not defined in environment variables");
      return NextResponse.json(
        { error: "API key configuration error" },
        { status: 500 }
      );
    }

    // Initialize the Gemini API client
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.4, // Lower temperature for more concise, factual responses
        maxOutputTokens: 2048,
      },
    });

    // Create chat session
    const chat = model.startChat({
      history: conversationHistory.slice(0, -1),
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 2048,
      },
    });

    // Send the latest message
    const result = await chat.sendMessage(formattedPrompt);
    const rawResponse = result.response.text();

    // Process the response to remove any conversational elements
    const cleanedResponse = rawResponse
      .replace(/^(Hello|Hi|Hey|Greetings).*?(,|\.|\!)/i, "") // Remove greetings
      .replace(
        /^(Sure|Certainly|Absolutely|Of course|I'd be happy to).*?(,|\.|\!)/i,
        ""
      ) // Remove helpful intros
      .replace(/^(Here's|Here is|This is).*?(:|\.|\!)/i, "") // Remove "Here's..." intros
      .replace(/(Thank you|Thanks).*(for|asking).*$/i, "") // Remove thank yous
      .replace(/Let me know if.*$/i, "") // Remove "Let me know if..." endings
      .replace(/I hope this helps.*$/i, "") // Remove "I hope this helps..." endings
      .replace(/^\s+|\s+$/g, ""); // Trim whitespace

    // Store the response in history
    conversationHistory.push({
      role: "model",
      parts: [{ text: cleanedResponse }],
    });

    // Return the cleaned response
    return NextResponse.json({ response: cleanedResponse });
  } catch (error) {
    console.error("Error processing request:", error);
    // Include more details about the error
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to generate content", details: errorMessage },
      { status: 500 }
    );
  }
}

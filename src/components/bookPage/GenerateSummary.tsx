"use client";

import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import axios from "axios";
import { Button } from "../ui/button";

interface GenerateSummaryProps {
  book: {
    title: string;
    author: string;
    contents: { name: string; data: string }[];
  };
}

const GenerateSummary = ({ book }: GenerateSummaryProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSummary, setGeneratedSummary] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const generateSummary = async () => {
    try {
      setIsGenerating(true);
      setGeneratedSummary(null);
      setError(null);
      setProgress(0);

      // Prepare the initial prompt
      const initialPrompt = `I need a concise, factual summary of "${book.title}" by ${book.author}. I'll provide the book content in parts. Please generate direct, plain text responses without conversational elements.`;

      // Start by sending the initial prompt to the API
      const response = await axios.post("/api/gemini", {
        prompt: initialPrompt,
        startNewConversation: true,
      });

      if (!response.data) {
        throw new Error(
          "Failed to start summary generation - no data received"
        );
      }

      // Feed each part to the API one by one
      for (let i = 0; i < book.contents.length; i++) {
        const part = book.contents[i];
        // Update progress
        setProgress(Math.round(((i + 1) / book.contents.length) * 100));

        // Send content to the API - limit content size to avoid overloading the API
        const content = part.data.replace(/<[^>]*>/g, "");
        const maxLength = 10000; // Character limit to prevent overloading the API
        const truncatedContent =
          content.length > maxLength
            ? content.substring(0, maxLength) + "... (content truncated)"
            : content;

        const promptForPart = `Part ${i + 1}: ${
          part.name
        }\n\n${truncatedContent}`;

        const partResponse = await axios.post("/api/gemini", {
          prompt: promptForPart,
          startNewConversation: false,
        });

        if (!partResponse.data) {
          throw new Error(`Failed to process part ${i + 1} - no data received`);
        }
      }

      // Final request to generate the complete summary
      const finalResponse = await axios.post("/api/gemini", {
        prompt:
          "Based on all the book parts I've shared, generate a concise, well-structured summary of the entire book. Provide only the key events, themes, and insights in plain text format without any conversational elements. Format the summary in clear paragraphs with no introduction or conclusion phrases.",
        startNewConversation: false,
      });

      if (!finalResponse.data) {
        throw new Error("Failed to generate final summary - no data received");
      }

      setGeneratedSummary(finalResponse.data.response);
    } catch (error) {
      console.error("Error generating summary:", error);
      let errorMessage =
        "An error occurred while generating the summary. Please try again.";

      // Extract more detailed error information if available
      if (axios.isAxiosError(error)) {
        errorMessage += ` (Status: ${error.response?.status || "unknown"})`;
        if (error.response?.data?.details) {
          errorMessage += ` - ${error.response.data.details}`;
        }
      }

      setError(errorMessage);
      setGeneratedSummary(null);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full flex flex-col space-y-4">
        <Button
          onClick={generateSummary}
          disabled={isGenerating}
          className="flex items-center gap-2 px-4 py-2 bg-blueAccent text-white rounded-md hover:bg-blueAccent/80 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors w-full sm:w-1/2 mx-auto"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Generate AI Summary
            </>
          )}
        </Button>

      {isGenerating && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blueAccent h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-center mt-2">
            Processing part {Math.ceil((progress / 100) * book.contents.length)}{" "}
            of {book.contents.length}...
          </p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200">
          <h4 className="font-bold mb-2">Error</h4>
          <p>{error}</p>
        </div>
      )}

      {generatedSummary && (
        <div className="mt-4 p-4 bg-white rounded-lg border">
          <h4 className="font-bold mb-2">AI-Generated Summary</h4>
          <div className="prose prose-sm max-w-none">
            {generatedSummary.split("\n").map((paragraph, idx) => (
              <p key={idx} className="mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateSummary;

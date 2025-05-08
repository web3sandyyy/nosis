"use client";

import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import axios from "axios";

interface GeneratePartSummaryProps {
  book: {
    title: string;
    author: string;
  };
  part: {
    name: string;
    data: string;
  };
}

const GeneratePartSummary = ({ book, part }: GeneratePartSummaryProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSummary, setGeneratedSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateSummary = async () => {
    try {
      setIsGenerating(true);
      setGeneratedSummary(null);
      setError(null);

      // Clean the content by removing HTML tags
      const content = part.data.replace(/<[^>]*>/g, "");
      const maxLength = 15000; // Character limit to prevent overloading the API
      const truncatedContent =
        content.length > maxLength
          ? content.substring(0, maxLength) + "... (content truncated)"
          : content;

      // Prepare the prompt
      const prompt = `Provide a concise, direct summary of "${part.name}" from the book "${book.title}" by ${book.author}. Here is the content:\n\n${truncatedContent}\n\nGenerate a factual, clear summary highlighting only the key points. Use plain text format without any conversational elements.`;

      // Send to API
      const response = await axios.post("/api/gemini", {
        prompt,
        startNewConversation: true,
      });

      if (!response.data) {
        throw new Error("Failed to generate summary - no data received");
      }

      setGeneratedSummary(response.data.response);
    } catch (error) {
      console.error("Error generating part summary:", error);
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
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="my-6 p-4 bg-gray-50 rounded-lg border">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <button
            onClick={generateSummary}
            disabled={isGenerating}
            className="flex items-center gap-2 px-4 py-2 bg-blueAccent text-white rounded-md hover:bg-blueAccent/80 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate Summary
              </>
            )}
          </button>
        </div>

        {isGenerating && (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            <p>Generating summary...</p>
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
    </div>
  );
};

export default GeneratePartSummary;

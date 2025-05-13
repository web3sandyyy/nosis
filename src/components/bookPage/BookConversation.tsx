"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Loader2, Send } from "lucide-react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BookConversationProps {
  book: {
    title: string;
    author: string;
    contents: { name: string; data: string }[];
  };
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const BookConversation = ({ book }: BookConversationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hello! I'm an AI assistant that can answer questions about "${book.title}" by ${book.author}. What would you like to know about this book?`,
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize conversation once when modal opens
  const initializeConversation = async () => {
    if (hasInitialized || !isOpen) return;

    try {
      setIsLoading(true);

      // Initial prompt to have the model understand the book
      const initialPrompt = `I'm going to be answering questions about the book "${book.title}" by ${book.author}. I'll first share the book content with you in parts so you can help me answer questions about it later. Please respond with "Ready to receive content."`;

      // Initialize conversation and feed book content
      await axios.post("/api/gemini", {
        prompt: initialPrompt,
        startNewConversation: true,
      });

      // Feed each part to the API
      for (const part of book.contents) {
        // Clean and truncate content
        const content = part.data.replace(/<[^>]*>/g, "");
        const maxLength = 10000;
        const truncatedContent =
          content.length > maxLength
            ? content.substring(0, maxLength) + "... (content truncated)"
            : content;

        const partPrompt = `Part: ${part.name}\n\n${truncatedContent}`;

        await axios.post("/api/gemini", {
          prompt: partPrompt,
          startNewConversation: false,
        });
      }

      // Final instructions for answering questions
      await axios.post("/api/gemini", {
        prompt:
          "Now that you have information about the book, please answer user questions ONLY based on the content I've shared. If asked about topics not covered in the book, politely explain that you can only answer questions related to the content of this specific book. Keep answers concise and factual. Always cite specific parts or chapters when relevant.",
        startNewConversation: false,
      });

      setHasInitialized(true);
    } catch (error) {
      console.error("Error initializing conversation:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble loading the book content right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize conversation when dialog opens
  useEffect(() => {
    if (isOpen && !hasInitialized) {
      initializeConversation();
    }
  }, [isOpen, hasInitialized, initializeConversation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (question.trim() === "" || isLoading) return;

    const userQuestion = question.trim();
    setQuestion("");

    // Add user question to messages
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userQuestion,
      },
    ]);

    // Show loading indicator
    setIsLoading(true);

    try {
      const response = await axios.post("/api/gemini", {
        prompt: userQuestion,
        startNewConversation: false,
      });

      if (!response.data) {
        throw new Error("No response data");
      }

      // Add AI response to messages
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.data.response,
        },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I couldn't process your question. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full sm:w-1/2 mx-auto">
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 hover:bg-purple-700 w-full"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Ask Questions
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Ask about &ldquo;{book.title}&rdquo;</DialogTitle>
          </DialogHeader>

          {/* Chat Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 rounded-md my-4"
            style={{ minHeight: "300px" }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-blueAccent text-white rounded-tr-none"
                      : "bg-white border rounded-tl-none"
                  }`}
                >
                  <p>{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-white border rounded-tl-none">
                  <div className="flex items-center">
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    <p>Thinking...</p>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <DialogFooter className="flex items-center gap-2">
            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 w-full"
            >
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question about the book..."
                className="flex-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blueAccent"
                disabled={isLoading || !hasInitialized}
              />
              <Button
                type="submit"
                disabled={
                  isLoading || question.trim() === "" || !hasInitialized
                }
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </DialogFooter>

          {/* Initialization Status */}
          {isOpen && !hasInitialized && (
            <div className="p-2 bg-amber-50 border-t border-amber-100 text-amber-800 text-center text-sm rounded-md">
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <p>Loading book content... Please wait</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookConversation;

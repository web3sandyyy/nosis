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

// Props interface for book conversation component
interface BookConversationProps {
  book: {
    title: string;
    author: string;
    contents: { name: string; data: string }[];
  };
}

// Message type definition for chat history
interface Message {
  role: "user" | "assistant";
  content: string;
}

// Component that provides AI-powered Q&A about the book content
const BookConversation = ({ book }: BookConversationProps) => {
  // Dialog and conversation state
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [question, setQuestion] = useState("");
  // Initial welcome message from the assistant
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hello! I'm an AI assistant that can answer questions about "${book.title}" by ${book.author}. What would you like to know about this book?`,
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize conversation by feeding book content to the AI
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

      // Feed each part of the book content to the AI
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
      // Display error message to user if initialization fails
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

  // Auto-scroll to newest messages when chat updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Start conversation initialization when dialog opens
  useEffect(() => {
    if (isOpen && !hasInitialized) {
      initializeConversation();
    }
  }, [isOpen, hasInitialized, initializeConversation]);

  // Handle user question submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (question.trim() === "" || isLoading) return;

    const userQuestion = question.trim();
    setQuestion("");

    // Add user question to chat history
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userQuestion,
      },
    ]);

    // Show loading indicator while waiting for AI response
    setIsLoading(true);

    try {
      // Send user question to AI and get response
      const response = await axios.post("/api/gemini", {
        prompt: userQuestion,
        startNewConversation: false,
      });

      if (!response.data) {
        throw new Error("No response data");
      }

      // Add AI response to chat history
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.data.response,
        },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      // Display error message if AI response fails
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
      {/* Main button to open the conversation dialog */}
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 hover:bg-purple-700 w-full"
        aria-label="Ask questions about this book"
      >
        <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
        Ask Questions
      </Button>

      {/* Dialog containing the conversation UI */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Ask about &ldquo;{book.title}&rdquo;</DialogTitle>
          </DialogHeader>

          {/* Chat message history container */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 rounded-md my-4"
            style={{ minHeight: "300px" }}
          >
            {/* Map through and display all messages */}
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

            {/* Loading indicator shown while waiting for AI response */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-white border rounded-tl-none">
                  <div className="flex items-center">
                    <Loader2
                      className="w-4 h-4 animate-spin mr-2"
                      aria-hidden="true"
                    />
                    <p>Thinking...</p>
                  </div>
                </div>
              </div>
            )}

            {/* Invisible element for scrolling to the latest message */}
            <div ref={messagesEndRef} />
          </div>

          <DialogFooter className="flex items-center gap-2">
            {/* Question input form */}
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
                aria-label="Ask a question about the book"
              />
              <Button
                type="submit"
                disabled={
                  isLoading || question.trim() === "" || !hasInitialized
                }
                aria-label="Send question"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
              </Button>
            </form>
          </DialogFooter>

          {/* Loading state indicator shown during initial content loading */}
          {isOpen && !hasInitialized && (
            <div className="p-2 bg-amber-50 border-t border-amber-100 text-amber-800 text-center text-sm rounded-md">
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
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

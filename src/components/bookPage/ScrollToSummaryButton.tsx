"use client";

import { Sparkles } from "lucide-react";

const ScrollToSummaryButton = () => {
  return (
    <button
      onClick={() => {
        const summarySection = document.getElementById("book-summary-section");
        summarySection?.scrollIntoView({ behavior: "smooth" });
      }}
      className="bg-blueAccent hover:bg-blueAccent/80 w-full h-9 px-4 py-2 rounded-md text-white flex items-center justify-center"
    >
      <Sparkles className="w-4 h-4 mr-2" />
      Generate Summary
    </button>
  );
};

export default ScrollToSummaryButton;

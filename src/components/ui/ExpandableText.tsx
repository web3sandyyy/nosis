"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronUp } from "lucide-react";

interface ExpandableTextProps {
  text: string;
  className?: string;
  initialLines?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  className = "",
  initialLines = 3,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [textHeight, setTextHeight] = useState<number | null>(null);
  const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const lineHeightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Get the full height of the text
      setTextHeight(textRef.current.scrollHeight);

      // Calculate the height of the collapsed state (initialLines * line height)
      const lineHeight = parseFloat(
        getComputedStyle(textRef.current).lineHeight
      );
      setCollapsedHeight(initialLines * (isNaN(lineHeight) ? 24 : lineHeight));
    }
  }, [text, initialLines]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={lineHeightRef}
        className="invisible absolute h-0 overflow-hidden"
      />
      <div
        className="overflow-hidden"
        style={{
          maxHeight: expanded ? `${textHeight}px` : `${collapsedHeight}px`,
          transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p ref={textRef} className="transition-all duration-300">
          {text}
        </p>
      </div>
      {text.length > 150 && (
        <button
          onClick={toggleExpanded}
          className="mt-2 text-blueAccent font-medium text-sm focus:outline-none px-4 py-2 rounded-md hover:bg-primary/50 transition-all duration-200"
        >
          <span className="flex items-center">
            {expanded ? <>See less</> : <>See more</>}
            <ChevronUp
              className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                expanded ? "" : "rotate-180"
              }`}
            />
          </span>
        </button>
      )}
    </div>
  );
};

export default ExpandableText;

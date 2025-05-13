"use client";
import React, { useState, useEffect, useRef } from "react";
import categories from "@/constants/categories";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

const Categories = () => {
  // Track expanded state and screen size
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate how many items to show in 3 lines
  const itemsPerLine = 4; // Estimated items per line on small screens
  const maxLines = 3;
  const itemsToShow = itemsPerLine * maxLines;

  // Check if screen is mobile size and update state accordingly
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };

    // Initial check
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Calculate the container height based on mobile/expanded state
  const getContainerStyle = () => {
    if (!isMobile) return {}; // No height restriction on larger screens

    if (showAll) return {}; // No height restriction when expanded

    // On mobile, limit to 3 lines when collapsed
    return {
      maxHeight: "calc(3 * (2.5rem + 0.5rem))",
    };
  };

  return (
    <div className="w-full mt-8">
      <p className="text-xl md:text-2xl font-bold">Categories</p>

      <div className="mt-4 md:mt-6">
        <div
          ref={containerRef}
          className="flex flex-wrap gap-2 md:gap-4 transition-all duration-500 ease-in-out overflow-hidden"
          style={getContainerStyle()}
        >
          {/* Map through category items and render each with icon and label */}
          {categories.map((category) => (
            <div
              key={category.en}
              className="flex items-center gap-2 bg-white px-3 py-2 md:px-4 md:py-3 rounded-xl border border-black/10 shadow-sm shadow-black/10 hover:scale-105 transition-all duration-200"
            >
              <div className="relative h-5 w-5 flex-shrink-0">
                <Image
                  src={category.icon}
                  alt={`${category.en}`}
                  width={20}
                  height={20}
                  className="min-h-4 min-w-4 md:min-h-5 md:min-w-5"
                />
              </div>
              <p className="text-sm md:text-base font-medium">{category.en}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Show/hide toggle button only on mobile when there are many categories */}
      {isMobile && categories.length > itemsToShow && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 text-blueAccent font-medium text-sm focus:outline-none px-4 py-2 rounded-md hover:bg-primary/50 transition-all duration-200 flex items-center"
          aria-label={
            showAll ? "Show fewer categories" : "Show more categories"
          }
          aria-expanded={showAll}
        >
          {showAll ? "Show less" : "Show more"}
          <ChevronUp
            className={`w-4 h-4 ml-1 transition-transform duration-300 ${
              showAll ? "" : "rotate-180"
            }`}
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
};

export default Categories;

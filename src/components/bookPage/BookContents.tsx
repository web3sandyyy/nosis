import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { generateSlug, romanNumber } from "@/helper";

interface BookContentsProps {
  contents: { name: string; data: string }[];
  bookTitle: string;
}

const BookContents = ({ contents, bookTitle }: BookContentsProps) => {
  const bookSlug = generateSlug(bookTitle);

  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Contents</h2>
      <div className="">
        {contents.map((part, idx) => (
          <Link
            href={`/book/${bookSlug}/reading/${idx}`}
            key={part.name}
            className={`flex items-center gap-4 px-3 sm:px-4 py-2 sm:py-3 border-b last:border-b-0 bg-white hover:bg-gray-50 `}
          >
            <span className="text-blueAccent/80 text-base sm:text-lg font-semibold whitespace-nowrap">
              Part {romanNumber(idx + 1)}
            </span>
            <span className="flex-grow text-sm sm:text-base md:text-lg font-semibold text-black/50 line-clamp-2">
              {part.name}
            </span>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-black/50 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookContents;

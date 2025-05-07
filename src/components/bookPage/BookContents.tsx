import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { generateSlug } from "@/helper";

interface BookContentsProps {
  contents: { name: string; data: string }[];
  bookTitle: string;
}

const BookContents = ({ contents, bookTitle }: BookContentsProps) => {
  const bookSlug = generateSlug(bookTitle);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Contents</h2>
      <div className="">
        {contents.map((part, idx) => (
          <Link
            href={`/book/${bookSlug}/reading/${idx}`}
            key={part.name}
            className={`flex items-center gap-4 px-4 py-3 border-b last:border-b-0 bg-white hover:bg-gray-50`}
          >
            <span className="text-blueAccent/80 text-lg font-semibold">
              Part {idx + 1}
            </span>
            <span className="flex-grow text-lg font-semibold text-black/50">
              {part.name}
            </span>
            <ChevronRight className="w-4 h-4 text-black/50" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookContents;

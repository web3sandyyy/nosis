import books from "@/constants/books";
import { Bookmark, Book, Clock, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import NosisIcon from "@/components/NosisIcon";

// BookBanner displays the book header with cover image, metadata and action buttons
// Used at the top of book detail pages
const BookBanner = ({
  book,
  slug,
}: {
  book: (typeof books)[0];
  slug: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-6 sm:pb-8  px-6 sm:px-8 relative">
      {/* Book cover image */}
      <Image
        src={decodeURIComponent(book.image)}
        alt={`Book cover for ${book.title} by ${book.author}`}
        className="object-cover rounded-lg shadow-md w-[200px] h-auto mx-auto sm:mx-0"
        priority
        height={300}
        width={400}
      />

      <div className="min-h-full flex flex-col justify-between pt-4 sm:pt-0">
        {/* Book title, author, and metadata */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 leading-tight text-center sm:text-left">
            {book.title}
          </h1>
          <div className="text-base sm:text-lg text-black/50 mb-1 sm:mb-2 text-center sm:text-left mt-2 sm:mt-0">
            {book.author}
          </div>
          {/* Book stats: parts count and reading time */}
          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-black/50 mb-3 sm:mb-4">
            <span className="flex items-center gap-1 sm:gap-2">
              <Book className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
              <span>{book.parts} parts</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 sm:gap-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
              <span>{book.time} mins</span>
            </span>
          </div>
          {/* Book category tags */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="bg-black/5 text-blueAccent px-2 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons: Read and Bookmark (desktop only) */}
        <div className=" hidden md:flex gap-2 flex-col sm:flex-row justify-center sm:justify-start mt-4 sm:mt-0">
          <Link
            href={`/book/${slug}/reading/0`}
            className="bg-blueAccent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow hover:bg-blueAccent/90 flex items-center justify-center gap-2"
            aria-label={`Start reading ${book.title}`}
          >
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />{" "}
            Read
          </Link>
          <button
            className="border border-gray-300 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-xl font-semibold text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-2"
            aria-label={`Bookmark ${book.title}`}
          >
            <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />{" "}
            Bookmark
          </button>
        </div>
      </div>

      {/* Decorative background logo */}
      <NosisIcon
        color="black"
        width={400}
        height={400}
        className="h-4/5 w-auto hidden sm:block absolute bottom-0 right-0 opacity-5"
        aria-hidden={true}
      />
    </div>
  );
};

export default BookBanner;

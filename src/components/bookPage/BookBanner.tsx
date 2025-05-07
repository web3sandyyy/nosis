import books from "@/constants/books";
import { Bookmark, Book, Clock, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

const BookBanner = ({ book, slug }: { book: (typeof books)[0]; slug: string }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-12">
      <img
        src={decodeURIComponent(book.image)}
        alt={book.title}
        className="w-full sm:w-auto max-w-[150px] md:max-w-[200px] mx-auto sm:mx-0 object-cover rounded-lg shadow-md"
      />

      <div className="min-h-full flex flex-col justify-between pt-4 sm:pt-0">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 leading-tight text-center sm:text-left">
            {book.title}
          </h1>
          <div className="text-base sm:text-lg text-black/50 mb-1 sm:mb-2 text-center sm:text-left">
            {book.author}
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-black/50 mb-3 sm:mb-4">
            <span className="flex items-center gap-1 sm:gap-2">
              <Book className="w-3 h-3 sm:w-4 sm:h-4" />
              {book.parts} parts
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 sm:gap-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              {book.time} mins
            </span>
          </div>
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

        <div className="flex gap-2 flex-col sm:flex-row justify-center sm:justify-start mt-4 sm:mt-0">
          <Link
            href={`/book/${slug}/reading/0}`}
            className="bg-blueAccent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow hover:bg-blueAccent/90 flex items-center justify-center gap-2"
          >
            Read <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
          <button className="border border-gray-300 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-xl font-semibold text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-2">
            Bookmark <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookBanner;

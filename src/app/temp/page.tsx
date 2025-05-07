import React from "react";
import books from "@/constants/books";
import { ArrowLeft, Book, Clock, Bookmark, BookOpen, ChevronRight } from "lucide-react";

const book = books[0];

const page = () => {
  return (
    <div className="min-h-full w-full bg-secondary">
      <div className="flex items-center gap-2 p-6 text-black/50">
        <ArrowLeft className="w-4 h-4" />
        <p>back</p>
      </div>

      <div className="">
        <div className="flex gap-8 px-8 pb-12 ">
          <img
            src={decodeURIComponent(book.image)}
            alt={book.title}
            className="max-w-[200px] object-cover rounded-lg shadow-md"
          />

          <div className=" min-h-full flex flex-col justify-between">
            <div >
              <h1 className="text-4xl font-bold mb-2 leading-tight">
                {book.title}
              </h1>
              <div className="text-lg text-black/50 mb-2">{book.author}</div>
              <div className="flex items-center gap-4 text-sm text-black/50 mb-4">
                <span className="flex items-center gap-2">
                  <Book className="w-4 h-4" />
                  {book.parts} parts
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {book.time} mins
                </span>
              </div>
              <div className="flex gap-2 mb-4">
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

            <div className="flex gap-2">
              <button className="bg-blueAccent text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blueAccent/90 flex items-center gap-2">
                Read <BookOpen className="w-4 h-4" />
              </button>
              <button className="border border-gray-300 px-6 py-3 bg-white rounded-xl font-semibold text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                Bookmark <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white px-8 py-12">
          {/* Preface */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Preface</h2>
            <p className="text-black/50 leading-relaxed">{book.preface}</p>
          </div>

          {/* Contents */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contents</h2>
            <div className="">
              {book.contents.map((part, idx) => (
                <div
                  key={part.name}
                  className={`flex items-center gap-4 px-4 py-3 border-b last:border-b-0 bg-white hover:bg-gray-50`}
                >
                  <span className="text-blueAccent/80 text-lg font-semibold">Part {idx + 1}</span>
                  <span className="flex-grow text-lg font-semibold text-black/50">{part.name}</span>
                  <ChevronRight className="w-4 h-4 text-black/50" />
                </div>
              ))}
            </div>
          </div>
          {/* About Author */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">About Author</h2>
            <div className=" shadow-sm p-4 rounded-lg text-gray-700">
              <p className="text-lg font-semibold">{book.author}</p>
              <p className="mt-4">{book.aboutAuthor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

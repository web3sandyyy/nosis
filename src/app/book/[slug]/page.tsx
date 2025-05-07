import React from "react";
import books from "@/constants/books";
import { ArrowLeft } from "lucide-react";
import AboutAuthor from "@/components/bookPage/AboutAuthor";
import BookContents from "@/components/bookPage/BookContents";
import BookBanner from "@/components/bookPage/BookBanner";
import Link from "next/link";
import { generateSlug } from "@/helper";

const page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const book = books.find((book) => generateSlug(book.title) === slug);

  if (!book) {
    return (
      <div className="p-4 sm:p-8 max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
          Book not found
        </h2>
        <p>Could not find a book matching slug: {slug}</p>
        <Link href="/" className="text-blue-500 mt-2 sm:mt-4 block">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-full w-full bg-secondary">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-1 sm:gap-2 p-4 sm:p-6 text-black opacity-50 hover:opacity-100 transition-all duration-200"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          <p className="text-sm sm:text-base">back</p>
        </Link>

        <div>
          <BookBanner book={book} slug={slug} />
          <div className="bg-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Preface</h2>
              <p className="text-sm sm:text-base text-black/50 leading-relaxed">
                {book.preface}
              </p>
            </div>

            <BookContents contents={book.contents} bookTitle={book.title} />
            <AboutAuthor author={book.author} aboutAuthor={book.aboutAuthor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

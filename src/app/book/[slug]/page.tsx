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
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Book not found</h2>
        <p>Could not find a book matching slug: {slug}</p>
        <Link href="/" className="text-blue-500 mt-4 block">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-full w-full bg-secondary">
      <Link
        href="/"
        className="flex items-center gap-2 p-6 text-black opacity-50 hover:opacity-100 transition-all duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        <p>back</p>
      </Link>

      <div>
        <BookBanner book={book} />
        <div className="bg-white px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Preface</h2>
            <p className="text-black/50 leading-relaxed">{book.preface}</p>
          </div>

          <BookContents contents={book.contents} bookTitle={book.title} />
          <AboutAuthor author={book.author} aboutAuthor={book.aboutAuthor} />
        </div>
      </div>
    </div>
  );
};

export default page;

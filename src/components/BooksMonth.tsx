import React from "react";
import books from "@/constants/books";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Bookmark, Book } from "lucide-react";
import { Book as BookType } from "@/utils/types";
import NosisIcon from "./NosisIcon";
import { generateSlug } from "@/helper";

interface BooksMonthCardProps {
  book: BookType;
  bgColor: string;
}

const BooksMonthCard = ({ book, bgColor }: BooksMonthCardProps) => {
  return (
    <div
      className={`rounded-lg p-4 flex gap-4 relative overflow-hidden ${bgColor}`}
      key={book.id}
    >
      <Image
        src={decodeURIComponent(book.image)}
        alt={`${book.title}`}
        width={200}
        height={300}
        className="max-w-[100px] md:max-w-[160px] h-fit object-cover rounded-lg "
      />
      <div className="flex flex-col gap-4">
        <p className="sm:text-xl text-lg font-bold line-clamp-2">
          {book.title}
        </p>
        <p className="text-muted-foreground">{book.author}</p>
        <p className="text-sm">{book.time} mins</p>
        <div className="flex items-center gap-2">
          <Link
            href={`/book/${generateSlug(book.title)}`}
            className="flex items-center gap-2 bg-blueAccent px-4 py-2 rounded-lg hover:bg-blueAccent/80 transition-all duration-200 text-white text-sm font-semibold"
            aria-label={`Read ${book.title}`}
          >
            <Book className="w-4 h-4" aria-hidden="true" />
            Read
          </Link>
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2"
            aria-label={`Bookmark ${book.title}`}
          >
            <Bookmark aria-hidden="true" />
            Bookmark
          </Button>
        </div>
        <p className="text-sm line-clamp-2 hidden sm:block">{book.preface}</p>
      </div>

      <NosisIcon
        color="black"
        width={400}
        height={400}
        className="h-4/5 w-auto absolute bottom-0 right-0 opacity-5"
      />
    </div>
  );
};

const BooksMonth = () => {
  // Only use the first 2 books
  const featuredBooks = books.slice(0, 2);

  // Define background colors for each card
  const bgColors = ["bg-blue-200", "bg-yellow-200"];

  return (
    <div className="w-full md:mt-4 mt-8">
      <p className="text-xl md:text-2xl font-bold">Books Month</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {featuredBooks.map((book, index) => (
          <BooksMonthCard key={book.id} book={book} bgColor={bgColors[index]} />
        ))}
      </div>
    </div>
  );
};

export default BooksMonth;

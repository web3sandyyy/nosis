import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CarouselItem } from "./ui/carousel";
import { Clock } from "lucide-react";
import { generateSlug } from "@/helper";
import { Book } from "@/utils/types";

// BookCards component displays individual book items in a carousel
// Props: book data and index for key generation
const BookCards = ({ book, idx }: { book: Book; idx: number }) => {
  return (
    <CarouselItem
      key={idx}
      className="hover:translate-y-[-10px] z-10 transition-all duration-200 group"
    >
      {/* Link wraps the entire card for navigation to book detail page */}
      <Link
        href={`/book/${generateSlug(book.title)}`}
        className="w-[140px] sm:max-w-[200px] block"
        aria-label={`View details for ${book.title} by ${book.author}`}
      >
        <div className="relative">
          {/* Book cover image with hover overlay effect */}
          <Image
            src={decodeURIComponent(book.image)}
            alt={`Book cover for ${book.title} by ${book.author}`}
            width={400}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
        </div>
        {/* Book metadata section: title, author, reading time */}
        <div className="flex flex-col gap-2">
          <p className="text-base font-medium line-clamp-2 mt-4">
            {book.title}
          </p>
          <p className="text-sm text-muted-foreground">{book.author}</p>
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>{book.time} mins</span>
          </div>
        </div>
      </Link>
    </CarouselItem>
  );
};

export default BookCards;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CardContent } from "./ui/card";
import { CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import { Clock } from "lucide-react";
import { generateSlug } from "@/helper";
import { Book } from "@/utils/types";

const ColoredCard = ({ book, idx }: { book: Book; idx: number }) => {
  return (
    <CarouselItem
      key={idx}
      className="hover:translate-y-[-10px] z-10 transition-all duration-200"
    >
      <Card className=" border  max-w-[280px] md:max-w-[500px] p-8 flex justify-between rounded-2xl colored-card shadow-md">
        <CardContent className="p-0 ">
          <div className="flex gap-3 ">
            <div className="min-w-fit h-full rounded-xl overflow-hidden bg-white mb-2">
              <Image
                src={decodeURIComponent(book.image)}
                alt={`${book.title}`}
                width={110}
                height={150}
                className="object-cover w-full h-full border shadow-sm"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div className="hidden md:flex flex-col gap-2">
                <p className="font-semibold text-lg md:text-2xl  text-blueAccent  leading-tight line-clamp-2">
                  {book.title}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {book.author}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-3 my-2">
                  {book.preface}
                </p>
              </div>

              <div className="flex flex-col-reverse md:flex-row md:items-center justify-between mt-2 gap-4 md:gap-0">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock width="16" height="16" aria-hidden="true" />
                  <span>{book.time} mins</span>
                </span>
                <Link
                  href={`/book/${generateSlug(book.title)}`}
                  className="px-5 py-2 rounded-lg bg-blueAccent text-white font-semibold text-sm hover:bg-blueAccent/90 transition"
                  aria-label={`Read ${book.title}`}
                >
                  Read Book
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:hidden flex-col gap-2 mt-4">
            <p className="font-semibold text-base md:text-xl text-blueAccent  leading-tight line-clamp-2">
              {book.title}
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              {book.author}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-2">
              {book.preface}
            </p>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default ColoredCard;

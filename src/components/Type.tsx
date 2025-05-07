import React from "react";
import books from "@/constants/books";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

interface TypeProps {
  typename: string;
  typeDescription: string;
  css?: string;
}

const Type = ({ typename, typeDescription, css }: TypeProps) => {
  // Render the first 5 books (or repeat if less than 5)
  const bookCards = Array.from(
    { length: 5 },
    (_, i) => books[i % books.length]
  );

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={`w-full ${css}`}
    >
      <div className="mb-2 flex">
        <div className="flex-grow ">
          <p className="text-2xl font-bold mb-1">{typename}</p>
          <p className="text-base text-muted-foreground mb-4">
            {typeDescription}
          </p>
        </div>
        <div className="flex items-center gap-2">
            <ChevronLeft className="w-7 h-7 bg-white rounded-full p-1 shadow-sm" />
            <ChevronRight className="w-7 h-7 bg-white rounded-full p-1 shadow-sm" />
          {/* <CarouselPrevious>
            <ChevronLeft className="w-7 h-7 bg-white rounded-full p-1 shadow-sm" />
          </CarouselPrevious>
          <CarouselNext>
            <ChevronRight className="w-7 h-7 bg-white rounded-full p-1 shadow-sm" />
          </CarouselNext> */}
        </div>
      </div>

      <CarouselContent className="flex pt-3">
        {bookCards.map((book, idx) => (
          <CarouselItem key={idx} className="hover:translate-y-[-10px] z-10 transition-all duration-200">
            <Card className=" border max-w-[500px] p-8 flex justify-between rounded-2xl bg-sky-50 shadow-md">
              <CardContent className="flex gap-3 p-0 ">
                <div className="min-w-fit h-full rounded-xl overflow-hidden bg-white mb-2">
                  <Image
                    src={decodeURIComponent(book.image)}
                    alt={book.title}
                    width={110}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl text-blueAccent  leading-tight line-clamp-2">
                      {book.title}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      {book.author}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-2">
                      {book.preface}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock width="16" height="16" />
                      {book.time} mins
                    </span>
                    <Link href={`/book`} className="px-5 py-2 rounded-lg bg-blueAccent text-white font-semibold text-sm hover:bg-blueAccent/90 transition">
                      Read Book
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Type;

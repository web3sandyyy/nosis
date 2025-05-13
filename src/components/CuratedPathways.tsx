import React from "react";
import books from "@/constants/books";
import Image from "next/image";
import Link from "next/link";
import { generateSlug } from "@/helper";
import { Book } from "@/utils/types";
import TypeCarousel from "./TypeCarousel";
import { CarouselContent, CarouselItem } from "./ui/carousel";

interface CuratedPathwaysCardProps {
  title: string;
  description: string;
  books: Book[];
  className?: string;
  bgColor?: string;
}

const CuratedPathwaysCard = ({
  title,
  description,
  books,
  className = "",
}: CuratedPathwaysCardProps) => {
  return (
    <CarouselItem className=" min-w-[300px] w-[300px] sm:w-[400px] sm:min-w-[400px] ">
      <div
        className={`curated-pathways rounded-3xl text-white overflow-hidden hover:scale-105 transition-all duration-300 ${className}`}
      >
        <div className="flex flex-col p-4 sm:p-6 pb-4 gap-2">
          <p className="text-xl sm:text-2xl font-semibold">{title}</p>
          <p className="text-sm  line-clamp-1 ">{description}</p>
        </div>

        <div className="flex justify-end -mb-6 pl-6 sm:pl-10">
          {books.slice(0, 3).map((book, index) => (
            <Link
              href={`/book/${generateSlug(book.title)}`}
              className="block -mr-4"
              key={index}
            >
              <Image
                src={decodeURIComponent(book.image)}
                alt={book.title}
                width={120}
                height={200}
                className="rounded-lg w-[100px] sm:w-[120px] h-auto hover:scale-120 hover:cursor-pointer hover:relative hover:z-10 transition-all duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </CarouselItem>
  );
};

const CuratedPathways = () => {
  const pathways = [
    {
      title: "Healthy Living",
      description:
        "Start your healthy living journey with the best-selected books.",
      books: books.slice(0, 3),
    },
    {
      title: "Personal Growth",
      description: "Develop your mindset with these carefully selected reads.",
      books: books.slice(2, 5),
    },
    {
      title: "Philosophy",
      description: "Explore deep thoughts and timeless wisdom.",
      books: books.slice(1, 4),
    },
  ];

  return (
    <TypeCarousel
      typename="Curated Pathways"
      typeDescription="Carefully crafted learning journeys"
      css="mt-6 md:mt-10"
      hideButtons={true}
    >
      <CarouselContent className="ml-0 -mt-2 py-6">
        {pathways.map((pathway, index) => (
          <CuratedPathwaysCard
            key={index}
            title={pathway.title}
            description={pathway.description}
            books={pathway.books}
          />
        ))}
      </CarouselContent>
    </TypeCarousel>
  );
};

export default CuratedPathways;

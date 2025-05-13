import React from "react";
import books from "@/constants/books";
import Image from "next/image";
import Link from "next/link";
import { generateSlug } from "@/helper";
import { Book } from "@/utils/types";
import TypeCarousel from "./TypeCarousel";
import { CarouselContent } from "./ui/carousel";

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
    <div
      className={`curated-pathways rounded-3xl text-white w-fit overflow-hidden hover:scale-105 transition-all duration-300 ${className}`}
    >
      <div className="flex flex-col p-6 pb-4 gap-2">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-sm">{description}</p>
      </div>

      <div className="flex justify-end -mb-6">
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
              className="rounded-lg w-[120px] h-auto hover:scale-120 hover:cursor-pointer hover:relative hover:z-10 transition-all duration-300"
            />
          </Link>
        ))}
      </div>
    </div>
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
      title: "Personal Growth",
      description: "Develop your mindset with these carefully selected reads.",
      books: books.slice(2, 5),
    },
  ];

  return (
    <TypeCarousel
      typename="Curated Pathways"
      typeDescription="Carefully crafted learning journeys"
      css="mt-10"
      hideButtons={true}
    >
      <CarouselContent className="flex gap-6 overflow-hidden p-6">
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

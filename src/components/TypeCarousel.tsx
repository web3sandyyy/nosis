import React from "react";
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TypeProps {
  typename: string;
  typeDescription?: string;
  css?: string;
  children: React.ReactNode;
  hideButtons?: boolean;
}

const TypeCarousel = ({
  typename,
  typeDescription,
  css,
  children,
  hideButtons = false,
}: TypeProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={`w-full ${css}`}
    >
      <div className="mb-2 flex">
        <div className="flex-grow ">
          <p className="text-xl md:text-2xl font-bold mb-1">{typename}</p>
          {typeDescription && (
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              {typeDescription}
            </p>
          )}
        </div>
        {!hideButtons && (
          <div className="flex items-center gap-2">
            <CarouselPrevious className="bg-white rounded-full p-1 shadow-sm" />
            <CarouselNext className="bg-white rounded-full p-1 shadow-sm" />
          </div>
        )}
      </div>
      {children}
    </Carousel>
  );
};

export default TypeCarousel;

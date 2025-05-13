import Categories from "@/components/Categories";
import TypeCarousel from "@/components/TypeCarousel";
import books from "@/constants/books";
import ColoredCard from "@/components/ColoredCard";
import BookCards from "@/components/BookCards";
import { CarouselContent } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="w-full h-full p-6 bg-secondary">
      <Categories />
      <TypeCarousel
        typename="Healthy Living"
        typeDescription="Healthy Living books are designed to educate and inspire readers"
        css="mt-10"
      >
        <CarouselContent className="flex pt-3">
          {books.map((book, idx) => (
            <ColoredCard key={idx} book={book} idx={idx} />
          ))}
        </CarouselContent>
      </TypeCarousel>

      <TypeCarousel
        typename="Readers' Choice"
        typeDescription="Favorite books chosen by loyal readers."
        css="mt-10"
      >
        <CarouselContent className="flex pt-3">
          {books.map((book, idx) => (
            <BookCards key={idx} book={book} idx={idx} />
          ))}
        </CarouselContent>
      </TypeCarousel>
    </div>
  );
}

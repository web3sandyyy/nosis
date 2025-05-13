import Categories from "@/components/Categories";
import TypeCarousel from "@/components/TypeCarousel";
import books from "@/constants/books";
import BookCards from "@/components/BookCards";
import { CarouselContent } from "@/components/ui/carousel";
import BooksMonth from "@/components/BooksMonth";
import CuratedPathways from "@/components/CuratedPathways";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full p-4 md:p-6 bg-secondary">
      <TypeCarousel
        typename="Readers' Choice"
      >
        <CarouselContent className="flex pt-2 md:pt-4">
          {books.map((book, idx) => (
            <BookCards key={idx} book={book} idx={idx} />
          ))}
        </CarouselContent>
      </TypeCarousel>

      <Categories />

      <BooksMonth />

      <TypeCarousel typename="Featured Books" css="mt-6 md:mt-10">
        <CarouselContent className="flex pt-2 md:pt-4">
          {books.map((book, idx) => (
            <BookCards key={idx} book={book} idx={idx} />
          ))}
        </CarouselContent>
      </TypeCarousel>

      <CuratedPathways />

      <Footer />
    </div>
  );
}

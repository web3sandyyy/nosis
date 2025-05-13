/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import books from "@/constants/books";
import {
  Bot,
  ChevronLeft,
  Ellipsis,
  AlertCircle,
  Star,
  Share,
  HandCoins,
  Bookmark,
  Book,
} from "lucide-react";
import AboutAuthor from "@/components/bookPage/AboutAuthor";
import BookContents from "@/components/bookPage/BookContents";
import BookBanner from "@/components/bookPage/BookBanner";
import Link from "next/link";
import { generateSlug } from "@/helper";
import { notFound } from "next/navigation";
import GenerateSummary from "@/components/bookPage/GenerateSummary";
import BookConversation from "@/components/bookPage/BookConversation";
import ExpandableText from "@/components/ui/ExpandableText";
import TypeCarousel from "@/components/TypeCarousel";
import { CarouselContent } from "@/components/ui/carousel";
import BookCards from "@/components/BookCards";
import Footer from "@/components/Footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Export a function for generating static paths
export async function generateStaticParams() {
  return books.map((book) => ({
    slug: generateSlug(book.title),
  }));
}

// The actual page component
export default async function Page(props: any) {
  // Extract slug from params
  const { params } = props;
  const slug = params?.slug;

  const book = books.find((book) => generateSlug(book.title) === slug);

  // Use Next.js's notFound function for missing books
  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-full w-full bg-secondary">
      <div className="p-4 sm:p-6 pl-8 flex justify-between ">
        <Link
          href="/"
          className="flex items-center gap-1  sm:bg-white rounded text-black/80 hover:opacity-100 transition-all duration-200 w-fit p-2 px-4 "
        >
          <ChevronLeft className="w-5 h-5" />
          <p className="text-sm sm:text-base">Back</p>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-6">
            <DropdownMenuLabel className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Report Errors
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="flex items-center gap-2">
              <HandCoins className="w-4 h-4" /> Claim the page
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="flex items-center gap-2">
              <Star className="w-4 h-4" /> Rate this title
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="flex items-center gap-2">
              <Share className="w-4 h-4" /> Share
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <BookBanner book={book} slug={slug} />
        <div className="bg-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Preface</h2>
            <ExpandableText
              text={book.preface}
              className="text-sm sm:text-base text-black/50 leading-relaxed max-w-4xl"
            />
          </div>

          {/* AI Assistant Section */}
          <div className="mb-6 md:mb-8">
            <div className="bg-primary rounded-lg border p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-bold">AI Book Assistant</h2>
              </div>

              <p className="text-gray-700 mb-6">
                Enhance your reading experience with our AI tools that can
                generate summaries and answer questions about &ldquo;
                {book.title}&rdquo; by {book.author}.
              </p>

              <div className="flex flex-col gap-3 justify-center">
                <BookConversation book={book} />
                <GenerateSummary book={book} />
              </div>
            </div>
          </div>

          <div id="book-summary-section"></div>

          <BookContents contents={book.contents} bookTitle={book.title} />
          <AboutAuthor author={book.author} aboutAuthor={book.aboutAuthor} />
          <TypeCarousel typename="More like this">
            <CarouselContent className="flex pt-3">
              {books.map((book, idx) => (
                <BookCards key={idx} book={book} idx={idx} />
              ))}
            </CarouselContent>
          </TypeCarousel>

          <div className="fixed left-0 bottom-0 z-30 w-full bg-secondary border-t flex items-center gap-2 p-2 sm:hidden">
            <div className="p-4 rounded-lg border w-fit">
              <Bookmark className="w-5 h-5 text-black" />
            </div>
            <Link
              href={`/book/${slug}/reading/0`}
              className="flex-grow flex items-center justify-center gap-2 p-4 rounded-lg border text-white h-full bg-blueAccent hover:bg-blueAccent/90"
            >
              <Book /> Start Reading
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

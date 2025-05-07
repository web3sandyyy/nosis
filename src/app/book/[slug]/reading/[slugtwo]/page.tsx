import React from "react";
import books from "@/constants/books";
import { generateSlug } from "@/helper";
import Link from "next/link";
import ReadingNav from "@/components/bookPage/ReadingNav";

const page = ({ params }: { params: { slugtwo: string; slug: string[] } }) => {
  const bookSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const contentIndex = parseInt(params.slugtwo);
  const book = books.find((book) => generateSlug(book.title) === bookSlug);

  if (!book) {
    return (
      <div className="p-4 sm:p-8">
        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
          Book not found
        </h2>
        <p>Could not find a book matching slug: {bookSlug}</p>
        <Link href="/" className="text-blue-500 mt-2 sm:mt-4 block">
          Back to home
        </Link>
      </div>
    );
  }

  if (
    isNaN(contentIndex) ||
    contentIndex < 0 ||
    !book.contents ||
    contentIndex >= book.contents.length
  ) {
    return (
      <div className="p-4 sm:p-8">
        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
          Content not found
        </h2>
        <p>Could not find content at index: {params.slugtwo}</p>
        <Link
          href={`/book/${bookSlug}`}
          className="text-blueAccent mt-2 sm:mt-4 block"
        >
          Back to book details
        </Link>
      </div>
    );
  }

  const content = book.contents[contentIndex];

  return (
    <>
      <ReadingNav book={book} currentIndex={contentIndex} />

      <div className="p-3 sm:p-4 w-full max-w-[1000px] mx-auto">
        <div
          className="content-center prose prose-sm sm:prose-base mx-auto"
          dangerouslySetInnerHTML={{ __html: content.data }}
        />

        <div className="flex justify-between mt-8 sm:mt-12 mb-6 sm:mb-8">
          {contentIndex > 0 && (
            <Link
              href={`/book/${bookSlug}/reading/${contentIndex - 1}`}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-gray-200 rounded hover:bg-gray-300"
            >
              Previous
            </Link>
          )}

          {contentIndex < book.contents.length - 1 && (
            <Link
              href={`/book/${bookSlug}/reading/${contentIndex + 1}`}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-blueAccent text-white rounded hover:bg-blueAccent/80 ml-auto"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default page;

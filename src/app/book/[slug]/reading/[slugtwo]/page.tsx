import React from "react";
import books from "@/constants/books";
import { generateSlug } from "@/helper";
import Link from "next/link";
import ReadingNav from "@/components/bookPage/ReadingNav";

const page = ({ params }: { params: { slugtwo: string; slug: string[] } }) => {
  const bookSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const contentIndex = parseInt(params.slugtwo);

  console.log("Route params:", params.slugtwo);
  console.log("Book slug:", bookSlug);
  console.log("Content index:", params.slugtwo);

  const book = books.find((book) => generateSlug(book.title) === bookSlug);

  if (!book) {
    return (
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Book not found</h2>
        <p>Could not find a book matching slug: {bookSlug}</p>
        <Link href="/" className="text-blue-500 mt-4 block">
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
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Content not found</h2>
        <p>Could not find content at index: {params.slugtwo}</p>
        <Link href={`/book/${bookSlug}`} className="text-blueAccent mt-4 block">
          Back to book details
        </Link>
      </div>
    );
  }

  const content = book.contents[contentIndex];

  return (
    <>
      <ReadingNav book={book} currentIndex={contentIndex} />

      <div className="p-4 w-full max-w-[1000px] mx-auto">
        <div
          className="content-center"
          dangerouslySetInnerHTML={{ __html: content.data }}
        />

        <div className="flex justify-between mt-12 mb-8">
          {contentIndex > 0 && (
            <Link
              href={`/book/${bookSlug}/reading/${contentIndex - 1}`}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Previous
            </Link>
          )}

          {contentIndex < book.contents.length - 1 && (
            <Link
              href={`/book/${bookSlug}/reading/${contentIndex + 1}`}
              className="px-4 py-2 bg-blueAccent text-white rounded hover:bg-blueAccent/80 ml-auto"
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

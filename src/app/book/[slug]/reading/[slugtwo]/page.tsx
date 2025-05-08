/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import books from "@/constants/books";
import { generateSlug } from "@/helper";
import Link from "next/link";
import ReadingNav from "@/components/bookPage/ReadingNav";
import GeneratePartSummary from "@/components/bookPage/GeneratePartSummary";
import { notFound } from "next/navigation";

// Export a function for generating static paths
export async function generateStaticParams() {
  const paths = [];

  for (const book of books) {
    const bookSlug = generateSlug(book.title);

    if (book.contents) {
      for (let i = 0; i < book.contents.length; i++) {
        paths.push({
          slug: bookSlug,
          slugtwo: i.toString(),
        });
      }
    }
  }

  return paths;
}

// The actual page component
export default async function Page(props: any) {
  const { params } = props;
  const { slug: bookSlug, slugtwo } = params;
  const contentIndex = parseInt(slugtwo);

  const book = books.find((book) => generateSlug(book.title) === bookSlug);

  // Use Next.js's notFound function for missing books
  if (!book) {
    notFound();
  }

  if (
    isNaN(contentIndex) ||
    contentIndex < 0 ||
    !book.contents ||
    contentIndex >= book.contents.length
  ) {
    notFound();
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

        {/* AI Summary Generator */}
        <GeneratePartSummary
          book={{ title: book.title, author: book.author }}
          part={content}
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
}

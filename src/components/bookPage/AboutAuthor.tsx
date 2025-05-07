import React from "react";

const AboutAuthor = ({
  author,
  aboutAuthor,
}: {
  author: string;
  aboutAuthor: string;
}) => {
  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">About Author</h2>
      <div className="shadow-sm p-3 sm:p-4 rounded-lg text-gray-700">
        <p className="text-base sm:text-lg font-semibold">{author}</p>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base">{aboutAuthor}</p>
      </div>
    </div>
  );
};

export default AboutAuthor;

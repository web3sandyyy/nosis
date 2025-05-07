import React from "react";

const AboutAuthor = ({ author, aboutAuthor }: { author: string, aboutAuthor: string }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">About Author</h2>
      <div className=" shadow-sm p-4 rounded-lg text-gray-700">
        <p className="text-lg font-semibold">{author}</p>
        <p className="mt-4">{aboutAuthor}</p>
      </div>
    </div>
  );
};

export default AboutAuthor;

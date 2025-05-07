import React from "react";
import books from "@/constants/books";

const page = () => {
  return (


      <div className="p-4 w-full max-w-[1000px] mx-auto">
        <p className="text-xl font-bold">Introduction</p>
        <p className="text-2xl font-bold my-8">
          The Blue Zones Solution: Eating and Living Like the World's Healthiest
          People
        </p>

        <div
          className=" content-center"
          dangerouslySetInnerHTML={{ __html: books[0].contents[0].data }}
        />
      </div>
  );
};

export default page;

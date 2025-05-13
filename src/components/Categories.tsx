import React from "react";
import categories from "@/constants/categories";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="w-full mt-8">
      <p className="text-xl md:text-2xl font-bold">Categories</p>

      <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-6">
        {categories.map((category) => (
          <div
            key={category.en}
            className="flex items-center gap-2 bg-white px-3 py-2 md:px-4 md:py-3 rounded-xl border border-black/10 shadow-sm shadow-black/10 hover:scale-105 transition-all duration-200"
          >
            <div className="relative h-5 w-5 flex-shrink-0">
              <Image
                src={category.icon}
                alt={category.en}
                width={20}
                height={20}
                className="min-h-4 min-w-4 md:min-h-5 md:min-w-5"
              />
            </div>
            <p className="text-sm md:text-base font-medium">{category.en}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

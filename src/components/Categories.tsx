import React from "react";
import categories from "@/constants/categories";

const Categories = () => {
  return (
    <div className="w-full">
      <p className="text-2xl font-bold">Categories</p>

      <div className="flex flex-wrap gap-4 mt-6">
        {categories.map((category) => (
          <div
            key={category.en}
            className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-black/10 shadow-sm shadow-black/10 hover:scale-105 transition-all duration-200"
          >
            <img
              src={category.icon}
              alt={category.en}
              width={20}
              height={20}
              className="min-h-5 min-w-5"
            />
            <p className="text-base font-medium">{category.en}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

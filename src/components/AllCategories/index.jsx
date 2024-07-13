import React from "react";
import { allCategoriesWithImages } from "../../categories";

export default function AllCategories() {
  return (
    <div>
      <div className="pt-3 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h1 className="font-bold pt-4 pb-4 text-2xl">All categories</h1>
        <div
          className="flex md:grid md:grid-cols-9 overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 gap-6 items-start"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {allCategoriesWithImages.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 md:flex-shrink flex flex-col items-center"
            >
              <div className="w-24">
                <img src={item.icon} className="w-full" alt={item.title} />
              </div>
              <h2 className="text-center md:font-semibold">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

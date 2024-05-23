"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const EventCategories = () => {
  const router = useRouter();

  const categories = [
    { name: "Music", image: "/music.png" },
    { name: "Art & Exhibition", image: "/art.png" },
    { name: "Bazaar", image: "/bazaar.png" },
    { name: "Conference", image: "/conference.png" },
    { name: "Sport", image: "/sport.png" },
  ];

  const handleCategoryClick = (category) => {
    router.push(`/category?category=${category}`);
  };

  return (
    <section className="max-container py-12">
      <div className="flex justify-center gap-10">
        {categories.map((category) => (
          <div key={category.name} className="text-center">
            <div className="flex flex-col items-center">
              <div
                className="rounded-full overflow-hidden border border-orange-600 hover:bg-orange-100 transition-colors duration-300 p-2 cursor-pointer"
                style={{ width: '100px', height: '100px' }}
                onClick={() => handleCategoryClick(category.name)}
              >
                <img src={category.image} alt={category.name} className="rounded-full w-full h-full object-cover" />
              </div>
              <p className="mt-2 text-lg font-semibold">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCategories;

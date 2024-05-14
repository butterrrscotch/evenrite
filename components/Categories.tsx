import React from 'react';

const EventCategories = () => {
  // Define an array of objects containing category names and their respective image paths
  const categories = [
    { name: "Music", image: "/music.png" },
    { name: "Art & Exhibition", image: "/art.png" },
    { name: "Bazaar", image: "/bazaar.png" },
    { name: "Conference", image: "/conference.png" },
    { name: "Sport", image: "/sport.png" },
  ];

  return (
    <section className="max-container py-12">
      {/* <h2 className="text-2xl font-semibold mb-6 text-center">Event Categories</h2> */}
      {/* Flex container to display categories in one line */}
      <div className="flex justify-center gap-10">
        {/* Map over the categories array to render each category */}
        {categories.map((category) => (
          <div key={category.name} className="text-center">
            {/* Container to wrap image and category name */}
            <div className="flex flex-col items-center">
              {/* Clickable image */}
              <div className="rounded-full overflow-hidden border border-orange-600 hover:bg-orange-100 transition-colors duration-300 p-2" style={{ width: '100px', height: '100px' }}>
                <img src={category.image} alt={category.name} className="rounded-full cursor-pointer hover:opacity-80 transition-opacity w-full h-full object-cover" />
              </div>
              {/* Category name */}
              <p className="mt-2 text-lg font-semibold">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCategories;

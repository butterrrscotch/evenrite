"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const SearchCategory = () => {
  const [searchCategory, setSearchCategory] = useState([]);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  console.log(category);

  useEffect(() => {
    const fetchEvents = async () => {
      if (category) {
        try {
          const response = await fetch(`http://localhost:3002/events/search?category=${category}`);
          const events = await response.json();
          setSearchCategory(events);
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      }
    };

    fetchEvents();
  }, [category]);

  return (
    <section className="py-12">
      <div className="flex flex-wrap justify-center gap-6">
        {searchCategory.length > 0 ? (
          searchCategory.map((event) => (
            <div key={event.id} className="flex flex-col rounded-md border border-gray-300 p-5">
              <img src={event.imageUrl} className="rounded-md mb-4" style={{ width: "320px", height: "180px" }} />
              <Link href={`/eventdetails?id=${event.id}`} className="font-semibold text-lg hover:underline text-orange-500">
                {event.name}
              </Link>
              <p className="text-sm text-zinc-500">{event.price}</p>
            </div>
          ))
        ) : (
          <p>No events found for category "{category}"</p>
        )}
      </div>
    </section>
  );
};

export default SearchCategory;

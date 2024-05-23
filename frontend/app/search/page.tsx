"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const SearchPage = () => {
  const [searchPage, setSearchPage] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchEvents = async () => {
      if (query) {
        try {
          const response = await fetch(`http://localhost:3002/events/search?query=${query}`);
          const events = await response.json();
          setSearchPage(events);
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      }
    };

    fetchEvents();
  }, [query]);

  return (
    <section className="py-12">
      <div className="flex flex-wrap justify-center gap-6">
        {searchPage.length > 0 ? (
          searchPage.map((event, index) => (
            <div key={index} className="flex flex-col rounded-md border border-gray-300 p-5">
              {/* Event image */}
              <img src={event.imageUrl} className="rounded-md mb-4" style={{ width: "320px", height: "180px" }} />
              {/* Event title */}
              <Link href={`/eventdetails?id=${event.id}`} className="font-semibold text-lg hover:underline text-orange-500">
                {event.name}
              </Link>
              {/* Event price */}
              <p className="text-sm text-zinc-500">{event.price}</p>
            </div>
          ))
        ) : (
          <p>No events found for "{query}"</p>
        )}
      </div>
    </section>
  );
};

export default SearchPage;

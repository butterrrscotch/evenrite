"use client" 

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const EventRecomendation = () => {
  const [recommendedEvents, setRecommendedEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3002/events');
        const events = await response.json();
        setRecommendedEvents(events);
        console.log(response)
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="py-12">
      {/* <h2 className="text-2xl font-semibold mb-6 text-center">Recommended Events For You</h2> */}
      {/* Flex container to display event recommendations in two rows */}
      <div className="flex flex-wrap justify-center gap-6">
       
        {recommendedEvents.map((event, index) => (
          <div key={index} className="flex flex-col rounded-md border border-gray-300 p-5">
            {/* Event image */}
            <img src={event.image} className="rounded-md mb-4" style={{ width: "320px", height: "180px" }} />
            {/* Event title */}
            <Link href={`/eventdetails?id=${event.id}`}> {/* Specify the path to EventDetails page */}
              <a className="font-semibold text-lg hover:underline text-orange-500">{event.name}</a>
            </Link>
            {/* Event price */}
            <p className="text-sm text-zinc-500">{event.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventRecomendation;

import React from 'react';
import Link from 'next/link'; 

const EventRecomendation = () => {
 
  const recommendedEvents = [
    { title: "Babe Fest", date: "April 10, 2024", price: "Free", image: "/event1.png" },
    { title: "Night Bazaar Magic", date: "May 15, 2024", price: "Rp 350.000", image: "/event2.png" },
    { title: "Tech Conference 2024", date: "June 20, 2024", price: "Rp 800.000", image: "/event3.png" },
    { title: "Metaverso 2022", date: "July 25, 2024", price: "Free", image: "/event4.png" },
    { title: "TED X", date: "August 30, 2024", price: "Rp 75.000", image: "/event5.png" },
    { title: "Music Event of The Summer", date: "September 5, 2024", price: "Rp 1.350.000", image: "/event6.png" },
  ];

  return (
    <section className="py-12">
      {/* <h2 className="text-2xl font-semibold mb-6 text-center">Recommended Events For You</h2> */}
      {/* Flex container to display event recommendations in two rows */}
      <div className="flex flex-wrap justify-center gap-6">
       
        {recommendedEvents.map((event, index) => (
          <div key={index} className="flex flex-col rounded-md border border-gray-300 p-5">
            {/* Event image */}
            <img src={event.image} alt={event.title} className="rounded-md mb-4" style={{ width: "320px", height: "180px" }} />
            {/* Event title */}
            <Link href="/eventdetails"> {/* Specify the path to EventDetails page */}
              <a className="font-semibold text-lg hover:underline">{event.title}</a>
            </Link>
            {/* Event date */}
            <p className="text-gray-500">{event.date}</p>
            {/* Event price */}
            <p className="font-semibold">{event.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventRecomendation;

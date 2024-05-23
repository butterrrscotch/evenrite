"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  // const [tickets, setTickets] = useState([]);
  const params = useParams();

  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    // const id = params?.id;
   
    console.log("T")
    console.log(id)

    const fetchEvent = async (id) => {
      console.log("Starting fetch event")
      try {
        const response = await fetch(`http://localhost:3002/events/${id}`);
        const data = await response.json();
        setEvent(data);
        setIsLoading(false)
        console.log("Finish fetch event")
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    // const fetchTickets = async (id) => {
    //   try {
    //     const response = await fetch(`http://localhost:3002/events/${id}/tickets`);
    //     const data = await response.json();
    //     setTickets(data);
    //   } catch (error) {
    //     console.error('Error fetching tickets:', error);
    //   }
    // };

    if (id) {
      console.log('Fetching event and tickets for ID:', id);
      fetchEvent(id); 
      // fetchTickets(id);
      // Promise.all([fetchEvent(id), fetchTickets(id)]).then(() => {
      //   setIsLoading(false);
      // });
    }
  }, []);

  console.log(isLoading)

  if (isLoading ) {
    return <p>Loading...</p>;
  }

  if (!event ) {
    return <p>Loading event details...</p>;
  }

  

  return (
    <section className="max-container py-12">
      <div className="flex flex-col md:flex-row">

        {/* Image and Ticketing section */}
        <div className="md:w-1/2 w-full">
          {/* Image */}
          <div className="md:pr-2 md:pl-8 mb-4">
            <img src={event.imageUrl} alt={event.name} className="w-full rounded-xl" />
          </div>
         {/* Event ticketing */}
         <div className="md:pl-8 md:pr-8">
            <h3 className="text-xl font-semibold mb-4 text-orange-600 mt-10">Event Ticketing</h3>
            <div className="border rounded-md border-orange-600 p-4 mb-4 hover:bg-orange-100">
              <h4 className="text-xl font-semibold mb-2">Ticket Price</h4>
              <p className="font-semibold">{event.price ? `Rp ${event.price}` : 'Free'}</p>
            </div>
          </div>
        </div>

        {/* Event details section */}
        <div className="md:w-1/2 w-full md:pl-8 md:pr-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-600">{event.name}</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Event Description</h3>
            <p>{event.description}</p>
          </div>
          <p className="mb-2 font-semibold text-orange-600">{new Date(event.date).toLocaleDateString()}</p>
          <p className="mb-4 font-semibold text-orange-600">10:00 AM - 5:00 PM</p>
        </div>

      </div>
    </section>
  );
};

export default EventDetails;

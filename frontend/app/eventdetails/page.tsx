import React from 'react';

const EventDetails = () => {
  return (
    <section className="max-container py-12">
      <div className="flex flex-col md:flex-row">

        {/* Image and Ticketing section */}
        <div className="md:w-1/2 w-full">
          {/* Image */}
          <div className="md:pr-2 md:pl-8 mb-4">
            <img src="/event1.png" alt="Event Poster" className="w-full rounded-xl" />
          </div>
          {/* Event ticketing */}
          <div className="md:pl-8 md:pr-8">
            <h3 className="text-xl font-semibold mb-4 text-orange-600 mt-10">Event Ticketing</h3>
            <div className="border rounded-md border-orange-600 p-4 mb-4 hover:bg-orange-100">
              <h4 className="text-xl font-semibold mb-2">Free Tickets</h4>
              <p className="mb-2">Sale ended on April 5, 2024</p>
              <p className="font-semibold">Free</p>
            </div>
            <div className="border rounded-md border-orange-600 p-4 mb-4 hover:bg-orange-100">
              <h4 className="text-xl font-semibold mb-2">Festival</h4>
              <p className="mb-2">Sale ended on April 5, 2024</p>
              <p className="font-semibold">Rp 200.000</p>
            </div>
            <div className="border rounded-md border-orange-600 p-4 mb-4 hover:bg-orange-100">
              <h4 className="text-xl font-semibold mb-2">All Access</h4>
              <p className="mb-2">Sale ended on April 5, 2024</p>
              <p className="font-semibold">Rp 500.000</p>
            </div>
          </div>
        </div>

        {/* Event details section */}
        <div className="md:w-1/2 w-full md:pl-8 md:pr-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-600">Babe Fest</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Event Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lobortis eros. Mauris id interdum ligula.</p>
          </div>
          <p className="mb-2 font-semibold text-orange-600">April 10, 2024</p>
          <p className="mb-4 font-semibold text-orange-600">10:00 AM - 5:00 PM</p>
          
        </div>

      </div>
    </section>
  );
};

export default EventDetails;

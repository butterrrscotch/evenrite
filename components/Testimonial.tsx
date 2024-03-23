// components/Testimonial.tsx
import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-white flex justify-center items-center mr-20 ml-20 mt-10 mb-20">
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gray-90 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <p className="text-white text-xl font-semibold mr-2">4.7</p>
            <img src="/star.png" alt="Star" className="w-6 h-6" />
          </div>
          <p className="text-white mb-4">Instant noodle fusion. Coffees. Modern minimalism.</p>
          <p className="text-gray-600 font-semibold">Wahyu Prihandono</p>
        </div>
        <div className="bg-gray-90 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <p className="text-white text-xl font-semibold mr-2">4.5</p>
            <img src="/star.png" alt="Star" className="w-6 h-6" />
          </div>
          <p className="text-white mb-4">Comfortable place to hang out. Excellent live music.</p>
          <p className="text-gray-600 font-semibold">Erwin Hasa</p>
        </div>
        <div className="bg-gray-90 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <p className="text-white text-xl font-semibold mr-2">4.8</p>
            <img src="/star.png" alt="Star" className="w-6 h-6" />
          </div>
          <p className="text-white mb-4">The food & drinks are delicious, lots of choices, & cheap. Safe for work.</p>
          <p className="text-gray-600 font-semibold">Nadya D.</p>
        </div>
        <div className="bg-gray-90 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <p className="text-white text-xl font-semibold mr-2">4.6</p>
            <img src="/star.png" alt="Star" className="w-6 h-6" />
          </div>
          <p className="text-white mb-4">Magelangan is the champion!</p>
          <p className="text-gray-600 font-semibold">Hilmy Hiruma</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

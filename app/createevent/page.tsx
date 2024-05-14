"use client"

import React, { useState } from 'react';

const EventCreationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend for event creation
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      title: '',
      date: '',
      time: '',
      description: '',
      price: '',
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6 mt-10 mb-20">
      <h2 className="text-2xl font-semibold mb-4 text-orange-600">Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter event title" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">Time</label>
          <input 
            type="time" 
            id="time" 
            name="time" 
            value={formData.time}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
          <textarea 
            id="description" 
            name="description" 
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none" 
            placeholder="Enter event description" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
          <input 
            type="text" 
            id="price" 
            name="price" 
            value={formData.price}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter event price" 
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-orange-600 hover:bg-white hover:text-orange-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" 
            type="submit"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventCreationForm;

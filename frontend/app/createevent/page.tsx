"use client"

import React, { useState } from 'react';
import axios from "axios";

const EventCreationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    price: '',
    category: '',
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

    const { name, description, location, price, category} = formData

    const data = {
      name: name,
      description: description,
      location: location,
      price: price,
      category: category,
    };
    
    // Header tambahan (jika diperlukan)
    const headers = {
      'Content-Type': 'application/json'
    };
    
    // Mengirimkan permintaan POST
    axios.post("http://localhost:3002/events", data, { headers: headers })
      .then(response => {
        console.log('Data berhasil dikirim:', response.data);
      })
      .catch(error => {
        console.error('Terjadi kesalahan saat mengirim data:', error);
      });

  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6 mt-10 mb-20">
      <h2 className="text-2xl font-semibold mb-4 text-orange-600">Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter event name" 
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Location</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            value={formData.location}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter event title" 
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
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Category</label>
          <input 
            type="text" 
            id="category" 
            name="category" 
            value={formData.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter event title" 
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

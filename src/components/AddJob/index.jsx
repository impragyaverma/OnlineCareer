// src/components/AddJob/index.jsx
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAddJob = async (e) => {
    e.preventDefault();
    if (!title || !type || !experience || !location || !description) {
      setError('All fields are required.');
      return;
    }

    try {
      await addDoc(collection(db, 'jobs'), {
        title,
        type,
        experience,
        location,
        description,
        postedOn: new Date(),
      });
      navigate('/jobs');
    } catch (error) {
      setError('Failed to add job. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Job</h2>
        <form onSubmit={handleAddJob}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2 text-sm font-medium">Job Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block mb-2 text-sm font-medium">Job Type:</label>
            <input
              type="text"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block mb-2 text-sm font-medium">Experience:</label>
            <input
              type="text"
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block mb-2 text-sm font-medium">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2 text-sm font-medium">Job Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">Add Job</button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;

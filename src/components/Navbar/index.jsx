import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        JobBoard
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
        <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
        <Link to="/add-job" className="text-white hover:text-gray-300">Add Job</Link> {/* Add Job link */}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-800 text-white">
      <h1 className="text-2xl font-bold">Joboard.</h1>
      <div>
        <Link to="/login" className="mr-4 bg-white text-blue-800 px-4 py-2 rounded">Login</Link>
        <Link to="/register" className="bg-white text-blue-800 px-4 py-2 rounded">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;



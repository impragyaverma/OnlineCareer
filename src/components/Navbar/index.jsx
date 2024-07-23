<<<<<<< HEAD
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
=======
import React from 'react'

function Navbar() {
  return (
    <div className='h-20 flex items-center w-full bg-blue-800 text-white'>
      <div className='text-3xl pl-20 font-bold'>Joboard.</div>
    </div>
  )
}
>>>>>>> f6ae85415787b380d80ec5ad22bd296275728612

export default Navbar;

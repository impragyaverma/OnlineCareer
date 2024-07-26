import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add your logout logic here (e.g., Firebase auth sign-out)
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">Job Portal</div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200">Home</Link>
        <Link to="/jobs" className="text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200">Jobs</Link>
        {isLoggedIn ? (
          <>
            <Link to="/add-job" className="text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200">Add Job</Link>
            <button 
              onClick={handleLogout} 
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">Login</Link>
            <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


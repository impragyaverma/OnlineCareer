import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email:</label>
            <input 
              type="email" 
              id="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">Password:</label>
            <input 
              type="password" 
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">Confirm Password:</label>
            <input 
              type="password" 
              id="confirmPassword"
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded" 
              required 
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;


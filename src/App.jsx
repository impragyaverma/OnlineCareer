import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import Login from './components/Login';
import Register from './components/Register';
import AddJob from './components/AddJob'; // Import AddJob component
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = collection(db, "jobs");
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = collection(db, "jobs");
    const q = query(
      jobsRef,
      where("type", "==", jobCriteria.type),
      where("title", "==", jobCriteria.title),
      where("experience", "==", jobCriteria.experience),
      where("location", "==", jobCriteria.location),
      orderBy("postedOn", "desc")
    );
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
    // Check login status on initial load
    // Assume you have some way to check if the user is logged in (e.g., check auth state)
    // setIsLoggedIn(checkUserLoginStatus());
  }, []);

  return (
    <Router>
      <div className="bg-blue-900 min-h-screen text-black-800">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<SearchBar fetchJobsCustom={fetchJobsCustom} />} 
          />
          <Route 
            path="/login" 
            element={<Login setIsLoggedIn={setIsLoggedIn} />} 
          />
          <Route 
            path="/register" 
            element={<Register />} 
          />
          <Route 
            path="/jobs" 
            element={
              <div className="px-8">
                <SearchBar fetchJobsCustom={fetchJobsCustom} />
                <div className="mt-8">
                  {jobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                  ))}
                </div>
              </div>
            } 
          />
          <Route 
            path="/add-job" 
            element={<AddJob />} 
          /> {/* Add AddJob route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


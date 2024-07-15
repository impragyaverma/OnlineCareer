import React, { useEffect, useState } from "react";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import 'tailwindcss/tailwind.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

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
  }, []);

  return (
    <div className="bg-blue-900 min-h-screen text-white">
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customSearch && (
        <div className="flex justify-center mb-4">
          <button onClick={fetchJobs} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Clear Filters
          </button>
        </div>
      )}
      <div className="px-8">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}

export default App;



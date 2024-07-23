import React from 'react';
import dayjs from 'dayjs';

function JobCard({ title, company, type, experience, location, skills, postedOn, job_link }) {
  const date1 = dayjs();
  const postDate = dayjs(postedOn);
  const diffInDays = date1.diff(postDate, 'day');

  const handleApplyClick = () => {
    window.open(job_link, '_blank');
  };

  return (
    <div className='mx-auto mb-4 max-w-3xl'>
      <div className='flex justify-between items-center px-6 py-4 bg-white rounded-md border border-gray-300 shadow-lg hover:shadow-2xl transition-shadow duration-200'>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-lg font-semibold text-black'>{title} - {company}</h1>
          <p className='text-black'>{type} &#x2022; {experience} &#x2022; {location}</p>
          <div className='flex items-center gap-2'>
            {Array.isArray(skills) ? (
              skills.map((skill, i) => (
                <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-gray-300'>{skill}</p>
              ))
            ) : (
              <p className='text-gray-500'>Skills not specified</p>
            )}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <p className='text-gray-500'>Posted {diffInDays === 0 ? 'today' : `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`}</p>
          <button onClick={handleApplyClick} className='text-blue-700 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-200'>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;


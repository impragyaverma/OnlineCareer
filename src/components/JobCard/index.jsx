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
    <div className='mx-40 mb-4'>
      <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-lg font-semibold'>{title} - {company}</h1>
          <p>{type} &#x2022; {experience} &#x2022; {location}</p>
          <div className='flex items-center gap-2'>
            {Array.isArray(skills) ? (
              skills.map((skill, i) => (
                <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
              ))
            ) : (
              <p className='text-gray-500'>Skills not specified</p>
            )}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <p className='text-gray-500'>Posted {diffInDays === 0 ? 'today' : `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`}</p>
          <button onClick={handleApplyClick} className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md cursor-pointer'>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;

import React from 'react'

const Filter = ({handleReset,handleJobTypeChange,jobTypeFilter, handleJobCategoryChange, jobCategoryFilter}) => {
  return (
    <div className="shadow p-5 rounded-lg mt-20 bg-white h-96">

        <div className="flex items-center gap-28  mt-4">
        <p className="font-medium">
            Filters
        </p>

        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" onClick={handleReset}> 
            Reset 
        </button>
        </div>

        <div>
        <div className="flex flex-col gap-y-20 mt-10">
            <select className="px-4 py-3  rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" value={jobTypeFilter} onChange={handleJobTypeChange} >
            <option value="">Job Type</option>
            <option value="Contract">Contract</option>
            <option value="Full Time">Full Time</option>
            <option value="Internship">Internship</option>
            <option value="Part Time<">Part Time</option>
            </select>

            <select className="px-4 py-3  rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" value={jobCategoryFilter} onChange={handleJobCategoryChange}>
            <option value="">Job Categories</option>
            <option value="Business">Business</option>
            <option value="Marketing">Marketing</option>
            <option value="Health">Health</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Analyst">Analyst</option>
            <option value="Biotech">Biotech</option>
            <option value="Content">Content</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Data Entry">Data Entry</option>
            <option value="Data Science<">Data Science</option>
            </select>

        </div>
        </div>
    </div>
  )
}

export default Filter

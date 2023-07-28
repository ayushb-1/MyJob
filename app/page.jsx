
"use client";
import { useState,useEffect } from 'react';
import axios from 'axios';
import Filter from '@components/Filter';
import Jobs from '@components/Jobs';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const [jobCategoryFilter, setJobCategoryFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');

  useEffect(() => {
   
    const fetchData = async () => {
      
      
      
      const response = await axios.get('https://entryleveljobs.me/api/jobs', {
        params: {
          page: currentPage,
          limit: jobsPerPage,
          type:jobTypeFilter
        },
      });
      const responseData = response.data;
      if(jobCategoryFilter==''){
        setJobs(response.data.data);

      }
      else{
        const lowerCaseJobCategoryFilter = jobCategoryFilter.toLowerCase();
        console.log('User input category:', lowerCaseJobCategoryFilter);
        const newResponse = responseData.data.filter(
          (item) => item.category  && item.category.name.toLowerCase().includes(lowerCaseJobCategoryFilter)
        );
        setJobs(newResponse);
        
      }

    };

    fetchData();
  }, [currentPage,jobTypeFilter,jobCategoryFilter]);
  console.log(jobs);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleJobTypeChange=(e)=>{
    setJobTypeFilter(e.target.value);
  }
  const handleJobCategoryChange=(e)=>{
    setJobCategoryFilter(e.target.value);
  }
  const handleReset=()=>{
    setJobCategoryFilter('');
    setJobTypeFilter('');
    setCurrentPage(1);
  }

return(
  <>
    <section className="w-full flex gap-10">

      <Filter handleReset={handleReset} handleJobTypeChange={handleJobTypeChange} jobTypeFilter={jobTypeFilter} handleJobCategoryChange={handleJobCategoryChange} jobCategoryFilter={jobCategoryFilter}/>
      <div className="relative flex gap-y-10 min-h-screen flex-col w-full items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12 ">
        {jobs.map((job)=>(
          <div key={job.jobId}>
            <Jobs job={job}  />
          </div>

        ))}
      </div>

    </section>
      <div>
        <div className="inline-flex space-x-2.5">
          <button className="flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-purple-600 hover:bg-purple-400"
              onClick={() => handlePageChange(currentPage - 1)}
              >
              ⪻
              Previous
          </button>
          <button className="flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 bg-white transition-colors hover:border-purple-600 hover:bg-purple-400"
              onClick={() => handlePageChange(currentPage + 1)}
              >
              Next
              ⪼
          </button>
        </div>
      </div>

   
  </>
)
}

export default Home;
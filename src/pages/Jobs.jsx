import React, { useEffect, useState } from "react";
import { JobCard, PageHeader } from "../components";
import { jobs } from "../assets";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [theJobs, setTheJobs] = useState(jobs);
  const [searchJob, setSerachJob] = useState("");

  const handleChange = (e) => {
    const searchValue = e.target.value.trim().toLowerCase(); // Normalize input
    setSerachJob(e.target.value);

    if (searchValue === "") {
      setTheJobs(jobs);
      return;
    }

    const filteredJobs = jobs.filter((job) =>
      job.role.toLowerCase().includes(searchValue)
    );

    setTheJobs(filteredJobs.length > 0 ? filteredJobs : []);
  };

  const handleSearchJob = () => {
    if (searchJob === "") {
      alert("Search box is empty!");
    } else {
      const filteredJobs = jobs.filter((job) =>
        job.role.toLowerCase().includes(searchJob)
      );
      if (filteredJobs.length > 0) {
        setTheJobs(filteredJobs);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeader title="jobs" />
      <section className="global-padding py-16">
        {/* Job Search Box */}
        <div className="flex xs:flex-col sm:flex-row items-center justify-between gap-2 xs:w-full sm:max-w-[519px] mx-auto border border-grayish-200">
          <input
            type="text"
            placeholder="Search for jobs"
            value={searchJob}
            onChange={handleChange}
            className="xs:w-full sm:w-[80%] border-none outline-none h-full pl-4 py-2"
          />
          <button
            type="button"
            onClick={handleSearchJob}
            className="xs:w-full sm:w-[20%] bg-primary py-2 text-white cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Job post button */}
        <div className="flex justify-end px-10 mt-10">
          <Link to="/postjob" className="bg-primary text-white py-2 px-10">
            Post a Job
          </Link>
        </div>

        {/* Jobs List */}
        <div className="flex flex-col gap-5 mt-8">
          {theJobs?.length > 0 ? (
            theJobs.map((job) => {
              return <JobCard job={job} />;
            })
          ) : (
            <p>No Jobs Avalaible</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Jobs;

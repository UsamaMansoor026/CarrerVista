import React, { useContext } from "react";
import { SectionHeading } from "./index";
import { jobs } from "../assets";
import { Link } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";
import { JobCard } from "./index";

const RecentJobs = () => {
  const { handleActiveLink } = useContext(NavigationContext);

  return (
    <section className="global-padding my-10">
      <div className="flex items-center justify-between">
        <SectionHeading isCenter={false}>Recent jobs</SectionHeading>

        <Link
          to="/jobs"
          onClick={() => handleActiveLink("jobs")}
          className="bg-primary text-white xs:py-1.5 sm:py-4 xs:px-5 sm:px-10 border border-transparent rounded-sm z-10 text-[14px] sm:text-lg relative before:absolute before:inset-0 before:bg-white before:-z-10 before:w-0 hover:before:w-full before:transition-all before:duration-700 hover:text-primary hover:border-primary overflow-hidden"
        >
          Explore More
        </Link>
      </div>

      {/* Recent Jobs List mapping */}
      <div className="flex flex-col gap-5 mt-8">
        {jobs?.length > 0 ? (
          jobs.map((job) => {
            return <JobCard job={job} />;
          })
        ) : (
          <p>No Recent Jobs</p>
        )}
      </div>
    </section>
  );
};

export default RecentJobs;

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { IoBusinessOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const { handleActiveLink, setCategoryBgColor } =
    useContext(NavigationContext);

  return (
    <motion.article
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3 }}
      key={job.id}
      className="relative top-0 px-7 py-5 flex flex-col md:flex-row gap-5 md:gap-0 items-start md:items-center justify-between duration-300 hover:-top-[5px] border-b border-b-grayish-200/70 hover:shadow-lg hover:shadow-grayish-200/70 cursor-pointer"
      onClick={() => {
        handleActiveLink("jobs");
        navigate(`/jobs/${job.id}`);
      }}
    >
      {/* Job Info */}
      <div className="flex flex-col gap-3">
        {/* Job title and category */}
        <div className="flex items-center gap-3">
          <h3 className="text-2xl">{job.role}</h3>
          <p
            className={`${setCategoryBgColor(
              job.category
            )} px-5 py-1 text-[12px] ml-0 md:ml-3 whitespace-nowrap rounded-full capitalize text-white`}
          >
            {job.category}
          </p>
        </div>

        {/* Company and location */}
        <div className="flex xs:flex-col sm:flex-row xs:items-start sm:items-center gap-3">
          <p className="text-grayish-500 text-base flex items-center gap-1">
            <span>
              <IoBusinessOutline />
            </span>
            <span>{job.company}</span>
          </p>
          <p className="text-grayish-500 text-base flex items-center gap-1">
            <span>
              <CiLocationOn />
            </span>
            <span>{job.location}</span>
          </p>
        </div>
      </div>

      {/* Apply button */}
      <div>
        <Link
          to={`/applyjob/${job.id}`}
          className="bg-primary text-white border border-primary py-2 px-3 rounded hover:bg-transparent hover:text-primary duration-300 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleActiveLink("jobs");
          }}
        >
          Apply Job
        </Link>
      </div>
    </motion.article>
  );
};

export default JobCard;

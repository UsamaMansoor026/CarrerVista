import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { jobs } from "../assets";
import { ApplyJobForm, PageHeader, SectionHeading } from "../components/index";
import { CiLocationOn } from "react-icons/ci";
import { IoBusinessOutline } from "react-icons/io5";
import { NavigationContext } from "../context/NavigationContext";

const ApplyJob = () => {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);
  const { setCategoryBgColor } = useContext(NavigationContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    const jobDetail = jobs.find((job) => job.id === Number(id));
    if (jobDetail) {
      setJobDetail(jobDetail);
    } else {
      setJobDetail(null);
    }
  }, []);
  return (
    <>
      <PageHeader title="Apply for a job" />
      <div className="pt-7 global-padding">
        <SectionHeading isCenter={false}>{jobDetail?.role}</SectionHeading>
        <div className="flex xs:flex-col sm:flex-row xs:items-start sm:items-center gap-3 my-3">
          <p className="text-grayish-500 text-base flex items-center gap-1">
            <span>
              <IoBusinessOutline />
            </span>
            <span>{jobDetail?.company}</span>
          </p>
          <p className="text-grayish-500 text-base flex items-center gap-1">
            <span>
              <CiLocationOn />
            </span>
            <span>{jobDetail?.location}</span>
          </p>
        </div>

        <p className="flex gap-2 items-center text-lg mb-3">
          <span>Job Type:</span>{" "}
          <span
            className={`${setCategoryBgColor(
              jobDetail?.category
            )} capitalize px-3 py-0.5 text-white rounded`}
          >
            {jobDetail?.category}
          </span>
        </p>

        <Link
          to={`/jobs/${jobDetail?.id}`}
          className="text-grayish-500 underline underline-offset-4"
        >
          View Full Job Detail
        </Link>

        <div className="mt-10 xs:w-full sm:max-w-[94%] md:max-w-[85%] lg:max-w-[80%] mx-auto">
          <ApplyJobForm jobDetail={jobDetail} />
        </div>
      </div>
    </>
  );
};

export default ApplyJob;

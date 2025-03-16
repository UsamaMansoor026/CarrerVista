import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { jobs } from "../assets";
import { SectionHeading } from "../components/index";
import { CiLocationOn } from "react-icons/ci";
import { IoBusinessOutline } from "react-icons/io5";
import { NavigationContext } from "../context/NavigationContext";

const SingleJob = () => {
  const { id } = useParams();
  const { setCategoryBgColor } = useContext(NavigationContext);
  const [jobDetail, setDetail] = useState(null);

  useEffect(() => {
    const detail = jobs.find((job) => job.id === Number(id));
    // console.log("Detail: ", detail);
    if (detail) {
      setDetail(detail);
    } else {
      setDetail(null);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="global-padding pt-28">
      <div>
        {jobDetail !== null && (
          <>
            <SectionHeading isCenter={false}>{jobDetail.role}</SectionHeading>
            {/* Company and Location */}
            <div className="flex xs:flex-col sm:flex-row xs:items-start sm:items-center gap-3 my-3">
              <p className="text-grayish-500 text-base flex items-center gap-1">
                <span>
                  <IoBusinessOutline />
                </span>
                <span>{jobDetail.company}</span>
              </p>
              <p className="text-grayish-500 text-base flex items-center gap-1">
                <span>
                  <CiLocationOn />
                </span>
                <span>{jobDetail.location}</span>
              </p>
            </div>

            {/* Job Type */}
            <p className="flex gap-2 items-center text-lg mb-3">
              <span>Job Type:</span>{" "}
              <span
                className={`${setCategoryBgColor(
                  jobDetail.category
                )} capitalize px-3 py-0.5 text-white rounded`}
              >
                {jobDetail.category}
              </span>
            </p>

            <Link
              to={`/applyjob/${jobDetail.id}`}
              className="bg-primary text-white border border-primary py-1 px-10 rounded hover:bg-transparent hover:text-primary duration-300 cursor-pointer"
            >
              Apply Job
            </Link>

            <h3 className="text-2xl font-semibold my-3">
              Full Job Description
            </h3>

            {/* Description */}
            <div className="my-5 flex flex-col gap-2">
              <h5 className="font-semibold">Description:</h5>
              <p className="text-[17px]">{jobDetail.jobDesc}</p>
            </div>

            {/* Responsibilities */}
            <div className="my-5 flex flex-col gap-2">
              <h5 className="font-semibold">What You'll Do:</h5>
              <ul className="list-disc ml-3">
                {jobDetail.jobResp.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="my-5 flex flex-col gap-2">
              <h5 className="font-semibold">Job Requirements:</h5>
              <ul className="list-disc ml-3">
                {jobDetail.jobReq.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SingleJob;

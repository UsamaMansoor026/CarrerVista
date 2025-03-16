import React, { useEffect, useState } from "react";
import { PageHeader, SectionHeading } from "../components";
import { FaMinus, FaPlus } from "react-icons/fa";

const PostJob = () => {
  const [formData, setFormData] = useState({
    jobtitle: "",
    jobdesc: "",
    jobtype: "",
    company: "",
    jobreq: [""],
    jobres: [""],
  });

  const handleOnChange = (e) => {
    const { value, id } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSpecialChange = (index, value, id) => {
    if (id === "jobreq") {
      const newreqs = [...formData.jobreq];
      newreqs[index] = value;
      setFormData((prev) => ({ ...prev, jobreq: newreqs }));
    } else if (id === "jobres") {
      const newres = [...formData.jobres];
      newres[index] = value;
      setFormData((prev) => ({ ...prev, jobres: newres }));
    }
  };

  const addRes = () => {
    setFormData((prev) => ({ ...prev, jobres: [...prev.jobres, ""] }));
  };

  const removeRes = () => {
    setFormData((prev) => ({ ...prev, jobres: prev.jobres.slice(0, -1) }));
  };

  const addReq = () => {
    setFormData((prev) => ({ ...prev, jobreq: [...prev.jobreq, ""] }));
  };

  const removeRequirement = () => {
    setFormData((prev) => ({ ...prev, jobreq: prev.jobreq.slice(0, -1) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data: ", formData);
    setFormData({
      jobtitle: "",
      jobdesc: "",
      jobtype: "",
      company: "",
      jobreq: [""],
      jobres: [""],
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeader title="post a job" />

      <section className="global-padding my-16 xs:w-full sm:max-w-[94%] md:max-w-[85%] lg:max-w-[80%] mx-auto">
        <SectionHeading isCenter={false}>Post a Job</SectionHeading>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
          {/* Input Field Job Title */}
          <div className="flex flex-col gap-1">
            <label htmlFor="jobtitle" className="font-semibold text-grayish">
              Job Title
            </label>
            <input
              type="text"
              name="jobtitle"
              id="jobtitle"
              placeholder="eg. Frontend Web Developer"
              required
              value={formData.jobtitle}
              onChange={handleOnChange}
              className="capitalize border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          {/* Input Field Company */}
          <div className="flex flex-col gap-1">
            <label htmlFor="company" className="font-semibold text-grayish">
              Compnay
            </label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="eg. Amazon"
              required
              value={formData.company}
              onChange={handleOnChange}
              className="capitalize border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          {/* Input Field Job Type */}
          <div className="flex flex-col gap-1">
            <label htmlFor="jobtype" className="font-semibold text-grayish">
              Job Type
            </label>
            <select
              name="jobtype"
              id="jobtype"
              required
              value={formData.jobtype}
              onChange={handleOnChange}
              className="capitalize text-grayish border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>

          {/* Input Field Job Description */}
          <div className="flex flex-col gap-1">
            <label htmlFor="jobdesc" className="font-semibold text-grayish">
              Job Description
            </label>
            <textarea
              name="jobdesc"
              id="jobdesc"
              placeholder="Detailed Description about job"
              required
              value={formData.jobdesc}
              onChange={handleOnChange}
              className="min-h-[150px] border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Input Field Job Responsibilities */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-col md:flex-row sm:items-start md:items-center justify-between">
              <label htmlFor="jobreq" className="font-semibold text-grayish">
                Job Responsibilities
              </label>
              <div className="flex xs:flex-col sm:flex-row xs:items-start sm:items-center gap-3">
                <span
                  className="flex items-center gap-2 bg-primary text-white px-4 py-1.5 cursor-pointer rounded"
                  onClick={addRes}
                >
                  <FaPlus />
                  Add Responsibility
                </span>
                {formData.jobres.length > 1 && (
                  <span
                    className="flex items-center gap-2 bg-redish-400 text-white px-4 py-1.5 cursor-pointer rounded"
                    onClick={removeRes}
                  >
                    <FaMinus />
                    Remove Responsibility
                  </span>
                )}
              </div>
            </div>
            {formData.jobres.map((res, index) => (
              <input
                key={index}
                type="text"
                name={index}
                id={index}
                value={res}
                onChange={(e) =>
                  handleSpecialChange(index, e.target.value, "jobres")
                }
                placeholder={`Responsibility ${index + 1}`}
                required
                className="w-full capitalize border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            ))}
          </div>

          {/* Input Field Job Requirements */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-col md:flex-row sm:items-start md:items-center justify-between">
              <label htmlFor="jobreq" className="font-semibold text-grayish">
                Job Requirements
              </label>
              <div className="flex xs:flex-col sm:flex-row xs:items-start sm:items-center gap-3">
                <span
                  className="flex items-center gap-2 bg-primary text-white px-4 py-1.5 cursor-pointer rounded"
                  onClick={addReq}
                >
                  <FaPlus />
                  Add Requirement
                </span>
                {formData.jobreq.length > 1 && (
                  <span
                    className="flex items-center gap-2 bg-redish-400 text-white px-4 py-1.5 cursor-pointer rounded"
                    onClick={removeRequirement}
                  >
                    <FaMinus />
                    Remove Requirement
                  </span>
                )}
              </div>
            </div>
            {formData.jobreq.map((req, index) => (
              <input
                key={index}
                type="text"
                name={index}
                id={index}
                value={req}
                onChange={(e) =>
                  handleSpecialChange(index, e.target.value, "jobreq")
                }
                placeholder={`Requirement ${index + 1}`}
                required
                className="w-full capitalize border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            ))}
          </div>

          <div>
            <button
              type="submit"
              className="px-16 py-2 border border-primary bg-primary text-white cursor-pointer transition-all duration-200 hover:bg-transparent hover:text-primary hover:shadow-md shadow-primary"
            >
              Post Job
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default PostJob;

import React from "react";

const ApplyJobForm = ({ jobDetail }) => {
  return (
    <form className="flex flex-col gap-6 mt-6">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-semibold text-grayish">
          Enter Full Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="eg. Maan Mansoor"
          required
          className="capitalize border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="font-semibold text-grayish">
          Enter Phone Number:
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="eg. +92 333 3333333"
          required
          className="capitalize border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="interviewDates" className="font-semibold text-grayish">
          Enter 2-3 Interview Dates:
        </label>
        <textarea
          name="interviewDates"
          id="interviewDates"
          placeholder=""
          required
          className="min-h-[150px] border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Resume Uploading Field */}
      <div className="flex flex-col gap-1">
        <label htmlFor="resume" className="font-semibold text-grayish">
          Upload Your Resume:
        </label>
        <input
          type="file"
          name="resume"
          id="resume"
          accept=".pdf"
          required
          className="border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent file:mr-4 file:py-2 file:px-3 file:rounded file:border-none file:bg-primary file:text-white hover:file:bg-opacity-80"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-primary text-white px-10 py-2 rounded border border-primary cursor-pointer transition-all duration-200 hover:bg-transparent hover:text-primary hover:shadow-md shadow-primary"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default ApplyJobForm;

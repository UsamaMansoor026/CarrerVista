import React, { useState } from "react";
import heroBg from "../assets/hero_bg.webp";
import { motion } from "framer-motion";

const Hero = () => {
  /* This can be updated or replaced by the actual data */
  const [userType, setUserType] = useState("demo");

  return (
    <section
      className="min-h-[600px] flex items-center"
      style={{
        background: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% -38.099px",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Hero section content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="global-padding mb-7"
      >
        <h1 className="xs:text-[44px] sm:text-[56px] lg:text-[70px] leading-[1.2] mb-2">
          <span className="font-bold">Jobs That Fit.</span>
          <br /> Careers That Grow.
        </h1>

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl w-full xs:max-w-full sm:max-w-[85%] md:max-w-[75%] text-grayish-500 mb-2"
        >
          A world of opportunities awaits—find a job that fits and a career that
          grows!
        </motion.p>

        <motion.button
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          type="button"
          className="bg-primary text-white rounded border border-primary px-8 py-1.5 cursor-pointer duration-200 transition-all hover:bg-transparent hover:text-primary hover:shadow-lg shadow-primary"
        >
          Get started now
        </motion.button>

        {/* Conditional Rendering this div based on the type of user -> Employer or Job seeker */}
        {userType === "jobseeker" ? (
          <div className="mt-3 bg-white p-4">
            <label
              htmlFor="heading"
              className="uppercase text-[14px] font-semibold tracking-[2px]"
            >
              Find a candidate:
            </label>
            <form className="mt-4 flex xs:flex-wrap lg:flex-nowrap items-end gap-4">
              {/* Input Field Name */}
              <div className="flex flex-col xs:w-full sm:w-[45%] lg:w-full gap-1">
                <label htmlFor="name" className="text-grayish-400">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Maan Mansoor"
                  required
                  className="border border-primary w-full outline-none rounded-sm py-2 px-4"
                />
              </div>
              {/* Input Field Category */}
              <div className="flex flex-col xs:w-full sm:w-[45%] lg:w-full gap-1">
                <label htmlFor="category" className="text-grayish-400">
                  Category:
                </label>
                <select
                  name="category"
                  id="category"
                  required
                  className="border border-primary text-grayish-400 outline-none rounded-sm py-2 px-4"
                >
                  <option value="" disabled selected>
                    Select one
                  </option>
                  <option value="fulltime">Full Time</option>
                  <option value="parttime">Part Time</option>
                  <option value="freelance">Freelance</option>
                  <option value="internship">Internship</option>
                  <option value="temporary">Temporary</option>
                </select>
              </div>

              {/* Input Field Location */}
              <div className="flex flex-col xs:w-full sm:w-[45%] lg:w-full gap-1">
                <label htmlFor="location" className="text-grayish-400">
                  Location:
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Islamabad"
                  required
                  className="border border-primary w-full outline-none rounded-sm py-2 px-4"
                />
              </div>
              {/* Search Button */}
              <div className="xs:w-full sm:w-[45%] lg:w-full">
                <button
                  type="button"
                  className="border border-primary bg-primary text-white cursor-pointer w-full outline-none rounded-sm py-2 px-4 duration-300 hover:shadow-md hover:shadow-primary hover:bg-transparent hover:text-primary"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        ) : userType === "employer" ? (
          <div className="mt-3 bg-white p-4">
            <label
              htmlFor="heading"
              className="uppercase text-[14px] font-semibold tracking-[2px]"
            >
              Find a job:
            </label>
            <form className="mt-4 flex xs:flex-wrap lg:flex-nowrap items-end gap-4">
              {/* Input Field Name */}
              <div className="flex flex-col xs:w-full sm:w-[45%] lg:w-full gap-1">
                <label htmlFor="role" className="text-grayish-400">
                  Role:
                </label>
                <input
                  type="text"
                  name="role"
                  id="role"
                  placeholder="eg. Web Developer"
                  required
                  className="border border-primary w-full outline-none rounded-sm py-2 px-4"
                />
              </div>
              {/* Input Field Category */}
              <div className="flex flex-col xs:w-full sm:w-[45%] lg:w-full gap-1">
                <label htmlFor="category" className="text-grayish-400">
                  Category:
                </label>
                <select
                  name="category"
                  id="category"
                  required
                  className="border border-primary text-grayish-400 outline-none rounded-sm py-2 px-4"
                >
                  <option value="" disabled selected>
                    Select one
                  </option>
                  <option value="fulltime">Full Time</option>
                  <option value="parttime">Part Time</option>
                  <option value="freelance">Freelance</option>
                  <option value="internship">Internship</option>
                  <option value="temporary">Temporary</option>
                </select>
              </div>

              {/* Input Field Location */}
              <div className="flex flex-col xs:w-full sm:w-[45%] lg:w-full gap-1">
                <label htmlFor="location" className="text-grayish-400">
                  Location:
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Islamabad"
                  required
                  className="border border-primary w-full outline-none rounded-sm py-2 px-4"
                />
              </div>
              {/* Search Button */}
              <div className="xs:w-full sm:w-[45%] lg:w-full">
                <button
                  type="button"
                  className="border border-primary bg-primary text-white cursor-pointer w-full outline-none rounded-sm py-2 px-4 duration-300 hover:shadow-md hover:shadow-primary hover:bg-transparent hover:text-primary"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        ) : (
          <></>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;

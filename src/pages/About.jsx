import React from "react";
import { PageHeader, Team } from "../components";
import gallery from "../assets/gallery1.webp";

const About = () => {
  return (
    <>
      <PageHeader title="about" />

      <div className="global-padding mt-16 flex flex-col lg:flex-row items-start justify-between gap-9">
        <div className="w-[100%] lg:w-[50%]">
          <img
            src={gallery}
            alt="Hands of people stacking on each other, that showcases we are united."
            className="w-full object-cover xs:aspect-[1] sm:aspect-[22/11] lg:aspect-[1]"
          />
        </div>

        <div className="sm:w-full md:w-[80%] lg:w-[50%] my-3">
          <p className="text-grayish-500 leading-[1.6]">
            At <b>Career Vista</b>, we believe in connecting people with the
            right opportunities. Whether you’re a <b>job seeker</b> looking for
            your dream job or an <b>employer</b> searching for the perfect
            candidate, we make the process simple and efficient.
          </p>

          <h3 className="capitalize my-3 font-bold text-2xl">Who we are</h3>
          <p className="text-grayish-500 leading-[1.6]">
            Career Vista is a platform built to <b>bridge the gap</b> between
            talented individuals and top companies. We understand the challenges
            of job hunting and hiring, so we provide{" "}
            <b>a smooth and reliable experience</b> for both job seekers and
            employers.
          </p>

          <h3 className="capitalize my-3 font-bold text-2xl">
            Why choose career vista?
          </h3>
          <ul className="list-disc ml-5">
            <li className="text-grayish-500">Easy & Fast</li>
            <li className="text-grayish-500">Trusted by Companies</li>
            <li className="text-grayish-500">Career Growth</li>
          </ul>
        </div>
      </div>

      {/* Team */}
      <Team />
    </>
  );
};

export default About;

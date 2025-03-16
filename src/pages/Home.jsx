import React from "react";
import {
  Hero,
  NewsLetter,
  RecentJobs,
  Testimonials,
  WhyUs,
} from "../components";
const Home = () => {
  return (
    <>
      <Hero />
      <RecentJobs />
      <WhyUs />
      <Testimonials />
    </>
  );
};

export default Home;

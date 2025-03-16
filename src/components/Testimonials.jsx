import React from "react";
import { Carousel, SectionHeading } from "./index";
import { testimonials } from "../assets";

const Testimonials = () => {
  return (
    <section className="global-padding">
      <SectionHeading isCenter={true}>Happy Users</SectionHeading>

      <Carousel data={testimonials} />
    </section>
  );
};

export default Testimonials;

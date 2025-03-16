import React from "react";
import {
  ContactForm,
  Faqs,
  PageHeader,
  ReviewForm,
  SectionHeading,
} from "../components";

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact" />

      <section className="global-padding my-16 xs:w-full sm:max-w-[94%] md:max-w-[85%] lg:max-w-[80%] mx-auto">
        <SectionHeading isCenter={false}>Connect With Us</SectionHeading>
        <ContactForm />

        <div className="mt-20">
          <SectionHeading isCenter={false}>Leave a Review</SectionHeading>
          <ReviewForm />
        </div>

        <div className="mt-20">
          <SectionHeading isCenter={false}>
            Frequently Asked Questions
          </SectionHeading>
          <Faqs />
        </div>
      </section>
    </>
  );
};

export default Contact;

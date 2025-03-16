import React from "react";
import { NewsLetter, SectionHeading, TeamMemberCard, WhyUs } from "./index";
import { teamMembers } from "../assets";

const Team = () => {
  return (
    <>
      <section className="global-padding my-16">
        <SectionHeading isCenter={true}>Our Team</SectionHeading>

        {/* Team Members data */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member) => {
            return <TeamMemberCard member={member} key={member.id} />;
          })}
        </div>
      </section>
      <WhyUs />
    </>
  );
};

export default Team;

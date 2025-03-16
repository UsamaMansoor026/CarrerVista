import React from "react";

const SectionHeading = ({ isCenter, children }) => {
  return (
    <h2 className={`text-[32px] ${isCenter && "text-center"} font-bold `}>
      {children}
    </h2>
  );
};

export default SectionHeading;

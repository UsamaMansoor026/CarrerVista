import React, { useContext } from "react";
import bg from "../assets/hero_bg_2.webp";
import { Link } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";

const PageHeader = ({ title }) => {
  const { handleActiveLink } = useContext(NavigationContext);
  return (
    <section
      className="global-padding text-center h-[250px] relative text-white flex items-center justify-center pt-16"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mask */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="z-50 relative">
        <h2 className="capitalize text-4xl">{title}</h2>

        <p className="flex items-center justify-center gap-4 mt-4">
          <Link
            to="/"
            onClick={() => handleActiveLink("home")}
            className="capitalize text-primary"
          >
            Home
          </Link>{" "}
          <span className="text-grayish-200">{">"}</span>
          <span className="capitalize">{title}</span>
        </p>
      </div>
    </section>
  );
};

export default PageHeader;

import React from "react";
import { Link } from "react-router-dom";
import { NewsLetter } from "./index";

const Footer = () => {
  return (
    <>
      <NewsLetter />
      <footer className="global-padding bg-footerbg text-white py-16 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full overflow-x-hidden">
        {/* For Candidates */}
        <ul className="flex flex-col gap-2">
          <h3 className="text-lg mb-4">For Candidates</h3>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <Link to="/jobs">Browse Jobs</Link>
          </li>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <a href="/">Career Advice</a>
          </li>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <a href="/">Salary Insight</a>
          </li>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* For Employers */}
        <ul className="flex flex-col gap-2">
          <h3 className="text-lg mb-4">For Employers</h3>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <a href="/">Talent Search</a>
          </li>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <a href="/">Career Advice</a>
          </li>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <a href="/">Clients</a>
          </li>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Company */}
        <ul className="flex flex-col gap-2">
          <h3 className="text-lg mb-4">Company</h3>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <Link to="/about">About</Link>
          </li>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <a href="/">FAQs</a>
          </li>
          <li className="font-light text-white/80 duration-200 hover:text-white hover:underline w-[max-content]">
            <a href="/">Terms & Policies</a>
          </li>
        </ul>

        {/* Contact Info */}
        <ul className="flex flex-col gap-2">
          <h3 className="text-lg mb-4">Contact Info</h3>
          <li className="font-light text-white w-[max-content]">
            <span className="mb-1 text-[13px]">Address</span>
            <p className="text-white/80 max-w-[90%] text-[15px]">
              New York - 2398 10 Hadson Carl Street
            </p>
          </li>
          <li className="font-light text-white w-[max-content]">
            <span className="mb-1 text-[13px]">Telephone</span>
            <p className="text-white/80 max-w-[100%] text-[14px]">
              +1 232 305 3930
            </p>
          </li>
          <li className="font-light text-white w-[max-content]">
            <span className="mb-1 text-[13px]">Email</span>
            <p className="text-white/80 max-w-[90%] text-[14px]">
              info@careervista.com
            </p>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;

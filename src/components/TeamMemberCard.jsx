import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

const TeamMemberCard = ({ member, key }) => {
  return (
    <article
      key={key}
      className="group shadow-md shadow-grayish-200 relative
       rounded overflow-hidden duration-300 hover:shadow-2xl"
    >
      <div className="overflow-hidden h-[370px] group-hover:opacity-80 duration-500">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover lg:object-top"
        />
      </div>

      {/* Name and Role */}
      <div className="py-3 px-4 flex flex-col gap-2 text-center">
        <h3 className="text-primary text-xl">{member.name}</h3>
        <h5 className="text-grayish-400">{member.role}</h5>
      </div>

      {/* Social Media Icons */}
      <ul className="absolute -left-[50%] top-0 bottom-0 flex flex-col justify-between py-28 gap-3 bg-white p-5 w-[max-content] duration-500 group-hover:left-0">
        <li className="text-xl text-primary duration-200 hover:text-black">
          <a href={member.instagramHandle} target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li className="text-xl text-primary duration-200 hover:text-black">
          <a href={member.twitterHandle} target="_blank">
            <BsTwitterX />
          </a>
        </li>
        <li className="text-2xl text-primary duration-200 hover:text-black">
          <a href={member.linkedinHandle} target="_blank">
            <CiLinkedin />
          </a>
        </li>
      </ul>
    </article>
  );
};

export default TeamMemberCard;

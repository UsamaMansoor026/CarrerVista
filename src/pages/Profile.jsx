import React from "react";
import { useParams } from "react-router-dom";
import avatar from "../assets/employers/male2.webp";
import { SectionHeading } from "../components";

const Profile = () => {
  const { userid } = useParams();

  /* Here implemented the useEffect that fetches the data of the user and store in some useState */
  return (
    <div className="pt-28 global-padding">
      {/* User avatar and basic info */}
      <div className="flex gap-6">
        <img src={avatar} alt="Maan" className="w-36 aspect-[1] object-cover" />

        {/* Info */}
        <div className="flex flex-col gap-3 py-3">
          <div className="flex items-center gap-2">
            <p className="text-grayish">Name:</p>
            <h3 className="font-semibold text-xl">Maan Mansoor</h3>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-grayish">Email:</p>
            <h3 className="font-semibold text-xl">maan026@gmail.com</h3>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-grayish">Gender:</p>
            <h3 className="font-semibold text-xl">Male</h3>
          </div>
        </div>
      </div>
      {/* Applied Jobs */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold">Applied Jobs:</h2>

        {/* Array of applied jobs mapped here */}
        <div></div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  About,
  ApplyJob,
  Contact,
  Home,
  Jobs,
  PostJob,
  Profile,
  SingleJob,
} from "../pages";

const MyRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/jobs" element={<Jobs />} />
      <Route exact path="/jobs/:id" element={<SingleJob />} />
      <Route exact path="/postjob" element={<PostJob />} />
      <Route exact path="/applyjob/:id" element={<ApplyJob />} />
      <Route exact path="/profile/:userid" element={<Profile />} />
    </Routes>
  );
};

export default MyRoutes;

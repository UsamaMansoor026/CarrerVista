import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";
import { MdMenu, MdClose } from "react-icons/md";
import { Login, Register } from "./index";
import { AnimatePresence, motion } from "framer-motion";
import user from "../assets/employers/male2.webp";

const Navbar = () => {
  const { activeLink, handleActiveLink } = useContext(NavigationContext);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [openMobNav, setOpenMobNav] = useState(false);

  useEffect(() => {
    if (openModalLogin || openModalRegister) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [openModalLogin, openModalRegister]);

  return (
    <>
      <nav className="global-padding py-5 flex items-center justify-between shadow-2xs shadow-grayish-200 border border-transparent fixed w-full bg-white/60 backdrop-blur-xl z-[99999]">
        {/* Logo */}
        <Link
          to="/"
          className="xs:text-xl sm:text-2xl md:text-3xl font-semibold cursor-pointer duration-300 hover:text-primary"
        >
          Career Vista
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-4">
          {/* Nav Links */}
          <ul className="hidden lg:flex items-center gap-4">
            <li>
              <Link
                to="/"
                className={`${
                  activeLink === "home"
                    ? "text-black underline"
                    : "text-grayish"
                } py-3 px-1 text-[17px] duration:200 hover:text-black hover:underline underline-offset-2`}
                onClick={() => handleActiveLink("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  activeLink === "about"
                    ? "text-black underline"
                    : "text-grayish"
                } py-3 px-1 text-[17px] duration:200 hover:text-black hover:underline underline-offset-2`}
                onClick={() => handleActiveLink("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className={`${
                  activeLink === "jobs"
                    ? "text-black underline"
                    : "text-grayish"
                } py-3 px-1 text-[17px] duration:200 hover:text-black hover:underline underline-offset-2`}
                onClick={() => handleActiveLink("jobs")}
              >
                Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`${
                  activeLink === "contact"
                    ? "text-black underline"
                    : "text-grayish"
                } py-3 px-1 text-[17px] duration:200 hover:text-black hover:underline underline-offset-2`}
                onClick={() => handleActiveLink("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {openMobNav && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:hidden fixed w-full h-[100vh] z-[9999] bottom-0 left-0 right-0 top-[73px] bg-white/60 flex justify-end mb-28"
              >
                <motion.ul
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex lg:hidden items-center justify-center flex-col gap-10 bg-white w-[300px]"
                >
                  <li>
                    <Link
                      to="/"
                      className={`${
                        activeLink === "home"
                          ? "text-black underline"
                          : "text-grayish"
                      } py-3 px-1 text-lg duration:200 hover:text-black hover:underline underline-offset-2`}
                      onClick={() => {
                        handleActiveLink("home");
                        setOpenMobNav(!openMobNav);
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={`${
                        activeLink === "about"
                          ? "text-black underline"
                          : "text-grayish"
                      } py-3 px-1 text-lg duration:200 hover:text-black hover:underline underline-offset-2`}
                      onClick={() => {
                        handleActiveLink("about");
                        setOpenMobNav(!openMobNav);
                      }}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jobs"
                      className={`${
                        activeLink === "jobs"
                          ? "text-black underline"
                          : "text-grayish"
                      } py-3 px-1 text-lg duration:200 hover:text-black hover:underline underline-offset-2`}
                      onClick={() => {
                        handleActiveLink("jobs");
                        setOpenMobNav(!openMobNav);
                      }}
                    >
                      Jobs
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contact"
                      className={`${
                        activeLink === "contact"
                          ? "text-black underline"
                          : "text-grayish"
                      } py-3 px-1 text-lg duration:200 hover:text-black hover:underline underline-offset-2`}
                      onClick={() => {
                        handleActiveLink("contact");
                        setOpenMobNav(!openMobNav);
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Call TO Action Button */}
          <div className="flex items-center gap-5">
            {/* User Profile */}
            {/* <div className="flex items-center justify-center gap-3 border border-primary pr-3 rounded relative group">
              <img src={user} alt="Maan" className="w-9 rounded" />
              <span>Maan</span>

              <div className="absolute hidden group-hover:block bg-white top-9 left-0.5 pt-8 pb-4 w-full z-50">
                <div className="flex flex-col gap-2 text-center">
                  <Link
                    to="/profile/32"
                    className="hover:underline"
                    onClick={() => handleActiveLink("profile")}
                  >
                    Profile
                  </Link>
                  <button
                    type="button"
                    className="cursor-pointer hover:underline"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div> */}

            <button
              type="button"
              className="xs:text-[14px] sm:text-base bg-primary border border-primary text-white py-1 sm:py-1.5 px-3 sm:px-6 rounded cursor-pointer duration-100 hover:bg-white hover:text-primary hover:border-white hover:shadow-md hover:shadow-white"
              onClick={() => setOpenModalLogin(true)}
            >
              Sign In
            </button>

            {/* Hamburger Menu */}
            <div
              className="block lg:hidden"
              onClick={() => setOpenMobNav(!openMobNav)}
            >
              {openMobNav ? (
                <MdClose className="text-3xl text-primary cursor-pointer" />
              ) : (
                <MdMenu className="text-3xl text-primary cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      {openModalLogin && (
        <div className="fixed bg-white inset-0 w-full h-[100vh] z-[9999999] flex items-center justify-center">
          <Login
            setOpenModalLogin={setOpenModalLogin}
            setOpenModalRegister={setOpenModalRegister}
          />
        </div>
      )}

      {openModalRegister && (
        <div className="fixed bg-white inset-0 w-full h-[100vh] z-[9999999] flex items-center justify-center">
          <Register
            setOpenModalRegister={setOpenModalRegister}
            setOpenModalLogin={setOpenModalLogin}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;

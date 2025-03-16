import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ setOpenModalLogin, setOpenModalRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="form p-4 rounded-2xl border border-primary w-full xs:max-w-[95%] sm:max-w-[450px] mx-auto">
      <h3 className="relative text-center font-semibold text-xl">
        Welcome back to <br /> Career Vista
        <span
          className="absolute right-2 top-1 cursor-pointer text-primary font-semibold text-xl"
          onClick={() => setOpenModalLogin(false)}
        >
          X
        </span>
      </h3>
      <hr className="h-[1px] border-none w-full max-w-[80%] bg-primary mx-auto my-3" />

      {/* Input Field Email */}
      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="email" className="text-grayish-400">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          required
          className="border border-primary outline-none px-3 py-2 focus:shadow-sm shadow-primary rounded-md"
        />
      </div>

      {/* Input Field Password */}
      <div className="flex flex-col gap-1 mb-3 relative">
        <label htmlFor="password" className="text-grayish-400">
          Password:
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="********"
          required
          className="border border-primary outline-none px-3 py-2 focus:shadow-sm shadow-primary rounded-md"
        />
        <span
          className="absolute top-[58%] right-2 text-primary cursor-pointer text-lg"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full py-2 bg-primary text-white text-xl font-semibold cursor-pointer hover:shadow-sm shadow-primary rounded-md"
      >
        Login
      </button>

      <p className="mt-3 text-grayish-400">
        Don't have an account?{" "}
        <span
          className="underline text-primary cursor-pointer"
          onClick={() => {
            setOpenModalRegister(true);
            setOpenModalLogin(false);
          }}
        >
          Register
        </span>
      </p>
    </form>
  );
};

export default Login;

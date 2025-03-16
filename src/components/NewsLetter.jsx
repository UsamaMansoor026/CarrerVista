import React from "react";

const NewsLetter = () => {
  return (
    <section className="global-padding mt-16 bg-primary py-16">
      <h2 className="text-[32px] text-white font-bold mb-3">
        Subscribe Newsletter
      </h2>

      <form className="flex xs:flex-col sm:flex-row items-center justify-between gap-5">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          required
          className="xs:w-full sm:w-[75%] md:w-[80%] bg-white text-black border-none outline-none caret-primary py-2 px-4 rounded"
        />
        <button
          type="submit"
          className="xs:w-full sm:w-[25%] md:w-[20%] bg-black text-white py-2 cursor-pointer rounded"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;

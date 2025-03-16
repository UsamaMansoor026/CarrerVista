import React, { useState } from "react";
import { faqs } from "../assets";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const Faqs = () => {
  const [open, setOpen] = useState("1");
  const handleOpen = (index) => {
    setOpen(index);
  };
  return (
    <div className="mt-10">
      {faqs.map((faq) => (
        <article
          key={faq.id}
          onClick={() => handleOpen(faq.id)}
          className="bg-white shadow-md p-6 rounded-lg cursor-pointer mb-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="xs:w-[95%] sm:w-[80%] font-semibold text-xl">
              {faq.question}
            </h4>
            <span className="w-[max-content] text-xl">
              {open === faq.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>

          <AnimatePresence>
            {open === faq.id && (
              <motion.p
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="-z-10 text-grayish-500 leading-[1.8] mt-2 xs:max-w-[98%] sm:max-w-[80%]"
              >
                {faq.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </article>
      ))}
    </div>
  );
};

export default Faqs;

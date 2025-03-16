import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./index";
import { whyus } from "../assets";

const WhyUs = () => {
  /* Delay in the animation is depend on the window size */
  const [delay, setDelay] = useState(window.innerWidth < 768 ? 0 : 0.3);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        setDelay(0);
      } else if (window.innerWidth < 1024) {
        setDelay(0.1);
      } else {
        setDelay(0.3);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [window.innerWidth]);

  return (
    <section className="global-padding my-24">
      <SectionHeading isCenter={true}>Why Career Vista</SectionHeading>

      {/* Why US data */}
      <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyus?.length > 0 &&
          whyus.map((item) => (
            <motion.article
              initial={{ x: -130, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: item.id * delay }}
              key={item.id}
              className="border border-grayish-200 p-8 duration-200 hover:shadow-md hover:shadow-grayish-400"
            >
              {/* Icon and heading */}
              <div className="flex items-center gap-8 mb-4 min-h-[70px]">
                <item.icon className="w-[30px] h-[30px] text-grayish-200" />
                <h3 className="xs:text-[26px] sm:text-2xl text-grayish-500 font-semibold">
                  {item.heading}
                </h3>
              </div>

              <div className="text-grayish-400 xs:text-[19px] md:text-base">
                <p>{item.desc}</p>
              </div>
            </motion.article>
          ))}
      </div>
    </section>
  );
};

export default WhyUs;

import React, { useState, useEffect } from "react";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = data.length; // Get total slides

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  /* const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }; */

  return (
    <div className="relative w-full">
      <div className="relative xs:h-80 sm:h-96 overflow-hidden rounded-lg">
        {data.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 py-10 flex flex-col items-center justify-start transition-all duration-1000 ease-in-out ${
              index === activeIndex
                ? "translate-x-[0%] opacity-100"
                : index < activeIndex
                ? "-translate-x-[100%] opacity-0"
                : "translate-x-[100%] opacity-0"
            }`}
          >
            {/* Avatar */}
            <div className="mb-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-[90px] h-[90px] rounded-full"
              />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-lg">{item.name}</h3>

              <p className="text-grayish-400 mb-3">
                {item.role}, {item.company}
              </p>

              <p className="text-grayish-500 xs:text-[15px] sm:text-lg xs:max-w-[84%] md:max-w-[78%] lg:max-w-[70%] mx-auto">
                {item.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots (Indicators) */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-0 left-1/2 space-x-3">
        {data.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer ${
              index === activeIndex ? "bg-primary" : "bg-grayish-200"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* <button
        onClick={prevSlide}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 group-hover:bg-black/70">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      
      <button
        onClick={nextSlide}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 group-hover:bg-black/70">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button> */}
    </div>
  );
};

export default Carousel;

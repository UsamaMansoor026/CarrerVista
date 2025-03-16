import React, { useState } from "react";

const ReviewForm = () => {
  const [selectedRating, setSelectedRating] = useState("");

  const options = [
    {
      label: "very bad",
      emoji: "😡",
    },
    {
      label: "bad",
      emoji: "😞",
    },
    {
      label: "satisfy",
      emoji: "😐",
    },
    {
      label: "good",
      emoji: "🙂",
    },
    {
      label: "very good",
      emoji: "😍",
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between gap-6 mt-7">
        {options.map((option, index) => (
          <button
            key={index}
            className={`flex flex-col gap-1 w-full p-2 text-xl cursor-pointer border border-grayish-200 rounded-md 
                    transition-all duration-300 
                    ${
                      selectedRating === option.label
                        ? "bg-primary border-primary text-white"
                        : "bg-transparent"
                    }
                  `}
            onClick={() => setSelectedRating(option.label)}
          >
            <span>{option.emoji}</span>
            <span className="capitalize text-[12px] xs:hidden md:block">
              {option.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <textarea
          className="w-full border border-grayish-200 rounded-md p-2 focus:outline-none  focus:border-primary outline-none"
          rows="4"
          placeholder="Write your review here..."
        />

        <button className="mt-4 w-full text-[17px] font-semibold cursor-pointer bg-primary text-white py-2 rounded-md hover:bg-transparent hover:text-primary border border-primary transition-all duration-300 hover:shadow-md hover:shadow-primary">
          Submit Review
        </button>
      </div>
    </section>
  );
};

export default ReviewForm;

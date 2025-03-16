import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
      {/* Input Field Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-semibold text-grayish">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Maan Mansoor"
          required
          onChange={handleChange}
          value={formData.name}
          className="border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      {/* Input Fields Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold text-grayish">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          required
          onChange={handleChange}
          value={formData.email}
          className="border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      {/* Input Fields Subject */}
      <div className="flex flex-col gap-1">
        <label htmlFor="subject" className="font-semibold text-grayish">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          onChange={handleChange}
          value={formData.subject}
          placeholder="Enter Subject"
          required
          className="border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      {/* Input Fields Message */}
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-semibold text-grayish">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Say hello to us"
          required
          onChange={handleChange}
          value={formData.message}
          className="border border-grayish rounded outline-none py-2 px-3 focus:ring-2 focus:ring-primary focus:border-transparent min-h-[180px]"
        />
      </div>

      {/* submit button */}
      <div>
        <button
          type="submit"
          className="bg-primary text-white border border-primary rounded py-2 px-14 cursor-pointer hover:bg-transparent hover:text-primary hover:shadow-md hover:shadow-primary transition-all duration-300 font-semibold text-[17px]"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

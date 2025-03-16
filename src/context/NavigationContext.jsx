import { createContext, useState } from "react";

export const NavigationContext = createContext("home");

export const NavigationContextProvider = ({ children }) => {
  const [activeLink, setLink] = useState("home");

  const handleActiveLink = (link) => {
    setLink(link);
  };

  const setCategoryBgColor = (category) => {
    switch (category) {
      case "full time":
        return "bg-purplish";
      case "part time":
        return "bg-yellowish";
      case "temporary":
        return "bg-redish";
      case "internship":
        return "bg-grayish-400";
      case "freelance":
        return "bg-orangish";
      default:
        return "bg-grayish-200";
    }
  };

  return (
    <NavigationContext.Provider
      value={{ activeLink, handleActiveLink, setCategoryBgColor }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

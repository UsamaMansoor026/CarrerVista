import React from "react";
import { Footer, Navbar } from "./components";
import MyRoutes from "./routes/MyRoutes";

const App = () => {
  return (
    <>
      <Navbar />

      <MyRoutes />
      <Footer />
    </>
  );
};

export default App;

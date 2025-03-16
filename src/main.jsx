import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationContextProvider } from "./context/NavigationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <NavigationContextProvider>
        <App />
      </NavigationContextProvider>
    </Router>
  </StrictMode>
);

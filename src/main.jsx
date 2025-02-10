import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import AppSubdomain from "./AppSubdomain.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function Root() {
  // Check the subdomain
  const { hostname } = window.location;
  const isAppSubdomain = hostname.startsWith("app.");

  if (isAppSubdomain) {
    // Return the app subdomain (protected routes)
    return (
      <>
        <AppSubdomain />
      </>
    );
  } else {
    // Return the main site routes
    return (
      <>
        <App />
      </>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Root />
    </Router>
  </StrictMode>
);

//
import { useState } from "react";
import reactLogo from "./assets/logo.svg";
import logo from "/logo.svg";
import { Routes, Route } from "react-router-dom";

// CSS
import "./css/brand.css";
import "./css/App.css";
//  Pages
// App Components
import Dashboard from "./pages/App/Dashboard";
import RouteCast from "./pages/App/RouteCast";
import Settings from "./pages/App/Settings";
import Upgrade from "./pages/App/Upgrade";

// Auth Components
import Login from "./pages/Auth/Login";
import Reset from "./pages/Auth/Reset";
import Signup from "./pages/Auth/Signup";

// Blog Component
import Blog from "./pages/Blog/Blog";

// Home Components
import About from "./pages/Home/About";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Home/Pricing";

// Legal Components
import Legal from "./pages/Legal/Legal";
import Terms from "./pages/Legal/Terms";

// Marketing Components
import Brand from "./pages/Marketing/Brand";
import Press from "./pages/Marketing/Press";

// Product Components
import Features from "./pages/Product/Features";
import Roadmap from "./pages/Product/Roadmap";
import Support from "./pages/Product/Support";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";


// Utils
import RedirectToSubdomain from "./utils/RedirectToSubdomain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        {/* App Routes */}
        {/* 🚀 Always Redirect These Routes to the Subdomain */}
        <Route
          path="/dashboard"
          element={<RedirectToSubdomain path="/dashboard" />}
        />
        <Route
          path="/routecast"
          element={<RedirectToSubdomain path="/routecast" />}
        />
        <Route
          path="/settings"
          element={<RedirectToSubdomain path="/settings" />}
        />
        <Route
          path="/upgrade"
          element={<RedirectToSubdomain path="/upgrade" />}
        />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/signup" element={<Signup />} />

        {/* Blog Route */}
        <Route path="/blog" element={<Blog />} />

        {/* Home Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Legal Routes */}
        <Route path="/legal" element={<Legal />} />
        <Route path="/terms" element={<Terms />} />

        {/* Marketing Routes */}
        <Route path="/brand" element={<Brand />} />
        <Route path="/press" element={<Press />} />

        {/* Product Routes */}
        <Route path="/features" element={<Features />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

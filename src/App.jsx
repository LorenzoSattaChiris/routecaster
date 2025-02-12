//
import { useState } from "react";
import { lazy } from "react";
import reactLogo from "./assets/logo.svg";
import logo from "/logo.svg";
import { Routes, Route } from "react-router-dom";

// CSS
import "./css/brand.css";
import "./css/App.css";
//  Pages
// Auth Components
import Login from "./pages/Auth/Login";
import Reset from "./pages/Auth/Reset";
import Signup from "./pages/Auth/Signup";

const Blog = lazy(() => import("./pages/Blog/Blog"));
const Docs = lazy(() => import("./pages/Docs/Docs"));

// Home Components
import About from "./pages/Home/About";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Home/Pricing";
import Contact from "./pages/Home/Contact";

// Legal Components
const Privacy = lazy(() => import("./pages/Legal/Privacy"));
const Cookies = lazy(() => import("./pages/Legal/Cookies"));
const Terms = lazy(() => import("./pages/Legal/Terms"));

// Marketing Components
import Brand from "./pages/Marketing/Brand";
import Press from "./pages/Marketing/Press";
import Affiliate from "./pages/Marketing/Affiliate";
import Careers from "./pages/Marketing/Careers";
import CaseStudies from "./pages/Marketing/CaseStudies";
import Referral from "./pages/Marketing/Referral";

// Product Components
import Demo from "./pages/Product/Demo";
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
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-1">
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

          {/* Docs Route */}
          <Route path="/docs" element={<Docs />} />

          {/* Home Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legal Routes */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms" element={<Terms />} />

          {/* Marketing Routes */}
          <Route path="/brand" element={<Brand />} />
          <Route path="/press" element={<Press />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/referral" element={<Referral />} />

          {/* Product Routes */}
          <Route path="/demo" element={<Demo />} />
          <Route path="/features" element={<Features />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

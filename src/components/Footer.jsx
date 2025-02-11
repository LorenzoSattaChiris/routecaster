import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-gray-800 text-white">
      <div className="mx-auto max-w-screen-xl flex flex-wrap justify-center md:justify-around items-start p-4">
        <div className="m-2 min-w-[120px] text-center md:text-left">
          <h4 className="font-semibold mb-2 text-orange-400">Main</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-orange-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-300 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-orange-300 transition-colors"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="m-2 min-w-[120px] text-center md:text-left">
          <h4 className="font-semibold mb-2 text-orange-400">Auth</h4>
          <ul className="space-y-1">
            <li>
              <Link
                to="/login"
                className="hover:text-orange-300 transition-colors"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="hover:text-orange-300 transition-colors"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="/reset"
                className="hover:text-orange-300 transition-colors"
              >
                Reset Password
              </Link>
            </li>
          </ul>
        </div>

        <div className="m-2 min-w-[120px] text-center md:text-left">
          <h4 className="font-semibold mb-2 text-orange-400">App</h4>
          <ul className="space-y-1">
            <li>
              <Link
                to="/dashboard"
                className="hover:text-orange-300 transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/routecast"
                className="hover:text-orange-300 transition-colors"
              >
                RouteCast Tool
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="hover:text-orange-300 transition-colors"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/upgrade"
                className="hover:text-orange-300 transition-colors"
              >
                Upgrade
              </Link>
            </li>
          </ul>
        </div>

        <div className="m-2 min-w-[120px] text-center md:text-left">
          <h4 className="font-semibold mb-2 text-orange-400">Connect</h4>
          <ul className="space-y-1">
            <li>
              <Link
                to="/contact"
                className="hover:text-orange-300 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="hover:text-orange-300 transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Socials />
            </li>
          </ul>
        </div>

        <div className="m-2 min-w-[120px] text-center md:text-left">
          <h4 className="font-semibold mb-2 text-orange-400">Legal</h4>
          <ul className="space-y-1">
            <li>
              <Link
                to="/privacy"
                className="hover:text-orange-300 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/cookies"
                className="hover:text-orange-300 transition-colors"
              >
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-orange-300 transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="m-2 min-w-[120px] text-center md:text-left">
          <h4 className="font-semibold mb-2 text-orange-400">Resources</h4>
          <ul className="space-y-1">
          <li>
              <Link
                to="/docs"
                className="hover:text-orange-300 transition-colors"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-orange-300 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/brand"
                className="hover:text-orange-300 transition-colors"
              >
                Brand Assets
              </Link>
            </li>
            <li>
              <Link
                to="/press"
                className="hover:text-orange-300 transition-colors"
              >
                Press Kit
              </Link>
            </li>
          </ul>
        </div>

        <div className="m-2 min-w-[120px] text-center md:text-left">
          <h4 className="font-semibold mb-2 text-orange-400">Product</h4>
          <ul className="space-y-1">
            <li>
              <Link
                to="/features"
                className="hover:text-orange-300 transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/roadmap"
                className="hover:text-orange-300 transition-colors"
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                to="/casestudies"
                className="hover:text-orange-300 transition-colors"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                to="/referral"
                className="hover:text-orange-300 transition-colors"
              >
                Referral
              </Link>
            </li>
            <li>
              <Link
                to="/affiliate"
                className="hover:text-orange-300 transition-colors"
              >
                Affiliate
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="hover:text-orange-300 transition-colors"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-2">
        <p className="text-sm">
          © {new Date().getFullYear()} RouteCaster. All rights reserved. Made
          for Entrepreneurship 2 at the University of Exeter.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

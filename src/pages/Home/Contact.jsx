import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formValues, setFormValues] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated contact logic. Replace with your real functionality.
    alert("Sending message... [SIMULATED AT THE MOMENT - NO REAL ACTION]");
  };

  return (
    <>
      <Helmet>
        <title>RouteCaster | Contact</title>
        <meta
          name="description"
          content="Contact RouteCaster, the number #1 platform for AI-powered route optimisation."
        />
        <meta property="og:title" content="RouteCaster | Contact" />
        <meta
          property="og:description"
          content="Contact RouteCaster, the number #1 platform for AI-powered route optimisation."
        />
        <meta property="og:url" content="https://www.routecaster.com/contact" />
        <link rel="canonical" href="https://www.routecaster.com/contact" />
        <meta name="twitter:title" content="RouteCaster | Contact" />
        <meta
          name="twitter:description"
          content="Contact RouteCaster, the number #1 platform for AI-powered route optimisation."
        />
      </Helmet>
      <div className="relative bg-gray-900 min-h-screen flex flex-col items-center justify-center text-gray-200 p-4">
        {/* Contact Overlay */}
        <div className="relative z-10 w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-indigo-500 transition hover:bg-gray-600 duration-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formValues.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-indigo-500 transition hover:bg-gray-600 duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 cursor-pointer transform hover:scale-105 rounded font-bold transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
        {/* Below overlay: Alternative contact link */}
        <div className="absolute bottom-10 text-center w-full">
          <p className="text-lg text-gray-300">
            Or write to{" "}
            <a
              href="mailto:contact@routecaster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              contact@routecaster.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;

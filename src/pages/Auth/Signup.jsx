import React, { useState } from "react";
import Ship from "../../components/Ship";

const Signup = () => {
  // Form state for name, email, password, and confirmation.
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // NEW: Add the sailAway state
  const [sailAway, setSailAway] = useState(false);

  const totalInputLength =
    formValues.name.length +
    formValues.email.length +
    formValues.password.length +
    formValues.confirmPassword.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Signing Up... [SIMULATED AT THE MOMENT - NO REAL ACTION]");
    // NEW: Trigger the ship sail-away animation
    setSailAway(true);
  };

  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center justify-center text-gray-200">
      <div className="relative z-10 w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-indigo-500 transition hover:bg-gray-600 duration-300"
            />
          </div>
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
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-indigo-500 transition hover:bg-gray-600 duration-300"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-indigo-500 transition hover:bg-gray-600 duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 cursor-pointer transform hover:scale-105 rounded font-bold transition duration-300"
          >
            Sign Up
          </button>
        </form>
        {/* Render the Ship component just under the overlay */}
        <Ship inputLength={totalInputLength} sailAway={sailAway} />
      </div>
    </div>
  );
};

export default Signup;

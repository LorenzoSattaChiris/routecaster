import React, { useState } from "react";
import Ship from "../../components/Ship";

const Reset = () => {
  // Single input field for the email.
  const [email, setEmail] = useState("");
  // NEW: Add the sailAway state
  const [sailAway, setSailAway] = useState(false);
  
  const totalInputLength = email.length;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sending Reset Link... [SIMULATED AT THE MOMENT - NO REAL ACTION]");
    // NEW: Trigger the ship sail-away animation
    setSailAway(true);
  };

  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center justify-center text-gray-200">
      <div className="relative z-10 w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Enter your email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-indigo-500 transition hover:bg-gray-600 duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 cursor-pointer transform hover:scale-105 rounded font-bold transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
        {/* Modified: Pass the sailAway flag instead of false */}
        <Ship inputLength={totalInputLength} sailAway={sailAway} />
      </div>
    </div>
  );
};

export default Reset;

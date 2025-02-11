import React, { useState } from "react";
import Ship from "../../components/Ship";

const Login = () => {
  // Maintain form state for email and password.
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [sailAway, setSailAway] = useState(false);
  const totalInputLength = formValues.email.length + formValues.password.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated authentication logic.
    alert("Loggin in... [SIMULATED AT THE MOMENT - NO REAL ACTION]");
    setSailAway(true);
  };

  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center justify-center text-gray-200">
      <div className="relative z-10 w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
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
            <label htmlFor="password" className="block text-sm font-medium mb-1">
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
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 cursor-pointer transform hover:scale-105 rounded font-bold transition duration-300"
          >
            Login
          </button>
        </form>
        {/* Render the Ship component just under the overlay */}
        <Ship inputLength={totalInputLength} sailAway={sailAway} />
      </div>
    </div>
  );
};

export default Login;

import React from "react";

const Affiliate = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">Affiliate Program</h1>
          <p className="text-xl text-indigo-300 mt-2">
            Join our Affiliate Program and earn rewards by promoting RouteCaster.
          </p>
        </header>
        {/* Coming Soon Message */}
        <section className="text-center">
          <p className="text-3xl font-bold animate-pulse">
            Coming Soon! Stay Tuned.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Affiliate;

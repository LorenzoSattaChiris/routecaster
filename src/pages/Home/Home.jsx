import React, { useState, useEffect, useMemo } from "react";
import { FiFileText } from "react-icons/fi";

// --- QuotesCarousel Component with Fade Animation ---
const QuotesCarousel = () => {
  const quotes = [
    { id: 1, text: "RouteCaster has transformed our shipping operations, delivering real-time optimizations that save us time and money.", author: "Alex, Logistics Manager" },
    { id: 2, text: "The cost savings and efficiency improvements we’ve seen are truly groundbreaking. RouteCaster is a game changer.", author: "Jamie, Fleet Director" },
    { id: 3, text: "With RouteCaster, our operations have never been smoother. It’s the future of maritime logistics.", author: "Morgan, Operations Lead" },
    { id: 4, text: "Efficiency, sustainability, and cost reduction - RouteCaster delivers on every promise.", author: "Taylor, CEO" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      {/* The key property forces re-mount to trigger the animation */}
      <div key={currentIndex} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out animate-fadeIn mx-auto max-w-md">
        <p className="italic text-gray-300">{quotes[currentIndex].text}</p>
        <p className="mt-4 font-bold text-center">- {quotes[currentIndex].author}</p>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={handlePrev}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

// --- BenefitMinigame Component with Arrow Override, Wave Effect, and Fixed Hotspots ---
const BenefitMinigame = () => {
  const containerWidth = 600; // fixed dimensions for simplicity
  const containerHeight = 400;
  const [boatPos, setBoatPos] = useState({ x: 50, y: 180 });
  const [tooltip, setTooltip] = useState(null);
  const [waveOffset, setWaveOffset] = useState({ x: 0, y: 0 });

  // Memoize hotspots so the dependency does not change on every render
  const hotspots = useMemo(() => [
    { id: 1, label: "Reduced Costs", tooltip: "Save up to 25% on fuel and operational expenses.", x: 100, y: 50 },
    { id: 2, label: "Real-Time Data", tooltip: "Live updates that help you adapt instantly.", x: 400, y: 100 },
    { id: 3, label: "Sustainability", tooltip: "Eco-friendly routing that lowers your carbon footprint.", x: 250, y: 300 }
  ], []);

  const handleKeyDown = (e) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
    }
    setBoatPos((prev) => {
      let { x, y } = prev;
      const step = 10;
      if (e.key === "ArrowUp") y = Math.max(0, y - step);
      if (e.key === "ArrowDown") y = Math.min(containerHeight - 40, y + step);
      if (e.key === "ArrowLeft") x = Math.max(0, x - step);
      if (e.key === "ArrowRight") x = Math.min(containerWidth - 40, x + step);
      return { x, y };
    });
  };

  useEffect(() => {
    const hit = hotspots.find((h) => {
      const dist = Math.sqrt((boatPos.x - h.x) ** 2 + (boatPos.y - h.y) ** 2);
      return dist < 30;
    });
    if (hit) {
      // Apply wave effect offset
      setWaveOffset({ x: 5, y: 5 });
      setTimeout(() => {
        setWaveOffset({ x: 0, y: 0 });
      }, 300);
      setTooltip(hit.tooltip);
    } else {
      setTooltip(null);
    }
  }, [boatPos, hotspots]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative bg-blue-200 rounded-lg shadow-lg mx-auto" style={{ width: containerWidth, height: containerHeight }}>
      {hotspots.map((spot) => (
        <div
          key={spot.id}
          className="absolute rounded-full border border-white"
          style={{
            width: 40,
            height: 40,
            left: spot.x,
            top: spot.y,
            backgroundColor: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(4px)"
          }}
        ></div>
      ))}
      <div
        className="absolute"
        style={{
          width: 40,
          height: 40,
          left: boatPos.x + waveOffset.x,
          top: boatPos.y + waveOffset.y,
          transition: "all 0.2s ease-out"
        }}
      >
        <span role="img" aria-label="boat" className="text-3xl">⛵</span>
      </div>
      {tooltip && (
        <div className="absolute bg-gray-800 text-white text-sm p-2 rounded shadow-lg" style={{ left: boatPos.x + 50, top: boatPos.y }}>
          {tooltip}
        </div>
      )}
      <p className="absolute bottom-2 left-2 text-gray-700 text-xs">Use arrow keys to navigate your boat</p>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInDown">
            Welcome to RouteCaster
          </h1>
          <p className="text-xl md:text-2xl text-indigo-300 mt-2 animate-fadeInUp">
            Revolutionizing Maritime Logistics with AI-Powered Route Optimization
          </p>
          <a
            href="/signup"
            className="inline-block bg-indigo-500 hover:bg-indigo-700 transition duration-300 text-white font-bold py-3 px-8 rounded-full animate-bounce cursor-pointer mt-8"
          >
            Get Started Today
          </a>
        </section>

        {/* Big Impressive Numbers Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
              <p className="text-5xl font-extrabold text-indigo-500">10,000+</p>
              <p className="mt-2 text-xl">Routes Optimized</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
              <p className="text-5xl font-extrabold text-indigo-500">25%</p>
              <p className="mt-2 text-xl">Cost Reduction</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
              <p className="text-5xl font-extrabold text-indigo-500">500+</p>
              <p className="mt-2 text-xl">Satisfied Clients</p>
            </div>
          </div>
        </section>

        {/* Innovative Benefits Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Why Choose RouteCaster?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Real-Time Optimization</h3>
              <p className="mb-4 text-gray-300">
                Our AI continuously adapts routes based on live data, ensuring maximum efficiency and cost savings.
              </p>
              <a
                href="/features"
                className="inline-block bg-indigo-500 hover:bg-indigo-700 transition duration-300 text-white font-bold py-2 px-4 rounded cursor-pointer"
              >
                Learn More
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Sustainable Solutions</h3>
              <p className="mb-4 text-gray-300">
                Reduce your carbon footprint with eco-friendly routing that adapts to environmental conditions.
              </p>
              <a
                href="/features"
                className="inline-block bg-indigo-500 hover:bg-indigo-700 transition duration-300 text-white font-bold py-2 px-4 rounded cursor-pointer"
              >
                Discover How
              </a>
            </div>
          </div>
        </section>

        {/* Interactive Quotes Section (Carousel) */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="max-w-md mx-auto">
            <QuotesCarousel />
          </div>
        </section>

        {/* Benefit Minigame Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Discover Our Benefits</h2>
          <p className="text-center text-gray-300 mb-4">
            Use your arrow keys to navigate your boat over our benefits markers!
          </p>
          <BenefitMinigame />
        </section>

        {/* Other Impactful Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Technology at Work</h2>
          <p className="text-lg text-gray-300">
            Our state-of-the-art platform integrates cutting-edge AI, real-time data, and robust analytics to deliver unparalleled routing performance. Experience a new era of shipping efficiency that empowers your business to achieve more.
          </p>
        </section>

        {/* Final CTA Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
          <a
            href="/contact"
            className="inline-block bg-indigo-500 hover:bg-indigo-700 cursor-pointer text-white font-bold py-4 px-10 rounded-full transition duration-300 text-2xl"
          >
            Get Started Today
          </a>
        </section>
      </div>
    </div>
  );
};

export default Home;

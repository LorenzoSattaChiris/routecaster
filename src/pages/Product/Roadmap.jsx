import React from "react";
import { Helmet } from "react-helmet";

const Roadmap = () => {
  return (
    <>
      <Helmet>
        <title>RouteCaster | Roadmap</title>
        <meta
          name="description"
          content="Explore the future developments and plans for RouteCaster."
        />
        <meta property="og:title" content="RouteCaster | Roadmap" />
        <meta
          property="og:description"
          content="Explore the future developments and plans for RouteCaster."
        />
        <meta property="og:url" content="https://www.routecaster.com/roadmap" />
        <link rel="canonical" href="https://www.routecaster.com/roadmap" />
        <meta name="twitter:title" content="RouteCaster | Roadmap" />
        <meta
          name="twitter:description"
          content="Explore the future developments and plans for RouteCaster."
        />
      </Helmet>
      <div className="bg-gray-900 min-h-screen text-gray-200">
        <div className="container mx-auto px-4 py-12">
          {/* Engaging Initial Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold">Our Roadmap</h1>
            <p className="text-xl text-indigo-300 mt-2">
              A journey of innovation and excellence—transforming shipping
              logistics.
            </p>
          </section>

          {/* Timeline Section */}
          <section className="mb-12 relative">
            <div className="relative">
              {/* Timeline line via SVG. 
                This path starts at the left, moves to the right, curves downward, then to the left, curves down, and ends at the right. */}
              <svg
                className="absolute left-0 top-0 w-full h-full pointer-events-none"
                viewBox="0 0 1000 600"
              >
                <path
                  d="M50,50 C300,50 300,150 550,150 S800,250 950,250
                   C800,250 800,350 550,350 S300,450 50,450"
                  stroke="#4F46E5"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
              <div className="space-y-12 relative">
                {/* Timeline event 1 (left aligned) */}
                <div className="relative pl-8">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-indigo-500 rounded-full"></div>
                  <h3 className="text-xl font-bold">Prototype & Design</h3>
                  <p className="text-gray-300">
                    Launched our initial prototype with a fully responsive
                    design, ensuring a seamless experience across all devices.
                    <br />
                    <span className="font-semibold">
                      27/01/2025 – 13/02/2025
                    </span>
                  </p>
                </div>
                {/* Timeline event 2 (right aligned) */}
                <div className="relative pr-8 text-right">
                  <div className="absolute -right-4 top-0 w-8 h-8 bg-indigo-500 rounded-full"></div>
                  <h3 className="text-xl font-bold">
                    Design & Branding Integration
                  </h3>
                  <p className="text-gray-300">
                    Integrated a cohesive brand identity and visual design to
                    build customer trust and engagement.
                    <br />
                    <span className="font-semibold">
                      03/02/2025 – 13/02/2025
                    </span>
                  </p>
                </div>
                {/* Timeline event 3 (left aligned) */}
                <div className="relative pl-8">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-indigo-500 rounded-full"></div>
                  <h3 className="text-xl font-bold">
                    Customer Validation & Iteration
                  </h3>
                  <p className="text-gray-300">
                    Incorporated early customer insights to refine performance,
                    usability, and efficiency.
                    <br />
                    <span className="font-semibold">
                      10/02/2025 – 13/03/2025
                    </span>
                  </p>
                </div>
                {/* Timeline event 4 (right aligned) */}
                <div className="relative pr-8 text-right">
                  <div className="absolute -right-4 top-0 w-8 h-8 bg-indigo-500 rounded-full"></div>
                  <h3 className="text-xl font-bold">Final Production Launch</h3>
                  <p className="text-gray-300">
                    Delivered a robust, market-ready solution with comprehensive
                    support and documentation.
                    <br />
                    <span className="font-semibold">
                      17/02/2025 – 13/03/2025
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Clear CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Shipping?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="/pricing"
                className="inline-block bg-indigo-500 hover:bg-indigo-700 cursor-pointer text-white font-bold py-3 px-8 rounded transition duration-300 text-xl"
              >
                View Pricing
              </a>
              <a
                href="/contact"
                className="inline-block bg-gray-700 hover:bg-gray-600 cursor-pointer text-white font-bold py-3 px-8 rounded transition duration-300 text-xl"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Roadmap;

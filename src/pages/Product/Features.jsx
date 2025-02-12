import React from "react";
import { Helmet } from "react-helmet";

const Features = () => {
  return (
    <>
      <Helmet>
        <title>RouteCaster | Features</title>
        <meta
          name="description"
          content="Discover the cutting-edge features that make RouteCaster the industry leader in route optimisation."
        />
        <meta property="og:title" content="RouteCaster | Features" />
        <meta
          property="og:description"
          content="Discover the cutting-edge features that make RouteCaster the industry leader in route optimisation."
        />
        <meta
          property="og:url"
          content="https://www.routecaster.com/features"
        />
        <link rel="canonical" href="https://www.routecaster.com/features" />
        <meta name="twitter:title" content="RouteCaster | Features" />
        <meta
          name="twitter:description"
          content="Discover the cutting-edge features that make RouteCaster the industry leader in route optimisation."
        />
      </Helmet>
      <div className="bg-gray-900 min-h-screen text-gray-200">
        <div className="container mx-auto px-4 py-12">
          {/* Engaging Initial Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold">
              Discover Our Revolutionary Approach
            </h1>
            <p className="text-xl text-indigo-300 mt-2">
              Empowering your shipping operations with cutting-edge AI and
              sustainable solutions.
            </p>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Our Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
                <h3 className="text-xl font-bold mb-2">Cost Efficiency</h3>
                <p>
                  Reduce operational expenses with optimized routing that saves
                  fuel and time.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p>
                  Minimize your carbon footprint with eco-friendly routes that
                  adapt in real-time.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
                <h3 className="text-xl font-bold mb-2">Real-Time Analytics</h3>
                <p>
                  Leverage advanced AI to monitor, predict, and adjust routes
                  dynamically.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Features Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Technical Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
                <h3 className="text-xl font-bold mb-2">
                  AI-Powered Optimization
                </h3>
                <p>
                  Harness machine learning algorithms for the best possible
                  routing strategies.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
                <h3 className="text-xl font-bold mb-2">
                  Real-Time Data Integration
                </h3>
                <p>
                  Integrate live weather, traffic, and maritime data to adjust
                  routes instantly.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
                <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
                <p>
                  Forecast potential delays and optimize logistics with
                  proactive insights.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
                <h3 className="text-xl font-bold mb-2">Sustainable Routing</h3>
                <p>
                  Focus on eco-friendly practices with solutions designed to
                  reduce emissions.
                </p>
              </div>
            </div>
          </section>

          {/* Why We Are Better Section */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Why We Stand Out</h2>
            <p className="max-w-3xl mx-auto">
              RouteCaster is not just about optimizing routes – it’s about
              revolutionizing your entire shipping operation. Our AI-driven
              solution seamlessly integrates real-time data and sustainable
              practices to deliver unmatched cost savings, advanced analytics,
              and a future-proof strategy for maritime logistics.
            </p>
          </section>

          {/* Competitors Table Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Competitor Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-2 border border-gray-700 text-left">
                      Feature
                    </th>
                    <th className="px-4 py-2 border border-gray-700 text-left">
                      CargoRouter
                    </th>
                    <th className="px-4 py-2 border border-gray-700 text-left">
                      SeaRates
                    </th>
                    <th className="px-4 py-2 border border-gray-700 text-left">
                      Sinay
                    </th>
                    <th className="px-4 py-2 border border-gray-700 text-left">
                      Amphitrite
                    </th>
                    <th className="px-4 py-2 border border-gray-700 text-left bg-indigo-500 text-white font-bold">
                      RouteCaster
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-700">
                  <tr className="hover:bg-gray-600">
                    <td className="px-4 py-2 border border-gray-700">
                      Core Focus
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Route optimization and cost reduction
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Freight marketplace and price comparison
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Maritime intelligence and fleet management
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      AI-powered maritime route planning and sustainability
                    </td>
                    <td className="px-4 py-2 border border-gray-700 bg-indigo-500 text-white font-bold">
                      AI-powered fleet-wide route optimization &amp; cost
                      reduction
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-600">
                    <td className="px-4 py-2 border border-gray-700">
                      Technology
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      AI-based optimization, machine learning
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      AI-powered search for routes and rates
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Predictive analytics, big data insights
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Data integration with AI-driven planning
                    </td>
                    <td className="px-4 py-2 border border-gray-700 bg-indigo-500 text-white font-bold">
                      Advanced ML, real-time analytics, sustainable routing
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-600">
                    <td className="px-4 py-2 border border-gray-700">
                      Key Strength
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Cost-efficient planning
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      User-friendly booking
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Comprehensive analytics
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Focus on sustainability
                    </td>
                    <td className="px-4 py-2 border border-gray-700 bg-indigo-500 text-white font-bold">
                      Highly cost-efficient, sustainable &amp; adaptive routing
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-600">
                    <td className="px-4 py-2 border border-gray-700">
                      Unique Features
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Dynamic route adjustments
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Transparent rate comparisons
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Environmental insights
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Carbon tracking tools
                    </td>
                    <td className="px-4 py-2 border border-gray-700 bg-indigo-500 text-white font-bold">
                      AI-driven planning, real-time sustainability analytics
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-600">
                    <td className="px-4 py-2 border border-gray-700">
                      Market Position
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Niche solution for logistics
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Broad, easy-to-use platform
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Maritime analytics for large players
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Green shipping focus
                    </td>
                    <td className="px-4 py-2 border border-gray-700 bg-indigo-500 text-white font-bold">
                      Industry-leading AI with unmatched sustainability
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Product Demo Section */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Product Demo</h2>
            <div className="w-full max-w-4xl mx-auto">
              <video
                controls
                className="w-full rounded-lg shadow-lg"
                //   poster="/assets/demo-poster.jpg"
              >
                {/* <source src="/assets/product-demo.mp4" type="video/mp4" /> */}
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          {/* Clear CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Revolutionize Your Shipping?
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

export default Features;

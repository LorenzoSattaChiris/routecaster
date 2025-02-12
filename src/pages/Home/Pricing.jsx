import React from "react";
import { Helmet } from "react-helmet";

const plans = [
  {
    name: "Deckhand Plan",
    price: "$29,000/mo",
    benefits: [
      "Basic routing optimisation",
      "Up to 50 shipments per month",
      "Email support",
      "Access to standard features",
    ],
    recommended: false,
  },
  {
    name: "First Mate Plan",
    price: "$59,000/mo",
    benefits: [
      "Advanced routing optimisation",
      "Up to 200 shipments per month",
      "Priority email & chat support",
      "Premium analytics",
      "Ideal for growing businesses",
    ],
    recommended: true,
  },
  {
    name: "Captain's Plan",
    price: "$99,000/mo",
    benefits: [
      "Ultimate routing optimisation",
      "Unlimited shipments",
      "24/7 phone support",
      "Dedicated account manager",
      "Custom integrations",
    ],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>RouteCaster | Pricing</title>
        <meta
          name="description"
          content="Explore our competitive pricing plans and choose the right solution for your fleet optimisation needs."
        />
        <meta property="og:title" content="RouteCaster | Pricing" />
        <meta
          property="og:description"
          content="Explore our competitive pricing plans and choose the right solution for your fleet optimisation needs."
        />
        <meta property="og:url" content="https://www.routecaster.com/pricing" />
        <link rel="canonical" href="https://www.routecaster.com/pricing" />
        <meta name="twitter:title" content="RouteCaster | Pricing" />
        <meta
          name="twitter:description"
          content="Explore our competitive pricing plans and choose the right solution for your fleet optimisation needs."
        />
      </Helmet>
      <div className="bg-gray-900 min-h-screen text-gray-200">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold">Pricing Plans</h1>
            <p className="text-xl text-indigo-300 mt-2">
              Choose the plan that best fits your business.
            </p>
          </header>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-800 p-6 rounded-lg shadow-lg transition transform duration-300 hover:-translate-y-1 hover:scale-105 ${
                  plan.recommended ? "border-4 border-indigo-500" : ""
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-bl">
                    Recommended
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-4 text-center">
                  {plan.name}
                </h2>
                <p className="text-center text-3xl font-extrabold mb-6">
                  {plan.price}
                </p>
                <ul className="mb-6 space-y-2">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <a
                    href="/upgrade"
                    className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded transition duration-300"
                  >
                    Upgrade Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Premium User Quote */}
          <section className="mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="italic text-xl text-indigo-300 mb-4">
                "RouteCaster transformed our shipping operations. It’s like
                having a secret weapon for logistics!"
              </blockquote>
              <p className="font-bold">- Premium User</p>
            </div>
          </section>

          {/* Clear CTA */}
          <div className="text-center">
            <a
              href="/upgrade"
              className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded transition duration-300 text-xl"
            >
              Upgrade Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;

import React, { useState } from "react";
import { Helmet } from "react-helmet";

/**
 * ReferralCalculator Component
 * ------------------------------
 * Displays an interactive calculator that estimates the discount you receive based on the number of successful referrals.
 * The discount is calculated at 0.4% per referral (capped at 15%).
 *
 * State:
 * - referrals: Number of referrals entered by the user.
 */
const ReferralCalculator = () => {
  const [referrals, setReferrals] = useState(0);

  // Update referrals via slider
  const handleSliderChange = (e) => setReferrals(Number(e.target.value));

  // Update referrals via numeric input
  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) setReferrals(value);
  };

  // Calculate discount: 0.4% per referral, capped at 15%
  const discountPercentage = Math.min(referrals * 0.4, 15);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform duration-300 hover:-translate-y-1 hover:scale-105">
      <h4 className="text-xl font-semibold mb-4">Referral Discount Calculator</h4>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <label htmlFor="referrals" className="block text-gray-300 mb-2">
            Number of Successful Referrals:
          </label>
          <input
            type="range"
            id="referrals"
            min="0"
            max="100"
            value={referrals}
            onChange={handleSliderChange}
            className="w-full"
          />
        </div>
        <div className="w-24">
          <input
            type="number"
            min="0"
            value={referrals}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700 text-gray-200 border border-gray-600"
            aria-label="Number of Referrals"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-300">
          For <span className="font-bold">{referrals}</span> referrals, you earn a discount of{" "}
          <span className="font-bold">{discountPercentage}%</span> on your plan.
        </p>
      </div>
    </div>
  );
};

/**
 * ReferralPage Component
 * -------------------------
 * Renders the Referral Program page including:
 * - A header with title and subtitle
 * - An explanation of how referrals work and the rewards for both parties
 * - An interactive discount calculator
 * - A clear list of program rules
 * - A referrer quote and a call-to-action button.
 */
const ReferralPage = () => {
  return (
    <>
      <Helmet>
        <title>RouteCaster | Referral Program</title>
        <meta
          name="description"
          content="Refer companies to RouteCaster and receive discounts on your monthly recurring revenue (MRR). Use your unique referral link or voucher code to earn rewards for both you and your referrals."
        />
        <meta property="og:title" content="RouteCaster | Referral Program" />
        <meta
          property="og:description"
          content="Refer companies to RouteCaster and receive discounts on your monthly recurring revenue (MRR). Use your unique referral link or voucher code to earn rewards for both you and your referrals."
        />
        <meta property="og:url" content="https://www.routecaster.com/referral" />
        <link rel="canonical" href="https://www.routecaster.com/referral" />
        <meta name="twitter:title" content="RouteCaster | Referral Program" />
        <meta
          name="twitter:description"
          content="Refer companies to RouteCaster and receive discounts on your monthly recurring revenue (MRR). Use your unique referral link or voucher code to earn rewards for both you and your referrals."
        />
      </Helmet>

      <div className="bg-gray-900 min-h-screen text-gray-200">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold">Referral Program</h1>
            <p className="text-xl text-indigo-300 mt-2">
              Refer companies and enjoy exclusive discounts.
            </p>
          </header>

          {/* Explanation & Calculator Section */}
          <section className="mb-12">
            <p className="mb-4">
              Our Referral Program rewards you for bringing new companies to RouteCaster. Share your unique referral link or voucher code with potential customers. When a referred company subscribes to one of our plans, both parties receive a discount on their monthly recurring revenue (MRR).
            </p>
            <ReferralCalculator />
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
            <p className="mb-4">
              - Share your referral link or voucher code with potential clients.
              <br />
              - Once a company signs up using your code, both you and the new customer receive a discount.
              <br />
              - Earn up to 15% discount on your plan based on the number of successful referrals.
              <br />
              - Discounts are applied directly to your monthly invoice.
            </p>
          </section>

          {/* Program Rules Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Program Rules</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Referrals must use your unique referral link or voucher code during sign-up.</li>
              <li>
                Both you and the referred company receive a discount once the referral converts to an active plan.
              </li>
              <li>Discount is calculated based on the number of successful referrals and is capped at 15%.</li>
              <li>Discounts are applied on a monthly basis.</li>
            </ul>
          </section>

          {/* Referrer Quote */}
          <section className="mb-12">
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-300">
              "The referral program at RouteCaster has not only helped us save money but also allowed us to expand our network. It’s truly a win-win for everyone involved." – Jamie, Satisfied Referrer
            </blockquote>
          </section>

          {/* Call-to-Action Section */}
          <section className="text-center">
            <a
              href="/signup-referral"
              className="inline-block bg-indigo-500 hover:bg-indigo-700 transition duration-300 text-white font-bold py-3 px-8 rounded text-xl"
            >
              Get Started Today
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default ReferralPage;

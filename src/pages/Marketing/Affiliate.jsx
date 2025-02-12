import React, { useState } from "react";
import { Helmet } from "react-helmet";

/**
 * AffiliateCalculator Component
 * -------------------------------
 * Displays an interactive calculator that estimates your commission based on the number of successful invitations.
 * Commission is calculated at 0.5% per invitation, capped at 20%.
 *
 * State:
 * - invitations: Number of invitations entered by the user.
 */
const AffiliateCalculator = () => {
  const [invitations, setInvitations] = useState(0);

  // Update invitations via slider
  const handleSliderChange = (e) => setInvitations(Number(e.target.value));

  // Update invitations via numeric input
  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) setInvitations(value);
  };

  // Calculate commission: 0.5% per invitation, capped at 20%
  const commissionPercentage = Math.min(invitations * 0.5, 20);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform duration-300 hover:-translate-y-1 hover:scale-105">
      <h4 className="text-xl font-semibold mb-4">Affiliate Earnings Calculator</h4>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <label htmlFor="invitations" className="block text-gray-300 mb-2">
            Number of Invitations/Plans:
          </label>
          <input
            type="range"
            id="invitations"
            min="0"
            max="100"
            value={invitations}
            onChange={handleSliderChange}
            className="w-full"
          />
        </div>
        <div className="w-24">
          <input
            type="number"
            min="0"
            value={invitations}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-700 text-gray-200 border border-gray-600"
            aria-label="Number of Invitations"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-300">
          For <span className="font-bold">{invitations}</span> invitations, you earn a commission of{" "}
          <span className="font-bold">{commissionPercentage}%</span> on the plan MRR.
        </p>
      </div>
    </div>
  );
};

/**
 * AffiliatePage Component
 * -------------------------
 * Renders the Affiliate Program page including:
 * - A header with title and subtitle
 * - An explanation of how the program works and the integrated tracking system
 * - An interactive earnings calculator
 * - A clear list of program rules
 * - An affiliate partner quote and a call-to-action button.
 */
const AffiliatePage = () => {
  return (
    <>
      <Helmet>
        <title>RouteCaster | Affiliate Program</title>
        <meta
          name="description"
          content="Join our Affiliate Program to promote RouteCaster and earn commission based on monthly recurring revenue (MRR). Use your unique affiliate link or voucher code to track your performance."
        />
        <meta property="og:title" content="RouteCaster | Affiliate Program" />
        <meta
          property="og:description"
          content="Join our Affiliate Program to promote RouteCaster and earn commission based on monthly recurring revenue (MRR). Use your unique affiliate link or voucher code to track your performance."
        />
        <meta property="og:url" content="https://www.routecaster.com/affiliate" />
        <link rel="canonical" href="https://www.routecaster.com/affiliate" />
        <meta name="twitter:title" content="RouteCaster | Affiliate Program" />
        <meta
          name="twitter:description"
          content="Join our Affiliate Program to promote RouteCaster and earn commission based on monthly recurring revenue (MRR). Use your unique affiliate link or voucher code to track your performance."
        />
      </Helmet>

      <div className="bg-gray-900 min-h-screen text-gray-200">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold">Affiliate Program</h1>
            <p className="text-xl text-indigo-300 mt-2">
              Promote RouteCaster and earn attractive commissions.
            </p>
          </header>

          {/* Explanation & Calculator Section */}
          <section className="mb-12">
            <p className="mb-4">
              Our Affiliate Program is tailored for niche promoters and industry experts. By sharing our revolutionary shipping optimisation solutions via your unique affiliate link or voucher code, you can earn commission on monthly recurring revenue (MRR). All referrals are tracked seamlessly on our integrated platform with Stripe for secure checkouts.
            </p>
            <AffiliateCalculator />
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
            <p className="mb-4">
              - Promote our product using your custom affiliate link or voucher code.
              <br />
              - Every successful invitation that converts to a paid plan increases your commission.
              <br />
              - Earn up to 20% commission on the plan MRR.
              <br />
              - Monitor your performance and earnings directly on our platform.
            </p>
          </section>

          {/* Program Rules Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Program Rules</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Always use your unique referral link or voucher code for accurate tracking.</li>
              <li>Commission is based on the number of successful invitations.</li>
              <li>Commission is capped at 20% of plan MRR.</li>
              <li>Payouts are processed on a monthly basis.</li>
            </ul>
          </section>

          {/* Affiliate Partner Quote */}
          <section className="mb-12">
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-300">
              "Joining RouteCaster's affiliate program was the best decision for my business. The seamless tracking and competitive commissions have truly transformed my revenue streams." – Alex, Affiliate Partner
            </blockquote>
          </section>

          {/* Call-to-Action Section */}
          <section className="text-center">
            <a
              href="/signup-affiliate"
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

export default AffiliatePage;

import React from "react";
import { Helmet } from "react-helmet";

// A helper component for a copyable section
const CopySection = ({ title, content }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert("Copied to clipboard!");
  };

  return (
    <>
      <Helmet>
        <title>RouteCaster | Press Kit</title>
        <meta
          name="description"
          content="Download the latest RouteCaster press kit and media resources."
        />
        <meta property="og:title" content="RouteCaster | Press Kit" />
        <meta
          property="og:description"
          content="Download the latest RouteCaster press kit and media resources."
        />
        <meta property="og:url" content="https://www.routecaster.com/press" />
        <link rel="canonical" href="https://www.routecaster.com/press" />
        <meta name="twitter:title" content="RouteCaster | Press Kit" />
        <meta
          name="twitter:description"
          content="Download the latest RouteCaster press kit and media resources."
        />
      </Helmet>

      <div className="mb-8 p-4 border border-gray-700 rounded bg-gray-800 transition transform hover:scale-105 duration-300">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <pre className="whitespace-pre-wrap text-gray-300 mb-2">{content}</pre>
        <button
          onClick={handleCopy}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer"
        >
          Copy
        </button>
      </div>
    </>
  );
};

const Press = () => {
  // Customer-friendly, result-oriented content
  const majorInfo = `
Product Name: RouteCaster AI Shipping Optimization Platform
Start Date: January 27, 2025
Tagline: Cost Based Fleet Wide Route Optimization
Team:
  - Lorenzo Satta Chiris
  - Ranveer Kanda
  - Kwan Yeung Tse
  - Louis Maguire-Lock
  - Man Hon Chan
  - Mayomide Soremekun
  - Mhammod Hassan Hussain
  - Oliver Rayner
  `;

  const projectStory = `
RouteCaster was conceived to revolutionize maritime logistics. 
Our platform uses cutting-edge AI to optimize routes, reduce costs, and promote sustainability.
This journey is marked by innovation, rigorous testing, and a commitment to customer success.
  `;

  const visionMission = `
Vision: To lead the maritime industry in sustainable, AI-driven route optimization.
Mission: To empower logistics companies with cost-effective, high-performance solutions that drive operational excellence.
  `;

  const majorFeatures = `
- Real-time AI-powered route optimization.
- Significant cost reduction through smart logistics.
- Integration of live data (weather, traffic, maritime conditions).
- Sustainability-driven performance metrics.
  `;

  const productMedia = `Product Images & Videos: Coming Soon.`;

  const productReviews = `Product Reviews: Coming Soon.`;

  const usefulLinks = `
Useful Links:
- Brand Assets: /brand
- Features: /features
- Contact: /contact
  `;

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 p-4">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">Press Kit</h1>
          <p className="text-xl text-indigo-300 mt-2">
            Official press information for RouteCaster.
          </p>
        </header>

        {/* Press Sections */}
        <CopySection title="Product Major Info" content={majorInfo} />
        <CopySection title="Project Story" content={projectStory} />
        <CopySection title="Vision & Mission" content={visionMission} />
        <CopySection title="Major Features" content={majorFeatures} />
        <CopySection title="Product Media" content={productMedia} />
        <CopySection title="Product Reviews" content={productReviews} />
        <CopySection title="Useful Links & Resources" content={usefulLinks} />

        {/* CTA Section */}
        <section className="text-center mt-12">
          <a
            href="/brand"
            className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded transition duration-300 text-xl mr-4 cursor-pointer"
          >
            View Brand Assets
          </a>
          <a
            href="/features"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded transition duration-300 text-xl cursor-pointer"
          >
            View Features
          </a>
        </section>
      </div>
    </div>
  );
};

export default Press;

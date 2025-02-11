import React from "react";

const Brand = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <img
            src="/logo.svg"
            alt="RouteCaster Logo"
            className="mx-auto h-24 w-auto"
          />
          <h1 className="text-4xl font-bold mt-4">RouteCaster Brand Assets</h1>
          <p className="text-xl text-indigo-300 mt-2">
            Cost Based Fleet Wide Route Optimization
          </p>
        </header>

        <section className="mb-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Domains &amp; Subdomains
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>routecaster.com</li>
                <li>routecaster.co.uk (redirects to routecaster.com)</li>
                <li>app.routecaster.com</li>
                <li>docs.routecaster.com</li>
                <li>blog.routecaster.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Fonts</h3>
              <p className="text-gray-300">
                Primary: Nunito, Secondary: Open-Sans
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Colors</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-[#205cef]"></div>#205cef
                  (Primary - Dark Blue)
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-[#f39c12]"></div>#f39c12
                  (Accent - Bright Orange)
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-[#ffffff]"></div>#ffffff
                  (Background - White)
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-[#2c3e50]"></div>#2c3e50 (Text
                  - Dark Grey)
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-[#e74c3c]"></div>#e74c3c
                  (Error - Red)
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-[#f1c40f]"></div>#f1c40f
                  (Warning - Yellow)
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-[#27ae60]"></div>#27ae60
                  (Success - Green)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Logo</h3>
              <img
                src="/logo.svg"
                alt="RouteCaster Logo"
                className="h-16 w-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Presentation</h3>
              <p className="text-gray-300 mb-2">Coming Soon</p>
              {/* <iframe
                src="https://www.canva.com/embed/your-presentation-id"
                width="100%"
                height="500"
                title="Brand Presentation"
              ></iframe> */}
            </div>

            {/* Brand Guidelines Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Brand Guidelines</h3>

              {/* Logo Usage */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Logo Usage</h4>
                <p className="text-gray-300 mb-3">
                  The RouteCaster logo is our most valuable brand asset. Always
                  use approved logo files and maintain these requirements:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  <li>
                    Maintain minimum clear space of 1x logo height on all sides
                  </li>
                  <li>
                    Never alter the logo's colors, proportions, or orientation
                  </li>
                  <li>
                    Minimum size: 24px height for digital, 0.25" for print
                  </li>
                  <li>
                    Use the dark version on light backgrounds and vice versa
                  </li>
                </ul>
              </div>

              {/* Typography */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">
                  Typography Guidelines
                </h4>
                <p className="text-gray-300 mb-3">
                  Consistent typography helps maintain our brand's professional
                  appearance:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  <li>Headlines: Nunito Bold, 24-48px</li>
                  <li>Body text: Open Sans Regular, 16-18px</li>
                  <li>UI elements: Nunito Semi-Bold, 14-16px</li>
                  <li>
                    Maintain proper hierarchy and spacing between text elements
                  </li>
                </ul>
              </div>

              {/* Color Usage */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">
                  Color Application
                </h4>
                <p className="text-gray-300 mb-3">
                  Our color palette conveys trust, innovation, and reliability:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  <li>
                    Primary blue (#205cef) for main CTAs and key brand elements
                  </li>
                  <li>
                    Accent orange (#f39c12) sparingly for highlights and
                    emphasis
                  </li>
                  <li>
                    Error red (#e74c3c) only for critical alerts and errors
                  </li>
                  <li>Success green (#27ae60) for positive confirmations</li>
                </ul>
              </div>

              {/* Brand Voice */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Brand Voice</h4>
                <p className="text-gray-300 mb-3">
                  Communication should reflect our brand personality:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  <li>Professional yet approachable</li>
                  <li>Technical without being overwhelming</li>
                  <li>Solutions-focused and forward-thinking</li>
                  <li>Clear, concise, and confident</li>
                </ul>
              </div>

              {/* Brand Values */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Core Values</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-4 rounded">
                    <h5 className="font-bold mb-2">Innovation</h5>
                    <p className="text-gray-300">
                      Pioneering AI-driven solutions that reshape maritime
                      logistics
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <h5 className="font-bold mb-2">Sustainability</h5>
                    <p className="text-gray-300">
                      Committed to environmental responsibility in shipping
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <h5 className="font-bold mb-2">Reliability</h5>
                    <p className="text-gray-300">
                      Delivering consistent, trustworthy solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Press Usage */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">
                  Press & Media Guidelines
                </h4>
                <p className="text-gray-300 mb-3">
                  For media inquiries and brand assets:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  <li>
                    Contact press@routecaster.com for high-resolution logos
                  </li>
                  <li>Request approval for any brand asset modifications</li>
                  <li>
                    Reference our style guide for accurate company description
                  </li>
                  <li>
                    Use approved product screenshots and marketing materials
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
      </div>
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Discover More About Us</h2>
        <a
          href="/contact"
          className="inline-block bg-indigo-500 hover:bg-indigo-700 cursor-pointer text-white font-bold py-3 px-8 rounded transition duration-300 text-xl"
        >
          Contact Us
        </a>
      </section>
      <br />
      <br />
    </div>
  );
};

export default Brand;

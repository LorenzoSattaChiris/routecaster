import React, { useState } from "react";

// Updated FAQ item component with smoother animations and enhanced design
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-gray-700 rounded overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-semibold text-xl py-2 px-4 bg-gray-800 rounded-t hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
      >
        {question}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 mt-2" : "max-h-0"
        }`}
      >
        <p className="px-4 py-2 text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "How do I get started with RouteCaster?",
    answer:
      "Simply sign up on our website, choose a plan that fits your needs, and start optimizing your shipping routes with our AI-powered platform.",
  },
  {
    question: "What support options are available?",
    answer:
      "We offer 24/7 support via email and live chat, along with an extensive resource library of FAQs, guides, and tutorials.",
  },
  {
    question: "How secure is my data?",
    answer:
      "Data security is our top priority. We use state-of-the-art encryption and continuously monitor our systems to protect your information.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time via your account settings.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes, we offer tailored solutions for large enterprises. Please contact our sales team for more details.",
  },
  {
    question: "What is RouteCaster's pricing structure?",
    answer:
      "Our pricing is designed to be competitive and scalable, ensuring you get the best value regardless of your shipping volume.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a free trial for new users to explore our features without any commitment.",
  },
  {
    question: "How can I manage my account settings?",
    answer:
      "You can update your account details and preferences from your dashboard. Visit the account settings page for more options.",
  },
  {
    question: "How often is the platform updated?",
    answer:
      "We release regular updates with new features, performance improvements, and security enhancements to ensure optimal performance.",
  },
  {
    question: "Do you offer integration with third-party software?",
    answer:
      "Yes, RouteCaster seamlessly integrates with various logistics, ERP, and CRM systems to streamline your operations.",
  },
  {
    question: "What training resources do you offer?",
    answer:
      "We provide comprehensive guides, video tutorials, and live webinars to help you get the most out of our platform.",
  },
  {
    question: "How can I contact technical support?",
    answer:
      "Technical support is available 24/7 via email and live chat. Please visit our contact page for more details.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel or change your subscription plan at any time from your account settings.",
  },
  {
    question: "What makes RouteCaster different from competitors?",
    answer:
      "Our advanced AI-driven route optimization, focus on sustainability, and real-time data integration set us apart from the rest.",
  },
  {
    question: "Where can I find user testimonials and case studies?",
    answer:
      "Visit our website's testimonials section or contact our sales team for detailed case studies and success stories.",
  },
];

const Support = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">Support &amp; FAQ</h1>
          <p className="text-xl text-indigo-300 mt-2">
            We're here to help. Find answers to your questions below.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </section>

        {/* Clear CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <a
            href="/contact"
            className="inline-block bg-indigo-500 hover:bg-indigo-700 cursor-pointer text-white font-bold py-3 px-8 rounded transition duration-300 text-xl"
          >
            Contact Support
          </a>
        </section>
      </div>
    </div>
  );
};

export default Support;

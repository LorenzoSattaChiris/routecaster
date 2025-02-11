import React from "react";
import Info from "../../components/Info";
import Socials from "../../components/Socials";

// Dummy data for team members (replace image paths and text as needed)
const teamMembers = [
  {
    name: "Lorenzo Satta Chiris",
    role: "Lead Web Developer (Engineer)",
    image: "/team/lorenzo.jpg",
    description:
      "Drives the core development of our platform with robust, scalable code and engineering expertise.",
  },
  {
    name: "Ranveer Kanda",
    role: "Project Manager",
    image: "/team/ranveer.jpg",
    description:
      "Coordinates timelines, tasks, and communication to keep projects on track and stakeholders informed.",
  },
  {
    name: "Kwan Yeung Tse",
    role: "Business Analyst and Marketing Officer",
    image: "/team/kwanyeung.jpg",
    description:
      "Analyses business data and implements targeted marketing strategies to maximise reach and impact.",
  },
  {
    name: "Louis Maguire-Lock",
    role: "Presentation and Design Officer",
    image: "/team/louis.jpg",
    description:
      "Ensures high‐quality visuals and designs, creating engaging presentations that convey our brand voice.",
  },
  {
    name: "Man Hon Chan",
    role: "CFO and Financial Analyst",
    image: "/team/manhon.jpg",
    description:
      "Oversees financial planning, budgeting, and analysis to guide sustainable, data‐driven growth.",
  },
  {
    name: "Mayomide Soremekun",
    role: "Quality Control and Engineer",
    image: "/team/mayo.jpg",
    description:
      "Maintains engineering standards, conducts quality checks, and ensures reliable project deliverables.",
  },
  {
    name: "Mhammod Hassan Hussain",
    role: "Web Engineer and Presentation Designer",
    image: "/team/mhammod.jpg",
    description:
      "Combines front‐end development skills with creative design to build an engaging user experience.",
  },
  {
    name: "Oliver Rayner",
    role: "Lead Engineer, Feasibility Analyst",
    image: "/team/oliver.jpg",
    description:
      "Evaluates technical feasibility and leads engineering decisions to ensure optimal project outcomes.",
  },
];

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Header: Logo, Company Name & Tagline */}
        <header className="text-center mb-12">
          <img
            src="/logo.svg"
            alt="RouteCaster Logo"
            className="mx-auto h-24 w-auto"
          />
          <h1 className="text-4xl font-bold mt-4">RouteCaster</h1>
          <p className="text-xl text-indigo-300 mt-2">
            Cost Based Fleet Wide Route Optimization
          </p>
        </header>

        {/* About Section: Project Description and Purpose/Vision/Mission */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="mb-6">
              RouteCaster is an AI‑powered shipping optimisation routing
              software that started as a university project. Today, we help
              fleet operators reduce costs and improve efficiency through
              innovative, data‑driven solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Our Purpose</h3>
                <p>
                  To revolutionize fleet routing with AI‑driven solutions that
                  save time and money.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p>
                  To be the leading provider of cost‑efficient and sustainable
                  route optimisation.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p>
                  Empower businesses with innovative AI solutions that transform
                  logistics and shipping operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-24 w-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-indigo-300">{member.role}</p>
                  <p className="mt-2 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p>
              It all began with a vision to simplify shipping logistics. Our
              journey started as a university project and evolved into an
              innovative solution that harnesses the power of artificial
              intelligence to solve real‑world challenges. Today, we empower
              fleet operators around the globe with cutting‑edge technology and
              data‑driven insights.
            </p>
          </div>
        </section>

        {/* External Links Section */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Explore More</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="/brand"
                className="text-indigo-300 hover:text-white underline"
              >
                Brand Assets
              </a>
              <a
                href="/press"
                className="text-indigo-300 hover:text-white underline"
              >
                Press Kit
              </a>
              <a
                href="/contact"
                className="text-indigo-300 hover:text-white underline"
              >
                Contact Us
              </a>
              <a
                href="/contact"
                className="text-indigo-300 hover:text-white underline"
              >
                Careers
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";

/**
 * JobCard Component
 * -----------------
 * Displays a single job role with its details.
 *
 * Props:
 * - job: Object containing job information:
 *   - id: Unique identifier
 *   - title: Job title
 *   - salary: Salary information (e.g. "£40k - £60k")
 *   - description: Brief job description
 *   - location: Job location (e.g. "London, UK")
 *   - employmentType: Type of employment (e.g. "Full-Time")
 */
const JobCard = ({ job }) => {
  return (
    <div
      className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
      role="article"
      aria-labelledby={`job-title-${job.id}`}
    >
      <h3 id={`job-title-${job.id}`} className="text-2xl font-bold mb-2">
        {job.title}
      </h3>
      <p className="text-indigo-300 mb-1">
        <span className="font-semibold">Salary:</span> {job.salary}
      </p>
      <p className="mb-1">
        <span className="font-semibold">Location:</span> {job.location}
      </p>
      <p className="mb-1">
        <span className="font-semibold">Employment Type:</span> {job.employmentType}
      </p>
      <p className="text-gray-300 mt-2">{job.description}</p>
    </div>
  );
};

/**
 * JobCategorySection Component
 * ----------------------------
 * Renders a section for a job category, displaying all jobs under that category.
 *
 * Props:
 * - category: Name of the category
 * - jobs: Array of job objects that belong to this category
 */
const JobCategorySection = ({ category, jobs }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
        {category}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

/**
 * Careers Component
 * -----------------
 * This is the main Careers page component that displays:
 * - A Helmet for meta tags (SEO)
 * - A page header with a brief description and contact info
 * - A search bar to filter job roles
 * - A list of job roles grouped by category
 */
const Careers = () => {
  // Dummy data for 10 job roles
  const jobRoles = [
    {
      id: 1,
      title: "Software Engineer",
      salary: "£40k - £60k",
      description: "Develop and maintain high-quality software solutions.",
      category: "Engineering",
      location: "London, UK",
      employmentType: "Full-Time",
    },
    {
      id: 2,
      title: "DevOps Engineer",
      salary: "£45k - £65k",
      description: "Manage and improve our infrastructure and CI/CD pipelines.",
      category: "Engineering",
      location: "Remote",
      employmentType: "Full-Time",
    },
    {
      id: 3,
      title: "Data Scientist",
      salary: "£50k - £70k",
      description: "Analyse large datasets to derive actionable insights.",
      category: "Engineering",
      location: "London, UK",
      employmentType: "Full-Time",
    },
    {
      id: 4,
      title: "Product Manager",
      salary: "£55k - £75k",
      description:
        "Oversee product development and align features with market needs.",
      category: "Product & Design",
      location: "London, UK",
      employmentType: "Full-Time",
    },
    {
      id: 5,
      title: "UX/UI Designer",
      salary: "£40k - £60k",
      description:
        "Design user-centric interfaces and enhance product usability.",
      category: "Product & Design",
      location: "Remote",
      employmentType: "Full-Time",
    },
    {
      id: 6,
      title: "Marketing Manager",
      salary: "£45k - £65k",
      description:
        "Develop and execute marketing strategies to drive brand growth.",
      category: "Business Operations",
      location: "London, UK",
      employmentType: "Full-Time",
    },
    {
      id: 7,
      title: "Sales Executive",
      salary: "Competitive",
      description:
        "Drive sales initiatives and build lasting client relationships.",
      category: "Business Operations",
      location: "Remote",
      employmentType: "Full-Time",
    },
    {
      id: 8,
      title: "HR Specialist",
      salary: "£35k - £50k",
      description:
        "Manage recruitment processes and employee engagement.",
      category: "Business Operations",
      location: "London, UK",
      employmentType: "Full-Time",
    },
    {
      id: 9,
      title: "Customer Support Specialist",
      salary: "£25k - £35k",
      description:
        "Provide exceptional customer service and resolve client issues.",
      category: "Business Operations",
      location: "Remote",
      employmentType: "Full-Time",
    },
    {
      id: 10,
      title: "Finance Analyst",
      salary: "£45k - £60k",
      description:
        "Analyse financial data to support business decision-making.",
      category: "Business Operations",
      location: "London, UK",
      employmentType: "Full-Time",
    },
  ];

  // State to hold the current search query
  const [searchQuery, setSearchQuery] = useState("");

  // Update search query state on input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter job roles based on the search query (case-insensitive)
  const filteredJobs = useMemo(() => {
    if (!searchQuery.trim()) return jobRoles;
    return jobRoles.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, jobRoles]);

  // Group the filtered jobs by their category
  const groupedJobs = useMemo(() => {
    return filteredJobs.reduce((groups, job) => {
      if (!groups[job.category]) {
        groups[job.category] = [];
      }
      groups[job.category].push(job);
      return groups;
    }, {});
  }, [filteredJobs]);

  return (
    <>
      <Helmet>
        <title>RouteCaster | Careers</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at RouteCaster and join our innovative team."
        />
        <meta property="og:title" content="RouteCaster | Careers" />
        <meta
          property="og:description"
          content="Explore exciting career opportunities at RouteCaster and join our innovative team."
        />
        <meta property="og:url" content="https://www.routecaster.com/careers" />
        <link rel="canonical" href="https://www.routecaster.com/careers" />
        <meta name="twitter:title" content="RouteCaster | Careers" />
        <meta
          name="twitter:description"
          content="Explore exciting career opportunities at RouteCaster and join our innovative team."
        />
      </Helmet>

      <div className="bg-gray-900 min-h-screen text-gray-200">
        <div className="container mx-auto px-4 py-12">
          {/* Page Header */}
          <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Careers</h1>
            <p className="text-xl md:text-2xl text-indigo-300">
              We are always looking for talented individuals to join our team.
              If you are passionate about technology and innovation, we would
              love to hear from you. Contact us at:{" "}
              <a
                href="mailto:contact@routecaster.com"
                className="underline hover:text-white"
              >
                contact@routecaster.com
              </a>
            </p>
          </header>

          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Search job roles..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full max-w-md p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              aria-label="Search job roles"
            />
          </div>

          {/* Job Listings grouped by category */}
          {Object.keys(groupedJobs).length > 0 ? (
            Object.entries(groupedJobs).map(([category, jobs]) => (
              <JobCategorySection key={category} category={category} jobs={jobs} />
            ))
          ) : (
            <p className="text-center text-gray-400">
              No job roles found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Careers;

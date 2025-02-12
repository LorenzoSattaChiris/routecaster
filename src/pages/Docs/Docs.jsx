import React, { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import { FiBook } from "react-icons/fi";

const Docs = () => {
  const [docs, setDocs] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch docs from the JSON file
  useEffect(() => {
    fetch("/data/docs.json")
      .then((res) => res.json())
      .then((data) => setDocs(data))
      .catch((err) => console.error("Error loading docs:", err));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter documents based solely on the search query (title and description)
  const filteredDocs = useMemo(() => {
    return docs.filter((doc) => {
      const text = (doc.title + " " + doc.description).toLowerCase();
      return text.includes(searchQuery.toLowerCase());
    });
  }, [docs, searchQuery]);

  const closeModal = () => {
    setSelectedDoc(null);
  };

  return (
    <>
      <Helmet>
        <title>RouteCaster | Documentation</title>
        <meta
          name="description"
          content="Access comprehensive documentation, guides, and tutorials for RouteCaster."
        />
        <meta property="og:title" content="RouteCaster | Documentation" />
        <meta
          property="og:description"
          content="Access comprehensive documentation, guides, and tutorials for RouteCaster."
        />
        <meta property="og:url" content="https://www.routecaster.com/docs" />
        <link rel="canonical" href="https://www.routecaster.com/docs" />
        <meta name="twitter:title" content="RouteCaster | Documentation" />
        <meta
          name="twitter:description"
          content="Access comprehensive documentation, guides, and tutorials for RouteCaster."
        />
      </Helmet>
      <div className="bg-gray-900 min-h-screen text-gray-200">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold">Documentation</h1>
            <p className="text-xl text-indigo-300 mt-2">
              Your complete guide to using RouteCaster — tutorials, guides, and
              troubleshooting.
            </p>
          </header>

          {/* Search Section */}
          <section className="mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input
                type="text"
                placeholder="Search by title or description..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full md:w-1/2 px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-indigo-500 transition duration-300"
              />
            </div>
          </section>

          {/* Docs List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedDoc(doc)}
              >
                <div className="h-48 w-full bg-gray-700 flex items-center justify-center">
                  {doc.image ? (
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <FiBook className="text-indigo-500 text-6xl" />
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{doc.title}</h2>
                  <p className="text-gray-300 mb-4">{doc.description}</p>
                  <p className="text-indigo-500 font-bold">Read More &rarr;</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Videos Section */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Tutorial Videos</h2>
            <p className="text-xl text-gray-300">Coming Soon...</p>
          </section>
        </div>

        {/* Modal Overlay for Selected Document */}
        {selectedDoc && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-gray-800 rounded-lg max-w-3xl w-full p-8 relative overflow-y-auto max-h-screen">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-3xl text-indigo-500 hover:text-indigo-700 transition duration-300 cursor-pointer"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-4">{selectedDoc.title}</h2>
              {selectedDoc.image && (
                <img
                  src={selectedDoc.image}
                  alt={selectedDoc.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              )}
              <p className="text-gray-300 whitespace-pre-wrap">
                {selectedDoc.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Docs;

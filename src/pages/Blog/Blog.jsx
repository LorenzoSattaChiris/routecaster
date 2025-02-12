import React, { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import { FiFileText } from "react-icons/fi";

// ArticleCard component with a minor load animation
const ArticleCard = ({ article, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the load animation after the component mounts
    setLoaded(true);
  }, []);

  return (
    <div
      onClick={onClick}
      className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform cursor-pointer ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div className="h-48 w-full bg-gray-700 flex items-center justify-center">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <FiFileText className="text-indigo-500 text-6xl" />
        )}
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-300 mb-4">{article.description}</p>
        <p className="text-indigo-500 font-bold">Read More &rarr;</p>
      </div>
    </div>
  );
};

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch the articles JSON from the public/data folder
    fetch("/data/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error loading articles:", err));
  }, []);

  // Handler for search text input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter articles based solely on the search query (title and description)
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const text = (article.title + " " + article.description).toLowerCase();
      return text.includes(searchQuery.toLowerCase());
    });
  }, [articles, searchQuery]);

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <Helmet>
        <title>RouteCaster | Blog</title>
        <meta
          name="description"
          content="Read the latest news, insights, and updates from RouteCaster."
        />
        <meta property="og:title" content="RouteCaster | Blog" />
        <meta
          property="og:description"
          content="Read the latest news, insights, and updates from RouteCaster."
        />
        <meta property="og:url" content="https://www.routecaster.com/blog" />
        <link rel="canonical" href="https://www.routecaster.com/blog" />
        <meta name="twitter:title" content="RouteCaster | Blog" />
        <meta
          name="twitter:description"
          content="Read the latest news, insights, and updates from RouteCaster."
        />
      </Helmet>
      <div className="bg-gray-900 min-h-screen text-gray-200">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold">Our Blog</h1>
            <p className="text-xl text-indigo-300 mt-2">
              Insights, news, and stories about maritime logistics and
              innovation.
            </p>
          </header>

          {/* Search Section */}
          <section className="mb-8 flex items-center justify-center">
            <input
              type="text"
              placeholder="Search by title or description..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full md:w-1/2 px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-indigo-500 transition duration-300"
            />
          </section>

          {/* Articles List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </div>

          {/* CTA Section */}
          <section className="text-center mt-12">
            <a
              href="/features"
              className="inline-block bg-indigo-500 hover:bg-indigo-700 cursor-pointer text-white font-bold py-3 px-8 rounded transition duration-300 text-xl"
            >
              Learn More About Our Product Features
            </a>
          </section>
        </div>

        {/* Article Modal Overlay */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-gray-800 rounded-lg max-w-3xl w-full p-8 relative overflow-y-auto max-h-screen">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-3xl text-indigo-500 hover:text-indigo-700 transition duration-300 cursor-pointer"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-4">
                {selectedArticle.title}
              </h2>
              {selectedArticle.image && (
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              )}
              <p className="text-gray-300 whitespace-pre-wrap">
                {selectedArticle.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;

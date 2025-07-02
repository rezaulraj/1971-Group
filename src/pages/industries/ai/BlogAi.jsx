import React from "react";
import blog1 from "../../../assets/ai/blog1.jpg?url";
import blog2 from "../../../assets/ai/blog2.png?url";
import blog3 from "../../../assets/ai/blog3.jpg?url";

const BlogAi = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The most demanded AI specialists in the world",
      excerpt:
        "Explore the top AI roles companies are hiring for globally and their competitive salary ranges.",
      image: blog1,
      category: "AI Recruitment",
      date: "May 15, 2023",
    },
    {
      id: 2,
      title: "Effective strategies to attract Top AI talents",
      excerpt:
        "Discover proven methods to source and recruit the best AI professionals in a competitive market.",
      image: blog2,
      category: "Hiring Strategies",
      date: "June 2, 2023",
    },
    {
      id: 3,
      title: "Statistics and forecasts for AI industry recruiting",
      excerpt:
        "Latest data on AI job growth and future projections for talent demand in artificial intelligence.",
      image: blog3,
      category: "Market Trends",
      date: "June 18, 2023",
    },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 via-gray-900 to-red-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-teal-500/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-red-500/30 to-transparent" />
      </div>

      {/* Header section */}
      <div className="relative max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-gray-100 to-red-300 mb-6">
          The most demanded AI specialists, their skills and salaries
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Insights and analysis on the evolving AI job market and compensation
          trends
        </p>
      </div>

      {/* Blog cards grid */}
      <div className="relative max-w-5xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="group relative bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border-t-8 border-teal-400 transition-all duration-500 hover:border-red-400 hover:translate-y-2"
          >
            {/* Top border accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-gray-500 to-red-500 group-hover:opacity-0 transition-opacity" />

            {/* Blog image */}
            <div className="h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Blog content */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-teal-400">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {post.title}
              </h3>
              <p className="text-gray-300 mb-5">{post.excerpt}</p>
              <a
                href="/blogs"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-red-600 rounded-md hover:from-teal-500 hover:to-red-500 transition-all"
              >
                Read Article
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div className="relative max-w-4xl mx-auto mt-20 text-center bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-teal-500/30">
        <h3 className="text-2xl font-bold text-white mb-4">
          Download Our AI Recruiting Guide for Free
        </h3>
        <p className="text-gray-300 mb-6">
          Get comprehensive insights into hiring AI talent, including salary
          benchmarks and skill requirements.
        </p>
        <button className="px-8 py-3 font-semibold text-white bg-gradient-to-r from-teal-500 to-red-600 rounded-full hover:shadow-lg hover:shadow-teal-500/30 transition-all">
          Get It Now
        </button>
      </div>
    </div>
  );
};

export default BlogAi;

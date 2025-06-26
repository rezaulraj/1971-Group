import React from "react";
import { Link } from "react-router-dom";
import heroblog from "../../../assets/blog/heroblog.jpg?url";
import logo from "/logo.png";
import {
  FaCalendarAlt,
  FaUserTie,
  FaChartLine,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

const HeroBlog = () => {
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  const featuredArticles = [
    {
      id: 23,
      title: "The Future of Tech Recruitment in the Gulf Region",
      excerpt:
        "How emerging technologies are transforming hiring practices in Middle Eastern tech markets.",
      category: "Industry Trends",
      date: "May 15, 2023",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 24,
      title: "Building Diverse Engineering Teams: A Practical Guide",
      excerpt:
        "Strategies for creating inclusive technical teams that drive innovation.",
      category: "Best Practices",
      date: "June 2, 2023",
      readTime: "6 min read",
      featured: true,
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiLz48cmVjdCB4PSIxNSIgeT0iMTUiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text content */}
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="1971 Group Logo"
                className="h-10 mr-3 filter -brightness-50 invert"
              />
              <span className="text-sm font-semibold bg-indigo-600 px-3 py-1 rounded-full flex items-center">
                <MdOutlineFeaturedPlayList className="mr-1" /> Premium Content
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Articles on{" "}
              <span className="text-amber-400">Recruitment</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Expert insights and thought leadership from 1971 Group's
              recruitment specialists. Discover strategies, trends and best
              practices in tech talent acquisition.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center bg-blue-800/50 px-4 py-2 rounded-full">
                <FaUserTie className="mr-2 text-amber-400" />
                <span>Executive Briefs</span>
              </div>
              <div className="flex items-center bg-blue-800/50 px-4 py-2 rounded-full">
                <FaChartLine className="mr-2 text-amber-400" />
                <span>Market Analysis</span>
              </div>
              <div className="flex items-center bg-blue-800/50 px-4 py-2 rounded-full">
                <FaBookOpen className="mr-2 text-amber-400" />
                <span>Case Studies</span>
              </div>
            </div>
          </div>

          {/* Featured articles */}
          <div className="lg:w-1/2 space-y-6">
            {featuredArticles.map((article) => {
              const slug = generateSlug(article.title);
              return (
                <Link to={`/blogs/${slug}`} key={article.id} className="block">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/10">
                    <div className="p-6">
                      {article.featured && (
                        <span className="inline-block mb-3 text-xs font-semibold px-2 py-1 bg-amber-500 text-blue-900 rounded-full">
                          Featured
                        </span>
                      )}
                      <h3 className="text-2xl font-bold mb-3">
                        {article.title}
                      </h3>
                      <p className="text-blue-100 mb-4">{article.excerpt}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
                        <span className="flex items-center">
                          <FaCalendarAlt className="mr-1" /> {article.date}
                        </span>
                        <span className="flex items-center">
                          <IoTime className="mr-1" /> {article.readTime}
                        </span>
                        <span className="ml-auto flex items-center font-medium text-amber-400">
                          Read article <FaArrowRight className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroblog}
          alt="Recruitment professionals discussing"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/70 to-blue-900/90"></div>
      </div>
    </div>
  );
};

export default HeroBlog;

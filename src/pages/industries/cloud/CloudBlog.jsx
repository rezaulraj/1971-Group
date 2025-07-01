import React from "react";
import { FiArrowRight } from "react-icons/fi";
import blog1 from "../../../assets/cloud/blog1.webp";
import blog2 from "../../../assets/cloud/blog2.webp";
import blog3 from "../../../assets/cloud/blog3.webp";

const CloudBlog = () => {
  const articles = [
    {
      image: blog1,
      title: "Some principal characteristics of recruiting in Cloud Computing",
      link: "more",
    },
    {
      image: blog2,
      title: "AI in recruiting processes",
      link: "more",
    },
    {
      image: blog3,
      title:
        "Recruitment agencies VS In-house recruiting VS Freelance recruiters",
      link: "more",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Articles on our blog
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <div
              key={index}
              className=" backdrop-blur-sm rounded-xl overflow-hidden bg-gray-800 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-300 transition-colors">
                  {article.title}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center text-cyan-300 font-medium group-hover:text-white transition-colors"
                >
                  <span>{article.link}</span>
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudBlog;

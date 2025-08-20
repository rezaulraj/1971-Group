import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import staff1 from "../../../assets/staffing/ser1.jpg?url";
import recuit1 from "../../../assets/allservice/interview.webp?url";
import hr1 from "../../../assets/hr/hero3.jpg?url";
import ins1 from "../../../assets/subscription/sebc.avif?url";

import frelance from "../../../assets/allservice/reafe.jpg";
import airecruitment from "../../../assets/allservice/airecuti.jpeg";
import hrrecut from "../../../assets/allservice/hrrecuit.jpeg";

import interview from "../../../assets/allservice/interview.webp";
import airecruitments from "../../../assets/allservice/airecuti.jpeg";
import tips from "../../../assets/allservice/trips.webp";

import herohr1 from "../../../assets/hr/hero2.avif";
import herohr3 from "../../../assets/hr/hero4.jpg";

import itservices from "../../../assets/allservice/its.webp?url";
import paypers from "../../../assets/allservice/hero1.jpeg?url";
import ceo from "../../../assets/allservice/ceo.jpeg?url";

import service1 from "../../../assets/staffing/ser1.jpg?url";
import service2 from "../../../assets/staffing/ser2.jpg?url";
import service3 from "../../../assets/staffing/ser3.avif?url";

import ceoImage from "../../../assets/subscription/ceo.jpg?url";
import subscriptionImage from "../../../assets/subscription/sebc.avif?url";
import guide from "../../../assets/subscription/gide.webp";
import cyber from "../../../assets/blog/cy.png?url";
const Blogs = () => {
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };
  const blogs = [
    {
      id: 1,
      title:
        "From recruitment to talent acquisition — we connect today's needs with tomorrow's leaders.",
      excerpt:
        "Discover how modern talent acquisition strategies are evolving beyond traditional recruitment methods.",
      category: "Recruiting",
      date: "June 15, 2023",
      readTime: "5 min read",
      image: recuit1,
    },
    {
      id: 2,
      title: "Strategic Workforce Planning for Tech Companies",
      excerpt: "Crafting Job Descriptions Aligned with Business Goals",
      category: "Outstaffing",
      date: "May 28, 2023",
      readTime: "7 min read",
      image: staff1,
    },
    {
      id: 3,
      title: "Exclusive Recruitment & Headhunting",
      excerpt:
        "How we identify and attract top-tier talent for executive positions in the Gulf region.",
      category: "HR",
      date: "July 2, 2023",
      readTime: "6 min read",
      image: hr1,
    },
    {
      id: 4,
      title: "What Is Subscription-Based (Embedded) Recruitment?",
      excerpt:
        "Exploring the future of recruitment with embedded talent acquisition models.",
      category: "Insights",
      date: "June 22, 2023",
      readTime: "8 min read",
      image: ins1,
    },
    {
      id: 5,
      title: "What Is Hourly Recruiting?",
      excerpt:
        "An in-depth look at flexible recruitment models that adapt to hourly workforce needs.",
      category: "Insights",
      date: "June 22, 2023",
      readTime: "6 min read",
      image: herohr3,
    },
    {
      id: 6,
      title: "Understanding Recruitment Fees and Models",
      excerpt:
        "A breakdown of various recruitment pricing models and what businesses should expect.",
      category: "Recruiting",
      date: "July 5, 2023",
      readTime: "5 min read",
      image: service1,
    },
    {
      id: 7,
      title: "The Role of AI in Modern Recruitment",
      excerpt:
        "How artificial intelligence is reshaping sourcing, screening, and hiring decisions.",
      category: "Recruiting",
      date: "July 7, 2023",
      readTime: "6 min read",
      image: airecruitments,
    },
    {
      id: 8,
      title: "How to Build a Strong Talent Pool",
      excerpt:
        "Proven methods to create and maintain a talent pipeline that supports future hiring needs.",
      category: "Recruiting",
      date: "July 9, 2023",
      readTime: "5 min read",
      image: service2,
    },
    {
      id: 9,
      title: "Limitless IT Recruitment with 1971 group",
      excerpt:
        "Inside our approach to tech recruitment that scales with business growth.",
      category: "Recruiting",
      date: "July 10, 2023",
      readTime: "6 min read",
      image: service3,
    },
    {
      id: 10,
      title: "Inside Embedded Recruitment: CEO Interview",
      excerpt:
        "An exclusive conversation with our CEO on the advantages of embedded hiring models.",
      category: "Recruiting",
      date: "July 12, 2023",
      readTime: "7 min read",
      image: interview,
    },
    {
      id: 11,
      title: "Pay-Per-Hire Recruitment: A Smart Start",
      excerpt:
        "Explore the benefits of performance-based recruitment for startups and SMEs.",
      category: "Recruiting",
      date: "July 14, 2023",
      readTime: "5 min read",
      image: itservices,
    },
    {
      id: 12,
      title: "Recruitment Agencies vs. In-House vs. Freelance Recruiters",
      excerpt:
        "Comparing the pros and cons of different recruitment models to help you choose the right one.",
      category: "Recruiting",
      date: "July 16, 2023",
      readTime: "6 min read",
      image: frelance,
    },
    {
      id: 13,
      title: "The Impact of AI on Recruitment",
      excerpt:
        "Exploring the real-world applications of AI in candidate sourcing and engagement.",
      category: "Recruiting",
      date: "July 18, 2023",
      readTime: "6 min read",
      image: airecruitment,
    },
    {
      id: 14,
      title: "HR & Recruitment by the Numbers",
      excerpt:
        "Key data and benchmarks to guide your recruitment strategy in a competitive market.",
      category: "HR",
      date: "July 20, 2023",
      readTime: "5 min read",
      image: hrrecut,
    },
    {
      id: 15,
      title: "How to Write a Job Description Aligned with Company Goals",
      excerpt:
        "Tips for writing job descriptions that attract the right candidates and align with business objectives.",
      category: "HR",
      date: "July 22, 2023",
      readTime: "5 min read",
      image: herohr1,
    },
    {
      id: 16,
      title: "Executive Search",
      excerpt:
        "An overview of how executive search firms identify top leadership talent across industries.",
      category: "HR",
      date: "July 24, 2023",
      readTime: "6 min read",
      image: tips,
    },
    {
      id: 17,
      title: "End-to-End Project-Based Outstaffing",
      excerpt:
        "Why more companies are outsourcing entire projects and what it takes to manage them effectively.",
      category: "Outstaffing",
      date: "July 26, 2023",
      readTime: "6 min read",
      image: paypers,
    },
    {
      id: 18,
      title: "End-to-End Project-Based Outstaffing",
      excerpt:
        "Delivering scalable and efficient outstaffing solutions tailored to your project goals.",
      category: "Outstaffing",
      date: "July 26, 2023",
      readTime: "6 min read",
      image: subscriptionImage,
    },
    {
      id: 19,
      title: "Set Up a Technical Support Hub",
      excerpt:
        "Step-by-step guide to building a dedicated offshore support center with skilled talent.",
      category: "Outstaffing",
      date: "July 28, 2023",
      readTime: "5 min read",
      image: ceoImage,
    },
    {
      id: 20,
      title: "Exclusive Recruitment & Headhunting Explained",
      excerpt:
        "What makes our headhunting services unique, and how we ensure high-quality executive matches.",
      category: "Outstaffing",
      date: "July 30, 2023",
      readTime: "6 min read",
      image: guide,
    },
    {
      id: 21,
      title: "Top Cybersecurity Roles & Global Salary Trends",
      excerpt:
        "Explore the most in-demand cybersecurity roles and how salaries compare globally.",
      category: "Outstaffing",
      date: "August 1, 2023",
      readTime: "7 min read",
      image: cyber,
    },
    {
      id: 22,
      title: "Interview with 1971 Group' CEO",
      excerpt:
        "Get leadership insights from our CEO on scaling teams, managing talent, and navigating hiring trends.",
      category: "Insights",
      date: "August 3, 2023",
      readTime: "6 min read",
      image: ceo,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Insights
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover our expert perspectives on recruitment and talent
            acquisition
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => {
            const slug = generateSlug(blog.title);
            return (
              <Link to={`/blogs/${slug}`} key={blog.id} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                      <MdCategory className="mr-1" /> {blog.category}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <FaCalendarAlt className="mr-1.5" /> {blog.date}
                      </span>
                      <span className="flex items-center">
                        <FaClock className="mr-1.5" /> {blog.readTime}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors">
                      Read more
                      <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

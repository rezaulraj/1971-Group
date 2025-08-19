import React from "react";
import { Link } from "react-router-dom";
import heroimage from "../../../assets/guide/herogu.jpg?url";
import logo from "/logo.png";
import {
  FaUserTie,
  FaChartLine,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

const HeroGuide = () => {
  const featuredGuides = [
    {
      id: 5,
      slug: "hiring-process-checklist",
      title: "The Complete Hiring Process Checklist",
      excerpt: "Step-by-step guide to streamline your recruitment workflow",
      category: "Process Optimization",
      readTime: "10 min read",
      featured: true,
    },
    {
      id: 6,
      slug: "candidate-evaluation-framework",
      title: "Candidate Evaluation Framework",
      excerpt: "Structured approach to assess and compare applicants",
      category: "Assessment",
      readTime: "8 min read",
      featured: true,
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-emerald-900 to-teal-800 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiLz48cmVjdCB4PSIxNSIgeT0iMTUiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]" />
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
              <span className="text-sm font-semibold bg-[#D4AF37]/30 px-3 py-1 rounded-full flex items-center">
                <MdOutlineFeaturedPlayList className="mr-1" /> Expert Guides
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Top Articles for Streamlining{" "}
              <span className="text-[#D4AF37]">Recruitment & HR</span>
            </h1>

            <p className="text-xl text-teal-100 mb-8 max-w-2xl">
              Gain clarity on how to attract, evaluate, and retain top talent
              with actionable recruitment advice.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center bg-teal-800/50 px-4 py-2 rounded-full">
                <FaUserTie className="mr-2 text-[#D4AF37]" />
                <span>Talent Acquisition</span>
              </div>
              <div className="flex items-center bg-teal-800/50 px-4 py-2 rounded-full">
                <FaChartLine className="mr-2 text-[#D4AF37]" />
                <span>HR Analytics</span>
              </div>
              <div className="flex items-center bg-teal-800/50 px-4 py-2 rounded-full">
                <FaBookOpen className="mr-2 text-[#D4AF37]" />
                <span>Best Practices</span>
              </div>
            </div>
          </div>

          {/* Featured guides */}
          <div className="lg:w-1/2 space-y-6">
            {featuredGuides.map((guide) => (
              <Link
                to={`/guides/${guide.slug}`}
                key={guide.id}
                className="block"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all hover:border-amber-300/50 hover:shadow-lg hover:shadow-amber-300/10">
                  <div className="p-6">
                    {guide.featured && (
                      <span className="inline-block mb-3 text-xs font-semibold px-2 py-1 bg-[#D4AF37] text-teal-900 rounded-full">
                        Featured
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-3">{guide.title}</h3>
                    <p className="text-teal-100 mb-4">{guide.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#D4AF37]">
                      <span className="flex items-center bg-teal-800/30 px-3 py-1 rounded-full">
                        {guide.category}
                      </span>
                      <span className="flex items-center">
                        <IoTime className="mr-1" /> {guide.readTime}
                      </span>
                      <span className="ml-auto flex items-center font-medium text-[#D4AF37]">
                        Read guide <FaArrowRight className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroimage}
          alt="HR professionals reviewing documents"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000b30]/90 via-[#0a1a4d]/80 to-[#1a2a6b]/90" />
      </div>
    </div>
  );
};

export default HeroGuide;

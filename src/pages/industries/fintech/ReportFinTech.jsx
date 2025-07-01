import React from "react";
import {
  FiArrowUpRight,
  FiCalendar,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";
import chartbig from "../../../assets/fintech/barchirt.webp";
import chartsmall from "../../../assets/fintech/finance.webp";
import bgImage from "../../../assets/fintech/shado.webp";

const ReportFinTech = () => {
  const stats = [
    {
      icon: <FiTrendingUp className="text-2xl" />,
      value: "15-25%",
      label: "Annual salary growth in FinTech",
    },
    {
      icon: <FiDollarSign className="text-2xl" />,
      value: "$120K+",
      label: "Average salary for senior roles",
    },
    {
      icon: <FiCalendar className="text-2xl" />,
      value: "3-5 Weeks",
      label: "Average hiring timeline",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: `url(${bgImage}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-teal-400/20 rounded-full border border-teal-400/30">
              <p className="text-sm font-medium text-teal-300">
                Industry Report
              </p>
            </div>

            <h2 className="text-4xl font-bold text-white leading-tight">
              Salaries and Trends in the{" "}
              <span className="text-teal-300">Financial Technology</span>
            </h2>

            <p className="text-lg text-white/80">
              Discover the latest compensation benchmarks, hiring trends, and
              talent insights in the rapidly evolving FinTech sector.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-teal-300/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-teal-400/20 rounded-lg">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-teal-300">
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/80">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-teal-400/20 transition-all duration-300">
              <span>Book a call</span>
              <FiArrowUpRight className="text-lg" />
            </button>
          </div>

          {/* Right Image Gallery */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Main Big Image */}
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden border-2 border-white/10 backdrop-blur-sm bg-white/5">
                <img
                  src={chartbig}
                  alt="FinTech Salary Trends"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-sm font-medium text-teal-300">
                    2024 Report
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    Global FinTech Compensation Analysis
                  </h3>
                </div>
              </div>

              {/* Small Image Overlay */}
              <div className="absolute -bottom-6 -right-6 w-2/5 rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl backdrop-blur-sm bg-white/5">
                <img
                  src={chartsmall}
                  alt="FinTech Growth Chart"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-transparent to-transparent"></div>
                <div className="absolute top-0 left-0 p-4">
                  <p className="text-xs font-medium text-teal-300">
                    Market Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportFinTech;

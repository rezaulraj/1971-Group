import React from "react";
import {
  FaSearch,
  FaChartLine,
  FaPuzzlePiece,
  FaGlobe,
  FaCreditCard,
  FaUsers,
} from "react-icons/fa";

const WhyChoseUsHr = () => {
  const features = [
    {
      icon: <FaSearch className="text-blue-300 text-2xl" />,
      title: "HR Audit",
      description:
        "Analyze current HR practices and identify areas for improvement across the employee lifecycle.",
    },
    {
      icon: <FaChartLine className="text-purple-300 text-2xl" />,
      title: "Strategic Insights",
      description:
        "Understand what’s working and what isn’t. We provide data-driven insights and highlight opportunities for growth.",
    },
    {
      icon: <FaPuzzlePiece className="text-green-300 text-2xl" />,
      title: "Actionable Solutions",
      description:
        "Develop and implement a winning HR strategy in record time, tailored to your business needs.",
    },
    {
      icon: <FaGlobe className="text-yellow-300 text-2xl" />,
      title: "Employer Brand Expertise",
      description:
        "Craft a strong employer brand that aligns with your values and speaks directly to the talent you need.",
    },
    {
      icon: <FaCreditCard className="text-red-300 text-2xl" />,
      title: "Flexible Payments",
      description:
        "We offer multiple pricing plans and payment methods including wire transfers and crypto.",
    },
    {
      icon: <FaUsers className="text-cyan-300 text-2xl" />,
      title: "Effective Recruitment Support",
      description:
        "We refine your recruitment strategy and assist in finding top-tier candidates across industries.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#001153] via-[#1a2a6b] to-[#334380] opacity-95 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            We've helped over 80 companies streamline their HR processes, hit
            their goals, and boost profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-white/10 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mt-1">{feature.title}</h3>
              </div>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoseUsHr;

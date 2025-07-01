import React from "react";
import {
  FaSearchDollar,
  FaClock,
  FaUserShield,
  FaHandshake,
} from "react-icons/fa";
import { FiDollarSign, FiClock, FiAward, FiUsers } from "react-icons/fi";
import avatarImage from "../../../assets/fintech/avatar-group.png"; // Replace with your avatar image

const FinancialTech = () => {
  const stats = [
    {
      icon: <FiDollarSign className="text-3xl" />,
      value: "$0",
      label: "prepayment to begin the hiring process",
    },
    {
      icon: <FiClock className="text-3xl" />,
      value: "3",
      label: "weeks on average to close a vacancy",
    },
    {
      icon: <FiAward className="text-3xl" />,
      value: "3",
      label: "months guarantee for the candidate",
    },
    {
      icon: <FiUsers className="text-3xl" />,
      value: "5",
      label: "technical interviews with the candidates per week",
    },
  ];

  const services = [
    {
      icon: <FaSearchDollar className="text-2xl" />,
      title: "Talent Mapping",
      description: "Comprehensive market analysis to identify top candidates",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Fast Hiring",
      description: "Streamlined processes to reduce time-to-hire",
    },
    {
      icon: <FaUserShield className="text-2xl" />,
      title: "Vetted Experts",
      description: "Rigorous technical and cultural assessment",
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Retention Focus",
      description: "Candidate matching for long-term success",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-teal-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              The financial technology industry is one of the most in-demand in
              terms of qualified specialists today.
            </h2>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-teal-300/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-teal-400/20 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-200">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Avatar with Text */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-teal-400/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <img
                src={avatarImage}
                alt="FinTech professionals"
                className="w-52 h-20 rounded-lg shadow-2xl object-cover"
              />
              <div className="mt-6 bg-gray-900/70 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <p className="text-xl font-medium">
                  "We connect you with the best FinTech talents and help to
                  close any vacancy in the field of Financial Technologies."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-teal-300/30 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-teal-400/30 to-blue-400/30 group-hover:from-teal-400/50 group-hover:to-blue-400/50 transition-all">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold text-teal-300">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialTech;

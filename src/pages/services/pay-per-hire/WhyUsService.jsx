import React from "react";
import { FiDollarSign, FiClock, FiUsers, FiAward } from "react-icons/fi";

const WhyUsService = () => {
  const features = [
    {
      icon: <FiDollarSign className="w-6 h-6 text-blue-500" />,
      title: "Smarter Hiring, Lower Costs",
      description:
        "Pay only a percentage of the candidate's annual salary—this model is 40–45% more cost-effective than managing in-house recruitment.",
    },
    {
      icon: <FiClock className="w-6 h-6 text-purple-500" />,
      title: "Recruitment When You Need It",
      description:
        "Hire on demand—whether you need one specialist or a full team. We cover everything from junior roles to senior developers, non-technical experts, and executive leaders.",
    },
    {
      icon: <FiUsers className="w-6 h-6 text-green-500" />,
      title: "Your Dedicated Recruitment Partner",
      description:
        "An experienced remote recruiter will work closely on your vacancy, using the latest tools and proven strategies to deliver top talent efficiently.",
    },
  ];

  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why Choose Our Pay-Per-Hire Service?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Innovative recruitment solutions that deliver results without the
            overhead
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-gray-700 text-white mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-center">
            <FiAward className="w-8 h-8 text-yellow-400 mr-2" />
            <span className="text-white font-medium text-lg">
              Trusted by 80+ growing companies
            </span>
          </div>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsService;

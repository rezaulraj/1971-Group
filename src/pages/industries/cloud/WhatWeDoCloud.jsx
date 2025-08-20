import React from "react";
import {
  FiDollarSign,
  FiCalendar,
  FiClock,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import image from "../../../assets/cloud/compass.webp";

const WhatWeDoCloud = () => {
  const services = [
    {
      icon: <FiDollarSign className="text-2xl text-blue-600" />,
      title: "Pay-per-hire recruiting",
      description: "Pay a percentage of the candidate's annual salary",
      link: "Learn more",
      path: "/pay-par-hire-services",
    },
    {
      icon: <FiCalendar className="text-2xl text-cyan-500" />,
      title: "Subscription recruitment",
      description: "Monthly payment for ongoing recruiting services",
      link: "Learn more",
      path: "/subscription-services",
    },
    {
      icon: <FiClock className="text-2xl text-blue-500" />,
      title: "Hourly recruitment",
      description: "Pay for actual hours spent finding candidates",
      link: "Learn more",
      path: "/hourly-recruiting-services",
    },
    {
      icon: <FiUsers className="text-2xl text-cyan-600" />,
      title: "Staffing",
      description: "Hire specialists for projects or specific tasks",
      link: "Learn more",
      path: "/staffing-services",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What we do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible recruitment solutions tailored to your business needs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative w-64 h-64">
              <img
                src={image}
                alt="Recruitment compass"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/20 rounded-full -z-10"></div>
            </div>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <a
                      href={service.path}
                      className="inline-flex items-center text-sm text-blue-600 font-medium group"
                    >
                      <span>{service.link}</span>
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoCloud;

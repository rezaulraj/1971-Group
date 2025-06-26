import React from "react";
import { FiLayers, FiMic, FiDollarSign, FiArrowRight } from "react-icons/fi";
import itservices from "../../../assets/allservice/its.webp?url";
import paypers from "../../../assets/allservice/hero1.jpeg?url";
import ceo from "../../../assets/allservice/ceo.jpeg?url";
const ServicesRecuit = () => {
  const services = [
    {
      icon: <FiLayers className="w-6 h-6 text-blue-600" />,
      title: "Limitless IT Recruitment with 1971 group",
      description:
        "At 1971 group, we believe nothing is impossible—our expert team is equipped to handle even the most complex IT hiring challenges.",
      image: itservices,
      bg: "bg-blue-50",
    },
    {
      icon: <FiMic className="w-6 h-6 text-blue-600" />,
      title: "CEO Insights: A Service That Covers All Hiring Needs",
      description:
        "In this exclusive interview, OnHires' CEO shares how our recruitment model adapts to meet the full spectrum of talent acquisition demands.",
      bg: "bg-gray-50",
      image: ceo,
    },
    {
      icon: <FiDollarSign className="w-6 h-6 text-blue-600" />,
      title: "Pay-Per-Hire Recruitment: A Smart Start",
      description:
        "Our end-to-end, pay-per-hire solution is ideal for companies looking to begin a collaboration with a reliable recruitment partner—pay only when the right hire is made.",
      image: paypers,
      bg: "bg-blue-50",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Our Recruitment Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Discover how OnHires delivers flexible, results-driven hiring
            solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bg} rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1`}
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-white text-blue-600 shadow-sm mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                <div className="text-center">
                  <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors group">
                    Learn more
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesRecuit;

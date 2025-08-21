import React from "react";
import { FiLayers, FiMic, FiDollarSign, FiArrowRight } from "react-icons/fi";
import itservices from "../../../assets/allservice/its.webp?url";
import paypers from "../../../assets/allservice/hero1.jpeg?url";
import ceo from "../../../assets/allservice/ceo.jpeg?url";
const ServicesRecuit = () => {
  const services = [
    {
      icon: <FiLayers className="w-6 h-6 text-[#D4AF37]" />,
      title: "Limitless IT Recruitment with 1971 group",
      description:
        "At 1971 Group, we thrive on challenges. Our expert team is ready to tackle even the most complex IT hiring needs with precision and confidence.",
      image: itservices,
      bg: "bg-blue-50",
    },
    {
      icon: <FiMic className="w-6 h-6 text-[#D4AF37]" />,
      title: "CEO Insights: Meeting Every Hiring Demand",
      description:
        "In this exclusive interview, the CEO of 1971 Group  reveals how our flexible recruitment model is designed to meet a wide range of talent acquisition needs, from junior roles to executive hires.",
      bg: "bg-gray-50",
      image: ceo,
    },
    {
      icon: <FiDollarSign className="w-6 h-6 text-[#D4AF37]" />,
      title: "Pay-Per-Hire Recruitment: A Smart, Risk-Free Start",
      description:
        "Our comprehensive pay-per-hire solution is perfect for companies seeking a dependable recruitment partner pay only when the right candidate is successfully placed.",
      image: paypers,
      bg: "bg-blue-50",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-950 sm:text-4xl">
            Explore Our Recruitment Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Discover how 1971 Group delivers flexible, results-driven hiring
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
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-white text-[#D4AF37] shadow-sm mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                <div className="text-center">
                  <a
                    href="/blogs"
                    className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-black  bg-[#D4AF37] hover:bg-[#caa21e] transition-colors group"
                  >
                    Learn more
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
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

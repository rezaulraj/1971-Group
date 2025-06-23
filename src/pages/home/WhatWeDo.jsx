import React from "react";
import { FaUserTie, FaSearch, FaHandshake } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const WhatWeDo = () => {
  const services = [
    {
      title: "Recruitment",
      description:
        "We provide full-cycle recruiting & HR services that are tailored to the business needs.",
      icon: <FaSearch className="text-xl" />,
      link: "#",
      gradient:
        "linear-gradient(135deg, rgba(0,112,243,0.95) 0%, rgba(0,60,150,0.95) 100%)",
      borderColor: "#00b4d8",
      iconBg: "rgba(0, 180, 216, 0.2)",
      iconColor: "#00b4d8",
      textColor: "#ffffff",
    },
    {
      title: "HR Consulting",
      description:
        "We help companies create a well-known brand that will stand out on the market and boost hiring metrics.",
      icon: <FaUserTie className="text-xl" />,
      link: "#",
      gradient:
        "linear-gradient(135deg, rgba(131,58,180,0.95) 0%, rgba(81,29,124,0.95) 100%)",
      borderColor: "#c77dff",
      iconBg: "rgba(199, 125, 255, 0.2)",
      iconColor: "#c77dff",
      textColor: "#ffffff",
    },
    {
      title: "Outstaffing",
      description:
        "We provide staffing services for fast-growing companies and help to grow your team and increase the productivity.",
      icon: <FaHandshake className="text-xl" />,
      link: "#",
      gradient:
        "linear-gradient(135deg, rgba(0,180,216,0.95) 0%, rgba(0,95,115,0.95) 100%)",
      borderColor: "#48cae4",
      iconBg: "rgba(72, 202, 228, 0.2)",
      iconColor: "#48cae4",
      textColor: "#ffffff",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          What we do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full border border-gray-700"
              style={{
                background: service.gradient,
                borderTop: `4px solid ${service.borderColor}`,
              }}
            >
              <div
                className="flex items-center justify-center w-14 h-14 mb-6 rounded-full backdrop-blur-sm"
                style={{ backgroundColor: service.iconBg }}
              >
                <span style={{ color: service.iconColor }}>{service.icon}</span>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: service.textColor }}
              >
                {service.title}
              </h3>
              <p
                className="mb-6 opacity-90"
                style={{ color: service.textColor }}
              >
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-flex items-center font-semibold group"
                style={{ color: service.textColor }}
              >
                Learn more
                <HiArrowNarrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

import React from "react";
import {
  FaHandHoldingUsd,
  FaRegClock,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import image1 from "../../../assets/fintech/ch1.webp";
import image2 from "../../../assets/fintech/ch2.webp";
import image3 from "../../../assets/fintech/ch3.webp";
import image4 from "../../../assets/fintech/ch4.webp";
import { Link } from "react-router-dom";

const WhatWeDoFintech = () => {
  const services = [
    {
      icon: <FaHandHoldingUsd className="text-3xl" />,
      title: "Pay-Per-Hire Recruitment",
      description:
        "Results-based recruitment where clients pay a percentage of the hired candidate's annual salary.",
      image: image1,
      accent: "from-teal-400/80 to-emerald-400/80",
      path: "/pay-par-hire-services",
    },
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Subscription-Based Recruitment",
      description:
        "Ongoing recruitment support for a fixed monthly fee, ideal for consistent hiring needs.",
      image: image2,
      accent: "from-blue-400/80 to-cyan-400/80",
      path: "/subscription-services",
    },
    {
      icon: <FaRegClock className="text-3xl" />,
      title: "Hourly-Based Recruitment",
      description:
        "Billed based on actual hours spent sourcing candidates—transparent cost control.",
      image: image3,
      accent: "from-indigo-400/80 to-purple-400/80",
      path: "/hourly-recruiting-services",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Staffing Services",
      description:
        "Qualified professionals for specific tasks or projects, both short and long-term.",
      image: image4,
      accent: "from-violet-400/80 to-fuchsia-400/80",
      path: "/staffing-services",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          What We Do
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Innovative recruitment solutions tailored for fintech excellence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative h-full">
              <div className="h-full bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div
                  className={`absolute right-0 top-0 h-full w-1 bg-gradient-to-b ${service.accent}`}
                ></div>

                <div
                  className={`absolute left-0 top-0 w-full h-1 bg-gradient-to-r ${service.accent}`}
                ></div>

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                </div>

                <div
                  className={`absolute top-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br ${service.accent} flex items-center justify-center text-white shadow-lg border-2 border-white/30`}
                >
                  {service.icon}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={service.path}
                    className="text-sm font-medium text-white px-4 py-2 rounded-lg bg-gradient-to-r from-black/80 to-black/60 hover:from-black hover:to-black transition-all"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoFintech;

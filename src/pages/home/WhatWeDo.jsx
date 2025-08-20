import React from "react";
import {
  FaUserTie,
  FaSearch,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import DOMPurify from "dompurify";

const WhatWeDo = () => {
  const services = [
    {
      title: "Recruitment",
      description:
        "End-to-End Recruitment Solutions tailored to your business needs.",
      icon: <FaSearch className="text-2xl" />,
      backTitle: "Talent Acquisition",
      backDescription:
        "We find the perfect candidates for your organization, from screening to placement.",
      features: [
        "Executive Search",
        "Technical Recruitment",
        "Cultural Fit Assessment",
      ],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-blue-700",
      backColor: "bg-blue-600",
      link: "/recruitment-services",
    },
    {
      title: "HR Consulting",
      description:
        "Building Strong Employer Brands that attract and retain top talent.",
      icon: <FaUserTie className="text-2xl" />,
      backTitle: "HR Excellence",
      backDescription:
        "We help you develop HR strategies that drive organizational success.",
      features: [
        "Policy Development",
        "Performance Management",
        "Employee Engagement",
      ],
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-purple-700",
      backColor: "bg-purple-600",
      link: "/hr-services",
    },
    {
      title: "Outstaffing",
      description:
        "Flexible Staffing Solutions for peak performance and productivity.",
      icon: <FaHandshake className="text-2xl" />,
      backTitle: "Team Augmentation",
      backDescription:
        "Scale your workforce quickly with our vetted professionals.",
      features: ["Dedicated Teams", "Project-Based Staffing", "Quick Ramp-Up"],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-teal-500 to-teal-700",
      backColor: "bg-teal-600",
      link: "/staffing-services",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#000b30] via-[#0a1a4d] to-[#1a2a6b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-12 text-[#D4AF37]">
          What we do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group perspective">
              <div className="relative preserve-3d w-full h-[440px] rounded-2xl shadow-2xl transition-transform duration-700 group-hover:rotate-y-180">
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden flex flex-col justify-end p-6 text-white"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="bg-black/50 p-6 rounded-xl">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white/20 backdrop-blur-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-sm opacity-90">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl overflow-hidden backface-hidden rotate-y-180 flex flex-col justify-between p-6 text-white bg-gradient-to-br from-[#000b30] via-[#0a1a4d] to-[#1a2a6b]`}
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {service.backTitle}
                    </h3>
                    <p className="mb-4 text-gray-200">
                      {service.backDescription}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <FaCheckCircle className="text-yellow-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#c49b2f] px-4 py-2 rounded-lg font-semibold transition"
                  >
                    Learn more <HiArrowNarrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;

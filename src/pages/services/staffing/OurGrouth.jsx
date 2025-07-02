import React from "react";
import {
  FaRocket,
  FaBoxes,
  FaBrain,
  FaFlask,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Icon className="text-blue-600 text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex justify-between space-x-4">
        <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
          Check Prices
          <FaArrowRight className="ml-1 text-sm" />
        </button>
        <a
          href="/blogs"
          className="text-gray-600 font-medium hover:text-gray-800 flex items-center"
        >
          More Details
        </a>
      </div>
    </div>
  </div>
);

const OurGrowth = () => {
  const services = [
    {
      icon: FaRocket,
      title: "Boost Your Team with IT Staff Augmentation",
      description:
        "Quickly fill technical roles with highly skilled professionals who seamlessly integrate into your existing team.",
    },
    {
      icon: FaBoxes,
      title: "End-to-End Project-Based Outstaffing",
      description:
        "Let us assemble and manage a dedicated team to bring your project to life—from planning to delivery.",
    },
    {
      icon: FaBrain,
      title: "Build Your Own R&D Center",
      description:
        "Tap into our expertise in setting up Research & Development centers with top-tier talent and operational excellence.",
    },
    {
      icon: FaFlask,
      title: "Strengthen Quality with a QA Team",
      description:
        "Whether you need a single QA expert or a complete team, we provide seasoned professionals to ensure your product's quality.",
    },
    {
      icon: FaHeadset,
      title: "Set Up a Technical Support Hub",
      description:
        "Need a reliable support team? We help build or enhance your tech support operations with the right experts.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services to Power Your Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help companies scale faster, streamline operations, and boost
            profitability through smart staffing and tailored solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Second row with 2 centered cards */}
        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {services.slice(3).map((service, index) => (
              <ServiceCard
                key={index + 3}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGrowth;

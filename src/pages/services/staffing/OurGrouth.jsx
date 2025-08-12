import React from "react";
import {
  FaHandshake,
  FaUserTie,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-blue-200">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Icon className="text-blue-600 text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex justify-between space-x-4">
        <a
          href="/blogs"
          className="text-blue-600 font-medium hover:text-blue-800 flex items-center transition-colors"
        >
          Learn more <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  </div>
);

const OurServices = () => {
  const services = [
    {
      icon: FaHandshake,
      title: "Strategic Hiring Partnerships",
      description:
        "We become an extension of your HR team, delivering exceptional candidates who align perfectly with your company culture and values.",
    },
    {
      icon: FaUserTie,
      title: "Executive Talent Acquisition",
      description:
        "Find visionary leaders who inspire teams and drive organizational success through our discreet, high-touch search process.",
    },
    {
      icon: FaUsers,
      title: "High-Volume Recruitment",
      description:
        "Effortlessly scale your workforce with our streamlined processes that maintain quality while filling multiple roles quickly.",
    },
    {
      icon: FaChartLine,
      title: "Workforce Planning Solutions",
      description:
        "Proactively build talent pipelines and succession plans to future-proof your organization against market changes.",
    },
    {
      icon: FaLightbulb,
      title: "Employer Brand Development",
      description:
        "Transform your recruitment marketing to attract top performers by showcasing what makes your company truly special.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            People Solutions That Make the Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond matching resumes to job descriptions—we create{" "}
            <span className="font-semibold text-blue-600">
              meaningful connections
            </span>{" "}
            that drive organizational success and employee satisfaction.
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

export default OurServices;

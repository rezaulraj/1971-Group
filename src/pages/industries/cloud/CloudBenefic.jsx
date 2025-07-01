import React from "react";
import {
  FiDollarSign,
  FiClock,
  FiShield,
  FiUsers,
  FiAward,
  FiSearch,
  FiBriefcase,
  FiDatabase,
} from "react-icons/fi";
import barchart from "../../../assets/cloud/barc.webp";

const CloudBenefic = () => {
  const stats = [
    {
      icon: <FiDollarSign className="text-2xl" />,
      value: "$0",
      label: "prepayment to begin the hiring process",
    },
    {
      icon: <FiClock className="text-2xl" />,
      value: "3",
      label: "weeks on average to close a vacancy",
    },
    {
      icon: <FiShield className="text-2xl" />,
      value: "3",
      label: "months guarantee for the candidate",
    },
    {
      icon: <FiUsers className="text-2xl" />,
      value: "5",
      label: "technical interviews with the candidates per week",
    },
  ];

  const features = [
    {
      icon: <FiAward className="text-2xl" />,
      title: "Niche expertise",
      description:
        "In-depth knowledge of the area saving your time: we know all trends, industry insights, salary ranges, skill requirements, technologies, cloud certifications. Usually, our collaboration turns into fruitful long-term partnership with high values.",
    },
    {
      icon: <FiSearch className="text-2xl" />,
      title: "Hiring process",
      description:
        "We provide efficient sourcing, screening and selection to find candidates who are the best fit for your company. Moreover, we can support the onboarding process and provide you guidance in developing the employer brand.",
    },
    {
      icon: <FiDatabase className="text-2xl" />,
      title: "Talent pool",
      description:
        "Access to a database of experienced cloud computing specialists who align with your specific needs. Also, we have an extensive network and organize passive candidates search to engage and attract the best employees.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-blue-600/30 mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-center text-white/80">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-1 lg:order-none">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/20">
              <img
                src={barchart}
                alt="Cloud computing benefits"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudBenefic;

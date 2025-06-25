import React from "react";
import {
  FaSearch,
  FaChartLine,
  FaPuzzlePiece,
  FaGlobe,
  FaCreditCard,
  FaUsers,
} from "react-icons/fa";

const WhyChoseUsHr = () => {
  const features = [
    {
      icon: <FaSearch className="text-blue-300 text-2xl" />,
      title: "Comprehensive HR Audit",
      description:
        "We thoroughly assess your HR systems to identify gaps and recommend targeted improvements for better performance.",
    },
    {
      icon: <FaChartLine className="text-purple-300 text-2xl" />,
      title: "Actionable Insights",
      description:
        "Get a clear picture of your HR department's strengths and weaknesses, along with up-to-date industry trends and best practices.",
    },
    {
      icon: <FaPuzzlePiece className="text-green-300 text-2xl" />,
      title: "Tailored HR Solutions",
      description:
        "We design effective HR strategies quickly and efficiently—aligned with your goals and ready to deliver real results.",
    },
    {
      icon: <FaGlobe className="text-yellow-300 text-2xl" />,
      title: "Employer Branding Expertise",
      description:
        "Our team builds impactful employer brand strategies that help you attract top talent and retain key employees.",
    },
    {
      icon: <FaCreditCard className="text-red-300 text-2xl" />,
      title: "Flexible Payment Options",
      description:
        "Choose from multiple pricing plans and pay the way you prefer—whether via traditional banking or cryptocurrency.",
    },
    {
      icon: <FaUsers className="text-cyan-300 text-2xl" />,
      title: "Optimized Recruitment Support",
      description:
        "We improve your hiring process by refining recruitment strategies and offering hands-on support in talent acquisition.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#001153] via-[#1a2a6b] to-[#334380] opacity-95 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            We've helped over 80 companies streamline their HR processes, hit
            their goals, and boost profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-white/10 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mt-1">{feature.title}</h3>
              </div>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoseUsHr;

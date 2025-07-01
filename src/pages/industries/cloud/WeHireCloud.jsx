import React from "react";
import {
  FaCloud,
  FaRobot,
  FaChartLine,
  FaUserTie,
  FaProjectDiagram,
  FaShieldAlt,
  FaCode,
  FaServer,
  FaCogs,
  FaUserShield,
  FaComments,
  FaUserCog,
  FaDatabase,
  FaNetworkWired,
  FaWindows,
  FaSalesforce,
  FaMagic,
} from "react-icons/fa";

const WeHireCloud = () => {
  const positions = [
    {
      icon: <FaCloud className="text-xl" />,
      title: "Cloud Application Developer",
    },
    { icon: <FaRobot className="text-xl" />, title: "Cloud AI Engineer" },
    { icon: <FaChartLine className="text-xl" />, title: "Solution Architect" },
    { icon: <FaUserTie className="text-xl" />, title: "IT Director" },
    {
      icon: <FaProjectDiagram className="text-xl" />,
      title: "Product & Project Managers",
    },
    { icon: <FaCloud className="text-xl" />, title: "Cloud Architect" },
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: "Cloud Security Analyst",
    },
    { icon: <FaCode className="text-xl" />, title: "Cloud Software Engineer" },
    { icon: <FaServer className="text-xl" />, title: "Cloud Administrator" },
    { icon: <FaCloud className="text-xl" />, title: "Cloud Engineer" },
    { icon: <FaCogs className="text-xl" />, title: "DevOps Engineer" },
    {
      icon: <FaUserShield className="text-xl" />,
      title: "Cloud Security Engineer",
    },
    { icon: <FaComments className="text-xl" />, title: "Cloud Consultant" },
    {
      icon: <FaUserCog className="text-xl" />,
      title: "Cloud Security Manager",
    },
    { icon: <FaDatabase className="text-xl" />, title: "Cloud Data Scientist" },
    {
      icon: <FaChartLine className="text-xl" />,
      title: "Computer Systems Analyst",
    },
    {
      icon: <FaNetworkWired className="text-xl" />,
      title: "Cloud Network Engineer",
    },
    { icon: <FaWindows className="text-xl" />, title: ".NET Developer" },
    {
      icon: <FaSalesforce className="text-xl" />,
      title: "Cloud Computing Sales Specialists",
    },
    {
      icon: <FaMagic className="text-xl" />,
      title: "Cloud Automation Engineer",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We hire <span className="text-blue-600">Cloud</span> talent
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connecting companies with top cloud computing professionals across
            all specialties
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {position.icon}
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {position.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300">
            Find Your Cloud Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeHireCloud;

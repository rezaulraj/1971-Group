import React from "react";
import {
  FaBitcoin,
  FaRobot,
  FaMoneyBillWave,
  FaCloud,
  FaShip,
  FaPhoneAlt,
  FaShoppingCart,
  FaShieldAlt,
  FaMicrochip,
  FaPlane,
  FaGamepad,
  FaChartLine,
  FaGraduationCap,
  FaMedkit,
  FaTshirt,
} from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Industries = () => {
  const industries = [
    {
      name: "Web3",
      icon: <FaBitcoin />,
      gradient: "bg-gradient-to-br from-purple-600 to-indigo-600",
    },
    {
      name: "AI & ML",
      icon: <FaRobot />,
      gradient: "bg-gradient-to-br from-rose-500 to-pink-600",
    },
    {
      name: "FinTech",
      icon: <FaMoneyBillWave />,
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    },
    {
      name: "Cloud",
      icon: <FaCloud />,
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      name: "Crewing",
      icon: <FaShip />,
      gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      name: "Telecom",
      icon: <FaPhoneAlt />,
      gradient: "bg-gradient-to-br from-violet-500 to-purple-600",
    },
    {
      name: "E-commerce",
      icon: <FaShoppingCart />,
      gradient: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
    },
    {
      name: "Cybersecurity",
      icon: <FaShieldAlt />,
      gradient: "bg-gradient-to-br from-red-500 to-rose-600",
    },
    {
      name: "Hardware",
      icon: <FaMicrochip />,
      gradient: "bg-gradient-to-br from-gray-500 to-blue-600",
    },
    {
      name: "Travel",
      icon: <FaPlane />,
      gradient: "bg-gradient-to-br from-sky-500 to-blue-600",
    },
    {
      name: "Gaming",
      icon: <FaGamepad />,
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      name: "MarkTech",
      icon: <FaChartLine />,
      gradient: "bg-gradient-to-br from-yellow-500 to-amber-600",
    },
    {
      name: "Edtech",
      icon: <FaGraduationCap />,
      gradient: "bg-gradient-to-br from-indigo-500 to-blue-600",
    },
    {
      name: "Medtech",
      icon: <FaMedkit />,
      gradient: "bg-gradient-to-br from-red-500 to-orange-600",
    },
    {
      name: "Fashion",
      icon: <FaTshirt />,
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#001153] via-[#1a2a6b] to-[#334380] opacity-95">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-50 max-w-3xl mx-auto">
            Tailored solutions for your industry's unique challenges
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`${industry.gradient} rounded-lg p-4 text-white shadow-sm hover:-translate-y-2 duration-500 transition-transform`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-3">
                  <span className="text-lg text-blue-600">
                    {industry.icon}
                  </span>
                </div>
                <h3 className="font-medium text-sm md:text-base">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Explore industry solutions
            <HiOutlineArrowNarrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;

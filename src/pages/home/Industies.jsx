import React from "react";
import {
  FaHammer,
  FaBolt,
  FaWrench,
  FaFire,
  FaCar,
  FaTruck,
  FaTools,
  FaIndustry,
  FaCog,
  FaBroom,
  FaTruckLoading,
  FaFish,
  FaTractor,
  FaPaintRoller,
} from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      name: "Construction",
      icon: <FaHammer className="text-2xl" />,
      gradient: "bg-gradient-to-br from-amber-600 to-orange-600",
    },
    {
      name: "Electrician",
      icon: <FaBolt />,
      gradient: "bg-gradient-to-br from-yellow-500 to-amber-600",
    },
    {
      name: "Plumber",
      icon: <FaWrench />,
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      name: "Welder",
      icon: <FaFire />,
      gradient: "bg-gradient-to-br from-red-500 to-orange-600",
    },
    {
      name: "Mechanic",
      icon: <FaCar />,
      gradient: "bg-gradient-to-br from-gray-500 to-blue-600",
    },
    {
      name: "Truck Driver",
      icon: <FaTruck />,
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
    {
      name: "Carpenter",
      icon: <FaTools />,
      gradient: "bg-gradient-to-br from-amber-500 to-brown-600",
    },
    {
      name: "HVAC Tech",
      icon: <FaIndustry />,
      gradient: "bg-gradient-to-br from-teal-500 to-blue-600",
    },
    {
      name: "Factory Worker",
      icon: <FaCog />,
      gradient: "bg-gradient-to-br from-gray-600 to-blue-700",
    },
    {
      name: "Maintenance",
      icon: <FaWrench />,
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      name: "Janitorial",
      icon: <FaBroom />,
      gradient: "bg-gradient-to-br from-gray-400 to-gray-600",
    },
    {
      name: "Delivery",
      icon: <FaTruckLoading />,
      gradient: "bg-gradient-to-br from-blue-400 to-indigo-600",
    },
    {
      name: "Fishing",
      icon: <FaFish />,
      gradient: "bg-gradient-to-br from-blue-500 to-teal-600",
    },
    {
      name: "Agriculture",
      icon: <FaTractor />,
      gradient: "bg-gradient-to-br from-green-600 to-lime-600",
    },
    {
      name: "Painting",
      icon: <FaPaintRoller />,
      gradient: "bg-gradient-to-br from-teal to-gray-300",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#001153] via-[#1a2a6b] to-[#334380] opacity-95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-50 max-w-3xl mx-auto">
            Skilled professionals for your industry needs
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`${industry.gradient} rounded-lg p-4 text-white shadow-sm hover:-translate-y-2 duration-500 transition-transform`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">{industry.icon}</span>
                </div>
                <h3 className="font-medium text-sm md:text-base">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/industries"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            More Details Info
            <HiOutlineArrowNarrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries;

import React, { useState } from "react";
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
  FaHatCowboy,
  FaTree,
  FaTshirt,
  FaTrain,
  FaRecycle,
  FaCut,
  FaUtensils,
  FaBreadSlice,
  FaDrumstickBite,
  FaBoxes,
  FaAnchor,
  FaMountain,
  FaUmbrellaBeach,
  FaPlaneDeparture,
} from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { GiCargoShip, GiWoodBeam } from "react-icons/gi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdOutlineRoomService } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      name: "Education",
      icon: <PiStudentBold className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Tourism",
      icon: <FaPlaneDeparture className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?q=80&w=825&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Hospitality",
      icon: <MdOutlineRoomService className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Construction",
      icon: <FaHammer className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      name: "Electrician",
      icon: <FaBolt className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Plumber",
      icon: <FaWrench className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1663045495725-89f23b57cfc5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Welder",
      icon: <FaFire className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661963236181-9eb0c8d766e3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mechanic",
      icon: <FaCar className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1674375348357-a25140a68bbd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shipbuilding",
      icon: <GiCargoShip className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1677535509270-2e557eb1ad4f?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Truck Driver",
      icon: <FaTruck className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661637686969-7fbcea8789ad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Security Guard",
      icon: <FaShieldHalved className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1618371731836-2b9bff9ac72a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Carpenter",
      icon: <FaTools className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1664300494539-313eac2a6095?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Wood Industry",
      icon: <GiWoodBeam className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1663133662619-dc71fedecfaa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "HVAC Tech",
      icon: <FaIndustry className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661315526732-271aa84f480d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Factory Worker",
      icon: <FaCog className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1652211955967-99c892925469?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Office Staff",
      icon: <FaCog className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1652211955967-99c892925469?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Maintenance",
      icon: <FaWrench className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661644841013-fe5a56d28e7e?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Janitorial",
      icon: <FaBroom className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661662917928-b1a42a08d094?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Delivery",
      icon: <FaTruckLoading className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661342486992-2a08d4b466ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Fishing",
      icon: <FaFish className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Agriculture",
      icon: <FaTractor className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661907005604-cec7ffb6a042?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Painting",
      icon: <FaPaintRoller className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1589357209136-dfcfc6e7363d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mining",
      icon: <FaMountain className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dock Worker",
      icon: <FaAnchor className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1578575436981-9b5f47c8dea9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Steelworker",
      icon: <FaIndustry className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661937421215-e27b8feb8b2d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Warehouse Worker",
      icon: <FaBoxes className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661537879964-0552c60d30c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cook",
      icon: <FaUtensils className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1673830185931-40661a11948f?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      name: "Recycling Worker",
      icon: <FaRecycle className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1717667745830-de42bb75a4fa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Butcher",
      icon: <FaDrumstickBite className="text-xl" />,
      image:
        "https://plus.unsplash.com/premium_photo-1682129511550-6a1a403caa75?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Textile Worker",
      icon: <FaTshirt className="text-xl" />,
      image:
        "https://images.unsplash.com/photo-1741176505800-caaa3a52631a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F6F1EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000b30] mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Skilled professionals for your industry needs
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative h-40 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: `url(${industry.image})`,
                  transform: hoveredCard === index ? "scale(1.1)" : "scale(1)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-end p-4 text-white">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center mb-2 shadow-md">
                  <span className="text-white">{industry.icon}</span>
                </div>
                <h3 className="font-medium text-sm md:text-base text-center">
                  {industry.name}
                </h3>
              </div>

              <div
                className="absolute bottom-0 left-0 h-1 bg-[#D4AF37] transition-all duration-300"
                style={{ width: hoveredCard === index ? "100%" : "0%" }}
              ></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/industries"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#000b30] to-[#1a2a6b] hover:from-[#1a2a6b] hover:to-[#000b30] transition-all duration-300 cursor-pointer"
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

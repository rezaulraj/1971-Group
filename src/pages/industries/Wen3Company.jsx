import React from "react";
import {
  FaHandshake,
  FaClock,
  FaShieldAlt,
  FaUserCheck,
  FaChartLine,
} from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import web3image from "../../assets/web/web3card.jpg";

const Web3Company = () => {
  const stats = [
    {
      icon: <GiTakeMyMoney className="text-3xl" />,
      value: "$0 Prepayment",
      description: "Start the hiring process with no upfront cost",
    },
    {
      icon: <FaClock className="text-3xl" />,
      value: "3 Weeks to Hire",
      description: "Average time to fill your vacancy",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      value: "3-Month Guarantee",
      description: "We stand by our placements",
    },
    {
      icon: <FaUserCheck className="text-3xl" />,
      value: "5 Interviews Weekly",
      description: "Consistent candidate evaluations",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      value: "10/10 NPS",
      description: "Our clients love working with us",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black py-24">
      {/* Background Image with Lighting Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${web3image})` }}
      ></div>

      {/* Animated Bubbles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${
            i % 3 === 0
              ? "bg-blue-400/10"
              : i % 3 === 1
              ? "bg-purple-400/10"
              : "bg-emerald-400/10"
          } backdrop-blur-sm`}
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 25 + 15}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
            filter: `blur(${Math.random() * 10 + 5}px)`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Building Dream Teams
            </span>{" "}
            for Web3 Success
          </h2>
          <p className="text-xl text-gray-300">
            We help Web3 companies assemble top-tier teams to launch innovative
            products and scale their businesses effectively.
          </p>
        </div>

        {/* Glass Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl border-r-4 border-b-4 p-8 backdrop-blur-sm transition-all duration-500 hover:backdrop-blur-md"
            >
              {/* Glass Background with Different Effects */}
              <div
                className={`absolute inset-0 ${
                  index % 5 === 0
                    ? "bg-blue-400/10"
                    : index % 5 === 1
                    ? "bg-purple-400/10"
                    : index % 5 === 2
                    ? "bg-emerald-400/10"
                    : index % 5 === 3
                    ? "bg-amber-400/10"
                    : "bg-rose-400/10"
                } border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-white/20`}
              ></div>

              {/* Inner Glow */}
              <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center text-center">
                <div className="p-4 mb-6 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-300">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30">
            <span className="relative z-10">Start Building Your Team</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(${Math.random() * 100 - 50}px, ${
        Math.random() * 100 - 50
      }px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-to);
        }
      `}</style>
    </section>
  );
};

export default Web3Company;

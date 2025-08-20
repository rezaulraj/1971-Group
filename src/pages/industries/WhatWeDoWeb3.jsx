import React from "react";
import { FaUserTie, FaClock, FaUsers, FaHandshake } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";

const WhatWeDoWeb3 = () => {
  const services = [
    {
      title: "Pay-Per-Hire Recruiting",
      description: "Only pay when you successfully hire",
      icon: <GiTakeMyMoney className="text-3xl" />,
      color: "from-purple-500/20 to-blue-600/30",
      border:
        "border-r-6 border-t-6 hover:rounded-3xl hover:border-r-8 hover:border-t-8 hover:border-purple-500/40 hover:border-blue-600/50",
    },
    {
      title: "Subscription Recruiting",
      description: "Unlimited hiring support for a fixed monthly fee",
      icon: <BsFillCreditCardFill className="text-3xl" />,
      color: "from-emerald-500/20 to-teal-600/30",
      border:
        "border-r-6 border-t-6 hover:rounded-3xl hover:border-r-8 hover:border-t-8 hover:border-emerald-500/40 hover:border-teal-600/50",
    },
    {
      title: "Hourly Rate Recruitment",
      description: "Flexible recruitment support, paid by the hour",
      icon: <FaClock className="text-3xl" />,
      color: "from-amber-500/20 to-orange-600/30",
      border:
        "border-r-6 border-t-6 hover:rounded-3xl hover:border-r-8 hover:border-t-8 hover:border-amber-500/40 hover:border-orange-600/50",
    },
    {
      title: "Staffing Solutions",
      description: "Temporary or permanent staffing tailored to your needs",
      icon: <FaUsers className="text-3xl" />,
      color: "from-pink-500/20 to-rose-600/30",
      border:
        "border-r-6 border-t-6 hover:rounded-3xl hover:border-r-8 hover:border-t-8 hover:border-pink-500/40 hover:border-rose-600/50",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-400/10 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 20 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
            Recruitment Models
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 ${service.border}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-500 group-hover:backdrop-blur-lg group-hover:border-white/20`}
              ></div>

              <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 h-full p-8 flex flex-col">
                <div className="mb-6 p-4 bg-white/10 rounded-xl w-fit backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-blue-100 mb-6">{service.description}</p>

                <div className="mt-auto flex items-center text-blue-300 group-hover:text-white transition-colors duration-300">
                  <span>More Details</span>
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true" global="true">{`
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

export default WhatWeDoWeb3;

import React from "react";
import {
  FaBitcoin,
  FaExchangeAlt,
  FaChartLine,
  FaHandHoldingUsd,
  FaMoneyBillWave,
  FaRobot,
  FaPiggyBank,
  FaMobileAlt,
  FaCalculator,
  FaCreditCard,
  FaShieldAlt,
} from "react-icons/fa";

const AreaOfWork = () => {
  const services = [
    {
      icon: <FaBitcoin className="text-3xl" />,
      title: "Blockchain",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <FaExchangeAlt className="text-3xl" />,
      title: "Exchange",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Investment",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <FaHandHoldingUsd className="text-3xl" />,
      title: "Crowdfunding",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl" />,
      title: "Digital money",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: <FaRobot className="text-3xl" />,
      title: "Robo-advisors",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <FaPiggyBank className="text-3xl" />,
      title: "Brokerage Services",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Online banking",
      color: "from-blue-400 to-sky-500",
    },
    {
      icon: <FaCalculator className="text-3xl" />,
      title: "Mobile payments",
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      icon: <FaCreditCard className="text-3xl" />,
      title: "Budgeting Apps",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Payment",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Insurance",
      color: "from-gray-500 to-gray-700",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        {/* Unique Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 mb-4">
            Area Of Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-300 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden">
              {/* Glass Card */}
              <div
                className={`h-full bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center`}
              >
                {/* Gradient Circle */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/50 transition-all duration-500 pointer-events-none`}
                ></div>
              </div>

              {/* Floating Gradient Dot */}
              <div
                className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default AreaOfWork;

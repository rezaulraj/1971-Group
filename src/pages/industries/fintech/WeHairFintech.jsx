import React from "react";
import {
  FaChartLine,
  FaMobileAlt,
  FaUserTie,
  FaEthereum,
  FaUserCog,
  FaShieldAlt,
  FaCode,
  FaProjectDiagram,
  FaLaptopCode,
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaLock,
  FaMoneyBillWave,
  FaUserMd,
  FaCalculator,
  FaDatabase,
} from "react-icons/fa";

const WeHireFintech = () => {
  const positions = [
    {
      icon: <FaChartLine className="text-xl" />,
      title: "Quantitative Analyst",
    },
    {
      icon: <FaMobileAlt className="text-xl" />,
      title: "FinTech App Developer",
    },
    { icon: <FaUserTie className="text-xl" />, title: "Account Executive" },
    { icon: <FaEthereum className="text-xl" />, title: "Blockchain Developer" },
    { icon: <FaUserCog className="text-xl" />, title: "FinTech C-levels" },
    {
      icon: <FaShieldAlt className="text-xl" />,
      title: "Compliance Expert or Regulatory Compliance",
    },
    {
      icon: <FaCode className="text-xl" />,
      title: "FinTech Software Engineer",
    },
    {
      icon: <FaProjectDiagram className="text-xl" />,
      title: "FinTech Product & Project Managers",
    },
    {
      icon: <FaLaptopCode className="text-xl" />,
      title: "FinTech Software Developer",
    },
    {
      icon: <FaFileInvoiceDollar className="text-xl" />,
      title: "Financial Analyst or Business Analyst",
    },
    {
      icon: <FaBalanceScale className="text-xl" />,
      title: "Risk Control Manager",
    },
    { icon: <FaLock className="text-xl" />, title: "Cybersecurity Analyst" },
    { icon: <FaMoneyBillWave className="text-xl" />, title: "Budget Analyst" },
    { icon: <FaUserMd className="text-xl" />, title: "Financial Manager" },
    {
      icon: <FaCalculator className="text-xl" />,
      title: "CFO (Chief Financial Officer)",
    },
    { icon: <FaDatabase className="text-xl" />, title: "Data Scientist" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-teal-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Hire <span className="text-teal-300">FinTech</span> Talent
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Connecting top financial technology professionals with innovative
            companies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-teal-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/10 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-teal-400/20 to-blue-400/20 group-hover:from-teal-400/30 group-hover:to-blue-400/30 transition-all">
                  {position.icon}
                </div>
                <h3 className="font-medium text-lg">{position.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-400/20 transition-all duration-300">
            Find Your FinTech Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeHireFintech;

import React from "react";
import {
  FaLock,
  FaUsers,
  FaBolt,
  FaSyncAlt,
  FaDollarSign,
  FaHandshake,
} from "react-icons/fa";

const KeyBenafic = () => {
  const benefits = [
    {
      icon: <FaLock className="text-blue-500" size={24} />,
      title: "Fixed Monthly Fee",
      description:
        "Enjoy the transparency of a fixed-fee recruitment model with clearly defined monthly payments outlined in the contract.",
    },
    {
      icon: <FaUsers className="text-green-500" size={24} />,
      title: "Dedicated Recruitment Team",
      description:
        "We assign a customized team of experienced sourcers and recruiters based on your specific hiring needs.",
    },
    {
      icon: <FaBolt className="text-yellow-500" size={24} />,
      title: "Fast & Reliable Hiring",
      description:
        "Recruitment begins immediately after the contract is signed. On average, we fill each vacancy within 3 weeks.",
    },
    {
      icon: <FaSyncAlt className="text-purple-500" size={24} />,
      title: "Replacement Guarantee",
      description:
        "We offer a 3-month candidate replacement guarantee. You'll also have real-time access to our CRM to track progress throughout the hiring process.",
    },
    {
      icon: <FaDollarSign className="text-red-500" size={24} />,
      title: "Reduced Hiring Costs",
      description:
        "Gain access to a talent pool of over 130,000 candidates—covering technical, non-technical, and executive-level roles—without excessive hiring expenses.",
    },
    {
      icon: <FaHandshake className="text-indigo-500" size={24} />,
      title: "Long-Term Partnership",
      description:
        "We believe in close, transparent collaboration focused on improving your recruitment, talent attraction, and employee retention strategies.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-4xl mb-12">
          Key Benefits of Our Recruitment Service
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-gray-900 p-3 rounded-md">
                  {benefit.icon}
                </div>
                <h3 className="ml-4 text-lg font-medium">{benefit.title}</h3>
              </div>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyBenafic;

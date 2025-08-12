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
        "Clear, predictable costs with a fixed-fee model, no hidden charges, just transparent monthly payments as outlined in your contract.",
    },
    {
      icon: <FaUsers className="text-green-500" size={24} />,
      title: "Dedicated Recruitment Team",
      description:
        "A tailored team of skilled sourcers and recruiters assigned specifically to meet your unique hiring goals.",
    },
    {
      icon: <FaBolt className="text-yellow-500" size={24} />,
      title: "Fast & Reliable Hiring",
      description:
        "We start recruiting as soon as your contract is signed, with an average time-to-fill of just 3 weeks per vacancy.",
    },
    {
      icon: <FaSyncAlt className="text-purple-500" size={24} />,
      title: "Replacement Guarantee",
      description:
        "Enjoy peace of mind with our 3-month candidate replacement guarantee, plus real-time CRM access to monitor progress every step of the way.",
    },
    {
      icon: <FaDollarSign className="text-red-500" size={24} />,
      title: "Reduced Hiring Costs",
      description:
        "Tap into a broad talent pool covering technical, non-technical, and executive roles, while reducing unnecessary hiring costs.",
    },
    {
      icon: <FaHandshake className="text-indigo-500" size={24} />,
      title: "Long-Term Partnership",
      description:
        "We focus on building lasting relationships, enhancing your recruitment, talent attraction, and employee retention strategies.",
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

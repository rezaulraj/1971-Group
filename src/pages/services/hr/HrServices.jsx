import React from "react";
import { FaFileAlt, FaBullseye, FaCrown, FaArrowRight } from "react-icons/fa";
import herohr1 from "../../../assets/hr/hero2.avif";
import herohr2 from "../../../assets/hr/hero3.jpg";
import herohr3 from "../../../assets/hr/hero4.jpg";
import { motion } from "framer-motion";
const HrServices = () => {
  const services = [
    {
      icon: <FaFileAlt className="text-blue-400 text-2xl" />,
      title: "How to Write a Job Description Aligned with Company Goals",
      description:
        "Discover how to craft job descriptions that reflect your company's mission and objectives—ensuring alignment between role expectations and business strategy.",
      image: herohr1,
      link: "#",
    },
    {
      icon: <FaBullseye className="text-purple-400 text-2xl" />,
      title: "Exclusive Recruitment & Headhunting",
      description:
        "Ideal for filling high-stakes roles, exclusive recruitment focuses on securing top-tier talent with niche expertise, often in competitive or specialized industries.",
      image: herohr2,
      link: "#",
    },
    {
      icon: <FaCrown className="text-amber-400 text-2xl" />,
      title: "Executive Search",
      description:
        "Our executive search service helps you find exceptional candidates for C-level and senior leadership roles. Let expert headhunters handle the complexity of recruiting top executives.",
      image: herohr3,
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Learn More About Our HR Services
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Expert solutions tailored to your organization's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-blue-900/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gray-900/80 backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>

              <div className="p-6 bg-gray-800/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-5">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
                >
                  Learn more
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HrServices;

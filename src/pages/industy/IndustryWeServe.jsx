import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiTool,
  FiHome,
  FiCoffee,
  FiCheckCircle,
  FiUsers,
  FiClock,
  FiAward,
  FiPackage,
  FiTruck,
  FiArrowRight,
} from "react-icons/fi";
import { FaHardHat } from "react-icons/fa";
import { BiDroplet } from "react-icons/bi";
import { LuCloudRainWind, LuFactory, LuZap } from "react-icons/lu";
import { GiAnchor } from "react-icons/gi";
import indus1 from "../../assets/industry/indus1.avif?url";
import indus2 from "../../assets/industry/indus2.avif?url";
import indus3 from "../../assets/industry/indus3.avif?url";
import indus4 from "../../assets/industry/indus4.avif?url";
import indus5 from "../../assets/industry/indus5.avif?url";
import indus6 from "../../assets/industry/indus6.avif?url";
import indus7 from "../../assets/industry/indus7.avif?url";
import indus8 from "../../assets/industry/indus8.avif?url";
import indus9 from "../../assets/industry/indus9.avif?url";
import indus10 from "../../assets/industry/indus10.avif?url";
import indus11 from "../../assets/industry/indus11.avif?url";
import indus12 from "../../assets/industry/indus12.avif?url";
import Calendly from "../../components/Calendly";

const IndustryWeServe = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const industries = [
    {
      title: "Warehouse & Logistics",
      description:
        "Comprehensive staffing for all warehouse operations including receiving, inventory management, order fulfillment, and shipping. Our associates are trained in WMS systems, forklift operation, and safety protocols.",
      keyRoles: [
        "Warehouse Associates",
        "Forklift Operators",
        "Inventory Specialists",
        "Shipping/Receiving Clerks",
        "Order Pickers",
      ],
      benefits: [
        "Certified equipment operators",
        "Seasonal staffing flexibility",
        "Safety-trained workforce",
        "Inventory accuracy focus",
      ],
      image: indus1,
      icon: <FiPackage className="text-2xl" />,
      flip: false,
    },
    {
      title: "Delivery & Transportation",
      description:
        "Reliable staffing solutions for last-mile delivery, freight transport, and distribution networks. Our drivers are certified, safety-conscious, and experienced with various vehicle types and navigation systems.",
      keyRoles: [
        "Delivery Drivers",
        "CDL Truck Drivers",
        "Couriers",
        "Route Drivers",
        "Dispatcher",
      ],
      benefits: [
        "Verified driving records",
        "GPS navigation trained",
        "Customer service skills",
        "Timeliness focus",
      ],
      image: indus2,
      icon: <FiTruck className="text-2xl" />,
      flip: true,
    },
    {
      title: "Cleaning & Sanitation",
      description:
        "Professional cleaning staff for commercial, industrial and residential properties. Our teams are trained in proper sanitation techniques, chemical handling, and specialized equipment operation.",
      keyRoles: [
        "Janitorial Staff",
        "Housekeepers",
        "Sanitation Workers",
        "Window Cleaners",
        "Carpet Cleaners",
      ],
      benefits: [
        "Eco-friendly cleaning trained",
        "Detail-oriented",
        "Reliable scheduling",
        "Bonded and insured",
      ],
      image: indus3,
      icon: <BiDroplet className="text-2xl" />,
      flip: false,
    },
    {
      title: "Electrical Services",
      description:
        "Skilled electricians for residential, commercial and industrial projects. Our technicians are licensed, safety-certified, and experienced in both new installations and maintenance work.",
      keyRoles: [
        "Electricians",
        "Electrical Helpers",
        "Maintenance Electricians",
        "Low Voltage Technicians",
        "Panel Builders",
      ],
      benefits: [
        "Licensed professionals",
        "OSHA safety trained",
        "Code compliance",
        "Emergency service available",
      ],
      image: indus4,
      icon: <LuZap className="text-2xl" />,
      flip: true,
    },
    {
      title: "Plumbing Services",
      description:
        "Complete plumbing staffing solutions from new construction to service repairs. Our plumbers are certified in pipe fitting, fixture installation, drain cleaning, and emergency leak repair.",
      keyRoles: [
        "Plumbers",
        "Pipefitters",
        "Steamfitters",
        "Sprinkler Fitters",
        "Drain Technicians",
      ],
      benefits: [
        "Licensed professionals",
        "24/7 emergency service",
        "Preventive maintenance",
        "Water conservation expertise",
      ],
      image: indus5,
      icon: <BiDroplet className="text-2xl" />,
      flip: false,
    },
    {
      title: "Agriculture & Farming",
      description:
        "Seasonal and permanent staffing for all agricultural operations including planting, harvesting, processing and livestock care. Workers are experienced with modern farming equipment and techniques.",
      keyRoles: [
        "Farm Workers",
        "Harvesters",
        "Equipment Operators",
        "Livestock Handlers",
        "Nursery Workers",
      ],
      benefits: [
        "Seasonal availability",
        "Equipment trained",
        "Physically fit candidates",
        "H2A program compliant",
      ],
      image: indus6,
      icon: <LuCloudRainWind className="text-2xl" />,
      flip: true,
    },
    {
      title: "Fishing & Marine",
      description:
        "Experienced crew for commercial fishing, aquaculture and marine operations. Our maritime workers are safety-certified and knowledgeable about fishing techniques, equipment maintenance and seafood processing.",
      keyRoles: [
        "Fishing Crew",
        "Boat Deckhands",
        "Seafood Processors",
        "Aquaculture Technicians",
        "Marine Maintenance",
      ],
      benefits: [
        "Safety certified",
        "Equipment trained",
        "Physically capable",
        "Seasonal availability",
      ],
      image: indus7,
      icon: <GiAnchor className="text-2xl" />,
      flip: false,
    },
    {
      title: "Construction & Infrastructure",
      description:
        "We provide complete staffing solutions for projects ranging from residential builds to large-scale infrastructure. Our professionals are certified, safety-focused, and experienced in modern construction techniques.",
      keyRoles: [
        "Skilled laborers",
        "Specialized trades (electricians, plumbers)",
        "Site supervisors",
        "Project managers",
        "Heavy equipment operators",
      ],
      benefits: [
        "Rapid hiring for critical roles",
        "Safety-certified workforce",
        "Scalable team sizes",
        "Specialized trade expertise",
      ],
      image: indus8,
      icon: <FaHardHat className="text-2xl" />,
      flip: true,
    },
    {
      title: "Manufacturing & Industrial",
      description:
        "We supply skilled personnel to keep your operations running smoothly whether for assembly, machining, welding, or industrial maintenance. Our staffing solutions cover both peak seasonal demand and long-term expansion needs.",
      keyRoles: [
        "Production line operators",
        "Quality control inspectors",
        "Maintenance technicians",
        "Inventory specialists",
      ],
      benefits: [
        "Reduced downtime",
        "Flexible staffing models",
        "Verified technical skills",
        "Cross-trained personnel",
      ],
      image: indus9,
      icon: <LuFactory className="text-2xl" />,
      flip: false,
    },
    {
      title: "Facility Management & Maintenance",
      description:
        "We deliver full facility support teams from specialized equipment maintenance to daily cleaning operations. Our staff are trained in preventive maintenance, energy efficiency, and emergency response protocols.",
      keyRoles: [
        "HVAC technicians",
        "Electrical maintenance specialists",
        "Janitorial staff",
        "Groundskeepers",
      ],
      benefits: [
        "24/7 emergency coverage",
        "Certified technicians",
        "Customized service plans",
        "Preventive maintenance focus",
      ],
      image: indus10,
      icon: <FiTool className="text-2xl" />,
      flip: true,
    },
    {
      title: "Hospitality & Service Roles",
      description:
        "From boutique hotels to large resorts, we provide service-trained professionals to enhance guest satisfaction. Our staff are trained in customer service excellence, cultural fit, and event readiness.",
      keyRoles: [
        "Housekeeping",
        "Food service staff",
        "Front desk personnel",
        "Event support teams",
      ],
      benefits: [
        "Service-trained personnel",
        "Flexible scheduling",
        "Cultural fit matching",
        "Multilingual staff available",
      ],
      image: indus11,
      icon: <FiCoffee className="text-2xl" />,
      flip: false,
    },
    {
      title: "Woodwork & Carpentry",
      description:
        "We connect you with master craftsmen for high-end, custom carpentry as well as production-oriented projects. All workers are vetted for craftsmanship, material expertise, and blueprint literacy.",
      keyRoles: [
        "Custom furniture makers",
        "Cabinet installers",
        "Finish carpenters",
        "Millwork specialists",
      ],
      benefits: [
        "Artisan-level craftsmanship",
        "Expertise in materials and finishes",
        "Attention to detail",
        "Quality-driven results",
      ],
      image: indus12,
      icon: <FiHome className="text-2xl" />,
      flip: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const flipImageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const benefitItem = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative overflow-hidden py-20 bg-[#F6F1EE]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#000b30]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#000b30] mb-6">
            Comprehensive Workforce Solutions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Specialized staffing across all major industries, matching skilled
            workers with your operational needs.
          </p>
        </motion.div>

        {/* Industry Sections */}
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className={`mb-20 flex flex-col ${
              industry.flip ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-12`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Image Section */}
            <motion.div
              className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl"
              variants={industry.flip ? flipImageVariants : imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-auto md:h-96 object-cover aspect-video"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  {industry.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#000b30]">
                  {industry.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {industry.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-[#000b30] mb-3 flex items-center gap-2">
                  <FiUsers className="text-[#D4AF37]" />
                  Key Roles:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {industry.keyRoles.map((role, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 bg-white p-3 rounded-lg border border-white/20"
                      variants={benefitItem}
                      custom={i}
                      whileHover={{
                        x: 5,
                        borderColor: "#D4AF37",
                      }}
                    >
                      <FiAward className="text-[#D4AF37]" />
                      {role}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-[#000b30] mb-3 flex items-center gap-2">
                  <FiCheckCircle className="text-[#D4AF37]" />
                  Your Benefits:
                </h4>
                <ul className="space-y-3">
                  {industry.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 p-4 bg-white rounded-lg border border-white/20"
                      variants={benefitItem}
                      custom={i}
                      whileHover={{
                        x: 5,
                        borderColor: "#D4AF37",
                      }}
                    >
                      <FiCheckCircle className="mt-1 text-[#D4AF37] flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <motion.div
                className="bg-gradient-to-r from-[#000b30]/10 to-[#1a2a6b]/10 p-6 rounded-xl border border-[#D4AF37]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-lg text-[#000b30]">
                      Need {industry.title} Staff?
                    </h4>
                    <p className="text-gray-700">
                      Get qualified professionals within 48 hours
                    </p>
                  </div>
                  <button
                    onClick={() => setShowCalendly(true)}
                    className="bg-gradient-to-r from-[#D4AF37] to-[#c6a22f] hover:from-[#c6a22f] hover:to-[#D4AF37] text-[#000b30] font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
                  >
                    Request Staff
                    <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}

        {/* Global CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#000b30] to-[#1a2a6b] p-12 rounded-2xl text-center my-20 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Build Your Ideal Team?
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Our staffing specialists are ready to discuss your unique workforce
            needs across all industries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setShowCalendly(true)}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
            >
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              Call Now: (123) 456-7890
            </button>
          </div>
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default IndustryWeServe;

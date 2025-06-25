import React from "react";
import { motion } from "framer-motion";
import subscriptionImage from "../../../assets/subscription/herosub.jpeg?url";
import clogo1 from "../../../assets/home/l1.webp?url";
import clogo2 from "../../../assets/home/l2.webp?url";
import clogo3 from "../../../assets/home/l3.webp?url";
import clogo4 from "../../../assets/home/l4.webp?url";
import clogo5 from "../../../assets/home/l5.webp?url";
import {
  FaArrowRight,
  FaMoneyBillWave,
  FaBullseye,
  FaUsers,
} from "react-icons/fa";

const ClientLogo = ({ src, alt }) => (
  <div className="mx-4 lg:mx-8 inline-flex items-center">
    <img
      src={src}
      alt={alt}
      className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
      loading="lazy"
    />
  </div>
);

const BenefitCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg"
  >
    <div className="flex items-start mb-3">
      <div className="bg-white/10 p-3 rounded-full mr-4 backdrop-blur-sm">
        <Icon className="text-white text-xl" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 pl-14">{description}</p>
  </motion.div>
);

const HeroSubscription = () => {
  const clients = [
    { src: clogo1, alt: "Client 1" },
    { src: clogo2, alt: "Client 2" },
    { src: clogo3, alt: "Client 3" },
    { src: clogo4, alt: "Client 4" },
    { src: clogo5, alt: "Client 5" },
  ];

  const benefits = [
    {
      icon: FaMoneyBillWave,
      title: "💰 Significant Cost Savings",
      description:
        "Up to 45% more affordable than pay-per-hire models and as much as 90% less expensive than managing in-house recruitment.",
    },
    {
      icon: FaBullseye,
      title: "🎯 Customized & Scalable Hiring",
      description:
        "We offer on-demand recruitment tailored to your needs—filling positions in any volume with flexible, scalable solutions.",
    },
    {
      icon: FaUsers,
      title: "👥 Fully Dedicated Hiring Team",
      description:
        "A sourcer and recruiter are assigned to work exclusively on your project, providing 24/7 support and continuous candidate delivery.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section - New Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6]">
        {/* SVG Grid Background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M15 15h30v30H15z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Subscription-Based Recruitment
            </h1>
            <p className="text-xl mb-8 opacity-90">
              We offer ongoing recruitment support through a monthly
              subscription model, delivering qualified candidates as needed to
              fill your open roles.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300 flex items-center group"
              aria-label="Book a call about subscription services"
            >
              Schedule a Call
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Right Side - Main Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30"
          >
            <img
              src={subscriptionImage}
              alt="Subscription recruitment team"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/50 via-transparent to-transparent"></div>
          </motion.div>

          {/* Client Logo Carousel */}
          <div className="md:col-span-2 relative py-8 overflow-hidden bg-white/10 backdrop-blur-sm border-t border-b border-white/20">
            <div className="text-center text-sm font-medium text-white mb-4">
              Trusted by Leading Brands
            </div>
            <div
              className="flex items-center justify-center animate-marquee whitespace-nowrap"
              aria-hidden="true"
            >
              {[...clients, ...clients].map((client, idx) => (
                <ClientLogo key={idx} src={client.src} alt={client.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default HeroSubscription;

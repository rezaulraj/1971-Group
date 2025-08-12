import React from "react";
import { motion } from "framer-motion";
import subscriptionImage from "../../../assets/subscription/herosub.jpeg?url";
import clogo1 from "../../../assets/clined/cl1.png?url";
import clogo2 from "../../../assets/clined/cl2.png?url";
import clogo3 from "../../../assets/clined/cl3.png?url";
import clogo4 from "../../../assets/clined/cl4.png?url";
import clogo5 from "../../../assets/clined/cl5.png?url";
import clogo6 from "../../../assets/clined/cl6.png?url";
import clogo7 from "../../../assets/clined/cl7.png?url";
import clogo8 from "../../../assets/clined/cl8.png?url";
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
      className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
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
  const ourClient = [
    { clogo: clogo1 },
    { clogo: clogo2 },
    { clogo: clogo3 },
    { clogo: clogo4 },
    { clogo: clogo5 },
    { clogo: clogo6 },
    { clogo: clogo7 },
    { clogo: clogo8 },
  ];

  const benefits = [
    {
      icon: FaMoneyBillWave,
      title: "💰 Significant Cost Savings",
      description:
        "Reduce hiring expenses by up to 45% compared to pay-per-hire models, and cut costs by as much as 90% versus maintaining an in-house recruitment team.",
    },
    {
      icon: FaBullseye,
      title: "🎯 Customized & Scalable Hiring",
      description:
        "Get recruitment solutions built around your needs whether it’s one role or a hundred. Our flexible, on-demand approach scales effortlessly with your business.",
    },
    {
      icon: FaUsers,
      title: "👥 Dedicated Recruitment Experts",
      description:
        "Enjoy the full attention of a dedicated sourcer and recruiter assigned exclusively to your project, ensuring 24/7 support and a steady stream of qualified candidates.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#b84353] to-[#f63b92]">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M15 15h30v30H15z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Subscription Recruitment Services
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              Hire Smarter. Scale Faster.
            </p>
            <p className="text-lg mb-8 opacity-90">
              We offer monthly, embedded recruitment support to help you fill
              open roles quickly, consistently, and cost-effectively.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300 flex items-center group"
              aria-label="Book a call about subscription services"
            >
              Book a Call
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

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

          <div className="md:col-span-2 relative py-8 overflow-hidden bg-white/10 backdrop-blur-sm border-t border-b border-white/20">
            <div className="text-center text-2xl font-medium text-white mb-4">
              Trusted by Leading Brands
            </div>
            <div
              className="flex items-center justify-center animate-marquee whitespace-nowrap"
              aria-hidden="true"
            >
              {[...ourClient, ...ourClient].map((client, idx) => (
                <ClientLogo key={idx} src={client.clogo} alt="cliend logo" />
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <style jsx="true">{`
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

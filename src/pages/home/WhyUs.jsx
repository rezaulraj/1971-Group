import React, { useEffect, useRef, useState } from "react";
import {
  FaGlobeAmericas,
  FaUserCheck,
  FaClock,
  FaDatabase,
} from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion, useInView, useAnimation } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import Calendly from "../../components/Calendly";
const AnimatedNumber = ({ value }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5 },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.span ref={ref} animate={controls} className="inline-block">
      {value}
    </motion.span>
  );
};

const CountUp = ({ end, duration = 2, decimals = 0 }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, isInView, duration, decimals]);

  return (
    <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : count}</span>
  );
};

const WhyUs = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const stats = [
    {
      value: <CountUp end={94} duration={2} decimals={1} />,
      suffix: "%",
      description: "of our placed talent pass probation successfully",
      icon: <FaUserCheck className="text-xl" />,
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      borderColor: "rgba(16,185,129,0.4)",
    },
    {
      value: <CountUp end={7} duration={1.5} />,
      suffix: " days",
      description: "to receive the first shortlist of CVs",
      icon: <FaClock className="text-xl" />,
      gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
      borderColor: "rgba(59,130,246,0.4)",
    },
    {
      value: <CountUp end={8000} duration={2.5} />,
      suffix: "+",
      description: "pre-vetted candidates in our global database",
      icon: <FaDatabase className="text-xl" />,
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      borderColor: "rgba(139,92,246,0.4)",
    },
    {
      value: <CountUp end={80} duration={2} />,
      suffix: "+",
      description: "countries served",
      icon: <FaGlobeAmericas className="text-xl" />,
      gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
      borderColor: "rgba(236,72,153,0.4)",
    },
  ];

  const countries = [
    { code: "SA", name: "Saudi Arabia" },
    { code: "AE", name: "UAE" },
    { code: "QA", name: "Qatar" },
    { code: "KW", name: "Kuwait" },
    { code: "BH", name: "Bahrain" },
    { code: "OM", name: "Oman" },

    { code: "GB", name: "UK" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "IT", name: "Italy" },
    { code: "ES", name: "Spain" },
    { code: "NL", name: "Netherlands" },
    { code: "BE", name: "Belgium" },
    { code: "CH", name: "Switzerland" },
    { code: "SE", name: "Sweden" },
    { code: "NO", name: "Norway" },
    { code: "FI", name: "Finland" },
    { code: "DK", name: "Denmark" },
    { code: "AT", name: "Austria" },
    { code: "IE", name: "Ireland" },
    { code: "PT", name: "Portugal" },
    { code: "GR", name: "Greece" },
    { code: "PL", name: "Poland" },
    { code: "CZ", name: "Czechia" },
    { code: "HU", name: "Hungary" },
    { code: "RO", name: "Romania" },

    { code: "US", name: "USA" },
    { code: "CA", name: "Canada" },

    { code: "AU", name: "Australia" },
    { code: "NZ", name: "New Zealand" },

    { code: "SG", name: "Singapore" },
    { code: "MY", name: "Malaysia" },
    { code: "JP", name: "Japan" },
    { code: "KR", name: "South Korea" },
    { code: "IN", name: "India" },
    { code: "ZA", name: "South Africa" },
    { code: "BR", name: "Brazil" },
    { code: "MX", name: "Mexico" },
  ];

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-emerald-200 opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-purple-200 opacity-20 blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-200 opacity-15 blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose 1971 Group
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're building a team from the ground up or struggling with
            hard-to-fill positions, we've done it before and we deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div
                className="absolute inset-0 rounded-xl overflow-hidden"
                style={{
                  background: stat.gradient,
                  border: `1px solid ${stat.borderColor}`,
                  boxShadow: `0 10px 15px -3px ${stat.borderColor}`,
                }}
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
              </div>

              <div className="relative z-10 h-full p-6 flex flex-col">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white shadow-md"
                  style={{ background: stat.gradient }}
                >
                  {stat.icon}
                </div>
                <div className="flex items-baseline mb-2">
                  <h3 className="text-3xl font-bold text-white mr-1">
                    {stat.value}
                  </h3>
                  {stat.suffix && (
                    <span className="text-white/80 font-medium">
                      <AnimatedNumber value={stat.suffix} />
                    </span>
                  )}
                </div>
                <p className="text-white/90 text-sm">{stat.description}</p>

                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 text-white"
        >
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-8 right-8 opacity-10"
          >
            <FaGlobeAmericas className="w-32 h-32 md:w-48 md:h-48" />
          </motion.div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Our Global Reach</h2>
            <p className="text-lg mb-8 max-w-2xl opacity-90">
              An agency based in Gulf country targeting employers in Europe,
              USA, Canada, Australia, New Zealand to promote our recruitment
              service. To promote quality of workers we outsource from different
              parts of the world.
            </p>

            <div className="relative overflow-hidden py-4">
              <motion.div
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex space-x-6 w-max"
              >
                {[...countries, ...countries].map((country, index) => (
                  <motion.div
                    key={`${country.code}-${index}`}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center min-w-[60px]"
                    title={country.name}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2 border border-white/20">
                      <ReactCountryFlag
                        countryCode={country.code}
                        svg
                        style={{
                          width: "1.8em",
                          height: "1.8em",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <span className="text-xs text-white/80">
                      {country.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.button
              onClick={() => setShowCalendly(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              <span>Contact Our Global Team</span>
              <HiOutlineArrowNarrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
      <style jsx="true" global="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-3deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default WhyUs;

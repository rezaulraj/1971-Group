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
import { Helmet } from "react-helmet-async";

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
    },
    {
      value: <CountUp end={7} duration={1.5} />,
      suffix: " days",
      description: "to receive the first shortlist of CVs",
      icon: <FaClock className="text-xl" />,
    },
    {
      value: <CountUp end={8000} duration={2.5} />,
      suffix: "+",
      description: "pre-vetted candidates in our global database",
      icon: <FaDatabase className="text-xl" />,
    },
    {
      value: <CountUp end={80} duration={2} />,
      suffix: "+",
      description: "countries served",
      icon: <FaGlobeAmericas className="text-xl" />,
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
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000b30] to-[#0a1a4d]">
      <Helmet>
        <meta
          name="description"
          content="Discover why 1971 Group is the trusted global recruitment partner, connecting businesses with pre-vetted candidates and delivering successful placements worldwide. 1971 Group helps employers in Europe, USA, Canada, and beyond with recruitment solutions. 94% success rate, 8,000+ pre-vetted candidates."
        />
        <meta
          name="keywords"
          content="global recruitment, staffing agency, HR services, talent acquisition, career opportunities, workforce solutions, hire workers, Gulf recruitmen"
        />
        <meta property="og:title" content="1971 Group | Why Choose Us" />
        <meta
          property="og:description"
          content="We provide top global talent, serving 80+ countries with fast, reliable, and high-quality recruitment solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path-to-your-og-image.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com/why-us" />
        <link rel="canonical" href="https://yourwebsite.com/why-us" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "1971 Group",
            url: "https://yourwebsite.com",
            logo: "https://yourwebsite.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/1971group",
              "https://www.facebook.com/1971group",
              "https://twitter.com/1971group",
            ],
            description:
              "1971 Group connects businesses with pre-vetted global talent, serving 80+ countries and delivering recruitment solutions that drive success.",
            foundingDate: "2010",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dubai",
              addressCountry: "United Arab Emiratesh",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: "+880123456789",
              email: "info@1971group.com",
            },
          })}
        </script>
      </Helmet>
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#D4AF37] opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#D4AF37] opacity-10 blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#D4AF37] opacity-10 blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
            Why Choose 1971 Group
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  background: "#0a1a4d",
                  border: `1px solid #D4AF37`,
                  boxShadow: `0 10px 15px -3px rgba(212, 175, 55, 0.3)`,
                }}
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
              </div>

              <div className="relative z-10 h-full p-6 flex flex-col">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-[#000b30] shadow-md"
                  style={{ background: "#D4AF37" }}
                >
                  {stat.icon}
                </div>
                <div className="flex items-baseline mb-2">
                  <h3 className="text-3xl font-bold text-[#D4AF37] mr-1">
                    {stat.value}
                  </h3>
                  {stat.suffix && (
                    <span className="text-[#D4AF37] font-medium">
                      <AnimatedNumber value={stat.suffix} />
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-sm">{stat.description}</p>

                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/20 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
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
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#000b30] to-[#0a1a4d] p-8 md:p-12 text-white border border-[#D4AF37]"
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
            <FaGlobeAmericas className="w-32 h-32 md:w-48 md:h-48 text-[#D4AF37]" />
          </motion.div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">
              Our Global Reach
            </h2>
            <p className="text-lg mb-8 max-w-2xl opacity-90 text-gray-300">
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
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 backdrop-blur-sm flex items-center justify-center mb-2 border border-[#D4AF37]/30">
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
                    <span className="text-xs text-[#D4AF37]">
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
              className="mt-8 flex items-center space-x-2 bg-[#D4AF37] text-[#000b30] px-6 py-3 rounded-lg font-medium hover:bg-[#c6a22f] transition-colors duration-300"
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

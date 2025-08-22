import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGlobe,
  FaRocket,
  FaUserTie,
  FaBuilding,
  FaPiggyBank,
  FaBriefcase,
  FaChartLine,
  FaHandshake,
  FaAward,
  FaUsers,
} from "react-icons/fa";
import companybg from "../../assets/company/companybg.jpg?url";
import clogo1 from "../../assets/clined/cl1.png?url";
import clogo2 from "../../assets/clined/cl2.png?url";
import clogo3 from "../../assets/clined/cl3.png?url";
import clogo4 from "../../assets/clined/cl4.png?url";
import clogo5 from "../../assets/clined/cl5.png?url";
import clogo6 from "../../assets/clined/cl6.png?url";
import clogo7 from "../../assets/clined/cl7.png?url";
import clogo8 from "../../assets/clined/cl8.png?url";
import { Helmet } from "react-helmet-async";

const HeroCompany = () => {
  const [counters, setCounters] = useState({
    companies: 0,
    savings: 0,
    hires: 0,
    successRate: 0,
  });

  const features = [
    {
      icon: <FaGlobe className="text-2xl" />,
      title: "Global Talent Network",
      text: "Access to a broad global talent network across 80+ countries",
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Accelerated Hiring",
      text: "Streamlined processes that reduce time-to-hire by up to 50%",
    },
    {
      icon: <FaUserTie className="text-2xl" />,
      title: "Expert Recruiters",
      text: "Specialized recruitment teams with industry expertise",
    },
  ];

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

  const achievements = [
    {
      icon: <FaBuilding className="text-2xl" />,
      value: 70,
      suffix: "+",
      title: "Companies Transformed",
      description:
        "We've helped over 70+ businesses optimize their hiring processes and boost profitability.",
    },
    {
      icon: <FaPiggyBank className="text-2xl" />,
      value: 32,
      suffix: "%",
      title: "Average Cost Savings",
      description:
        "Our clients save an average of 32% on recruitment expenses with our efficient hiring solutions.",
    },
    {
      icon: <FaBriefcase className="text-2xl" />,
      value: 150,
      suffix: "+",
      title: "Hires at Top Companies",
      description:
        "Hundreds of our candidates are now thriving at some of the world's leading organizations.",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      value: 97.8,
      suffix: "%",
      title: "Probation Success Rate",
      description:
        "Nearly all specialists we place successfully pass their probation periods, proving the quality of our selection process.",
    },
  ];

  const benefits = [
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Partnership Approach",
      description:
        "We become an extension of your team, understanding your unique culture and needs",
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "Quality Guarantee",
      description:
        "Rigorous vetting process ensures only the top 5% of candidates make it through",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Cultural Fit",
      description:
        "We prioritize candidates who align with your company values and long-term vision",
    },
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        setCounters({
          companies: Math.floor(progress * 70),
          savings: Math.floor(progress * 32),
          hires: Math.floor(progress * 150),
          successRate: parseFloat((progress * 97.8).toFixed(1)),
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    animateCounters();
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen">
      <Helmet>
        <title>1971 Group | Global Recruitment Solutions Partner</title>
        <meta
          name="description"
          content="1971 Group provides global recruitment solutions to transform companies’ workforce. Expert recruiters, accelerated hiring, and global talent network."
        />
        <meta
          name="keywords"
          content="recruitment, global hiring, talent acquisition, executive search, staffing solutions, workforce optimization"
        />
        <meta
          property="og:title"
          content="1971 Group | Global Recruitment Solutions Partner"
        />
        <meta
          property="og:description"
          content="Partner with 1971 Group for elite recruitment solutions, transforming your hiring processes and building high-performing teams worldwide."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/assets/company/companybg.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com/company" />
        <link rel="canonical" href="https://yourwebsite.com/company" />

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
              "1971 Group provides global recruitment solutions with expert recruiters, accelerated hiring, and access to a worldwide talent network.",
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
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${companybg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#000b30]/95 via-[#0a1a4d]/90 to-[#1a2a6b]/95"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#D4AF37]/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float1"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#D4AF37]/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#D4AF37]/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float3"></div>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                About 1971 Group
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#D4AF37] mb-6">
                Global Recruitment Solutions Partner
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Founded with a vision to transform how companies access global
                talent, 1971 Group has become a trusted partner for businesses
                seeking to scale efficiently, strategically, and sustainably
                through exceptional recruitment solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300 mx-auto">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white text-center mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-200 text-center text-sm">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Our Approach to Recruitment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300 mx-auto">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white text-center mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-200 text-center text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Trusted By Industry Leaders
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
                We partner with forward-thinking companies across industries who
                rely on our expertise to build high-performing teams that drive
                innovation and growth.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-12">
                {ourClient.map((client, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
                  >
                    <img
                      src={client.clogo}
                      alt={`Client Logo ${index + 1}`}
                      className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a1a4d]/90 to-[#000b30]/90">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
                Our Impact & Achievements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4 text-[#D4AF37] mx-auto">
                      {achievement.icon}
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {index === 0 && counters.companies}
                      {index === 1 && counters.savings}
                      {index === 2 && counters.hires}
                      {index === 3 && counters.successRate}
                      {achievement.suffix}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx="true" global="true">{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, -20px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-15px, 15px) rotate(-5deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, 20px) rotate(3deg);
          }
        }
        .animate-float1 {
          animation: float1 15s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 18s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroCompany;

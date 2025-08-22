import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaBullseye,
  FaHandshake,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const missionImage =
  "https://plus.unsplash.com/premium_photo-1722859269438-dcacf0c6f26a?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const visionImage =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
const valuesImage =
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

const MissionVision = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const header = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const coreValues = [
    {
      icon: <FaHandshake className="text-xl" />,
      title: "Partnership",
      description:
        "We build lasting relationships based on trust and mutual success",
    },
    {
      icon: <FaGlobe className="text-xl" />,
      title: "Global Mindset",
      description:
        "We connect talent across borders to create diverse, high-performing teams",
    },
    {
      icon: <FaHeart className="text-xl" />,
      title: "Passion",
      description:
        "We're driven by our commitment to helping people and businesses thrive",
    },
    {
      icon: <FaChartLine className="text-xl" />,
      title: "Excellence",
      description: "We pursue the highest standards in everything we do",
    },
  ];

  return (
    <div className="bg-[#F6F1EE] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <meta
          name="description"
          content="Discover 1971 Group's mission to connect global talent, our vision to redefine recruitment, and the core values guiding our work."
        />
        <meta
          name="keywords"
          content="mission, vision, values, recruitment, global talent, staffing, career opportunities"
        />
        <meta
          property="og:title"
          content="1971 Group | Our Mission, Vision & Values"
        />
        <meta
          property="og:description"
          content="1971 Group connects ambitious organizations with exceptional global talent while promoting meaningful career opportunities worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={missionImage} />
        <meta
          property="og:url"
          content="https://yourwebsite.com/mission-vision"
        />
        <link rel="canonical" href="https://yourwebsite.com/mission-vision" />

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
              "1971 Group connects businesses with exceptional global talent, providing recruitment solutions guided by mission, vision, and values.",
            foundingDate: "2019",
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={header}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#D4AF37]">Purpose</span> &{" "}
            <span className="text-[#1a2a6b]">Promise</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The foundation of everything we do at 1971 Group
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={item} className="order-2 lg:order-1">
            <div className="flex items-center mb-6">
              <div className="bg-[#D4AF37]/20 p-3 rounded-full mr-4">
                <FaBullseye className="text-[#D4AF37] text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To connect ambitious organizations with exceptional global talent,
              creating partnerships that drive growth, innovation, and lasting
              success for both businesses and professionals.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#1a2a6b]/10 p-2 rounded-full mt-1 mr-4">
                  <FaRocket className="text-[#1a2a6b] text-lg" />
                </div>
                <span className="text-gray-700">
                  Accelerate hiring processes for fast-growing companies
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1a2a6b]/10 p-2 rounded-full mt-1 mr-4">
                  <FaUsers className="text-[#1a2a6b] text-lg" />
                </div>
                <span className="text-gray-700">
                  Build diverse, high-performing teams across industries
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1a2a6b]/10 p-2 rounded-full mt-1 mr-4">
                  <FaHandshake className="text-[#1a2a6b] text-lg" />
                </div>
                <span className="text-gray-700">
                  Create meaningful career opportunities worldwide
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={item} className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={missionImage}
                alt="Our mission - diverse team collaborating"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={item}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={visionImage}
                alt="Our vision - global business connections"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="flex items-center mb-6">
              <div className="bg-[#1a2a6b]/20 p-3 rounded-full mr-4">
                <FaLightbulb className="text-[#1a2a6b] text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To redefine global recruitment by creating a world where
              businesses effortlessly access the best talent and professionals
              find opportunities that fuel their growth and purpose.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#D4AF37]/10 p-2 rounded-full mt-1 mr-4">
                  <FaGlobe className="text-[#D4AF37] text-lg" />
                </div>
                <span className="text-gray-700">
                  Become the most trusted global recruitment partner
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#D4AF37]/10 p-2 rounded-full mt-1 mr-4">
                  <FaChartLine className="text-[#D4AF37] text-lg" />
                </div>
                <span className="text-gray-700">
                  Set new standards for excellence in talent acquisition
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#D4AF37]/10 p-2 rounded-full mt-1 mr-4">
                  <FaHeart className="text-[#D4AF37] text-lg" />
                </div>
                <span className="text-gray-700">
                  Make meaningful impacts on businesses and careers worldwide
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={item}>
            <div className="flex items-center mb-6">
              <div className="bg-[#D4AF37]/20 p-3 rounded-full mr-4">
                <FaHeart className="text-[#D4AF37] text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              These core principles guide every decision we make and every
              relationship we build:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-5 rounded-xl shadow-md border border-white"
                >
                  <div className="bg-[#1a2a6b]/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={valuesImage}
                alt="Our values - team collaboration and trust"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision;

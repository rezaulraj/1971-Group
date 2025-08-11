import React, { useEffect } from "react";
import { FaArrowRight, FaClock, FaStar, FaUserTie } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroHome = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const ourClient = [
    { name: "TechNova" },
    { name: "BlueCore" },
    { name: "Vertex" },
    { name: "Quantum" },
    { name: "Aurora" },
  ];

  return (
    <div className="relative overflow-hidden" ref={ref}>
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M15 15h30v30H15z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Main Hero Section */}
      <section className="relative pt-16 pb-0 md:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Left Side - Text Content */}
            <motion.div
              className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
              variants={itemVariants}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                  Global Tech Recruitment
                </span>{" "}
                <br />
                <span className="font-light">for Fast-Growing Companies</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                1971 Group is your Gulf-based gateway to top-tier global talent.
                We're professionals who simplify and streamline your hiring
                process whether you're scaling a startup or expanding a
                multinational.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(99, 102, 241, 0.6)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center px-8 py-4 rounded-full text-lg font-bold transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(45deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",
                  color: "white",
                  boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
                }}
              >
                Hire Talent
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-3"
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Right Side - Placeholder with Stats */}
            <motion.div
              className="lg:w-1/2 relative mt-10 lg:mt-0"
              variants={itemVariants}
            >
              <div
                className="relative"
                style={{ maxWidth: "500px", margin: "0 auto" }}
              >
                {/* Animated Placeholder Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative overflow-hidden rounded-tl-[150px] rounded-br-[60px] rounded-bl-[30px] border-4 border-white/20 flex items-center justify-center"
                  style={{
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
                    height: "350px",
                    background:
                      "linear-gradient(45deg, rgba(15, 23, 42, 0.4) 0%, rgba(59, 130, 246, 0.3) 100%)",
                  }}
                >
                  <div className="text-white text-2xl font-medium text-center p-6">
                    <motion.div
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      Connecting Talent <br /> with Opportunity
                    </motion.div>
                  </div>
                  {/* Animated Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 z-0"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, rgba(245, 158, 11, 0.1) 50%, rgba(99, 102, 241, 0.1) 100%)",
                        "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(245, 158, 11, 0.1) 50%, rgba(99, 102, 241, 0.1) 100%)",
                        "linear-gradient(225deg, rgba(16, 185, 129, 0.1) 0%, rgba(245, 158, 11, 0.1) 50%, rgba(99, 102, 241, 0.1) 100%)",
                        "linear-gradient(315deg, rgba(16, 185, 129, 0.1) 0%, rgba(245, 158, 11, 0.1) 50%, rgba(99, 102, 241, 0.1) 100%)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 12,
                      ease: "linear",
                    }}
                  />
                </motion.div>

                {/* Animated Stats Cards */}
                <motion.div
                  className="absolute -bottom-5 left-0 right-0 z-20"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="grid grid-cols-3 gap-0.5 max-w-lg mx-auto">
                    {/* Stat 1 */}
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white p-4 rounded-bl-3xl shadow-lg flex items-center flex-wrap bg-gradient-to-br from-emerald-50 to-emerald-100 border-t-4 border-emerald-500"
                    >
                      <div className="mr-2 p-1.5 rounded-full bg-emerald-500/20">
                        <FaClock className="text-lg text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">
                          4 weeks
                        </h3>
                        <p className="text-xs text-slate-600">
                          Avg. hiring time
                        </p>
                      </div>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white p-4 shadow-lg flex items-center flex-wrap bg-gradient-to-br from-amber-50 to-amber-100 border-t-4 border-amber-500"
                    >
                      <div className="mr-2 p-1.5 rounded-full bg-amber-500/20">
                        <FaStar className="text-lg text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">
                          40+
                        </h3>
                        <p className="text-xs text-slate-600">5-star reviews</p>
                      </div>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white p-4 rounded-tr-xl shadow-lg flex items-center flex-wrap bg-gradient-to-br from-indigo-50 to-indigo-100 border-t-4 border-indigo-500"
                    >
                      <div className="mr-2 p-1.5 rounded-full bg-indigo-500/20">
                        <FaUserTie className="text-lg text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">
                          350+
                        </h3>
                        <p className="text-xs text-slate-600">Placements</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Spacer */}
      <div className="pt-16 md:pt-14 lg:pt-12"></div>

      {/* Clients Section */}
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-blue-900/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-slate-800"
          >
            Trusted By <span className="text-blue-600">Industry Leaders</span>
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {ourClient.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                }}
                className="p-5 bg-white rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                style={{
                  minWidth: "140px",
                  height: "80px",
                  boxShadow: "0 4px 6px rgba(15, 23, 42, 0.1)",
                }}
              >
                <div className="text-slate-700 font-semibold text-lg">
                  {item.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroHome;

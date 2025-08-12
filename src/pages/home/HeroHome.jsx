import React, { useEffect } from "react";
import { FaArrowRight, FaClock, FaStar, FaUserTie } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import clogo1 from "../../assets/home/l1.webp?url";
import clogo2 from "../../assets/home/l2.webp?url";
import clogo3 from "../../assets/home/l3.webp?url";
import clogo4 from "../../assets/home/l4.webp?url";
import clogo5 from "../../assets/home/l5.webp?url";
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
    { clogo: clogo1 },
    { clogo: clogo2 },
    { clogo: clogo3 },
    { clogo: clogo4 },
    { clogo: clogo5 },
  ];

  return (
    <div className="relative overflow-hidden" ref={ref}>
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

      <section className="relative pt-16 pb-0 md:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
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

            <motion.div
              className="lg:w-1/2 relative mt-10 lg:mt-0"
              variants={itemVariants}
            >
              <div className="relative h-full max-w-md mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative h-full rounded-tl-[100px] rounded-br-[100px] overflow-hidden"
                >
                  <div className="grid grid-rows-3 h-full gap-4 p-6">
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white rounded-tl-[50px] rounded-br-[50px] shadow-xl flex items-center justify-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 border-t-4 border-emerald-500"
                    >
                      <div className="flex items-center">
                        <div className="mr-4 p-3 rounded-full bg-emerald-500/20">
                          <FaClock className="text-2xl text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800">
                            4 weeks
                          </h3>
                          <p className="text-slate-900 text-lg font-semibold">
                            On Average To Close A Vacancy
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white rounded-tl-[50px] rounded-br-[50px] shadow-xl flex items-center justify-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-t-4 border-amber-500"
                    >
                      <div className="flex items-center">
                        <div className="mr-4 p-3 rounded-full bg-amber-500/20">
                          <FaStar className="text-2xl text-amber-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800">
                            40+
                          </h3>
                          <p className=" text-slate-900 text-lg font-semibold">
                            Positive reviews as a top-rated global agency
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white rounded-tl-[50px] rounded-br-[50px] shadow-xl flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 border-t-4 border-indigo-500"
                    >
                      <div className="flex items-center">
                        <div className="mr-4 p-3 rounded-full bg-indigo-500/20">
                          <FaUserTie className="text-2xl text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800">
                            350+
                          </h3>
                          <p className="text-slate-900 text-lg font-semibold">
                            Professionals placed in leading companies worldwide
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="pt-16 md:pt-14 lg:pt-12"></div>

      <section className="relative py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-blue-900/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">
            Trusted By Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {ourClient.map((item, index) => (
              <div
                key={index}
                className="p-2 bg-white rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{
                  boxShadow: "0 2px 4px rgba(15, 23, 42, 0.1)",
                }}
              >
                <div className="h-8 md:h-10 w-20 md:w-28 flex items-center justify-center">
                  <img
                    src={item.clogo}
                    alt="Client logo"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroHome;

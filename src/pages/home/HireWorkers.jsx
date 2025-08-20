import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiUserCheck,
  FiTrendingUp,
  FiShield,
  FiClock,
  FiDollarSign,
  FiHeart,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Calendly from "../../components/Calendly";

const HireWorkers = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const benefits = [
    {
      icon: <FiAward className="text-2xl" />,
      title: "Premium Talent Network",
      description:
        "Access our exclusive pool of pre-vetted professionals from the 1971 Group - rigorously screened for skills, experience, and cultural fit.",
    },
    {
      icon: <FiUserCheck className="text-2xl" />,
      title: "95% Retention Rate",
      description:
        "Our matching algorithm and human expertise combine to deliver candidates who stay - 3x longer than industry averages.",
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Growth-Ready Professionals",
      description:
        "Talent trained in the 1971 methodology come with built-in adaptability and continuous learning mindsets.",
    },
    {
      icon: <FiShield className="text-2xl" />,
      title: "Full Compliance",
      description:
        "Every candidate comes with complete documentation and background verification - zero legal surprises.",
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Rapid Placement",
      description:
        "Average 11-day placement time through our optimized recruitment pipeline and immediate availability candidates.",
    },
    {
      icon: <FiDollarSign className="text-2xl" />,
      title: "Cost Efficiency",
      description:
        "Save 40% on average hiring costs compared to traditional agencies with our performance-based model.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "HR Director, Tech Innovations Inc.",
      content:
        "The quality of candidates from 1971 Group is exceptional. We've reduced our hiring time by 60% and improved retention significantly.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CEO, Global Solutions Ltd.",
      content:
        "Working with 1971 Group transformed our recruitment process. Their pre-vetted professionals integrate seamlessly into our teams.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      position: "Talent Acquisition Manager, Growth Partners",
      content:
        "The 95% retention rate is real. We've seen a dramatic decrease in turnover since partnering with 1971 Group for our hiring needs.",
      rating: 5,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F1EE]">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#000b30]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#D4AF37]/20 text-[#000b30] rounded-full text-sm font-semibold mb-4">
            <FiHeart className="mr-2" /> Trusted Since 2010
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#000b30] mb-4">
            Why Leading Recruiters Choose Our Talent
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            For over 15 years, the 1971 Group has been the{" "}
            <span className="font-semibold text-[#D4AF37]">gold standard</span>{" "}
            in workforce solutions, delivering exceptional candidates that drive
            business growth.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md border border-white overflow-hidden hover:shadow-lg transition-all duration-300 group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#000b30] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#000b30] text-center mb-12">
            What Our Clients Say
          </h3>

          <div className="relative max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
         
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 text-[#D4AF37] fill-current"
                    />
                  )
                )}
              </div>

              <p className="text-lg text-gray-700 italic mb-6">
                "{testimonials[currentTestimonial].content}"
              </p>

              <div>
                <p className="font-bold text-[#000b30]">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>

           
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F6F1EE] flex items-center justify-center text-[#000b30] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F6F1EE] flex items-center justify-center text-[#000b30] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>

          
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial
                      ? "bg-[#D4AF37]"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-20 bg-gradient-to-r from-[#000b30] to-[#1a2a6b] rounded-2xl p-10 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Access Elite Talent?
          </h3>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of recruiters who trust the 1971 Group for their most
            critical hiring needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                const section = document.querySelector("#contact-us");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-[#D4AF37] text-[#000b30] font-bold rounded-lg hover:bg-[#c6a22f] transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Request Candidate Profiles
            </button>
            <button
              onClick={() => setShowCalendly(true)}
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all hover:scale-105 cursor-pointer"
            >
              Speak With Our Team
            </button>
          </div>
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default HireWorkers;

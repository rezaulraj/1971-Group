import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaPause, FaPlay } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPatchCheckFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const testimonials = [
  {
    quote:
      "The most impressive aspect of the 1971 Group was their round-the-clock communication.",
    author: "Founder & CEO, Generect Inc",
    position: "Technology Industry",
    verified: true,
    rating: 5,
  },
  {
    quote:
      "They stand out for their specialized approach, creative thinking, and data-driven strategies.",
    author: "CEO, OrbitEdge Labs",
    position: "AI Research Sector",
    verified: true,
    rating: 5,
  },
  {
    quote: "Our experience with the 1971 Group was overwhelmingly positive.",
    author: "CEO, Recursion",
    position: "Healthcare Technology",
    verified: true,
    rating: 4,
  },
  {
    quote:
      "They consistently provided progress updates, candidate feedback, and support throughout the process.",
    author: "Founder, Vertex Consulting",
    position: "Management Consulting",
    verified: true,
    rating: 5,
  },
  {
    quote:
      "They sourced candidates who perfectly aligned with our team culture and values.",
    author: "CTO, QuantumStack",
    position: "Quantum Computing",
    verified: true,
    rating: 5,
  },
  {
    quote:
      "Their exceptional team made a significant impact on the success of our projects.",
    author: "Co-Founder, CloudBridge Ventures",
    position: "Cloud Infrastructure",
    verified: true,
    rating: 5,
  },
];

const Clients = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const carouselRef = useRef(null);
  const [cardHeight, setCardHeight] = useState("auto");

  // Set fixed height based on the first card's height after render
  useEffect(() => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.querySelector(".testimonial-card");
      if (firstCard) {
        setCardHeight(`${firstCard.offsetHeight}px`);
      }
    }
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#000b30] via-[#0a1a4d] to-[#1a2a6b] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            What Our <span className="text-blue-300">Clients</span> Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Trusted by CEOs, HR managers, and hiring partners across global
            industries
          </p>
        </motion.div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          ref={carouselRef}
        >
          <div className="absolute -top-14 right-0 flex space-x-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md shadow-lg text-white hover:bg-white/20 transition-all"
            >
              {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
            </button>
          </div>

          {/* Container with fixed height */}
          <div style={{ height: cardHeight }} className="relative">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonial-card bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-2xl relative overflow-hidden w-full absolute top-0 left-0"
              >
                {/* Glow effect */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-400 rounded-full filter blur-[80px] opacity-20"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="pl-8 flex-grow">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < testimonials[current].rating
                              ? "text-yellow-400"
                              : "text-gray-500/30"
                          } text-xl`}
                        />
                      ))}
                    </div>

                    <p className="text-2xl text-white/90 font-light italic mb-8 leading-relaxed relative">
                      <FaQuoteLeft className="text-blue-300/50 text-2xl absolute -left-8 -top-2" />
                      {testimonials[current].quote}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white text-lg">
                        {testimonials[current].author}
                      </p>
                      <p className="text-blue-200 text-sm">
                        {testimonials[current].position}
                      </p>
                      {testimonials[current].verified && (
                        <div className="flex items-center text-blue-300 text-sm mt-2">
                          <BsPatchCheckFill className="mr-2" />
                          <span>Verified Review</span>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={prevTestimonial}
                        className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all"
                      >
                        <IoIosArrowBack size={20} />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all"
                      >
                        <IoIosArrowForward size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index
                    ? "bg-blue-400 w-6 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

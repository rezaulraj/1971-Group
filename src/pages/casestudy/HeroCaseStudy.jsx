import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import clogo1 from "../../assets/home/l1.webp";
import clogo2 from "../../assets/home/l2.webp";
import clogo3 from "../../assets/home/l3.webp";
import clogo4 from "../../assets/home/l4.webp";
import clogo5 from "../../assets/home/l5.webp";

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateNumber();
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animateNumber = () => {
    const start = 0;
    const end =
      typeof value === "string"
        ? parseFloat(value.replace(/[^0-9.]/g, ""))
        : value;
    const suffix =
      typeof value === "string" ? value.replace(/[0-9.]/g, "") : "";
    const startTime = performance.now();

    const updateNumber = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = Math.floor(progress * end);

      setCount(currentValue + suffix);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateNumber);
  };

  return <span ref={ref}>{count}</span>;
};

const HeroCaseStudy = () => {
  const logos = [clogo1, clogo2, clogo3, clogo4, clogo5];
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="flex flex-col">
      <section className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Left Side - Teal Gradient Content */}
        <div className="w-full md:w-1/2 p-12 flex items-center relative overflow-hidden">
          {/* Teal background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 opacity-90 z-0"></div>

          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-teal-400/20 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[200px] border-l-transparent border-t-[200px] border-t-teal-700/30"></div>

          <div className="max-w-lg mx-auto text-white relative z-10">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mb-6">
              <span className="text-sm font-medium">
                1971 group case studies
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              The best practices of recruitment and HR in our case studies.
            </h1>

            <p className="text-xl text-white/90 mb-8">
              Read, enjoy and implement!
            </p>

            <button className="flex items-center px-8 py-4 bg-white text-teal-600 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 group">
              <span>Explore Case Studies</span>
              <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side - Blue/Gray Pyramid Layout */}
        <div className="w-full md:w-1/2 p-12 flex items-center relative bg-gradient-to-br from-gray-100 to-blue-50">
          {/* Pyramid Background Elements */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600/10 clip-path-triangle rotate-180 backdrop-blur-sm"></div>
            <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/10 clip-path-triangle rotate-60 backdrop-blur-sm"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/10 clip-path-triangle rotate-120 backdrop-blur-sm"></div>
          </div>

          {/* Pyramid Cards */}
          <div className="w-full max-w-md mx-auto relative z-10">
            {/* Top Single Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto w-3/4">
              <div className="text-3xl font-bold text-teal-600 text-center mb-2">
                <AnimatedNumber value="97.8%" duration={1500} />
              </div>
              <p className="text-gray-600 text-center text-sm">
                Pass probation period successfully
              </p>
            </div>

            {/* Bottom Two Cards */}
            <div className="flex justify-center gap-6 w-full">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 w-1/2">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  <AnimatedNumber value={70} duration={1000} />+
                </div>
                <p className="text-gray-600 text-sm">
                  Companies improved HR processes
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 w-1/2">
                <div className="text-2xl font-bold text-gray-600 mb-2">
                  <AnimatedNumber value={1130} duration={2000} />
                </div>
                <p className="text-gray-600 text-sm">
                  Successful product launches
                </p>
              </div>
            </div>
          </div>

          {/* Global Styles for Triangle Clip-path */}
          <style jsx>{`
            .clip-path-triangle {
              clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            }
          `}</style>
        </div>
      </section>

      {/* Client Logo Marquee */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 py-8 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-800 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-blue-800 to-transparent z-10"></div>

          <div className="flex items-center animate-marquee whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="inline-block mx-8 h-12 opacity-80 hover:opacity-100 transition-opacity"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-full w-auto object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroCaseStudy;

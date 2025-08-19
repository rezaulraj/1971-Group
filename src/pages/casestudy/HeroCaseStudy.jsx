import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import clogo1 from "../../assets/clined/cl1.png?url";
import clogo2 from "../../assets/clined/cl2.png?url";
import clogo3 from "../../assets/clined/cl3.png?url";
import clogo4 from "../../assets/clined/cl4.png?url";
import clogo5 from "../../assets/clined/cl5.png?url";
import clogo6 from "../../assets/clined/cl6.png?url";
import clogo7 from "../../assets/clined/cl7.png?url";
import clogo8 from "../../assets/clined/cl8.png?url";

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
  const duplicatedLogos = [...ourClient, ...ourClient];

  return (
    <div className="flex flex-col">
      <section className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full md:w-1/2 p-12 flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#000b30]/90 via-[#0a1a4d]/80 to-[#1a2a6b]/90 z-0"></div>

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

            <button className="flex items-center px-8 py-4 bg-[#000b30] text-[#D4AF37] rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 group">
              <span>Explore Case Studies</span>
              <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-12 flex items-center relative bg-gradient-to-br from-gray-100 to-blue-50">
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600/10 clip-path-triangle rotate-180 backdrop-blur-sm"></div>
            <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/10 clip-path-triangle rotate-60 backdrop-blur-sm"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/10 clip-path-triangle rotate-120 backdrop-blur-sm"></div>
          </div>

          <div className="w-full max-w-md mx-auto relative z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto w-3/4">
              <div className="text-3xl font-bold text-[#D4AF37] text-center mb-2">
                <AnimatedNumber value="97.8%" duration={1500} />
              </div>
              <p className="text-gray-600 text-center text-sm">
                Pass probation period successfully
              </p>
            </div>

            <div className="flex justify-center gap-6 w-full">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 w-1/2">
                <div className="text-2xl font-bold text-[#000b30] mb-2">
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

          <style jsx="true">{`
            .clip-path-triangle {
              clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            }
          `}</style>
        </div>
      </section>

      <div className="bg-gradient-to-b from-[#000b30]/90 via-[#0a1a4d]/80 to-[#1a2a6b]/90 py-4 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a1a4d]/80 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a1a4d]/80 to-transparent z-10"></div>

          <div className="flex items-center animate-marquee whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="inline-flex items-center justify-center mx-12 h-16"
              >
                <img
                  src={logo.clogo}
                  alt={`Client logo ${logo.id}`}
                  className="h-full w-auto max-h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true" global="true">{`
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
          display: inline-block; /* Changed from flex to inline-block for better animation */
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default HeroCaseStudy;

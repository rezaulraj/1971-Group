import React, { useRef, useEffect } from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const Download = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  const [bubbles, setBubbles] = React.useState([]);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setBubbles(
        Array.from({ length: 15 }, (_, i) => ({
          id: i,
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          z: Math.random() * 5 + 1,
          size: Math.random() * 60 + 40,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          vz: (Math.random() - 0.5) * 0.02,
          opacity: Math.random() * 0.15 + 0.1,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
        }))
      );
    }
  }, [dimensions]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    let animationFrameId;
    const gravity = 0.98;
    const minDistance = 30;

    const updateBubbles = () => {
      setBubbles((prevBubbles) => {
        return prevBubbles.map((bubble) => {
          let { x, y, z, vx, vy, vz, size } = bubble;

          x += vx * z;
          y += vy * z;
          z = Math.max(0.5, Math.min(6, z + vz));

          if (x < 10 || x > 90) {
            vx = (-vx * 0.8) / z;
            x = x < 10 ? 10 : 90;
          }
          if (y < 10 || y > 90) {
            vy = (-vy * 0.8) / z;
            y = y < 10 ? 10 : 90;
          }

          vy += 0.01 * z;

          prevBubbles.forEach((other) => {
            if (bubble.id !== other.id) {
              const dx = x - other.x;
              const dy = y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const minDist =
                (size + other.size) / (100 * Math.max(z, other.z));

              if (distance < minDist) {
                const angle = Math.atan2(dy, dx);
                const force = (0.15 * (1 - distance / minDist)) / z;

                vx += Math.cos(angle) * force;
                vy += Math.sin(angle) * force;
              }
            }
          });

          return { ...bubble, x, y, z, vx, vy, vz };
        });
      });
      animationFrameId = requestAnimationFrame(updateBubbles);
    };

    animationFrameId = requestAnimationFrame(updateBubbles);
    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900/40 via-gray-900 to-purple-900/40 py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      >
        {bubbles.map((bubble) => {
          const scale = bubble.z / 4;
          const blur = (6 - bubble.z) * 2;
          const brightness = 40 + bubble.z * 10;

          return (
            <div
              key={bubble.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                background: `radial-gradient(circle at 30% 30%, 
                  ${bubble.color}${Math.round(bubble.opacity * 255)
                  .toString(16)
                  .padStart(2, "0")}, 
                  transparent 70%)`,
                transform: `translate(-50%, -50%) scale(${scale})`,
                filter: `blur(${blur}px) brightness(${brightness}%)`,
                boxShadow: `inset 0 0 ${bubble.size / 3}px ${
                  bubble.size / 6
                }px rgba(255,255,255,0.2)`,
                transition: "transform 0.3s ease-out, filter 0.3s ease-out",
                zIndex: Math.floor(bubble.z),
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 p-8 rounded-3xl bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:border-blue-400/50 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] transition-all duration-500 group transform-style-preserve-3d perspective-1000 hover:rotate-x-[5deg] hover:rotate-y-[2deg]">
            <div className="flex flex-col items-center text-center transform transition-transform duration-500 group-hover:translate-z-10">
              <div className="mb-6 p-5 rounded-2xl bg-gray-700/40 backdrop-blur-md border border-gray-600/50 group-hover:border-blue-400/60 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                <FiDownload className="text-4xl text-gray-300 group-hover:text-blue-400 transition-transform duration-300 group-hover:scale-1.2" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-300 mb-2">
                Web3 Recruiting Guide
              </h2>
              <p className="text-lg text-gray-400 mb-6">for free</p>
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105 group-hover:translate-z-5">
                Get it now
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-1.2" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 rounded-3xl bg-gray-800/30 backdrop-blur-lg border border-gray-700/40 shadow-xl shadow-blue-900/10 hover:shadow-blue-500/20 transition-all duration-500 transform-style-preserve-3d perspective-1000 hover:rotate-x-[3deg]">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4 transform transition-transform duration-500 group-hover:translate-z-5">
              What's Inside?
            </h3>
            <ul className="space-y-3 text-gray-300">
              {[
                "Hiring strategies for Web3 talent",
                "Essential technical skills checklist",
                "Compensation benchmarks",
                "Interview questions for blockchain roles",
                "Retention strategies for crypto-native teams",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start transform transition-transform duration-500 hover:translate-z-2 hover:translate-x-1"
                >
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-blue-400 transform transition-transform duration-300 hover:scale-1.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx="true" global="true">{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Download;

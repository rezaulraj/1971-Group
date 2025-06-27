import React from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const Download = () => {
  // Bubble data with initial positions and velocities
  const [bubbles, setBubbles] = React.useState(
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 50,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.15 + 0.05,
      color: Math.random() > 0.7 ? "purple" : "gray",
    }))
  );

  // Animation frame for bubble physics
  React.useEffect(() => {
    let animationFrameId;
    const minDistance = 40;

    const updateBubbles = () => {
      setBubbles((prevBubbles) => {
        return prevBubbles.map((bubble, i) => {
          let { x, y, vx, vy } = bubble;

          // Update position
          x += vx;
          y += vy;

          // Boundary collision with velocity boost
          if (x < 0 || x > 100) {
            vx *= -1.1; // Increase speed on bounce
            x = x < 0 ? 0 : 100;
          }
          if (y < 0 || y > 100) {
            vy *= -1.1;
            y = y < 0 ? 0 : 100;
          }

          // Bubble interactions
          prevBubbles.forEach((other, j) => {
            if (i !== j) {
              const dx = x - other.x;
              const dy = y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const minDist = (bubble.size + other.size) / 150;

              if (distance < minDist) {
                const angle = Math.atan2(dy, dx);
                const force = 0.15 * (1 - distance / minDist);

                // Color-based interaction
                const repelForce =
                  bubble.color === other.color ? force : force * 0.7;

                vx += Math.cos(angle) * repelForce;
                vy += Math.sin(angle) * repelForce;
              }
            }
          });

          return { ...bubble, x, y, vx, vy };
        });
      });
      animationFrameId = requestAnimationFrame(updateBubbles);
    };

    animationFrameId = requestAnimationFrame(updateBubbles);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900/50 via-gray-800 to-purple-900/60 py-20 px-4 sm:px-6 lg:px-8">
      {/* Interactive bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full pointer-events-none 
            ${
              bubble.color === "purple"
                ? "bg-purple-500/20 border-purple-400/20 hover:border-r-4"
                : "bg-gray-400/10 border-gray-300/20"
            }
            backdrop-blur-sm border`}
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            transition: "transform 0.2s linear",
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Glassy download card */}
          <div className="w-full md:w-1/2 p-8 rounded-3xl bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:border-purple-400/50 shadow-2xl shadow-purple-900/20 hover:shadow-purple-500/30 transition-all duration-500 group">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-5 rounded-2xl bg-gray-700/40 backdrop-blur-md border border-gray-600/50 group-hover:border-purple-400/60 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                <FiDownload className="text-4xl text-gray-300 group-hover:text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-purple-300 mb-2">
                Web3 Recruiting Guide
              </h2>
              <p className="text-lg text-gray-400 mb-6">for free</p>
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
                Get it now
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Additional content area */}
          <div className="w-full md:w-1/2 p-8 rounded-3xl bg-gray-800/30 backdrop-blur-lg border border-gray-700/40 shadow-xl shadow-purple-900/10 hover:shadow-purple-500/20 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              What's Inside?
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-purple-400"></span>
                <span>Hiring strategies for Web3 talent</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-purple-400"></span>
                <span>Essential technical skills checklist</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-purple-400"></span>
                <span>Compensation benchmarks</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-purple-400"></span>
                <span>Interview questions for blockchain roles</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-purple-400"></span>
                <span>Retention strategies for crypto-native teams</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;

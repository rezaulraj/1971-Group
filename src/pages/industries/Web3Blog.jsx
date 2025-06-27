import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import webblog1 from "../../assets/web/wb1.png";
import webblog2 from "../../assets/web/wb2.png";
import webblog3 from "../../assets/web/wb3.png";

const Web3Blog = () => {
  const [bubbles, setBubbles] = useState([]);
  const insights = [
    {
      title: "The Most In-Demand Web3 Developers & Their Salaries",
      description:
        "The Web3 space is evolving at lightning speed—and so are the developers powering it.",

      cta: "Read more",
      image: webblog1,
      color: "from-blue-500/20 to-purple-600/20",
    },
    {
      title: "The Specifics of Recruiting in Web3",
      description: "Hiring for Web3 isn't like hiring for traditional tech.",

      cta: "Read more",
      image: webblog2,
      color: "from-blue-600/20 to-indigo-700/20",
    },
    {
      title: "Stages of the Web3 Recruitment Process",
      description: "What does hiring a Web3 developer actually look like?",

      cta: "Read more",
      image: webblog3,
      color: "from-purple-500/20 to-blue-600/20",
    },
  ];

  // Initialize bubbles with horizontal movement
  useEffect(() => {
    const initialBubbles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      speed: Math.random() * 0.2 + 0.1,
      direction: Math.random() > 0.5 ? 1 : -1,
      opacity: Math.random() * 0.1 + 0.05,
      delay: Math.random() * 5,
    }));
    setBubbles(initialBubbles);
  }, []);

  // Animate bubbles horizontally
  useEffect(() => {
    const animate = () => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          let newX = bubble.x + bubble.speed * bubble.direction;

          // Reset position when going off screen
          if (newX > 110) newX = -10;
          if (newX < -10) newX = 110;

          return { ...bubble, x: newX };
        })
      );
      requestAnimationFrame(animate);
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-blue-900/60 overflow-hidden">
      {/* Full-width slow moving bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-blue-400/50 backdrop-blur-sm border border-blue-300/20"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              opacity: bubble.opacity,
              transition: "transform 5s linear",
              animationDelay: `${bubble.delay}s`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-200">
          Web3 Recruitment Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-gray-800/40 backdrop-blur-lg border-2 border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:border-r-8 hover:border-t-8"
            >
              {/* Double border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none"></div>

              <div className="relative h-48 overflow-hidden p-4">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${insight.color}`}
                ></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {insight.title}
                </h3>
                <p className="text-lg text-blue-200 mb-4">
                  {insight.description}
                </p>
                <p className="text-gray-300 mb-6">{insight.content}</p>

                <div className="flex items-center text-blue-400 group-hover:text-white transition-colors duration-300">
                  <span className="mr-2 font-medium">{insight.cta}</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>

              {/* Hover light effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-600/10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Web3Blog;

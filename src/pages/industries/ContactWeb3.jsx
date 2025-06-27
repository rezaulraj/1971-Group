import React, { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiMail,
  FiPhone,
  FiUser,
  FiBriefcase,
} from "react-icons/fi";

const ContactWeb3 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [bubbles, setBubbles] = useState([]);
  const [rightBubbles, setRightBubbles] = useState([]);

  // Initialize left background bubbles
  useEffect(() => {
    const initialBubbles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 40,
      y: Math.random() * 100,
      size: Math.random() * 120 + 80,
      speed: Math.random() * 0.1 + 0.05,
      direction: Math.random() > 0.5 ? 1 : -1,
      opacity: Math.random() * 0.08 + 0.02,
      delay: Math.random() * 10,
    }));
    setBubbles(initialBubbles);
  }, []);

  // Initialize right floating bubbles
  useEffect(() => {
    const initialRightBubbles = Array.from({ length: 5 }, (_, i) => ({
      id: i + 100,
      x: Math.random() * 30 + 70,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      speedX: (Math.random() - 0.5) * 0.05,
      speedY: (Math.random() - 0.5) * 0.05,
      opacity: Math.random() * 0.15 + 0.05,
      delay: Math.random() * 5,
    }));
    setRightBubbles(initialRightBubbles);
  }, []);

  // Animate left bubbles
  useEffect(() => {
    const animate = () => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          let newY = bubble.y + bubble.speed * bubble.direction;
          if (newY > 110) newY = -10;
          if (newY < -10) newY = 110;
          return { ...bubble, y: newY };
        })
      );
      requestAnimationFrame(animate);
    };
    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Animate right bubbles
  useEffect(() => {
    const animate = () => {
      setRightBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          let newX = bubble.x + bubble.speedX;
          let newY = bubble.y + bubble.speedY;

          // Bounce off edges
          if (newX > 85 || newX < 70) bubble.speedX *= -1;
          if (newY > 90 || newY < 10) bubble.speedY *= -1;

          return { ...bubble, x: newX, y: newY };
        })
      );
      requestAnimationFrame(animate);
    };
    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-blue-900/60 overflow-hidden">
      {/* Left background bubbles (big) */}
      {bubbles.map((bubble) => (
        <div
          key={`left-${bubble.id}`}
          className="absolute rounded-full bg-blue-400/80 backdrop-blur-sm border border-blue-300/40"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            transition: "transform 10s linear",
            animationDelay: `${bubble.delay}s`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}

      {/* Right floating bubbles (smaller) */}
      {rightBubbles.map((bubble) => (
        <div
          key={`right-${bubble.id}`}
          className="absolute rounded-full bg-purple-400/15 backdrop-blur-sm border border-purple-300/20"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            transition: "transform 3s linear",
            animationDelay: `${bubble.delay}s`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left content - Glass card */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-800/20 backdrop-blur-lg border-2 border-gray-700/50 p-8 shadow-xl">
          {/* Date badge */}
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg">
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">Let's Talk</h2>

          <p className="text-gray-300 mb-8 text-lg">
            We're always ready for a personal consultation to explore how we can
            support your business growth. Whether you're looking to scale your
            team or simply have questions—we're here to help.
          </p>

          <div className="space-y-6">
            <button className="flex items-center space-x-4 bg-gradient-to-br from-gray-500/50 to-blue-500/30 px-4 py-3 rounded-full hover:scale-95 transition-transform duration-300 cursor-pointer">
              <div className="p-3 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30">
                <FiCalendar className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Book a Call
                </h3>
              </div>
            </button>
          </div>
        </div>

        {/* Right form - Glass card */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-800/20 backdrop-blur-lg border-2 border-gray-700/50 p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <FiUser />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <FiMail />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <FiPhone />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <FiBriefcase />
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
            >
              <span>Submit</span>
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWeb3;

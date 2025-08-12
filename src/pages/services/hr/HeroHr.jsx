import React from "react";
import herohr1 from "../../../assets/hr/herohr1.jpg";
import herohr2 from "../../../assets/hr/hero2.avif";
import herohr3 from "../../../assets/hr/hero3.jpg";
import herohr4 from "../../../assets/hr/hero4.jpg";
import clogo1 from "../../../assets/home/l1.webp";
import clogo2 from "../../../assets/home/l2.webp";
import clogo3 from "../../../assets/home/l3.webp";
import clogo4 from "../../../assets/home/l4.webp";
import clogo5 from "../../../assets/home/l5.webp";
import {
  FaArrowRight,
  FaUserTie,
  FaSearch,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

// Extracted components for better organization
const BenefitItem = ({ icon: Icon, text }) => (
  <div className="flex items-center">
    <Icon className="text-yellow-300 mr-2 text-xl" />
    <span>{text}</span>
  </div>
);

const ClientLogo = ({ src, alt }) => (
  <div className="mx-4 lg:mx-8 inline-flex items-center">
    <img
      src={src}
      alt={alt}
      className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
      loading="lazy"
    />
  </div>
);

const HeroImage = ({ src, alt, className = "" }) => (
  <div
    className={`rounded-xl overflow-hidden shadow-lg border-2 border-white ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);

const HeroHr = () => {
  const benefits = [
    { icon: FaUserTie, text: "Top Talent" },
    { icon: FaSearch, text: "Better Visibility" },
    { icon: FaHandshake, text: "Stronger Engagement" },
    { icon: FaChartLine, text: "Improved Metrics" },
  ];

  const clients = [
    { src: clogo1, alt: "Client 1" },
    { src: clogo2, alt: "Client 2" },
    { src: clogo3, alt: "Client 3" },
    { src: clogo4, alt: "Client 4" },
    { src: clogo5, alt: "Client 5" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/80 via-blue-800/70 to-pink-700/80">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M15 15h30v30H15z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            HR Consulting Services
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Build a stronger employer brand. Attract, hire, and retain top
            talent.
          </p>
          <p className="text-lg mb-8 opacity-90">
            We help companies stand out in competitive markets by crafting
            powerful HR strategies and employer branding initiatives that
            improve recruitment metrics and employee satisfaction.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                icon={benefit.icon}
                text={benefit.text}
              />
            ))}
          </div>

          <button
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-all duration-300 flex items-center group"
            aria-label="Schedule a consultation call"
          >
            Schedule a Call
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative h-96">
          <div className="absolute inset-0 grid grid-cols-2 gap-4">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img
                src={herohr1}
                alt="HR professionals discussing strategy"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <HeroImage
              src={herohr2}
              alt="Team meeting in progress"
              className="w-32 h-32 mt-2"
            />
            <HeroImage
              src={herohr3}
              alt="Office culture and workspace"
              className="w-32 h-32 ml-10"
            />

            <HeroImage
              src={herohr4}
              alt="Happy employees collaborating"
              className="w-32 h-32 mt-auto mr-8"
            />
          </div>
        </div>

        <div className="md:col-span-2 relative py-8 overflow-hidden bg-white/10 backdrop-blur-sm border-t border-b border-white/20">
          <div
            className="flex items-center justify-center animate-marquee whitespace-nowrap"
            aria-hidden="true"
          >
            {[...clients, ...clients].map((client, idx) => (
              <ClientLogo key={idx} src={client.src} alt={client.alt} />
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default HeroHr;

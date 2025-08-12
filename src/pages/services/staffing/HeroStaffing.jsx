import React from "react";
import heroStaffing from "../../../assets/staffing/herostaf.jpg?url";
import clogo1 from "../../../assets/home/l1.webp?url";
import clogo2 from "../../../assets/home/l2.webp?url";
import clogo3 from "../../../assets/home/l3.webp?url";
import clogo4 from "../../../assets/home/l4.webp?url";
import clogo5 from "../../../assets/home/l5.webp?url";
import {
  FaArrowRight,
  FaUsers,
  FaChartBar,
  FaLightbulb,
  FaUserPlus,
  FaShieldAlt,
  FaExchangeAlt,
  FaHandshake,
} from "react-icons/fa";

const BenefitItem = ({ icon: Icon, text }) => (
  <div className="flex items-center">
    <Icon className="text-yellow-300 mr-2 text-xl" />
    <span>{text}</span>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300 h-full">
    <div className="flex items-center mb-4">
      <Icon className="text-blue-400 text-2xl mr-3" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
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

const HeroStaffing = () => {
  const benefits = [
    { icon: FaUsers, text: "Scalable Teams" },
    { icon: FaChartBar, text: "Cost Efficiency" },
    { icon: FaLightbulb, text: "Specialized Expertise" },
    { icon: FaUserPlus, text: "Quick Onboarding" },
  ];

  const features = [
    {
      icon: FaShieldAlt,
      title: "Start Hiring with Zero Risk",
      description:
        "No upfront payments required, our process is fast, affordable, and hassle-free. We’re ready to get started immediately, handling payroll, taxes, and compliance for you.",
    },
    {
      icon: FaExchangeAlt,
      title: "Flexible Staffing for Every Need",
      description:
        "Whether you need temporary support or long-term hires, our adaptable staffing solutions are tailored to fit your project scope. Effortlessly scale your team up or down as needed.",
    },
    {
      icon: FaHandshake,
      title: "Retention That Delivers Results",
      description:
        "We prioritize more than just hiring; we focus on cultural fit and long-term success. Our goal is to place remote talent that not only performs but thrives with your team.",
    },
  ];

  const clients = [
    { src: clogo1, alt: "Client 1" },
    { src: clogo2, alt: "Client 2" },
    { src: clogo3, alt: "Client 3" },
    { src: clogo4, alt: "Client 4" },
    { src: clogo5, alt: "Client 5" },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/80 via-indigo-800/70 to-cyan-700/80">
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
              Staffing & Outstaffing Services
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              Scale Smarter. Hire Faster.
            </p>
            <p className="text-xl mb-8 opacity-90">
              Scale your team seamlessly with our expert outstaffing solutions
              designed to help fast-growing companies expand their workforce,
              enhance flexibility, and drive productivity.
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
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300 flex items-center group"
              aria-label="Book a call about staffing services"
            >
              Book a Call
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={heroStaffing}
              alt="Professional team working together"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
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
      </section>

      <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Staffing Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive approach ensures you get the right talent with
              the right terms for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default HeroStaffing;

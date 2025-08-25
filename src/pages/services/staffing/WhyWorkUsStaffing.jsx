import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSyncAlt,
  FaStar,
  FaBolt,
  FaHandshake,
  FaMoneyBillWave,
  FaChartLine,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Calendly from "../../../components/Calendly";
import { Helmet } from "react-helmet";

const WhyWorkUsStaffing = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const benefits = [
    {
      icon: FaSyncAlt,
      title: "Flexible Hiring Options",
      description:
        "Whether you need short-term support or long-term leadership, we hire top developers, engineers, executives, and C-level specialists tailored to your project timeline.",
    },
    {
      icon: FaStar,
      title: "Top-Tier Talent Quality",
      description:
        "Access a global talent pool through our extensive candidate database. We provide only highly qualified professionals who match your specific requirements.",
    },
    {
      icon: FaBolt,
      title: "Fast Hiring Process",
      description:
        "We rapidly fill critical roles and project gaps—delivering candidate CVs and onboarding support in record time.",
    },
    {
      icon: FaHandshake,
      title: "Risk-Free Partnership",
      description:
        "Minimize the risk of bad hires, delays, or disruptions. Our vetted process ensures you get reliable professionals from the start.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Cost-Efficient Solutions",
      description:
        "We offer all-inclusive pricing with flexible plans and multiple payment options, including traditional methods and crypto.",
    },
    {
      icon: FaChartLine,
      title: "Boosted Productivity",
      description:
        "Through smart staffing and business strategies, we help expand your team's output, reduce time to market, and achieve your business goals faster.",
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      position: "CTO, TechGrowth Solutions",
      content:
        "Their flexible hiring options saved our project timeline. We got exactly the right talent when we needed it most.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      position: "HR Director, Innovate Inc.",
      content:
        "The quality of talent is exceptional. We've reduced our time-to-hire by 40% while improving candidate quality.",
      rating: 5,
    },
    {
      name: "James Wilson",
      position: "CEO, Startup Ventures",
      content:
        "Their cost-efficient solutions helped us scale our team without breaking our budget. Highly recommended!",
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
      <Helmet>
        <meta
          name="description"
          content="Discover the advantages of partnering with our staffing and recruitment services. Flexible hiring options, top-tier talent, fast hiring, risk-free partnerships, cost-efficient solutions, and boosted productivity."
        />
        <meta
          name="keywords"
          content="staffing solutions, recruitment services, flexible hiring, top talent, fast hiring, risk-free partnership, cost-efficient staffing, productivity"
        />
        <meta
          property="og:title"
          content="Why Work With Us | Staffing & Recruitment Solutions"
        />
        <meta
          property="og:description"
          content="Partner with our recruitment and staffing services to access flexible hiring options, top talent quality, fast hiring, risk-free partnerships, cost-efficient solutions, and boosted productivity."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/assets/images/why-work-with-us.jpg"
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/why-work-with-us"
        />
        <link rel="canonical" href="https://yourwebsite.com/why-work-with-us" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Staffing & Recruitment Solutions",
            description:
              "Flexible hiring options, top-tier talent, fast hiring, risk-free partnerships, cost-efficient solutions, and boosted productivity.",
            provider: {
              "@type": "Organization",
              name: "1971 Group",
              url: "https://yourwebsite.com",
              logo: "https://yourwebsite.com/logo.png",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Staffing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Flexible Hiring Options",
                    description:
                      "Hire top developers, engineers, executives, and C-level specialists tailored to your project timeline.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Top-Tier Talent Quality",
                    description:
                      "Access a global talent pool of highly qualified professionals matching your requirements.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fast Hiring Process",
                    description:
                      "Rapidly fill critical roles and project gaps with candidate CVs and onboarding support.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Risk-Free Partnership",
                    description:
                      "Minimize hiring risks with a vetted process ensuring reliable professionals from the start.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Cost-Efficient Solutions",
                    description:
                      "All-inclusive pricing with flexible plans and multiple payment options including traditional and crypto.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Boosted Productivity",
                    description:
                      "Smart staffing and business strategies to expand team output and achieve business goals faster.",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>
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
            <FaHeart className="mr-2" /> Trusted by Industry Leaders
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#000b30] mb-4">
            Why Work With Us
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the key advantages of partnering with our recruitment and
            staffing services for your business growth.
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
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-white overflow-hidden hover:shadow-lg transition-all duration-300 group"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                  <IconComponent className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#000b30] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
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
                    <FaStar
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
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F6F1EE] flex items-center justify-center text-[#000b30] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F6F1EE] flex items-center justify-center text-[#000b30] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <FaChevronRight className="w-5 h-5" />
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
            Ready to Transform Your Team?
          </h3>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of companies who trust our staffing solutions for
            their most critical hiring needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                const section = document.querySelector("#contact-us");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-[#D4AF37] text-[#000b30] font-bold rounded-lg hover:bg-[#c6a22f] transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Get Started Today
            </button>
            <button
              onClick={() => setShowCalendly(true)}
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all hover:scale-105 cursor-pointer"
            >
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default WhyWorkUsStaffing;

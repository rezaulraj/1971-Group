import React from "react";
import heroImage from "../../assets/home/hero.png?url";
import { FaArrowRight, FaClock, FaStar, FaUserTie } from "react-icons/fa";
import clogo1 from "../../assets/home/l1.webp?url";
import clogo2 from "../../assets/home/l2.webp?url";
import clogo3 from "../../assets/home/l3.webp?url";
import clogo4 from "../../assets/home/l4.webp?url";
import clogo5 from "../../assets/home/l5.webp?url";
const HeroHome = () => {
  const ourClient = [
    {
      clogo: clogo1,
    },
    {
      clogo: clogo2,
    },
    {
      clogo: clogo3,
    },
    {
      clogo: clogo4,
    },
    {
      clogo: clogo5,
    },
  ];
  return (
    <div className="relative overflow-hidden">
      {/* Main Hero Section */}
      <section className="relative pt-16 pb-0 md:pt-24 lg:pt-30">
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001153] via-[#1a2a6b] to-[#334380] opacity-95"></div>
          <div className="absolute inset-0 bg-[url('../../assets/home/hero-pattern.svg')] bg-cover opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Side - Text Content */}
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Global Tech Recruitment & Staffing for Fast-Growing Companies
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                1971 Group is your Gulf-based gateway to top-tier global talent.
                We're professionals who simplify and streamline your hiring
                process whether you're scaling a startup or expanding a
                multinational.
              </p>
              <button
                className="flex items-center px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  background:
                    "linear-gradient(45deg, #ffaa13 0%, #ffc246 100%)",
                  color: "#001153",
                  boxShadow: "0 4px 15px rgba(255, 170, 19, 0.4)",
                }}
              >
                Hire Talent
                <FaArrowRight className="ml-2 animate-pulse" />
              </button>
            </div>

            {/* Right Side - Image with Integrated Stats */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                {/* Image Container */}
                <div
                  className="relative overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-bl-[40px]"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <img
                    src={heroImage}
                    alt="Team working together"
                    className="w-full h-auto object-cover"
                  />
                  {/* Image Overlay Gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(0, 17, 83, 0.3) 0%, rgba(255, 170, 19, 0.2) 100%)",
                    }}
                  ></div>
                </div>

                {/* Stats Banner - Integrated at bottom of image */}
                <div className="absolute -bottom-6 left-0 right-0">
                  <div className="grid grid-cols-3 gap-0.5 max-w-4xl mx-auto">
                    {/* Stat 1 */}
                    <div
                      className="bg-white p-2 rounded-bl-4xl shadow-2xl flex  items-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(230, 247, 255, 0.95) 0%, rgba(179, 224, 255, 0.95) 100%)",
                        borderTop: "4px solid #4ecdc4",
                      }}
                    >
                      <div
                        className="mr-3 p-2 rounded-full"
                        style={{ backgroundColor: "rgba(78, 205, 196, 0.2)" }}
                      >
                        <FaClock
                          className="text-xl"
                          style={{ color: "#4ecdc4" }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#001153" }}
                        >
                          4 weeks
                        </h3>
                        <p className="text-sm text-gray-700">
                          Avg. hiring time
                        </p>
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div
                      className="bg-white p-4 shadow-xl flex items-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255, 242, 230, 0.95) 0%, rgba(255, 217, 179, 0.95) 100%)",
                        borderTop: "4px solid #ffaa13",
                      }}
                    >
                      <div
                        className="mr-3 p-2 rounded-full"
                        style={{ backgroundColor: "rgba(255, 170, 19, 0.2)" }}
                      >
                        <FaStar
                          className="text-xl"
                          style={{ color: "#ffaa13" }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#001153" }}
                        >
                          40+
                        </h3>
                        <p className="text-sm text-gray-700">5-star reviews</p>
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div
                      className="bg-white p-4 rounded-tr-2xl shadow-xl flex items-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(240, 249, 255, 0.95) 0%, rgba(209, 232, 255, 0.95) 100%)",
                        borderTop: "4px solid #001153",
                      }}
                    >
                      <div
                        className="mr-3 p-2 rounded-full"
                        style={{ backgroundColor: "rgba(0, 17, 83, 0.1)" }}
                      >
                        <FaUserTie
                          className="text-xl"
                          style={{ color: "#001153" }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#001153" }}
                        >
                          350+
                        </h3>
                        <p className="text-sm text-gray-700">Placements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to account for stats overlap */}
      <div className="pt-24 md:pt-20 lg:pt-16"></div>

      {/* Clients Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "#001153" }}
          >
            Trusted By Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {ourClient.map((item) => (
              <div
                key={item}
                className="p-3 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{
                  boxShadow: "0 4px 6px rgba(0, 17, 83, 0.05)",
                }}
              >
                <div className="h-10 md:h-14 w-28 md:w-36 rounded-lg flex flex-wrap space-y-8 items-center justify-center">
                  <img src={item.clogo} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroHome;

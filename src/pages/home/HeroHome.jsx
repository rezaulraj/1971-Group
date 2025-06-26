import React from "react";
import heroImage from "../../assets/hero.png?url";
import { FaArrowRight, FaClock, FaStar, FaUserTie } from "react-icons/fa";
import clogo1 from "../../assets/home/l1.webp?url";
import clogo2 from "../../assets/home/l2.webp?url";
import clogo3 from "../../assets/home/l3.webp?url";
import clogo4 from "../../assets/home/l4.webp?url";
import clogo5 from "../../assets/home/l5.webp?url";

const HeroHome = () => {
  const ourClient = [
    { clogo: clogo1 },
    { clogo: clogo2 },
    { clogo: clogo3 },
    { clogo: clogo4 },
    { clogo: clogo5 },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background with SVG Pattern */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M15 15h30v30H15z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Section */}
      <section className="relative pt-16 pb-0 md:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Side - Text Content */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Global Tech Recruitment & Staffing for Fast-Growing Companies
              </h1>
              <p className="text-base md:text-lg text-gray-200 mb-6">
                1971 Group is your Gulf-based gateway to top-tier global talent.
                We're professionals who simplify and streamline your hiring
                process whether you're scaling a startup or expanding a
                multinational.
              </p>
              <button
                className="flex items-center px-6 py-3 rounded-full text-base font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  background:
                    "linear-gradient(45deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",
                  color: "white",
                  boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
                }}
              >
                Hire Talent
                <FaArrowRight className="ml-2 animate-pulse" />
              </button>
            </div>

            {/* Right Side - Image with Stats */}
            <div className="lg:w-1/2 relative mt-10 lg:mt-0">
              <div
                className="relative"
                style={{ maxWidth: "500px", margin: "0 auto" }}
              >
                {/* Image Container */}
                <div
                  className="relative overflow-hidden rounded-tl-[150px] rounded-br-[60px] rounded-bl-[30px] border-4 border-white/20"
                  style={{
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    src={heroImage}
                    alt="Team working together"
                    className="w-full h-full object-cover relative z-10"
                  />
                  {/* Image Overlay Gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-amber-500/20 to-indigo-500/20 z-0"
                    // style={{
                    //   background:
                    //     "linear-gradient(45deg, rgba(15, 23, 42, 0.4) 0%, rgba(59, 130, 246, 0.3) 100%)",
                    // }}
                  />
                </div>

                {/* Stats Cards */}
                <div className="absolute -bottom-5 left-0 right-0 z-20">
                  <div className="grid grid-cols-3 gap-0.5 max-w-lg mx-auto">
                    {/* Stat 1 */}
                    <div className="bg-white p-4 rounded-bl-3xl shadow-lg flex items-center flex-wrap bg-gradient-to-br from-emerald-50 to-emerald-100 border-t-4 border-emerald-500">
                      <div className="mr-2 p-1.5 rounded-full bg-emerald-500/20">
                        <FaClock className="text-lg text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">
                          4 weeks
                        </h3>
                        <p className="text-xs text-slate-600">
                          Avg. hiring time
                        </p>
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-white p-4 shadow-lg flex items-center flex-wrap bg-gradient-to-br from-amber-50 to-amber-100 border-t-4 border-amber-500">
                      <div className="mr-2 p-1.5 rounded-full bg-amber-500/20">
                        <FaStar className="text-lg text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">
                          40+
                        </h3>
                        <p className="text-xs text-slate-600">5-star reviews</p>
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-white p-4 rounded-tr-xl shadow-lg flex items-center flex-wrap bg-gradient-to-br from-indigo-50 to-indigo-100 border-t-4 border-indigo-500">
                      <div className="mr-2 p-1.5 rounded-full bg-indigo-500/20">
                        <FaUserTie className="text-lg text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">
                          350+
                        </h3>
                        <p className="text-xs text-slate-600">Placements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="pt-16 md:pt-14 lg:pt-12"></div>

      {/* Clients Section */}
      <section className="relative py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-blue-900/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">
            Trusted By Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {ourClient.map((item, index) => (
              <div
                key={index}
                className="p-2 bg-white rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{
                  boxShadow: "0 2px 4px rgba(15, 23, 42, 0.1)",
                }}
              >
                <div className="h-8 md:h-10 w-20 md:w-28 flex items-center justify-center">
                  <img
                    src={item.clogo}
                    alt="Client logo"
                    className="h-full w-full object-contain"
                  />
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

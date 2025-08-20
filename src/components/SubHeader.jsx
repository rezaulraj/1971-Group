import React, { useState } from "react";
import logo from "/logo.png?url";

const SubHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeChildDropdown, setActiveChildDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      level: "Services",
      subNavs: [
        {
          level: "Recruitments",
          childNavs: [
            { level: "All Services", path: "/recruitment-services" },
            { level: "Hourly Recruiting", path: "/hourly-recruiting-services" },
            { level: "Pay Per Hire", path: "/pay-par-hire-services" },
          ],
        },
        { level: "Hr", path: "/hr-services" },
        { level: "Staffing", path: "/staffing-services" },
        { level: "Subscription", path: "/subscription-services" },
      ],
    },
    {
      level: "Industries",
      subNavs: [
        { level: "Web3", path: "/web3" },
        { level: "Ai", path: "/ai" },
        { level: "FinTech", path: "/fintech" },
        { level: "Cloud Computing", path: "/cloud-computing" },
      ],
    },
    {
      level: "Resources",
      subNavs: [
        { level: "Blog", path: "/blogs" },
        { level: "Case Study", path: "/case-study" },
        { level: "Guides", path: "/guides" },
      ],
    },
    { level: "Company", path: "/company" },
    { level: "Vacancies", path: "/vacancies" },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
    setActiveChildDropdown(null);
  };

  const toggleChildDropdown = (childIndex) => {
    setActiveChildDropdown(
      childIndex === activeChildDropdown ? null : childIndex
    );
  };

  return (
    <header className="bg-gray-900/50 backdrop-blur-lg shadow-sm fixed top-0 w-full z-50 border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="1971 Group"
            className="h-12 filter brightness-5 invert"
          />
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-all"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => item.subNavs && setActiveDropdown(index)}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveChildDropdown(null);
              }}
            >
              {item.path ? (
                <a
                  href={item.path}
                  className="text-white text-lg font-medium hover:text-teal-300 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  {item.level}
                </a>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`text-white font-medium text-lg flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                      activeDropdown === index
                        ? "bg-white/10 text-teal-300"
                        : "hover:bg-white/5 hover:text-teal-300"
                    }`}
                  >
                    {item.level}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {activeDropdown === index && (
                    <div className="absolute left-0 top-full mt-0 w-56 z-40">
                      <div className="bg-gray-600 backdrop-blur-xl rounded-lg shadow-xl border border-gray-700/30 overflow-hidden">
                        {item.subNavs.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className="border-b border-gray-700/30 last:border-0"
                          >
                            {subItem.childNavs ? (
                              <>
                                <button
                                  onClick={() => toggleChildDropdown(subIndex)}
                                  className={`w-full text-left px-4 py-3 font-medium flex justify-between items-center transition-colors ${
                                    activeChildDropdown === subIndex
                                      ? "text-teal-300 bg-white/10"
                                      : "text-white hover:bg-white/5 hover:text-teal-300"
                                  }`}
                                >
                                  {subItem.level}
                                  <svg
                                    className={`w-4 h-4 transition-transform ${
                                      activeChildDropdown === subIndex
                                        ? "rotate-90"
                                        : ""
                                    }`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>

                                {activeChildDropdown === subIndex && (
                                  <div className="bg-black/20">
                                    {subItem.childNavs.map(
                                      (child, childIndex) => (
                                        <a
                                          key={childIndex}
                                          href={child.path}
                                          className="block px-6 py-2 text-sm text-gray-300 hover:text-teal-300 hover:bg-white/5 transition-colors"
                                        >
                                          {child.level}
                                        </a>
                                      )
                                    )}
                                  </div>
                                )}
                              </>
                            ) : (
                              <a
                                href={subItem.path}
                                className="block px-4 py-3 text-white hover:text-teal-300 hover:bg-white/5 transition-colors"
                              >
                                {subItem.level}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-teal-500/20">
            Hire Talent
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/80 backdrop-blur-lg border-t border-gray-700/50">
          <div className="px-4 py-4">
            {navItems.map((item, index) => (
              <div key={index} className="mb-2">
                {item.path ? (
                  <a
                    href={item.path}
                    className="block py-3 px-4 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {item.level}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`w-full text-left py-3 px-4 font-medium rounded-lg flex justify-between items-center transition-colors ${
                        activeDropdown === index
                          ? "bg-white/10 text-teal-300"
                          : "text-white hover:bg-white/5"
                      }`}
                    >
                      {item.level}
                      <span className="text-xl">
                        {activeDropdown === index ? "−" : "+"}
                      </span>
                    </button>
                    {activeDropdown === index && (
                      <div className="mt-1 ml-4 bg-black/20 rounded-lg overflow-hidden">
                        {item.subNavs.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className="border-t border-gray-700/30 first:border-t-0"
                          >
                            {subItem.childNavs ? (
                              <>
                                <button
                                  onClick={() => toggleChildDropdown(subIndex)}
                                  className={`w-full text-left py-2 px-4 text-sm flex justify-between items-center transition-colors ${
                                    activeChildDropdown === subIndex
                                      ? "text-teal-300 bg-white/10"
                                      : "text-gray-300 hover:bg-white/5"
                                  }`}
                                >
                                  {subItem.level}
                                  <span className="text-lg">
                                    {activeChildDropdown === subIndex
                                      ? "−"
                                      : "+"}
                                  </span>
                                </button>
                                {activeChildDropdown === subIndex && (
                                  <div className="ml-4">
                                    {subItem.childNavs.map(
                                      (child, childIndex) => (
                                        <a
                                          key={childIndex}
                                          href={child.path}
                                          className="block py-2 px-4 text-xs text-gray-400 hover:text-teal-300 hover:bg-white/5 transition-colors"
                                        >
                                          {child.level}
                                        </a>
                                      )
                                    )}
                                  </div>
                                )}
                              </>
                            ) : (
                              <a
                                href={subItem.path}
                                className="block py-2 px-4 text-sm text-gray-300 hover:text-teal-300 hover:bg-white/5 transition-colors"
                              >
                                {subItem.level}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <button className="mt-4 w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg font-medium hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg">
              Hire Talent
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default SubHeader;

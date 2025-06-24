import React, { useState } from "react";
import logo from "/logo.png?url";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Color variables
  const colors = {
    primary: "#001153", // Deep navy blue
    primaryLight: "#1a2a6b", // Lighter navy
    primaryLighter: "#334380", // Even lighter navy
    secondary: "#ffaa13", // Vibrant orange
    secondaryLight: "#ffc246", // Lighter orange
    secondaryLighter: "#ffe0a3", // Pale orange
    accent: "#4ecdc4", // Teal accent
    white: "#ffffff",
    lightGray: "#f8f9fa",
    mediumGray: "#e9ecef",
    darkGray: "#495057",
    text: "#212529",
  };

  const navItems = [
    {
      level: "Services",
      subNavs: [
        {
          level: "Recruitments",
          childNavs: [
            {
              level: "All Services",
              path: "/all-services",
            },
            {
              level: "Hourly Recruiting",
              path: "/hourly-recruiting",
            },
            {
              level: "Pay Per Hire",
              path: "/pay-par-hire",
            },
          ],
        },
        {
          level: "Hr",
          path: "/hr",
        },
        {
          level: "Staffing",
          path: "/staffing",
        },
        {
          level: "Subscription",
          path: "/subscription",
        },
      ],
    },
    {
      level: "Industries",
      subNavs: [
        {
          level: "Web3",
          path: "/web3",
        },
        {
          level: "Ai",
          path: "/ai",
        },
        {
          level: "FinTech",
          path: "/fintech",
        },
        {
          level: "Cloud Computing",
          path: "/cloud-computing",
        },
      ],
    },
    {
      level: "Resources",
      subNavs: [
        {
          level: "Blog",
          path: "/blogs",
        },
        {
          level: "Case Study",
          path: "/case-study",
        },
        {
          level: "Guides",
          path: "/guides",
        },
      ],
    },
    {
      level: "Company",
      path: "/company",
    },
    {
      level: "Vacancies",
      path: "/vacancies",
    },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className="shadow-sm sticky top-0 z-50"
      style={{
        backgroundColor: colors.primary,
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
        borderBottom: `2px solid ${colors.secondary}`,
      }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="1971 Group"
                className="h-16 md:h-20 mb-4 md:mb-0 filter -brightness-50 invert"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-secondaryLight focus:outline-none"
              style={{ transition: "color 0.3s ease" }}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Middle Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => toggleDropdown(index)}
                onMouseLeave={closeAllDropdowns}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm lg:text-lg font-medium font-lato text-gray-300 ${
                    activeDropdown === index
                      ? `text-white bg-primaryLight`
                      : `text-gray-100 hover:text-white hover:bg-primaryLight`
                  } transition-all duration-300 flex items-center`}
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 500,
                  }}
                  onClick={() =>
                    item.subNavs ? toggleDropdown(index) : closeAllDropdowns()
                  }
                >
                  {item.level}
                  {item.subNavs && (
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {item.subNavs && activeDropdown === index && (
                  <div
                    className="absolute left-0 w-56 rounded-md shadow-lg py-1 z-50"
                    style={{
                      backgroundColor: colors.white,
                      boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
                      border: `1px solid ${colors.mediumGray}`,
                    }}
                  >
                    {item.subNavs.map((subItem, subIndex) => (
                      <div key={subIndex}>
                        {subItem.childNavs ? (
                          <div className="relative">
                            <button
                              className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                              style={{
                                color: colors.text,
                                transition: "all 0.3s ease",
                              }}
                            >
                              <span>{subItem.level}</span>
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                            <div
                              className="absolute left-full top-0 w-56 rounded-md shadow-lg py-1 z-50"
                              style={{
                                backgroundColor: colors.white,
                                boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
                                border: `1px solid ${colors.mediumGray}`,
                              }}
                            >
                              {subItem.childNavs.map(
                                (childItem, childIndex) => (
                                  <a
                                    key={childIndex}
                                    href={childItem.path}
                                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                                    style={{
                                      color: colors.text,
                                      transition: "all 0.3s ease",
                                      fontFamily: "'Poppins', sans-serif",
                                    }}
                                  >
                                    {childItem.level}
                                  </a>
                                )
                              )}
                            </div>
                          </div>
                        ) : (
                          <a
                            href={subItem.path}
                            className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                            style={{
                              color: colors.text,
                              transition: "all 0.3s ease",
                              fontFamily: "'Poppins', sans-serif",
                            }}
                          >
                            {subItem.level}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Hire Talent Button - Desktop */}
          <div className="hidden md:block">
            <button
              className="px-6 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: colors.secondary,
                color: colors.primary,
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                border: `2px solid ${colors.secondary}`,
                boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
                transform: "translateY(0)",
                ":hover": {
                  backgroundColor: colors.secondaryLight,
                  transform: "translateY(-2px)",
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.secondaryLight;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.secondary;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Hire Talent
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden mt-2 pb-3 space-y-1"
            style={{
              backgroundColor: colors.primaryLight,
              borderRadius: "8px",
              marginTop: "12px",
            }}
          >
            {navItems.map((item, index) => (
              <div key={index} className="px-2 pt-2">
                <button
                  className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                    activeDropdown === index
                      ? `text-white bg-primaryLighter`
                      : `text-gray-200 hover:text-white hover:bg-primaryLighter`
                  }`}
                  style={{
                    transition: "all 0.3s ease",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  onClick={() =>
                    item.subNavs ? toggleDropdown(index) : closeAllDropdowns()
                  }
                >
                  {item.level}
                  {item.subNavs && (
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {item.subNavs && activeDropdown === index && (
                  <div
                    className="pl-4 mt-1 space-y-1"
                    style={{
                      backgroundColor: colors.primaryLighter,
                      borderRadius: "6px",
                      padding: "8px",
                    }}
                  >
                    {item.subNavs.map((subItem, subIndex) => (
                      <div key={subIndex}>
                        {subItem.childNavs ? (
                          <div>
                            <button
                              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-white"
                              style={{
                                transition: "all 0.3s ease",
                                fontFamily: "'Poppins', sans-serif",
                              }}
                              onClick={() =>
                                toggleDropdown(`${index}-${subIndex}`)
                              }
                            >
                              {subItem.level}
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                            {activeDropdown === `${index}-${subIndex}` && (
                              <div
                                className="pl-4 space-y-1"
                                style={{
                                  backgroundColor: colors.primary,
                                  borderRadius: "4px",
                                  padding: "6px",
                                }}
                              >
                                {subItem.childNavs.map(
                                  (childItem, childIndex) => (
                                    <a
                                      key={childIndex}
                                      href={childItem.path}
                                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-white"
                                      style={{
                                        transition: "all 0.3s ease",
                                        fontFamily: "'Poppins', sans-serif",
                                      }}
                                    >
                                      {childItem.level}
                                    </a>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            href={subItem.path}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-white"
                            style={{
                              transition: "all 0.3s ease",
                              fontFamily: "'Poppins', sans-serif",
                            }}
                          >
                            {subItem.level}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-2 pt-2">
              <button
                className="w-full px-3 py-3 rounded-md text-base font-medium transition-all duration-300"
                style={{
                  backgroundColor: colors.secondary,
                  color: colors.primary,
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
                }}
              >
                Hire Talent
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

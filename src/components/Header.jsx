import React, { useState } from "react";
import logo from "/logo.png?url";
import { FiChevronDown, FiChevronRight, FiX, FiMenu } from "react-icons/fi";

const Header = () => {
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
        { level: "HR", path: "/hr-services" },
        { level: "Staffing", path: "/staffing-services" },
        { level: "Subscription", path: "/subscription-services" },
      ],
    },
    {
      level: "Industries",
      subNavs: [
        { level: "Web3", path: "/web3" },
        { level: "AI", path: "/ai" },
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
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="1971 Group" className="h-12" />
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 p-2 rounded-md hover:bg-gray-100 transition"
          >
            {mobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
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
                  className="text-gray-800 text-lg font-semibold hover:text-[#5cc082] transition-colors px-3 py-2"
                >
                  {item.level}
                </a>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`text-gray-800 font-semibold text-lg flex items-center gap-1 px-3 py-2 transition-colors ${
                      activeDropdown === index
                        ? "text-[#5cc082]"
                        : "hover:text-[#5cc082]"
                    }`}
                  >
                    {item.level}
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* SubNav Dropdown */}
                  {activeDropdown === index && (
                    <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md w-56 z-40 border border-gray-100">
                      {item.subNavs.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          {subItem.childNavs ? (
                            <>
                              <button
                                onClick={() => toggleChildDropdown(subIndex)}
                                className={`w-full text-left px-4 py-3 font-medium flex justify-between items-center transition-colors ${
                                  activeChildDropdown === subIndex
                                    ? "text-[#5cc082] bg-gray-50"
                                    : "text-gray-800 hover:bg-gray-50"
                                }`}
                              >
                                {subItem.level}
                                <FiChevronRight
                                  className={`w-4 h-4 transition-transform ${
                                    activeChildDropdown === subIndex
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              </button>
                              {/* ChildNav */}
                              {activeChildDropdown === subIndex && (
                                <div className="bg-gray-50 pl-6">
                                  {subItem.childNavs.map(
                                    (child, childIndex) => (
                                      <a
                                        key={childIndex}
                                        href={child.path}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#5cc082] hover:bg-gray-100 transition-colors"
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
                              className="block px-4 py-3 text-gray-800 hover:text-[#5cc082] hover:bg-gray-50 transition-colors"
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
        </nav>

        {/* Hire Talent */}
        <div className="hidden md:block">
          <button className="bg-[#5cc082] text-white px-6 py-2 rounded-md hover:bg-[#4daa72] transition-colors font-semibold shadow-md hover:shadow-lg">
            Hire Talent
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3">
            {navItems.map((item, index) => (
              <div key={index} className="mb-1">
                {item.path ? (
                  <a
                    href={item.path}
                    className="block py-3 px-4 text-gray-800 font-medium rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.level}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`w-full text-left py-3 px-4 font-medium rounded-md flex justify-between items-center transition-colors ${
                        activeDropdown === index
                          ? "bg-gray-50 text-[#5cc082]"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      {item.level}
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="mt-1 ml-4 bg-gray-50 rounded-md overflow-hidden">
                        {item.subNavs.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className="border-t border-gray-100 first:border-t-0"
                          >
                            {subItem.childNavs ? (
                              <>
                                <button
                                  onClick={() => toggleChildDropdown(subIndex)}
                                  className={`w-full text-left py-2 px-4 text-sm flex justify-between items-center transition-colors ${
                                    activeChildDropdown === subIndex
                                      ? "text-[#5cc082] bg-gray-100"
                                      : "text-gray-700 hover:bg-gray-100"
                                  }`}
                                >
                                  {subItem.level}
                                  <FiChevronRight
                                    className={`w-4 h-4 transition-transform ${
                                      activeChildDropdown === subIndex
                                        ? "rotate-90"
                                        : ""
                                    }`}
                                  />
                                </button>
                                {activeChildDropdown === subIndex && (
                                  <div className="ml-4">
                                    {subItem.childNavs.map(
                                      (child, childIndex) => (
                                        <a
                                          key={childIndex}
                                          href={child.path}
                                          className="block py-2 px-4 text-xs text-gray-600 hover:text-[#5cc082] hover:bg-gray-100 transition-colors"
                                          onClick={() =>
                                            setMobileMenuOpen(false)
                                          }
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
                                className="block py-2 px-4 text-sm text-gray-700 hover:text-[#5cc082] hover:bg-gray-100 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
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
            <button className="mt-4 w-full bg-[#5cc082] text-white py-3 rounded-md font-semibold hover:bg-[#4daa72] transition-colors shadow-md">
              Hire Talent
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaRegEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiBitcoin } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <a href="/" className="flex items-center mb-8">
              <img
                src={"/logo.png"}
                alt="1971 Group"
                className="h-16 md:h-20 mb-4 md:mb-0 filter -brightness-50 invert"
              />
            </a>
            <p className="text-gray-300 mb-4">
              Global Recruitment & Workforce Solutions
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Recruitment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Subscription
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  RPO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pay-Per-Hire
                </a>
              </li>
            </ul>
          </div>

          {/* Industries & Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Industries
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Web3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FinTech
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AI
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  And more...
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaRegEnvelope className="mt-1 mr-3 flex-shrink-0" />
                <a
                  href="mailto:hello@1971group.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hello@1971group.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Based in the Gulf</span>
              </li>
              <li className="flex items-start">
                <FaGlobe className="mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Serving global employers</span>
              </li>
            </ul>

            {/* Payment Methods */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-gray-400">
                PAYMENT METHODS
              </h4>
              <div className="flex space-x-4">
                <SiVisa className="h-8 w-8 text-gray-300 hover:text-white transition-colors" />
                <SiMastercard className="h-8 w-8 text-gray-300 hover:text-white transition-colors" />
                <SiBitcoin className="h-8 w-8 text-gray-300 hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} 1971 Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

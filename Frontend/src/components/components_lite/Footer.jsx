import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-white mb-3">
            <span className="text-indigo-500">AI</span> Hire
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Connecting AI-driven talent with top companies.  
            Smart hiring, powered by intelligence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-indigo-400 duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:text-indigo-400 duration-200">
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-400 duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400 duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect With Me</h3>
          <div className="flex space-x-5 text-xl">
            <a
              href="https://github.com/aman-singh0409"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-kumar-singh0409/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:aman.kumar.singh.4291@gmail.com"
              className="hover:text-indigo-400 duration-200"
            >
              <FaEnvelope />
            </a>
            <a
              href="creater.jsx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 duration-200"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 mt-10 pt-5">
        <p>© {new Date().getFullYear()} AI Hire. All rights reserved.</p>
        <p className="mt-1">
          Designed & Developed by{" "}
          <a
            href="https://github.com/Abhisheksingh555"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Aman Singh
          </a>
        </p>
        <p className="mt-2">
          <Link to="/PrivacyPolicy" className="hover:text-indigo-400">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/TermsofService" className="hover:text-indigo-400">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

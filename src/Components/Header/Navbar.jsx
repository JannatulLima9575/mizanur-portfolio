import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-12 py-4 flex items-center justify-between">
      
      {/* Left Side - Logo */}
      <h1 className="text-2xl font-bold text-purple-600">
        Portfolio
      </h1>

      {/* Center - Menu Links */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li className="text-purple-600 cursor-pointer">Home</li>
        <li className="hover:text-purple-600 cursor-pointer">About</li>
        <li className="hover:text-purple-600 cursor-pointer">Worked</li>
        <li className="hover:text-purple-600 cursor-pointer">Skills</li>
        <li className="hover:text-purple-600 cursor-pointer">Education</li>
        <li className="hover:text-purple-600 cursor-pointer">Contact</li>
      </ul>

      {/* Right Side - Social Icons */}
      <div className="flex items-center gap-4 text-xl text-gray-700">
        <a href="https://github.com/mizanurrahman017" target="_blank" rel="noreferrer" className="hover:text-purple-600">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mizanur-rahman-asif-599711383/" target="_blank" rel="noreferrer" className="hover:text-purple-600">
          <FaLinkedin />
        </a>
        <a href="mailto:your@email.com" className="hover:text-purple-600">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

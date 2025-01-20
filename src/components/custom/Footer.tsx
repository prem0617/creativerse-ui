import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-20 py-7">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          CREATIVERSE
        </h1>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0 text-gray-400">
          <p className="cursor-pointer hover:underline">About</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Licensing</p>
          <p className="cursor-pointer hover:underline">Contact</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mx-6 md:mx-20" />

      {/* Bottom Section */}
      <p className="py-6 text-center text-gray-400 text-sm">
        © 2025 Creativerse™. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

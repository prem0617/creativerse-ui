"use client"; // Ensures this component is treated as a client-side component

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-20 border-b justify-between items-center px-5 md:px-10 lg:px-36 sticky top-0 bg-white z-30">
      {/* Brand Name */}
      <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
        CREATIVERSE
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-5">
        <p className="text-[#111827] font-semibold text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer">
          Home
        </p>
        <p className="text-[#111827] font-semibold text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer">
          Features
        </p>
        <p className="text-[#111827] font-semibold text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer">
          Pricing
        </p>
        <p className="text-[#111827] font-semibold text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer">
          Contact
        </p>
      </div>

      {/* Sign Up Button (Desktop) */}
      <div className="hidden md:flex">
        <button className="relative inline-flex h-10 md:h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-950 px-5 md:px-7 py-1 text-[14px] md:text-[16px] lg:text-[18px] font-medium text-white backdrop-blur-3xl">
            Sign Up
          </span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-[#111827] font-semibold text-[18px] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-20">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="text-[#111827] font-semibold text-[16px] cursor-pointer">
              Home
            </li>
            <li className="text-[#111827] font-semibold text-[16px] cursor-pointer">
              Features
            </li>
            <li className="text-[#111827] font-semibold text-[16px] cursor-pointer">
              Pricing
            </li>
            <li className="text-[#111827] font-semibold text-[16px] cursor-pointer">
              Contact
            </li>
            <li>
              <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-950 px-5 py-1 text-[16px] font-medium text-white backdrop-blur-3xl">
                  Sign Up
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

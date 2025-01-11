import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-20 border-b justify-between px-36 items-center sticky top-0 bg-white z-30">
      <div className="text-3xl font-semibold">LOGO</div>
      <div className="flex gap-5">
        <p className="text-blue-900 font-semibold text-[18px]">Home</p>
        <p className="text-blue-900 font-semibold text-[18px]">Home</p>
        <p className="text-blue-900 font-semibold text-[18px]">Home</p>
        <p className="text-blue-900 font-semibold text-[18px]">Home</p>
      </div>
      <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-950 px-7 py-1 text-[18px] font-medium text-white backdrop-blur-3xl">
            Sign Up
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

"use client"; // This ensures the component is client-side only

import React from "react";
import { Button } from "../ui/button";
import { PencilIcon, UsersRound } from "lucide-react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { Boxes } from "../ui/background-boxes";

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="container mx-auto mt-12 flex flex-col items-center gap-8 px-6 sm:px-10 md:px-20">
        {/* Header Button */}
        <h4 className="py-2 px-6 bg-[#9673d4] text-white font-semibold rounded-full text-sm md:text-base z-20">
          Unleash Your Imagination!
        </h4>

        {/* Main Text Section */}
        <div className="space-y-6 text-center z-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Unlock Your Creativity with Creativerse Blogs
          </h1>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl md:max-w-[800px] mx-auto">
            Explore a world where AI enhances your creativity! Creativerse AI
            empowers you to write blogs effortlessly by providing AI-driven text
            suggestions and images.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 z-20">
          <Button
            variant="outline"
            className="p-4 sm:p-5 rounded-full border-2 text-sm sm:text-base flex items-center gap-2"
          >
            <PencilIcon className="w-5 h-5" /> Try our editor now
          </Button>
          <Button className="bg-blue-950 text-white p-4 sm:p-5 rounded-full hover:bg-blue-950 text-sm sm:text-base flex items-center gap-2">
            <UsersRound className="w-5 h-5" /> Join the Community
          </Button>
        </div>

        {/* Background Animation */}
        <Boxes className="z-0" />
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;

import React from "react";
import { Button } from "../ui/button";
import { PencilIcon, UsersRound } from "lucide-react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { Boxes } from "../ui/background-boxes";
import { BackgroundLines } from "../ui/background-lines";

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      {/* <BackgroundLines> */}
      <div className="container mx-auto mt-12 flex items-center gap-8 flex-col px-20">
        {/* BUTTON */}
        <h4 className="py-1 px-6 bg-[#9673d4] text-white font-semibold rounded-xl z-20">
          Unleash Your Imagination!
        </h4>
        {/* TEXT */}
        <div className="space-y-6 flex flex-col items-center z-20">
          <h1 className="text-6xl font-extrabold text-center">
            Unlock Your Creativity with Creativerse Blogs
          </h1>
          <p className="text-gray-500 text-center text-xl md:max-w-[800px]">
            Explore a world where AI enhances your creativity! Creativerse AI
            empowers you to write blogs effortlessly by providing AI-driven text
            suggestions and images.
          </p>
        </div>
        {/* TWO BTN */}
        <div className="flex gap-7 z-20">
          <Button
            variant={"outline"}
            className="p-6 rounded-full border-2 text-[16px]"
          >
            <PencilIcon /> Try our editor now
          </Button>
          <Button className="bg-blue-950 p-6 rounded-full hover:bg-blue-950 text-[16px]">
            <UsersRound /> Join the Comunity
          </Button>
        </div>

        {/* <Boxes className="z-0" /> */}

        {/* Starshooting and background bane sathe un comment karje */}
        {/* <ShootingStars /> */}
        {/* <StarsBackground /> */}
      </div>
      {/* </BackgroundLines> */}
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;

"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/moving-border";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { HoverEffect } from "../ui/card-hover-effect";

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 container mx-auto">
      <h4 className="py-1 px-6 bg-[#9673d4] text-white font-semibold rounded-xl">
        Words from Others
      </h4>
      <h2 className="text-4xl font-semibold">It's not just us.</h2>
      <h3 className="text-2xl text-muted-foreground">
        Here's what others have to say about us.
      </h3>

      <div className="grid grid-cols-3 gap-5 px-8 py-10">
        {projects.map((project, index) => (
          <HoverBorderGradient as={"div"} key={index}>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.link}</p>
              </CardContent>
            </Card>
          </HoverBorderGradient>
        ))}
      </div>

      <h1 className="bg-gradient-to-r from-yellow-300 via-orange-300 to-green-300 bg-clip-text text-transparent font-bold text-4xl">
        Extra Card (Gradient Text) (Edit color from Components/custom/cards)
      </h1>

      <HoverEffect items={projects} />
    </div>
  );
};

export default Cards;

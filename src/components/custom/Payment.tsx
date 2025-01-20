import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Check, CheckCircle2 } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Payment = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="text-center space-y-4">
        <p className="text-2xl md:text-4xl font-extrabold">
          Choose the plan that works for you.
        </p>
        <p className="text-muted-foreground">
          One time payments, lifetime access. No hidden fees.
        </p>

        <div className="flex flex-col gap-5 items-center md:flex-row justify-evenly w-screen">
          <div className="shadow-sm">
            <HoverBorderGradient as={"div"} className="w-[300px] md:w-[360px]">
              <Card className="flex-1 py-6">
                <CardContent className="space-y-4">
                  <p className="text-2xl font-semibold">Free Trial</p>
                  <p className="text-muted-foreground">
                    Free trial, no credit card required.
                  </p>
                  <p className="mt-4">
                    <span className="text-5xl font-bold">$0</span> USD
                  </p>
                  <ul className="flex flex-col items-start font-[400] space-y-2">
                    <li className="flex gap-2">
                      <Check />
                      Embed Limit : 5 Blogs
                    </li>
                    <li className="flex gap-2">
                      <Check />
                      Slower Image Generation
                    </li>
                    <li className="flex gap-2">
                      <Check />
                      Limited Text Suggestions
                    </li>
                  </ul>
                  <Button className="bg-[#111827] w-full">Get Started</Button>
                </CardContent>
              </Card>
            </HoverBorderGradient>
          </div>
          <div className="shadow-sm">
            <HoverBorderGradient as={"div"} className="w-[300px] md:w-[360px]">
              <Card className="flex-1 py-6">
                <CardContent className="space-y-4">
                  <p className="text-2xl font-semibold">Premium</p>
                  <p className="text-muted-foreground">
                    Best option for writers and bloggers.
                  </p>
                  <p className="mt-4">
                    <span className="text-5xl font-bold">$29</span> USD
                  </p>
                  <ul className="flex flex-col items-start font-[400] space-y-2">
                    <li className="flex gap-2">
                      <Check />
                      Emebed Limit : Unlimited
                    </li>
                    <li className="flex gap-2">
                      <Check />
                      Fast Image Generation
                    </li>
                    <li className="flex gap-2">
                      <Check />
                      Faster and Accurate Text Suggestions
                    </li>
                  </ul>
                  <Button className="bg-[#111827] w-full">Get Started</Button>
                </CardContent>
              </Card>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

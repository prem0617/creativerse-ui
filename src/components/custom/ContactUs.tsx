import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactUs = () => {
  return (
    <div className="flex justify-center flex-col items-center my-16 space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">
          Contact Us
        </h2>
        <p className="text-muted-foreground px-10 text-sm md:text-base">
          Got a query? Want to send feedback about a feature? Need details about
          our premium plan? Let us know.
        </p>
      </div>
      <form action="" className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold">
            Your Email
          </label>
          <Input
            placeholder="name@creativerse.com"
            className="w-[400px] md:w-[700px] bg-gray-100"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="Subject" className="text-sm font-semibold">
            Subject
          </label>
          <Input
            placeholder="Let us know how can we help you."
            className="w-[400px] md:w-[700px] bg-gray-100"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold">
            Your Message
          </label>
          <Textarea
            placeholder="Leave a comment"
            className="w-[400px] md:w-[700px] bg-gray-100"
          />
        </div>
        <Button className="bg-[#172554]">Send message</Button>
      </form>
    </div>
  );
};

export default ContactUs;

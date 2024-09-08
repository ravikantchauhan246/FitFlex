import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center text-center max-w-[800px] w-full mx-auto ">
      <div className="flex flex-col gap-3">
      <p>Acknowledgment of Massive</p>
      <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="text-purple-500">GA</span>I
        <span className="text-purple-500">NS</span>
      </h1>
      </div>
      <p className="text-sm md:text-base font-light p-5">
        I hereby acknowledge that I may become unbelievably massive and accept
        all associated risks, including but not limited to becoming the local
        <span className="text-purple-500 font-medium"> mass monstrosity</span>,
        experiencing severe body dysmorphia, struggling to fit through standard
        doorways. I understand that these outcomes are a natural consequence of
        achieving peak{" "}
        <span className="text-purple-500 font-medium">physical greatness</span>.
        I accept these risks with full enthusiasm and determination to become
        the ultimate embodiment of{" "}
        <span className="text-purple-500 font-medium">strength</span>.
      </p>
     <Button  text={"Accept and Begin"}/>
    </div>
  );
};

export default Hero;

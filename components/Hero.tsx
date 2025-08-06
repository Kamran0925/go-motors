"use client";

import Image from "next/image";
import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Drive Your Dream Car Today — Fast, Easy & Hassle-Free
        </h1>

        <p className="hero__subtitle">
          Browse, book, and hit the road in minutes. Your perfect ride is just a
          few clicks away.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white font-bold rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;

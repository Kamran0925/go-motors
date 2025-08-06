"use client";

import Image from "next/image";
import { CustomButton } from "@components";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Drive Your Dream Car Today — Fast, Easy & Hassle-Free
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          Browse, book, and hit the road in minutes. Your perfect ride is just a
          few clicks away.
        </motion.p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white font-bold rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <motion.div
          className="hero__image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </motion.div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;

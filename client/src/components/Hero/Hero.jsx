import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=" bg-hero-image bg-cover bg-center h-screen">
      <div className="flex justify-center items-center h-full backdrop-blur-sm hero-shadow">
        <div className="overflow-hidden">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className=" text-sm sm:text-base text-left transition-all duration-100 ease-linear"
          >
            Hey! What's up? I'm...
          </motion.p>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className=" font-bold text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider -my-1 sm:-my-3 transition-all duration-100 ease-linear"
          >
            Camilo <span className="text-purple-500">Millan</span>
          </motion.h1>
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className=" text-sm sm:text-base text-right transition-all duration-100 ease-linear"
          >
            Front-End Developer <span className="text-purple-500">|</span> UI/UX
            Designer
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

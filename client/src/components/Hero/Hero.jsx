import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=" bg-hero-image bg-cover bg-center w-full h-screen">
      <div className="flex flex-col justify-center items-center text-white w-full h-screen backdrop-blur-sm">
        <div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-start items-center text-purple-500 text-lg leading-none w-full"
          >
            Hi! What's up? I'm...
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center text-9xl leading-none tracking-widest w-full -my-2"
          >
            Camilo Millan
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-end items-center text-lg leading-none w-full"
          >
            Front-End Developer{" "}
            <span className=" font-bold text-purple-500 text-2xl mx-3">/</span>{" "}
            UI - UX Designer
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

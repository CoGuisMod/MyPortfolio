import React from "react";
import AboutImage from "../../assets/about-image.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className=" bg-neutral-900 w-full h-screen py-20">
      <div className="w-full max-w-7xl h-full mx-auto">
        <div className="flex justify-start items-center gap-2">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className=" bg-purple-500 rounded-full w-8 h-2"
          ></motion.div>
          <motion.h4
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className=" text-white text-3xl"
          >
            About Me
          </motion.h4>
        </div>
        <div className="flex gap-16 justify-center w-full h-full pt-16">
          <div className=" text-white text-lg w-1/3">
            <p>
              Hi! I'm Camilo, a{" "}
              <span className=" text-purple-500">Front-End Developer</span>{" "}
              located in Colombia, very apassionated about{" "}
              <span className="text-purple-500">UI/UX Design</span> and
              currently doing a degree at Universidad Del Valle.
            </p>
            <p className="mt-4">
              I'm an well-organized person, kinda perfectionist. The hamburguer
              is easily my favorite food, and i like to workout.
            </p>
            <div className="mt-8">
              <motion.button
                whileInView={{
                  y: [0, -10, 0],
                  transition: { duration: 1, repeat: Infinity, repeatDelay: 5 },
                }}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                className="border border-purple-500 rounded-full text-purple-500 text-xl px-4 py-1 hovering-button"
              >
                Look at my CV!
              </motion.button>
            </div>
          </div>
          <div className="h-full">
            <img
              className=" rounded-xl h-3/4 scale-125"
              src={AboutImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

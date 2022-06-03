import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../Elements/SectionTitle";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10" id="about">
      <SectionTitle sectionTitle="About Me" />
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-3xl mx-auto mt-8 md:mt-16">
        <div className="flex flex-col md:text-lg">
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Hi! I'm <span className="font-medium text-purple-500">Camilo</span>,
            a 20 years old guy from Colombia with a strong passion about
            technology, i'm a self-taught{" "}
            <span className="font-medium text-purple-500">
              Front-End Development
            </span>{" "}
            and also i am introducing myself in the world of{" "}
            <span className="font-medium text-purple-500">UI/UX Design</span>.
          </motion.p>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            I'm currently doing a degree at Universidad Del Valle about IT, i
            like food, specially hamburguers and to workout. I consider myself a
            well-organized person, honest and kinda perfectionist.
          </motion.p>
          <motion.a
            initial={{ y: -10, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="self-center md:self-start custom-button font-medium text-xl mt-8 button-interaction"
            href="#contact"
          >
            Talk to me!
          </motion.a>
        </div>
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className=" bg-about-image bg-cover bg-top rounded-3xl h-[75vh] custom-shadow"
        >
          {/* <img className=" rounded-xl w-full h-full" src={AboutImg} alt="" /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

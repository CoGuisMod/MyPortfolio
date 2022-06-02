import React from "react";
import SectionTitle from "../Elements/SectionTitle";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="px-4 py-10" id="contact">
      <SectionTitle sectionTitle="Contact Me" />
      <div className="max-w-5xl h-full mx-auto py-6 md:py-16">
        <h4 className="text-lg">
          If you wanna work together get in touch, you can find me here...
        </h4>
        <div className="flex flex-col justify-center items-center gap-6 mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl hover:text-purple-500 transition-colors duration-200 ease-in-out"
            href="mailto:iam.camilomillan@gmail.com"
          >
            iam.camilomillan@gmail.com
          </motion.a>
          <div className="flex justify-between items-center gap-6 text-4xl">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="icon-hover"
              href="https://www.linkedin.com/in/camilo-millan-664019232/"
              target="_blank"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="icon-hover"
              href="https://github.com/CoGuisMod"
              target="_blank"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="icon-hover"
              href="https://www.instagram.com/coguismod/"
              target="_blank"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="icon-hover"
              href="#"
              target="_blank"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

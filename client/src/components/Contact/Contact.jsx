import React from "react";
import { motion } from "framer-motion";
import { variantEmail, variantIcon } from "../../utils/motionVariants";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import SectionTitle from "../Elements/SectionTitle";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10" id="contact">
      <SectionTitle sectionTitle="Contact Me" />
      <div className="max-w-5xl mx-auto mt-8 md:mt-16">
        <motion.h4
          initial={{ x: -25, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-base mobile-md:text-lg md:text-xl"
        >
          If you wanna work together get in touch, you can find me here...
        </motion.h4>
        <div className="flex flex-col mt-12">
          <motion.a
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={variantEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg mobile-md:text-2xl md:text-3xl hover:text-purple-500 mx-auto transition-colors duration-200 ease-in-out"
            href="mailto:iam.camilomillan@gmail.com"
          >
            iam.camilomillan@gmail.com
          </motion.a>
          <div className="flex justify-center items-center gap-6 text-3xl mobile-md:text-4xl md:text-5xl mt-4">
            <motion.a
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={variantIcon}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="icon-hover"
              href="https://www.linkedin.com/in/camilo-millan-664019232/"
              target="_blank"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={variantIcon}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="icon-hover"
              href="https://github.com/CoGuisMod"
              target="_blank"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={variantIcon}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="icon-hover"
              href="https://www.instagram.com/coguismod/"
              target="_blank"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={variantIcon}
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

import React from "react";
import { motion } from "framer-motion";
import { variantBullet, variantTitle } from "../../utils/motionVariants";

const SectionTitle = ({ sectionTitle }) => {
  return (
    <div className="flex justify-start items-center gap-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={variantBullet}
        className="section-bullet"
      ></motion.div>
      <motion.h3
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={variantTitle}
        className="font-bold text-3xl md:text-4xl"
      >
        {sectionTitle}
      </motion.h3>
    </div>
  );
};

export default SectionTitle;

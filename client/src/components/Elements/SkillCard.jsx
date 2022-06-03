import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({
  skillImg,
  skillTitle,
  skillExperience,
  skillProficiency,
  skillCardVariant,
}) => {
  return (
    <motion.div
      className="flex items-center gap-2 bg-neutral-800 rounded-3xl w-full max-w-md sm:max-w-lg mx-auto px-3 md:px-4 py-2 md:py-3 md:overflow-hidden"
      variants={skillCardVariant}
    >
      <div className="text-6xl sm:text-7xl">{skillImg}</div>
      <div className="flex flex-col justify-evenly w-full h-full">
        <div className="flex justify-start items-baseline gap-2">
          <h4 className="font-medium text-xl sm:text-2xl">{skillTitle}</h4>
          <h4 className="hidden mobile-lg:[display:unset] text-white/75 text-sm sm:text-base">
            {skillExperience}
          </h4>
          <h4
            className={`${
              skillProficiency === "High" ? "text-green-500" : "text-yellow-500"
            } text-base sm:text-xl ml-auto`}
          >
            {skillProficiency}
          </h4>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full w-full h-4"></div>
      </div>
    </motion.div>
  );
};

export default SkillCard;

import React from "react";
import { motion } from "framer-motion";

const WorkCard = ({ work, skillCardVariant }) => {
  console.log(work.image);
  return (
    <motion.div
      className="bg-neutral-800 rounded-xl overflow-hidden"
      variants={skillCardVariant}
    >
      <div className="relative">
        <img src={work.image} alt={work.title} />
        <div className="absolute left-0 top-0 flex flex-col justify-center items-center gap-4 bg-neutral-900/75 text-center w-full h-full px-8 pt-8 pb-4 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out">
          <p className="font-medium text-sm md:text-lg">{work.description}</p>
          <div className="mt-auto space-x-2 space-y-2">
            {work.technologies.map((tech) => (
              <span className="inline-block bg-purple-500 rounded-full font-semibold text-white text-xs md:text-sm px-3 py-1">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center font-medium text-xl p-2">
        <a
          href={work.link}
          target="_blank"
          className="hover:text-purple-500 transition-colors duration-200 ease-in-out"
        >
          {work.title}
        </a>
      </div>
    </motion.div>
  );
};

export default WorkCard;

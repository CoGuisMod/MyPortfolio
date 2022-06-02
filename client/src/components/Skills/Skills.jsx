import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import SectionTitle from "../Elements/SectionTitle";
import {
  variantGridContanier,
  variantGridItem,
} from "../../utils/motionVariants";

const Skills = () => {
  return (
    <section className="w-full min-h-screen px-4 py-10" id="skills">
      <SectionTitle sectionTitle="My Skills" />
      <div className="mt-16 w-full">
        <motion.div
          variants={variantGridContanier}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 gap-y-8 max-w-5xl w-full h-full mx-auto"
        >
          {/* Card Open HTML5*/}
          <motion.div
            variants={variantGridItem}
            className="flex bg-neutral-800 rounded-3xl w-full mx-auto px-4 py-4 custom-card-shadow"
          >
            <div className="flex justify-center items-center text-6xl">
              <FaHtml5 className=" text-orange-500" />
            </div>
            <div className="flex flex-col justify-between w-full ml-4">
              <div className="flex justify-start items-baseline gap-4">
                <h4 className="font-medium text-2xl">HTML 5</h4>
                <p className="hidden sm:[display:unset] text-white/75 text-lg">
                  1 Year
                </p>
                <p className=" font-bold text-green-500 text-xl ml-auto">
                  High
                </p>
              </div>
              <div className="bg-black rounded-full w-full h-4 overflow-hidden">
                <div
                  className={`bg-gradient-to-r from-purple-500 to-cyan-500 w-[95%] h-full`}
                ></div>
              </div>
            </div>
          </motion.div>
          {/* Card Close */}
          {/* Card Open JS*/}
          <motion.div
            variants={variantGridItem}
            className="flex bg-neutral-800 rounded-3xl w-full mx-auto px-4 py-4 custom-card-shadow"
          >
            <div className="flex justify-center items-center text-6xl">
              <FaJs className=" text-yellow-500" />
            </div>
            <div className="flex flex-col justify-between w-full ml-4">
              <div className="flex justify-start items-baseline gap-4">
                <h4 className="sm:hidden font-medium text-2xl">JS</h4>
                <h4 className="hidden sm:[display:unset] font-medium text-2xl">
                  JavaScript
                </h4>
                <p className="hidden sm:[display:unset] text-white/75 text-lg">
                  6 Months
                </p>
                <p className=" font-bold text-yellow-500 text-xl ml-auto">
                  Medium
                </p>
              </div>
              <div className="bg-black rounded-full w-full h-4 overflow-hidden">
                <div
                  className={`bg-gradient-to-r from-purple-500 to-cyan-500 w-[75%] h-full`}
                ></div>
              </div>
            </div>
          </motion.div>
          {/* Card Close */}
          {/* Card Open CSS3*/}
          <motion.div
            variants={variantGridItem}
            className="flex bg-neutral-800 rounded-3xl w-full mx-auto px-4 py-4 custom-card-shadow"
          >
            <div className="flex justify-center items-center text-6xl">
              <FaCss3Alt className=" text-blue-500" />
            </div>
            <div className="flex flex-col justify-between w-full ml-4">
              <div className="flex justify-start items-baseline gap-4">
                <h4 className="font-medium text-2xl">CSS 3</h4>
                <p className="hidden sm:[display:unset] text-white/75 text-lg">
                  1 Year
                </p>
                <p className=" font-bold text-green-500 text-xl ml-auto">
                  High
                </p>
              </div>
              <div className="bg-black rounded-full w-full h-4 overflow-hidden">
                <div
                  className={`bg-gradient-to-r from-purple-500 to-cyan-500 w-[95%] h-full`}
                ></div>
              </div>
            </div>
          </motion.div>
          {/* Card Close */}
          {/* Card Open REACT*/}
          <motion.div
            variants={variantGridItem}
            className="flex bg-neutral-800 rounded-3xl w-full mx-auto px-4 py-4 custom-card-shadow"
          >
            <div className="flex justify-center items-center text-6xl">
              <FaReact className=" text-blue-500" />
            </div>
            <div className="flex flex-col justify-between w-full ml-4">
              <div className="flex justify-start items-baseline gap-4">
                <h4 className="font-medium text-2xl">React JS</h4>
                <p className="hidden sm:[display:unset] text-white/75 text-lg">
                  5 Months
                </p>
                <p className=" font-bold text-yellow-500 text-xl ml-auto">
                  Medium
                </p>
              </div>
              <div className="bg-black rounded-full w-full h-4 overflow-hidden">
                <div
                  className={`bg-gradient-to-r from-purple-500 to-cyan-500 w-[70%] h-full`}
                ></div>
              </div>
            </div>
          </motion.div>
          {/* Card Close */}
          {/* Card Open SASS*/}
          <motion.div
            variants={variantGridItem}
            className="flex bg-neutral-800 rounded-3xl w-full mx-auto px-4 py-4 custom-card-shadow"
          >
            <div className="flex justify-center items-center text-6xl">
              <FaSass className=" text-pink-500" />
            </div>
            <div className="flex flex-col justify-between w-full ml-4">
              <div className="flex justify-start items-baseline gap-4">
                <h4 className="font-medium text-2xl">SASS</h4>
                <p className="hidden sm:[display:unset] text-white/75 text-lg">
                  9 Months
                </p>
                <p className=" font-bold text-green-500 text-xl ml-auto">
                  High
                </p>
              </div>
              <div className="bg-black rounded-full w-full h-4 overflow-hidden">
                <div
                  className={`bg-gradient-to-r from-purple-500 to-cyan-500 w-[90%] h-full`}
                ></div>
              </div>
            </div>
          </motion.div>
          {/* Card Close */}
          {/* Card Open GIT*/}
          <motion.div
            variants={variantGridItem}
            className="flex bg-neutral-800 rounded-3xl w-full mx-auto px-4 py-4 custom-card-shadow"
          >
            <div className="flex justify-center items-center text-6xl">
              <FaGitAlt className=" text-red-500" />
            </div>
            <div className="flex flex-col justify-between w-full ml-4">
              <div className="flex justify-start items-baseline gap-4">
                <h4 className="font-medium text-2xl">GIT</h4>
                <p className="hidden sm:[display:unset] text-white/75 text-lg">
                  7 Months
                </p>
                <p className=" font-bold text-green-500 text-xl ml-auto">
                  High
                </p>
              </div>
              <div className="bg-black rounded-full w-full h-4 overflow-hidden">
                <div
                  className={`bg-gradient-to-r from-purple-500 to-cyan-500 w-[85%] h-full`}
                ></div>
              </div>
            </div>
          </motion.div>
          {/* Card Close */}
          {/* Card Open Tailwind */}
          <motion.div
            variants={variantGridItem}
            className="flex bg-neutral-800 rounded-3xl w-full mx-auto px-4 py-4 custom-card-shadow"
          >
            <div className="flex justify-center items-center text-6xl">
              <SiTailwindcss className=" text-cyan-500" />
            </div>
            <div className="flex flex-col justify-between w-full ml-4">
              <div className="flex justify-start items-baseline gap-4">
                <h4 className="font-medium text-2xl">Tailwind CSS</h4>
                <p className="hidden sm:[display:unset] text-white/75 text-lg">
                  8 Months
                </p>
                <p className=" font-bold text-green-500 text-xl ml-auto">
                  High
                </p>
              </div>
              <div className="bg-black rounded-full w-full h-4 overflow-hidden">
                <div
                  className={`bg-gradient-to-r from-purple-500 to-cyan-500 w-[80%] h-full`}
                ></div>
              </div>
            </div>
          </motion.div>
          {/* Card Close */}
          {/* Card Open Tailwind */}
          <motion.div
            variants={variantGridItem}
            className="flex bg-neutral-800 rounded-3xl w-full mx-auto px-4 py-4 custom-card-shadow"
          >
            <div className="flex justify-center items-center text-6xl">
              <SiFirebase className=" text-yellow-500" />
            </div>
            <div className="flex flex-col justify-between w-full ml-4">
              <div className="flex justify-start items-baseline gap-4">
                <h4 className="font-medium text-2xl">Firebase</h4>
                <p className="hidden sm:[display:unset] text-white/75 text-lg">
                  4 Months
                </p>
                <p className=" font-bold text-yellow-500 text-xl ml-auto">
                  Medium
                </p>
              </div>
              <div className="bg-black rounded-full w-full h-4 overflow-hidden">
                <div
                  className={`bg-gradient-to-r from-purple-500 to-cyan-500 w-[65%] h-full`}
                ></div>
              </div>
            </div>
          </motion.div>
          {/* Card Close */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

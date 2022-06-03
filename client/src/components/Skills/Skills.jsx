import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../Elements/SectionTitle";
import {
  variantGridContanier,
  variantGridItem,
} from "../../utils/motionVariants";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import SkillsCard from "../Elements/SkillCard";

const Skills = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10" id="skills">
      <SectionTitle sectionTitle="My Skills" />
      <div className="max-w-5xl mx-auto mt-8 md:mt-16">
        <motion.div
          variants={variantGridContanier}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-x-6 gap-y-5 sm:gap-y-6"
        >
          {/* Card Open HTML5*/}
          <SkillsCard
            skillImg={<FaHtml5 className="text-orange-500" />}
            skillTitle="HTML 5"
            skillExperience="1+ Years"
            skillProficiency="High"
            skillCardVariant={variantGridItem}
          />
          {/* Card Close */}

          {/* Card Open JS*/}
          <SkillsCard
            skillImg={<FaJs className="text-yellow-500" />}
            skillTitle="JavaScript"
            skillExperience="6+ Months"
            skillProficiency="Medium"
            skillCardVariant={variantGridItem}
          />
          {/* Card Close */}

          {/* Card Open CSS3*/}
          <SkillsCard
            skillImg={<FaCss3Alt className="text-blue-500" />}
            skillTitle="CSS 3"
            skillExperience="1+ Years"
            skillProficiency="High"
            skillCardVariant={variantGridItem}
          />
          {/* Card Close */}

          {/* Card Open REACT*/}
          <SkillsCard
            skillImg={<FaReact className="text-cyan-500" />}
            skillTitle="React JS"
            skillExperience="4+ Months"
            skillProficiency="Medium"
            skillCardVariant={variantGridItem}
          />
          {/* Card Close */}

          {/* Card Open SASS*/}
          <SkillsCard
            skillImg={<FaSass className="text-pink-500" />}
            skillTitle="SASS"
            skillExperience="1+ Years"
            skillProficiency="High"
            skillCardVariant={variantGridItem}
          />
          {/* Card Close */}

          {/* Card Open GIT*/}
          <SkillsCard
            skillImg={<FaGitAlt className="text-red-500" />}
            skillTitle="GIT"
            skillExperience="7+ Months"
            skillProficiency="High"
            skillCardVariant={variantGridItem}
          />
          {/* Card Close */}

          {/* Card Open Tailwind */}
          <SkillsCard
            skillImg={<SiTailwindcss className="text-cyan-500" />}
            skillTitle="Tailwind CSS"
            skillExperience="9+ Months"
            skillProficiency="High"
            skillCardVariant={variantGridItem}
          />
          {/* Card Close */}

          {/* Card Open Firebase */}
          <SkillsCard
            skillImg={<SiFirebase className="text-yellow-500" />}
            skillTitle="Firebase"
            skillExperience="3+ Months"
            skillProficiency="Medium"
            skillCardVariant={variantGridItem}
          />
          {/* Card Close */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

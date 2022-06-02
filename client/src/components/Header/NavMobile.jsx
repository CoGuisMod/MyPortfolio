import React from "react";
import { motion } from "framer-motion";
import { variantNavMobileHandle } from "../../utils/motionVariants";

const NavMobile = ({ active, navHandler }) => {
  return (
    <motion.ul
      animate={active ? "open" : "closed"}
      variants={variantNavMobileHandle}
      className="md:hidden fixed right-0 top-0 flex flex-col justify-evenly items-center bg-neutral-900 font-medium text-4xl w-full h-screen origin-right"
    >
      <li>
        <a className="link-hover link-click" onClick={navHandler} href="#about">
          About Me
        </a>
      </li>
      <li>
        <a
          className="link-hover link-click"
          onClick={navHandler}
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li>
        <a className="link-hover link-click" onClick={navHandler} href="#work">
          My Work
        </a>
      </li>
    </motion.ul>
  );
};

export default NavMobile;

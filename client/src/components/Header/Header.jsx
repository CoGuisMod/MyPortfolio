import React, { useEffect, useState } from "react";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import { variantNavBar } from "../../utils/motionVariants";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState(false);

  const NavHandler = () => {
    setActive(!active);
  };

  let oldScrollY = 0;

  const [direction, setDirection] = useState("up");
  const [isOnTop, setIsOnTop] = useState(true);

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setDirection("down");
    } else {
      setDirection("up");
    }
    if (window.scrollY !== 0) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  return (
    <motion.header
      animate={
        direction == "down"
          ? "hide"
          : "show" && isOnTop
          ? "bgTransparent"
          : "bgGradient"
      }
      variants={variantNavBar}
      transition={{ duration: 0.5 }}
      className="fixed px-4 pt-2 pb-4 w-full z-10"
    >
      <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
        <a
          className="flex justify-center items-center font-bold text-2xl z-10"
          href="/"
        >
          <span className=" text-purple-500 text-3xl">&#60;</span>
          Camilo<span className=" text-purple-500">Millan</span>
          <span className="text-xl ml-2">&#47;</span>
          <span className=" text-purple-500 text-3xl">&#62;</span>
        </a>
        <nav className="w-1/2">
          <ul className="hidden md:flex justify-evenly items-center gap-8 font-medium text-lg w-full">
            <li>
              <a className="link-hover link-click" href="#about">
                About Me
              </a>
            </li>
            <li>
              <a className="link-hover link-click" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="link-hover link-click" href="#work">
                My Work
              </a>
            </li>
          </ul>
          <NavMobile active={active} navHandler={NavHandler} />
        </nav>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:[display:unset] font-medium custom-button button-interaction"
          href="#contact"
        >
          Contact Me
        </motion.a>
        <div
          className="md:hidden text-2xl z-10 cursor-pointer"
          onClick={NavHandler}
        >
          <FaBars className={active ? "hidden" : ""} />
          <FaTimes className={active ? "" : "hidden"} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

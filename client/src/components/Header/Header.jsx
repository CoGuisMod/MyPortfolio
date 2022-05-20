import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 bg-gradient-to-b from-neutral-900/30 to-neutral-900/0 font-poppins w-full z-10 pt-3 pb-4">
      <div className="flex justify-between items-center text-white max-w-7xl mx-auto">
        <Link className=" font-bold text-2xl" to="/">
          Camilo <span className=" text-purple-500">Millan</span>
        </Link>
        <nav className=" w-2/5">
          <ul className="flex justify-between items-center font-medium text-lg">
            <li className="hovering-link">
              <NavLink to="">Home</NavLink>
            </li>
            <li className="hovering-link">
              <NavLink to="">About Me</NavLink>
            </li>
            <li className="hovering-link">
              <NavLink to="">Skills</NavLink>
            </li>
            <li className="hovering-link">
              <NavLink to="">My Work</NavLink>
            </li>
          </ul>
        </nav>
        <Link
          className=" border border-purple-500 rounded-full text-purple-500 text-xl px-4 py-1 hovering-button"
          to=""
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header;

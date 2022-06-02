import { motion } from "framer-motion";

const variantBullet = {
  hidden: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const variantTitle = {
  hidden: { x: -25, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

const variantNavBar = {
  show: { y: 0 },
  hide: { y: "-100%" },
  bgTransparent: {
    backgroundColor: "rgba(23,23,23,0)",
  },
  bgGradient: {
    backgroundColor: "rgba(23,23,23,0.75)",
  },
};

const variantNavMobileHandle = {
  open: { scaleX: 1 },
  closed: { scaleX: 0 },
};

const variantGridContanier = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const variantGridItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

export {
  variantBullet,
  variantTitle,
  variantNavBar,
  variantNavMobileHandle,
  variantGridContanier,
  variantGridItem,
};

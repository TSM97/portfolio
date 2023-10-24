"use client";

import React from "react";
import { motion } from "framer-motion";

const svgVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      opacity: {
        duration: 2,
      },
    },
  },
};

const firstPathVariant = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
      opacity: {
        duration: 3,
      },
    },
  },
};
const secondPathVariant = {
  hidden: {
    y: -400,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
      opacity: {
        duration: 3,
      },
    },
  },
};

export default function LOGO() {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 359 328"
      width="150"
      height="120"
      className="fill-foreground stroke-2"
    >
      <title>LOGO</title>
      <motion.path
        variants={svgVariant}
        initial="hidden"
        animate="visible"
        d="M178.8 321.5c-30.5 0-58.9-8.6-83-23.5l15.3-11.6c20.2 10.6 43.3 16.6 67.9 16.6 79.1 0 143.1-62.1 143.1-139 0-24.1-6.3-46.8-17.5-66.6l12.3-9.9c12.5 22.6 19.6 48.6 19.6 76.3 0 87.2-70.5 157.7-157.8 157.7zm113-267.9q0.1 0 0.2 0.1l-0.3 0.2zm-112.7-28.6c-79.1 0-143 62.1-143 139 0 27 7.8 52.2 21.5 73.5l-12 10.9c-15.5-24.5-24.5-53.5-24.5-84.6 0-87.3 70.5-157.8 157.7-157.8 28.8 0 55.7 7.7 78.9 21.1l-7.4 16.3c-21-11.7-45.3-18.4-71.2-18.4z"
      />
      <motion.path
        variants={svgVariant}
        initial="hidden"
        animate="visible"
        d="M30.2 324.8l-11.3-11.4 308.5-304.3 11.3 11.4z"
      />
      <motion.path
        variants={secondPathVariant}
        initial="hidden"
        animate="visible"
        d="M207.8 192.8l46.4 31.2-46.4 31.2v-14.3l26.2-16.8-26.2-17.1z"
      />
      <motion.path
        variants={firstPathVariant}
        initial="hidden"
        animate="visible"
        d="M139.8 138.2l-44.8-30.1 44.8-30.1v13.8l-25.3 16.2 25.3 16.5z"
      />
    </svg>
  );
}

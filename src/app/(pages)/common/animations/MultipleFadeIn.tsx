"use client";
import { motion, Variants } from "framer-motion";

interface Props {
  children: React.ReactNode[];
}

export default function MultipleFadeIn({ children }: Props) {
  return (
    <motion.div initial="offscreen" whileInView="onscreen" variants={container}>
      {children.map((child, index) => (
        <motion.div key={index} variants={component}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

const container: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0,
      staggerChildren: 0.3,
    },
  },
};

const component: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

"use client";
import { motion, Variants } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function FadeIn({ children }: Props) {
  return (
    <motion.div initial="offscreen" whileInView="onscreen" variants={variants}>
      {children}
    </motion.div>
  );
}

const variants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

"use client";
import { motion, Variants } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function FadeIntoRight({ children }: Props) {
  return (
    <motion.div initial="offscreen" whileInView="onscreen" variants={variants}>
      {children}
    </motion.div>
  );
}

const variants: Variants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      x: { duration: 0.8 },
      opacity: { duration: 2 },
    },
  },
};

"use client";

import { motion } from "framer-motion";

type MotionRevealProps = {
  children: React.ReactNode;
  delay?: number;
};

export function MotionReveal({ children, delay = 0 }: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

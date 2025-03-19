import { motion } from "motion/react";

export default function Animated({
  animation,
  children,
  variants,
}: {
  animation: string;
  children: React.ReactNode;
  variants: {
    hidden: { opacity: number; x: number };
    visible: { opacity: number; x: number };
  };
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
      className={animation}
    >
      {children}
    </motion.div>
  );
}

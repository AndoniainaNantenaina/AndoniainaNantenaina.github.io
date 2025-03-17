import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.5 }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;

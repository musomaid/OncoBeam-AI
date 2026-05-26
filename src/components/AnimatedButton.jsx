import { motion } from 'framer-motion';

export default function AnimatedButton({ children }) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      className="rounded-xl bg-gradient-to-r from-neon to-purple px-4 py-2 font-semibold text-bg shadow-neon"
    >
      {children}
    </motion.button>
  );
}

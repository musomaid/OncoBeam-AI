import { motion } from 'framer-motion';

export default function NeonCard({ children, className = '' }) {
  return (
    <motion.section whileTap={{ scale: 0.99 }} className={`rounded-3xl border border-neon/25 bg-card/70 p-4 shadow-neon backdrop-blur-xl ${className}`}>
      {children}
    </motion.section>
  );
}

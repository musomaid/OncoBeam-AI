import { motion } from 'framer-motion';

export default function NeonCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className={`glass rounded-2xl p-4 shadow-neon ${className}`}
    >
      {children}
    </motion.div>
  );
}

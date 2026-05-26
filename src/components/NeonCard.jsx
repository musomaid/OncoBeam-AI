import { motion } from 'framer-motion';

export default function NeonCard({ children, className = '' }) {
  return (
    <motion.section
      whileTap={{ scale: 0.988 }}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className={`neon-card group relative overflow-hidden rounded-[1.75rem] border border-neon/30 bg-card/70 p-4 shadow-neon backdrop-blur-2xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 top-2 h-28 w-28 rounded-full bg-neon/20 blur-2xl" />
        <div className="absolute -right-16 bottom-0 h-24 w-24 rounded-full bg-purple/20 blur-2xl" />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.75rem]">
        <span className="light-sweep absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}

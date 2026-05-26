import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '' }) {
  return (
    <motion.section
      whileTap={{ scale: 0.985 }}
      whileHover={{ y: -2, boxShadow: '0 14px 36px rgba(0, 209, 255, 0.16)' }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-card/75 p-4 backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-neon/5 opacity-70" />
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}

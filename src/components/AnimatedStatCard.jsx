import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const tones = { neon: 'text-neon', success: 'text-success', purple: 'text-purple', danger: 'text-danger' };

export default function AnimatedStatCard({ label, value, suffix, tone }) {
  return (
    <GlassCard>
      <p className="text-xs text-white/60">{label}</p>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`mt-2 text-2xl font-bold ${tones[tone]}`}>
        {value}{suffix}
      </motion.p>
    </GlassCard>
  );
}

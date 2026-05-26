import { motion } from 'framer-motion';

export default function TelemetryChart() {
  const bars = [52, 68, 61, 90, 77, 95, 82];

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon/5 via-purple/10 to-neon/5 blur-lg" />
      <div className="relative flex h-32 items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
            className="group relative w-full rounded-t-md bg-gradient-to-t from-purple via-neon/90 to-success shadow-[0_0_20px_rgba(0,209,255,0.4)]"
          >
            <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Home, Brain, Radiation, BarChart3, UserRound } from 'lucide-react';

const items = [
  { key: 'home', icon: Home, label: 'Home' },
  { key: 'assist', icon: Brain, label: 'Assist' },
  { key: 'treatment', icon: Radiation, label: 'Treat' },
  { key: 'analytics', icon: BarChart3, label: 'Data' },
  { key: 'profile', icon: UserRound, label: 'Profile' },
];

export default function MobileBottomNav({ tab, setTab }) {
  return (
    <nav className="fixed bottom-2 left-1/2 z-50 w-[95%] max-w-md -translate-x-1/2 px-2 pb-[max(env(safe-area-inset-bottom),0.3rem)]">
      <div className="relative overflow-hidden rounded-[1.9rem] border border-neon/25 bg-card/80 p-2 backdrop-blur-3xl shadow-[0_20px_70px_rgba(0,0,0,0.55),0_0_28px_rgba(0,209,255,0.22),0_0_40px_rgba(123,97,255,0.18)]">
        <div className="pointer-events-none absolute inset-0 dock-glow" />
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-neon/80 to-transparent" />
        <div className="grid grid-cols-5 gap-1">
          {items.map(({ key, icon: Icon, label }) => {
            const active = tab === key;
            return (
              <motion.button key={key} onClick={() => setTab(key)} whileTap={{ scale: 0.88 }} whileHover={{ y: -1.5 }} className="relative rounded-2xl px-1 pb-1.5 pt-2 text-center">
                {active && <motion.span layoutId="active-tab" className="absolute inset-0 rounded-2xl bg-gradient-to-b from-neon/25 to-purple/20" transition={{ type: 'spring', stiffness: 300, damping: 24 }} />}
                <div className="relative z-10">
                  <motion.div animate={active ? { y: [-0.5, -2, -0.5] } : { y: 0 }} transition={{ duration: 1.6, repeat: active ? Infinity : 0 }}>
                    <Icon className={`mx-auto h-4 w-4 transition-all ${active ? 'text-neon drop-shadow-[0_0_12px_rgba(0,209,255,1)]' : 'text-white/60'}`} />
                  </motion.div>
                  <span className={`mt-1 block text-[10px] ${active ? 'text-white' : 'text-white/65'}`}>{label}</span>
                  {active && <><span className="mx-auto mt-1 block h-1 w-7 rounded-full bg-neon shadow-[0_0_12px_rgba(0,209,255,1)]" /><span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/40 animate-ping opacity-40" /></>}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

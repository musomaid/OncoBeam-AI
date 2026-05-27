import { AnimatePresence, motion } from 'framer-motion';
import MobileBottomNav from '../components/MobileBottomNav';
import FloatingActionButton from '../components/FloatingActionButton';
import { screenTransition } from '../animations/motionVariants';

export default function MainLayout({ tab, setTab, children }) {
  return (
    <div className="relative mx-auto min-h-screen max-w-md overflow-x-hidden bg-bg px-4 pb-28 pt-4">
      <div className="pointer-events-none fixed inset-0 opacity-35">
        <div className="hud-grid-animated absolute inset-0 bg-hud-grid bg-[size:34px_34px]" />
      </div>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(0,209,255,0.24),transparent_38%),radial-gradient(circle_at_88%_84%,rgba(123,97,255,0.22),transparent_40%)]" />
      <div className="particle-field pointer-events-none fixed inset-0" />
      <div className="pointer-events-none fixed inset-0 cyber-fog" />
      <div className="pointer-events-none fixed inset-0 hud-overlay" />

      <header className="relative mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-lg">
        <p className="text-xs text-white/70">May 27, 2026 • Android Optimized</p>
        <span className="rounded-full border border-success/30 bg-success/15 px-2 py-1 text-[10px] text-success">System Online</span>
      </header>

      <AnimatePresence mode="wait">
        <motion.main key={tab} {...screenTransition} className="relative z-10 pb-4">
          {children}
        </motion.main>
      </AnimatePresence>
      <FloatingActionButton />
      <MobileBottomNav tab={tab} setTab={setTab} />
    </div>
  );
}

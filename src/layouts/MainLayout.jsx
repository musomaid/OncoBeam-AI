import { AnimatePresence, motion } from 'framer-motion';
import MobileBottomNav from '../components/MobileBottomNav';
import FloatingActionButton from '../components/FloatingActionButton';
import { screenTransition } from '../animations/motionVariants';

export default function MainLayout({ tab, setTab, children }) {
  return (
    <div className="relative mx-auto min-h-screen max-w-md overflow-x-hidden bg-bg px-4 pb-28 pt-4">
      <div className="pointer-events-none fixed inset-0 bg-hud-grid bg-[size:32px_32px] opacity-20" />
      <div className="pointer-events-none fixed -left-20 top-10 h-56 w-56 rounded-full bg-neon/20 blur-3xl" />
      <div className="pointer-events-none fixed -right-20 bottom-28 h-56 w-56 rounded-full bg-purple/20 blur-3xl" />
      <header className="mb-4 flex items-center justify-between"><p className="text-xs text-white/60">May 26, 2026 • Android Optimized</p><span className="rounded-full bg-success/15 px-2 py-1 text-[10px] text-success">System Online</span></header>
      <AnimatePresence mode="wait"><motion.main key={tab} {...screenTransition}>{children}</motion.main></AnimatePresence>
      <FloatingActionButton />
      <MobileBottomNav tab={tab} setTab={setTab} />
    </div>
  );
}

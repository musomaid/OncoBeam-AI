import { AnimatePresence, motion } from 'framer-motion';
import SidebarNavigation from '../components/SidebarNavigation';
import BottomNavigation from '../components/BottomNavigation';

export default function MainLayout({ tab, setTab, children }) {
  return (
    <div className="cyber-bg min-h-screen bg-bg p-4 md:p-6">
      <div className="pointer-events-none fixed inset-0 bg-hud-grid bg-[size:36px_36px] opacity-20" />
      <div className="relative mx-auto flex max-w-7xl gap-4">
        <SidebarNavigation tab={tab} setTab={setTab} />
        <AnimatePresence mode="wait">
          <motion.main key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="w-full pb-24 md:pb-0">
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
      <BottomNavigation tab={tab} setTab={setTab} />
    </div>
  );
}

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function FloatingActionButton() {
  return <motion.button whileTap={{ scale: 0.94 }} className="fixed bottom-28 right-5 z-30 rounded-full bg-gradient-to-r from-neon to-purple p-4 text-bg shadow-neon"><Sparkles className="h-5 w-5" /></motion.button>;
}

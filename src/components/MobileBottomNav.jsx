import { Home, Brain, Radiation, BarChart3, UserRound } from 'lucide-react';

const items = [
  { key: 'home', icon: Home, label: 'Home' },
  { key: 'assist', icon: Brain, label: 'AI Assist' },
  { key: 'treatment', icon: Radiation, label: 'Treatment' },
  { key: 'analytics', icon: BarChart3, label: 'Analytics' },
  { key: 'profile', icon: UserRound, label: 'Profile' },
];

export default function MobileBottomNav({ tab, setTab }) {
  return <nav className="fixed bottom-4 left-1/2 z-40 w-[94%] max-w-md -translate-x-1/2 rounded-3xl border border-white/10 bg-card/70 p-2 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,209,255,0.2)]"> <div className="grid grid-cols-5">{items.map(({ key, icon: Icon, label }) => <button key={key} onClick={() => setTab(key)} className="relative rounded-2xl px-1 py-2 text-center"><Icon className={`mx-auto h-4 w-4 ${tab === key ? 'text-neon drop-shadow-[0_0_8px_rgba(0,209,255,0.9)]' : 'text-white/60'}`} /><span className="text-[10px] text-white/70">{label}</span>{tab === key && <span className="absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-neon" />}</button>)}</div></nav>;
}

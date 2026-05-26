import { Home, Brain, Radiation, BarChart3, UserRound } from 'lucide-react';

const items = [
  { key: 'home', icon: Home, label: 'Home Dashboard' },
  { key: 'assist', icon: Brain, label: 'AI Assist' },
  { key: 'treatment', icon: Radiation, label: 'Treatment' },
  { key: 'analytics', icon: BarChart3, label: 'Analytics' },
  { key: 'profile', icon: UserRound, label: 'Profile' },
];

export default function SidebarNavigation({ tab, setTab }) {
  return <aside className="glass hidden w-72 rounded-3xl p-5 md:block">{items.map(({ key, icon: Icon, label }) => <button key={key} onClick={() => setTab(key)} className={`mb-2 flex w-full items-center gap-3 rounded-xl p-3 text-left ${tab === key ? 'bg-neon/20 text-neon' : 'text-white/70 hover:bg-white/5'}`}><Icon className="h-5 w-5" />{label}</button>)}</aside>;
}

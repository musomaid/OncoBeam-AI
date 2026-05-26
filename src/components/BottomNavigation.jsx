import { Home, Brain, Radiation, BarChart3, UserRound } from 'lucide-react';

const items = [
  { key: 'home', icon: Home, label: 'Home' },
  { key: 'assist', icon: Brain, label: 'AI Assist' },
  { key: 'treatment', icon: Radiation, label: 'Treatment' },
  { key: 'analytics', icon: BarChart3, label: 'Analytics' },
  { key: 'profile', icon: UserRound, label: 'Profile' },
];

export default function BottomNavigation({ tab, setTab }) {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[95%] max-w-md -translate-x-1/2 rounded-2xl border border-white/10 bg-card/80 p-2 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-5 gap-1">
        {items.map(({ key, icon: Icon, label }) => (
          <button key={key} onClick={() => setTab(key)} className={`rounded-xl p-2 text-center ${tab === key ? 'bg-neon/20 text-neon shadow-neon' : 'text-white/70'}`}>
            <Icon className="mx-auto h-4 w-4" /><span className="text-[10px]">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

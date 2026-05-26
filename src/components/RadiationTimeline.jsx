import { timeline } from '../utils/mockData';

export default function RadiationTimeline() {
  return (
    <div className="space-y-3">
      {timeline.map((item) => (
        <div key={item.t} className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
          <div className={`h-3 w-3 rounded-full ${item.done ? 'bg-success' : 'bg-neon animate-pulse'}`} />
          <p className="w-16 text-xs text-white/60">{item.t}</p>
          <p className="text-sm">{item.step}</p>
        </div>
      ))}
    </div>
  );
}

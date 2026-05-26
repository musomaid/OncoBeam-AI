import { treatmentTimeline } from '../utils/mockData';

export default function TreatmentTimeline() {
  return <div className="space-y-2">{treatmentTimeline.map((item) => <div key={item.time} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3"><span className={`h-3 w-3 rounded-full ${item.done ? 'bg-success' : 'bg-neon animate-pulse'}`} /><p className="w-14 text-xs text-white/50">{item.time}</p><p className="text-sm">{item.title}</p></div>)}</div>;
}

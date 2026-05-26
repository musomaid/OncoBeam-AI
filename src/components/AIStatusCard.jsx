import { Activity, ShieldCheck } from 'lucide-react';
import GlassCard from './GlassCard';

export default function AIStatusCard({ latency }) {
  return <GlassCard className="flex items-center justify-between"><div><p className="text-xs text-white/60">AI Core</p><p className="text-success">Operational</p></div><div className="text-right"><p className="text-xs text-white/60">Inference Latency</p><p className="text-neon">{latency} ms</p></div><div className="flex gap-2 text-success"><Activity className="h-4 w-4 animate-pulse" /><ShieldCheck className="h-4 w-4" /></div></GlassCard>;
}

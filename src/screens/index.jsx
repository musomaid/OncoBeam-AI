import { Mic, Upload, Zap, Bell, Shield, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import NeonCard from '../components/NeonCard';
import GlassCard from '../components/GlassCard';
import AIStatusCard from '../components/AIStatusCard';
import AnimatedStatCard from '../components/AnimatedStatCard';
import HologramScanner from '../components/HologramScanner';
import TreatmentTimeline from '../components/TreatmentTimeline';
import AnalyticsChartCard from '../components/AnalyticsChartCard';
import { aiTrend, analyticsBars, homeStats, telemetry } from '../utils/mockData';
import { floatLoop } from '../animations/motionVariants';
import { useLiveMetric } from '../hooks/useLiveMetric';

export function HomeScreen() {
  const latency = useLiveMetric(23, 4);
  return <div className="space-y-4"><NeonCard><p className="text-xs text-neon">ONCOBEAM AI</p><h1 className="mt-1 text-2xl font-semibold font-heading">Good evening, Doctor.</h1><p className="text-sm text-white/65">Radiation command center synchronized.</p><motion.div {...floatLoop} className="mt-3 inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-1 text-xs text-success"><span className="h-2 w-2 rounded-full bg-success" /> Live telemetry stable</motion.div></NeonCard><AIStatusCard latency={latency} /><div className="grid grid-cols-2 gap-3">{homeStats.map((item) => <AnimatedStatCard key={item.label} {...item} />)}</div><GlassCard><p className="mb-2 text-sm">Radiation workflow summary</p><div className="flex h-20 items-end gap-1">{telemetry.map((v, i) => <div key={i} className="w-full rounded-t bg-gradient-to-t from-purple/80 to-neon" style={{ height: `${v}%` }} />)}</div></GlassCard></div>;
}

export function AssistScreen() {
  return <div className="space-y-4"><NeonCard><p className="mb-3 text-sm">AI Tumor Detection Lab</p><HologramScanner /><div className="mt-3 grid grid-cols-2 gap-2 text-xs"><GlassCard>Beam Angle: <span className="text-neon">132°</span></GlassCard><GlassCard>Toxicity Risk: <span className="text-danger">Low-Moderate</span></GlassCard></div></NeonCard><GlassCard><button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-neon/35 p-4 text-neon"><Upload className="h-4 w-4" />Upload CT Scan Set</button></GlassCard><GlassCard className="flex items-center justify-between"><div><p className="text-sm">Voice AI Assistant</p><p className="text-xs text-white/60">"Recommend adaptive plan"</p></div><button className="rounded-full bg-purple/25 p-3 text-purple"><Mic className="h-4 w-4" /></button></GlassCard></div>;
}

export const TreatmentScreen = () => <div className="space-y-4"><NeonCard><p className="mb-3 text-sm">Treatment timeline</p><TreatmentTimeline /></NeonCard><div className="grid grid-cols-2 gap-3"><GlassCard><p className="text-xs text-white/60">Progress</p><p className="mt-1 text-2xl text-success">18 / 30</p></GlassCard><GlassCard><p className="text-xs text-white/60">LINAC #4</p><p className="mt-1 text-2xl text-neon">Active</p></GlassCard></div><GlassCard><p className="text-sm">Beam planning</p><div className="mt-2 h-24 rounded-2xl bg-gradient-to-r from-purple/30 to-neon/30" /></GlassCard></div>;

export const AnalyticsScreen = () => <div className="space-y-4"><AnalyticsChartCard title="Cancer Distribution" values={analyticsBars} /><AnalyticsChartCard title="AI Performance Trend" values={aiTrend} /><AnalyticsChartCard title="Machine Usage" values={[88, 83, 72, 92, 64, 78, 90]} /></div>;

export const ProfileScreen = () => <div className="space-y-3"><NeonCard><p className="text-lg font-semibold">Dr. Aria Morgan</p><p className="text-sm text-white/60">Lead Radiation Oncologist</p></NeonCard>{[[Bell, 'Notifications'], [Shield, 'Security'], [SlidersHorizontal, 'AI Configuration'], [Zap, 'Dark Mode']].map(([Icon, label]) => <GlassCard key={label} className="flex items-center justify-between"><span className="flex items-center gap-2"><Icon className="h-4 w-4 text-neon" />{label}</span><span className="text-xs text-white/45">Manage</span></GlassCard>)}<GlassCard><p className="text-sm">OncoBeam AI v2.8 • Cyber oncology assistant.</p></GlassCard></div>;

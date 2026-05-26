import { motion } from 'framer-motion';
import { Upload, Mic, Shield, Bell, Cpu } from 'lucide-react';
import NeonCard from '../components/NeonCard';
import GlassCard from '../components/GlassCard';
import AnimatedButton from '../components/AnimatedButton';
import AIStatusBadge from '../components/AIStatusBadge';
import TelemetryChart from '../components/TelemetryChart';
import RadiationTimeline from '../components/RadiationTimeline';
import AIAnalysisPanel from '../components/AIAnalysisPanel';
import { stats } from '../utils/mockData';
import { fadeUp } from '../animations/motionVariants';

export const HomeScreen = () => <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-4"><NeonCard className="relative overflow-hidden"><h1 className="text-3xl font-extrabold glow-text">Good Evening, Doctor.</h1><p className="mt-1 text-white/75">OncoBeam AI ready for today's radiation workflow.</p><div className="mt-3"><AIStatusBadge /></div><div className="mt-4 flex gap-2"><AnimatedButton>Start Plan</AnimatedButton><AnimatedButton>Open Queue</AnimatedButton></div></NeonCard><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{stats.map((s)=><GlassCard key={s.label}><p className="text-xs text-white/60">{s.label}</p><p className={`text-2xl font-bold ${s.color === 'neon' ? 'text-neon' : s.color === 'success' ? 'text-success' : s.color === 'purple' ? 'text-purple' : 'text-danger'}`}>{s.value}</p></GlassCard>)}</div><NeonCard><p className="mb-3 font-semibold">Live Telemetry</p><TelemetryChart /></NeonCard></motion.div>;

export const AssistScreen = () => <div className="space-y-4"><AIAnalysisPanel /><div className="grid gap-3 md:grid-cols-2"><GlassCard><p className="mb-2 font-semibold">CT/MRI Upload</p><button className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-neon/40 p-6 text-neon"><Upload className="h-4 w-4" />Drop scans here</button></GlassCard><GlassCard><p className="mb-2 font-semibold">Voice AI Assistant</p><div className="rounded-xl bg-purple/15 p-4"><Mic className="mb-2 h-6 w-6 text-purple" />"Beam angle recommendation for lung lesion?"</div></GlassCard></div></div>;

export const TreatmentScreen = () => <div className="space-y-4"><NeonCard><h3 className="mb-3 text-lg font-semibold">Radiation Workflow Timeline</h3><RadiationTimeline /></NeonCard><div className="grid gap-3 md:grid-cols-2"><GlassCard><p className="text-sm text-white/70">Fraction Schedule</p><p className="mt-2 text-2xl font-bold">18 / 30</p></GlassCard><GlassCard><p className="text-sm text-white/70">LINAC Status</p><p className="mt-2 text-2xl font-bold text-success">Operational</p></GlassCard></div></div>;

export const AnalyticsScreen = () => <div className="grid gap-4 lg:grid-cols-2"><NeonCard><h3 className="mb-2 font-semibold">Cancer Distribution</h3><TelemetryChart /></NeonCard><NeonCard><h3 className="mb-2 font-semibold">AI Performance Trend</h3><TelemetryChart /></NeonCard></div>;

export const ProfileScreen = () => <div className="space-y-3"><NeonCard><h3 className="text-xl font-bold">Dr. A. Morgan</h3><p className="text-white/60">Lead Radiation Oncologist</p></NeonCard><GlassCard className="space-y-2"><p className="flex items-center gap-2"><Shield className="h-4 w-4 text-neon" />Security Settings</p><p className="flex items-center gap-2"><Bell className="h-4 w-4 text-purple" />Notification Settings</p><p className="flex items-center gap-2"><Cpu className="h-4 w-4 text-success" />AI Configuration Panel</p></GlassCard></div>;

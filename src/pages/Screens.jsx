import { motion } from 'framer-motion';
import { Upload, Mic, Shield, Bell, Cpu, TrendingUp, Activity } from 'lucide-react';
import NeonCard from '../components/NeonCard';
import GlassCard from '../components/GlassCard';
import AnimatedButton from '../components/AnimatedButton';
import AIStatusBadge from '../components/AIStatusBadge';
import TelemetryChart from '../components/TelemetryChart';
import RadiationTimeline from '../components/RadiationTimeline';
import AIAnalysisPanel from '../components/AIAnalysisPanel';
import { stats } from '../utils/mockData';
import { fadeUp } from '../animations/motionVariants';

export const HomeScreen = () => (
  <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-3.5">
    <NeonCard className="hero-hologram relative overflow-hidden px-5 py-5">
      <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-neon/30 bg-neon/10 px-2 py-1 text-[10px] text-neon">
        <Activity className="h-3 w-3 animate-pulse" /> LIVE AI
      </div>
      <h1 className="max-w-[80%] text-[2rem] font-bold leading-[1.05] text-white font-heading">OncoBeam AI Command Ready</h1>
      <p className="mt-2 max-w-[88%] text-sm text-white/80">Real-time oncology intelligence and treatment telemetry are synchronized.</p>
      <div className="mt-4 flex items-center gap-2"><AIStatusBadge /><span className="h-2 w-2 animate-pulse rounded-full bg-success" /></div>
      <div className="mt-4 grid grid-cols-2 gap-2"><AnimatedButton>Start Plan</AnimatedButton><AnimatedButton>Open Queue</AnimatedButton></div>
    </NeonCard>

    <section className="grid grid-cols-2 gap-2.5">
      {stats.map((s, i) => (
        <GlassCard key={s.label} className="metric-card min-h-[110px]">
          <div className="mb-2 flex items-center justify-between text-xs text-white/65">
            <p>{s.label}</p>
            <TrendingUp className="h-3.5 w-3.5 text-success" />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`text-[1.7rem] font-bold leading-none ${s.color === 'neon' ? 'text-neon' : s.color === 'success' ? 'text-success' : s.color === 'purple' ? 'text-purple' : 'text-danger'}`}
          >
            {s.value}
          </motion.p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-neon to-purple" /></div>
        </GlassCard>
      ))}
    </section>

    <NeonCard className="pt-4">
      <div className="mb-3 flex items-center justify-between"><p className="font-semibold">Live Telemetry</p><span className="text-xs text-neon">Realtime</span></div>
      <TelemetryChart />
    </NeonCard>
  </motion.div>
);

export const AssistScreen = () => <div className="space-y-4"><AIAnalysisPanel /><div className="grid gap-3 md:grid-cols-2"><GlassCard><p className="mb-2 font-semibold">CT/MRI Upload</p><button className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-neon/40 p-6 text-neon"><Upload className="h-4 w-4" />Drop scans here</button></GlassCard><GlassCard><p className="mb-2 font-semibold">Voice AI Assistant</p><div className="rounded-xl bg-purple/15 p-4"><Mic className="mb-2 h-6 w-6 text-purple" />"Beam angle recommendation for lung lesion?"</div></GlassCard></div></div>;

export const TreatmentScreen = () => <div className="space-y-4"><NeonCard><h3 className="mb-3 text-lg font-semibold">Radiation Workflow Timeline</h3><RadiationTimeline /></NeonCard><div className="grid gap-3 md:grid-cols-2"><GlassCard><p className="text-sm text-white/70">Fraction Schedule</p><p className="mt-2 text-2xl font-bold">18 / 30</p></GlassCard><GlassCard><p className="text-sm text-white/70">LINAC Status</p><p className="mt-2 text-2xl font-bold text-success">Operational</p></GlassCard></div></div>;

export const AnalyticsScreen = () => <div className="grid gap-4 lg:grid-cols-2"><NeonCard><h3 className="mb-2 font-semibold">Cancer Distribution</h3><TelemetryChart /></NeonCard><NeonCard><h3 className="mb-2 font-semibold">AI Performance Trend</h3><TelemetryChart /></NeonCard></div>;

export const ProfileScreen = () => <div className="space-y-3"><NeonCard><h3 className="text-xl font-bold">Dr. A. Morgan</h3><p className="text-white/60">Lead Radiation Oncologist</p></NeonCard><GlassCard className="space-y-2"><p className="flex items-center gap-2"><Shield className="h-4 w-4 text-neon" />Security Settings</p><p className="flex items-center gap-2"><Bell className="h-4 w-4 text-purple" />Notification Settings</p><p className="flex items-center gap-2"><Cpu className="h-4 w-4 text-success" />AI Configuration Panel</p></GlassCard></div>;

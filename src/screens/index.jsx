import { Mic, Upload, Zap, Bell, Shield, SlidersHorizontal, Crosshair, MessageSquare, Radio, BrainCircuit, Activity, Radar, ShieldAlert, Cpu, Waves, Orbit, GaugeCircle, Sparkles, ShieldCheck, Lock, ScanLine, Fingerprint, Bot, AudioWaveform, Siren, ChevronRight, Flame, UserRound, Stethoscope, Target, Award, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import NeonCard from '../components/NeonCard';
import GlassCard from '../components/GlassCard';
import AIStatusCard from '../components/AIStatusCard';
import AnimatedStatCard from '../components/AnimatedStatCard';
import TreatmentTimeline from '../components/TreatmentTimeline';
import AnalyticsChartCard from '../components/AnalyticsChartCard';
import AIAnalysisPanel from '../components/AIAnalysisPanel';
import { aiTrend, analyticsBars, homeStats, telemetry } from '../utils/mockData';
import { floatLoop } from '../animations/motionVariants';
import { useLiveMetric } from '../hooks/useLiveMetric';

export function HomeScreen() {
  const latency = useLiveMetric(23, 4);
  return <div className="space-y-4"><NeonCard><p className="text-xs text-neon">ONCOBEAM AI</p><h1 className="mt-1 text-2xl font-semibold font-heading">Good evening, Doctor.</h1><p className="text-sm text-white/65">Radiation command center synchronized.</p><motion.div {...floatLoop} className="mt-3 inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-1 text-xs text-success"><span className="h-2 w-2 rounded-full bg-success" /> Live telemetry stable</motion.div></NeonCard><AIStatusCard latency={latency} /><div className="grid grid-cols-2 gap-3">{homeStats.map((item) => <AnimatedStatCard key={item.label} {...item} />)}</div><GlassCard><p className="mb-2 text-sm">Radiation workflow summary</p><div className="flex h-20 items-end gap-1">{telemetry.map((v, i) => <div key={i} className="w-full rounded-t bg-gradient-to-t from-purple/80 to-neon" style={{ height: `${v}%` }} />)}</div></GlassCard></div>;
}

export function AssistScreen() {
  return <div className="space-y-3.5"><AIAnalysisPanel /><GlassCard><p className="mb-2 text-sm font-semibold">Patient Analysis Snapshot</p><div className="grid grid-cols-2 gap-2 text-xs">{[['Patient ID', 'ONC-4471'], ['Cancer Type', 'NSCLC'], ['Radiation Stage', 'IIIA'], ['Current Fraction', '18 / 30'], ['AI Confidence', '98.9%'], ['Treatment Progress', '60%']].map(([k, v]) => <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-2"><p className="text-white/60">{k}</p><p className="mt-1 font-semibold text-neon">{v}</p></div>)}</div></GlassCard><div className="grid gap-3"><GlassCard><div className="mb-2 flex items-center justify-between"><p className="font-semibold">3D Body Target Preview</p><Crosshair className="h-4 w-4 text-neon" /></div><div className="relative h-36 overflow-hidden rounded-2xl border border-neon/25 bg-gradient-to-b from-white/5 to-neon/10"><div className="absolute inset-0 scanner-grid opacity-30" /><div className="absolute left-1/2 top-1/2 h-28 w-14 -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-white/30" /><div className="absolute left-1/2 top-[44%] h-4 w-4 -translate-x-1/2 rounded-full bg-danger shadow-[0_0_16px_rgba(255,71,126,1)] tumor-ping" /><div className="absolute left-[10%] top-[56%] h-0.5 w-[80%] bg-gradient-to-r from-transparent via-neon to-transparent beam-line" /></div></GlassCard><GlassCard><p className="mb-2 font-semibold">Voice AI Expansion</p><div className="rounded-xl border border-purple/30 bg-purple/10 p-3"><div className="mb-2 flex items-center justify-between text-xs text-white/70"><span className="flex items-center gap-1"><Radio className="h-3.5 w-3.5 text-neon" />Listening Mode</span><span className="text-neon">Live</span></div><div className="voice-wave mb-3 h-10 rounded-lg bg-white/5" /><div className="flex items-center justify-between"><div className="space-y-1 text-xs text-white/70"><p className="flex items-center gap-1"><MessageSquare className="h-3.5 w-3.5 text-neon" />"Recommend adaptive plan"</p><p>AI: "Suggested beam arc narrowed by 6%."</p></div><button className="relative rounded-full bg-purple/25 p-3 text-purple"><span className="absolute inset-0 rounded-full voice-ripple" /><Mic className="relative z-10 h-4 w-4" /></button></div></div></GlassCard></div><GlassCard><button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-neon/35 p-4 text-neon"><Upload className="h-4 w-4" />Upload CT Scan Set</button></GlassCard></div>;
}

export const TreatmentScreen = () => {
  const telemetry = [
    ['Beam power', '6.8 MV', 'stable'],
    ['Radiation stability', '99.2%', 'stable'],
    ['Delivery precision', '0.31 mm', 'stable'],
    ['Sync latency', '24 ms', 'watch'],
    ['AI optimization', 'Adaptive', 'stable'],
  ];

  return <div className="space-y-3.5"><GlassCard className="space-y-3"><div className="flex items-center justify-between"><p className="text-base font-semibold">Patient Treatment Snapshot</p><span className="rounded-full bg-neon/15 px-2 py-1 text-[10px] text-neon">LIVE</span></div><div className="grid grid-cols-2 gap-2 text-xs">{[['Patient ID', 'ONC-4471'], ['Cancer Type', 'NSCLC Stage IIIA'], ['Fraction Progress', '18 / 30'], ['Current Dose', '36.0 Gy'], ['Risk Level', 'Moderate'], ['AI Confidence', '98.7%'], ['Treatment Stage', 'Adaptive Delivery']].map(([k, v]) => <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-2"><p className="text-white/55">{k}</p><p className="mt-1 font-semibold text-neon">{v}</p></div>)}</div></GlassCard><NeonCard><p className="mb-2 text-base font-semibold">Intelligent Treatment Workflow</p><TreatmentTimeline /></NeonCard><div className="grid grid-cols-2 gap-3"><GlassCard><p className="text-xs text-white/60">Fraction session</p><div className="mt-2 flex items-center gap-2"><div className="relative h-14 w-14"><div className="absolute inset-0 rounded-full border-4 border-white/10" /><div className="absolute inset-0 rounded-full border-4 border-neon/80 border-t-transparent animate-spin-slow" /><p className="absolute inset-0 grid place-content-center text-xs font-semibold text-neon">60%</p></div><div className="text-xs text-white/75"><p>Next: 09:00 UTC</p><p>ETA completion: Jun 8</p><p className="text-purple">+1 adaptive shift</p></div></div></GlassCard><GlassCard><p className="text-xs text-white/60">LINAC control</p><div className="mt-2 space-y-1 text-xs">{[['Temp', '36.8°'], ['Stability', '98.9%'], ['Load', '74%'], ['Calibration', 'Synced'], ['AI Sync', 'Online']].map(([k, v]) => <div key={k} className="flex items-center justify-between"><span className="text-white/65">{k}</span><span className="text-neon">{v}</span></div>)}</div></GlassCard></div><GlassCard><div className="mb-2 flex items-center justify-between"><p className="text-base font-semibold">Advanced Beam Planning Module</p><Crosshair className="h-4 w-4 text-neon" /></div><div className="relative h-44 overflow-hidden rounded-2xl border border-neon/25 bg-gradient-to-b from-white/5 to-neon/10"><div className="absolute inset-0 scanner-grid opacity-30" /><div className="absolute inset-0 floating-particles" /><div className="absolute left-1/2 top-1/2 h-36 w-16 -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-white/25" /><div className="absolute left-1/2 top-[43%] h-5 w-5 -translate-x-1/2 rounded-full bg-danger shadow-[0_0_18px_rgba(255,71,126,1)] tumor-ping" /><div className="absolute left-[8%] top-[56%] h-0.5 w-[84%] bg-gradient-to-r from-transparent via-neon to-transparent beam-line" /><div className="radar-sweep opacity-70" /><motion.div animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: 'linear' }} className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/40" /><div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-2 text-[10px]"><span className="text-white/70">Trajectory: Arc-7</span><span className="text-neon">OAR sparing active</span><span className="text-success">Alignment 99.4%</span></div></div></GlassCard><GlassCard><p className="mb-2 text-base font-semibold">Live Radiation Delivery Monitor</p><div className="grid grid-cols-2 gap-2">{telemetry.map(([k,v,state]) => <div key={k} className="rounded-xl border border-white/10 bg-white/[0.04] p-2"><p className="text-[10px] text-white/60">{k}</p><p className="mt-1 text-sm font-semibold text-neon">{v}</p><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div initial={{ x: '-100%' }} animate={{ x: ['-100%', '0%'] }} transition={{ duration: 1.2 }} className="h-full w-full bg-gradient-to-r from-neon/35 via-neon to-purple" /></div><p className={`mt-1 text-[10px] ${state === 'watch' ? 'text-amber-300' : 'text-success'}`}>{state === 'watch' ? 'Observe' : 'Stable'}</p></div>)}</div></GlassCard><GlassCard><p className="mb-2 text-base font-semibold">AI Adaptive Planning Panel</p><div className="space-y-2 text-xs">{[['Beam optimization', 'Narrow arc by 2.2°', '97%'], ['Organ sparing', 'Reduce left-lung spill', '95%'], ['Toxicity warning', 'Esophagitis risk medium', '88%'], ['Adaptive fraction', 'Keep dose rate with micro-pause', '93%']].map(([k,v,c]) => <motion.div key={k} whileHover={{ scale: 1.01 }} className="rounded-xl border border-purple/30 bg-purple/10 p-2"><p className="text-neon">{k}</p><div className="mt-1 flex items-center justify-between"><span className="text-white/75">{v}</span><span className="text-success">{c}</span></div></motion.div>)}</div></GlassCard><GlassCard><p className="mb-2 text-base font-semibold">Live Activity Feed</p><div className="max-h-40 space-y-2 overflow-y-auto pr-1">{['Beam alignment verified','AI segmentation updated','Dosimetry recalculated','Oncology engine synchronized','Fraction delivery stable'].map((item,idx)=><div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2 text-xs"><span className="h-2 w-2 rounded-full bg-neon animate-pulse" /><p className="flex-1">{item}</p><span className="text-[10px] text-white/45">+{idx+1}m</span></div>)}</div></GlassCard></div>;
};

export const AnalyticsScreen = () => {
  const insightCards = [
    ['AI Diagnostic Accuracy', '98.9%', 'up', 'neon', [62, 70, 68, 76, 84, 88, 92]],
    ['Active Oncology Cases', '142', 'up', 'purple', [48, 52, 57, 60, 63, 67, 71]],
    ['Radiation Success Rate', '96.4%', 'up', 'success', [55, 58, 61, 68, 74, 79, 83]],
    ['Treatment Stability', '99.2%', 'steady', 'neon', [75, 78, 80, 81, 84, 86, 88]],
    ['AI Prediction Confidence', '97.6%', 'up', 'purple', [60, 62, 66, 70, 73, 77, 81]],
    ['Adaptive Planning Score', '94.1%', 'up', 'success', [51, 55, 58, 66, 72, 74, 79]],
  ];

  const distribution = [
    ['Lung', 31, 34], ['Breast', 24, 26], ['Brain', 16, 19], ['Cervical', 13, 14], ['Liver', 10, 12], ['Prostate', 18, 21],
  ];

  const aiPerf = [56, 60, 58, 64, 67, 72, 78, 75, 81, 86, 90, 93];
  const predictions = [
    ['Predicted patient load', '+12%', 'Next 7 days'],
    ['Toxicity prediction trends', 'Moderate spike', 'Esophagus cohort'],
    ['Treatment completion forecast', '91.8%', 'By June 2026'],
    ['Machine utilization forecast', '83%', 'Peak: 10:00-14:00'],
    ['Adaptive oncology planning', '4 updates', 'Auto-ready'],
  ];

  const telemetry = [
    ['Beam stability', 96], ['Thermal load', 72], ['Calibration health', 94], ['AI synchronization', 98], ['Radiation precision', 97], ['Operational efficiency', 88],
  ];

  const alerts = [
    ['Machine overload risk', 'LINAC-04 predicted >90% load'],
    ['Toxicity spike detection', 'Mild esophageal risk in 2 cohorts'],
    ['AI confidence warning', 'Brain segmenter drift: -1.8%'],
    ['Beam instability alert', 'Micro-vibration corrected in 120ms'],
  ];

  const feed = ['AI segmentation updated','Oncology engine synchronized','Beam optimization completed','Predictive model recalibrated','Treatment confidence improved','LINAC thermal profile normalized'];

  return <div className="space-y-4">
    <NeonCard className="analytics-core relative overflow-hidden">
      <div className="absolute inset-0 analytics-scan" />
      <div className="relative z-10 flex items-start justify-between gap-2">
        <div>
          <p className="text-xs text-neon/90">ONCOLOGY INTELLIGENCE CENTER</p>
          <h2 className="mt-1 text-2xl font-semibold font-heading">Realtime Analytics Nexus</h2>
          <p className="text-xs text-white/65">AI telemetry, predictive oncology signals, and adaptive machine diagnostics.</p>
        </div>
        <motion.div animate={{ opacity: [0.65, 1, 0.65] }} transition={{ duration: 1.8, repeat: Infinity }} className="rounded-xl border border-neon/40 bg-neon/10 p-2 text-neon"><BrainCircuit className="h-4 w-4" /></motion.div>
      </div>
    </NeonCard>

    <section className="grid grid-cols-2 gap-2.5">
      {insightCards.map(([label, value, trend, tone, spark], idx) => <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }}><GlassCard className="relative overflow-hidden p-3">
        <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-neon/10 blur-2xl" />
        <div className="mb-1 flex items-center justify-between text-[11px] text-white/70"><span>{label}</span><span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] text-neon">{trend}</span></div>
        <p className={`text-lg font-semibold ${tone === 'success' ? 'text-success' : tone === 'purple' ? 'text-purple' : 'text-neon'}`}>{value}</p>
        <div className="mt-2 flex h-8 items-end gap-1">{spark.map((v, i) => <motion.span key={i} animate={{ height: [`${Math.max(v - 10, 12)}%`, `${v}%`, `${Math.max(v - 6, 14)}%`] }} transition={{ duration: 2 + i * 0.08, repeat: Infinity }} className="w-full rounded-sm bg-gradient-to-t from-purple/80 to-neon/95" />)}</div>
      </GlassCard></motion.div>)}
    </section>

    <GlassCard className="space-y-3">
      <div className="flex items-center justify-between"><p className="text-base font-semibold">Advanced Cancer Distribution</p><Radar className="h-4 w-4 text-neon" /></div>
      <div className="space-y-2">
        {distribution.map(([name, val, pred], i) => <div key={name} className="space-y-1"><div className="flex items-center justify-between text-xs"><span className="text-white/70">{name}</span><span className="text-neon">{val}% <span className="text-purple">AI {pred}%</span></span></div><div className="relative h-2.5 overflow-hidden rounded-full bg-white/10"><motion.div initial={{ width: 0 }} animate={{ width: `${val}%` }} transition={{ delay: i * 0.08, duration: 0.9 }} className="h-full rounded-full bg-gradient-to-r from-neon to-purple shadow-[0_0_10px_rgba(0,209,255,.55)]" /><motion.div animate={{ x: ['-20%', '120%'] }} transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }} className="absolute top-0 h-full w-12 bg-gradient-to-r from-transparent via-white/40 to-transparent" /></div></div>)}
      </div>
    </GlassCard>

    <GlassCard>
      <div className="mb-2 flex items-center justify-between"><p className="text-base font-semibold">AI Performance Analytics</p><Activity className="h-4 w-4 text-purple" /></div>
      <div className="relative h-28 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-2">
        <div className="absolute inset-0 scanner-grid opacity-30" />
        <svg viewBox="0 0 320 120" className="relative z-10 h-full w-full">
          <polyline fill="none" stroke="url(#lineGlow)" strokeWidth="3" points={aiPerf.map((v, i) => `${(i / (aiPerf.length - 1)) * 320},${120 - v}`).join(' ')} />
          <defs><linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#00D1FF"/><stop offset="100%" stopColor="#7B61FF"/></linearGradient></defs>
        </svg>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-[11px]">{[['Latency','23ms'],['Inference stability','99.1%'],['Adaptive learning','+6.4%']].map(([k,v])=><div key={k} className="rounded-lg border border-white/10 bg-white/[0.03] p-2"><p className="text-white/55">{k}</p><p className="text-neon">{v}</p></div>)}</div>
    </GlassCard>

    <GlassCard><p className="mb-2 text-base font-semibold">Predictive Analytics Module</p><div className="space-y-2">{predictions.map(([k,v,s])=><div key={k} className="rounded-xl border border-purple/35 bg-purple/10 p-2.5"><div className="flex items-center justify-between"><p className="text-xs text-neon">{k}</p><span className="text-xs text-success">{v}</span></div><p className="mt-1 text-[11px] text-white/70">{s}</p></div>)}</div></GlassCard>

    <GlassCard><p className="mb-2 text-base font-semibold">Machine Telemetry Center</p><div className="grid grid-cols-2 gap-2">{telemetry.map(([k,v])=><div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-2"><div className="mb-1 flex items-center justify-between text-[11px]"><span className="text-white/65">{k}</span><span className="text-neon">{v}%</span></div><div className="h-2 overflow-hidden rounded-full bg-white/10"><motion.div animate={{ width: [`${Math.max(v-8,30)}%`, `${v}%`, `${Math.max(v-4,30)}%`] }} transition={{ duration: 2.4, repeat: Infinity }} className="h-full rounded-full bg-gradient-to-r from-neon via-cyan-300 to-purple" /></div></div>)}</div></GlassCard>

    <GlassCard><div className="mb-2 flex items-center justify-between"><p className="text-base font-semibold">Oncology Heatmap</p><Waves className="h-4 w-4 text-neon" /></div><div className="grid grid-cols-6 gap-1">{Array.from({length:30}).map((_,i)=><motion.div key={i} animate={{ opacity:[0.35,0.8,0.45] }} transition={{ duration:1.6 + (i%6)*0.2, repeat:Infinity }} className={`h-6 rounded-md ${i%5===0?'bg-danger/60':i%3===0?'bg-purple/60':'bg-neon/50'} shadow-[0_0_12px_rgba(0,209,255,.2)]`} />)}</div></GlassCard>

    <GlassCard><p className="mb-2 text-base font-semibold">Live AI Activity Feed</p><div className="max-h-40 space-y-2 overflow-y-auto pr-1">{feed.map((item,idx)=><div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2 text-xs"><span className="h-2 w-2 rounded-full bg-neon animate-pulse" /><p className="flex-1">{item}</p><span className="text-[10px] text-white/45">+{idx + 1}m</span></div>)}</div></GlassCard>

    <GlassCard><div className="mb-2 flex items-center justify-between"><p className="text-base font-semibold">Smart Alert System</p><ShieldAlert className="h-4 w-4 text-danger" /></div><div className="space-y-2">{alerts.map(([t,d])=><div key={t} className="rounded-xl border border-danger/40 bg-danger/10 p-2"><p className="text-xs text-danger">{t}</p><p className="text-[11px] text-white/75">{d}</p></div>)}</div></GlassCard>
  </div>;
};

export const ProfileScreen = () => {
  const operatorStatus = [['AI Neural Link', '98.7%', 'stable'], ['Oncology Engine Sync', '99.1%', 'stable'], ['Radiation Core', 'Nominal', 'stable'], ['Adaptive Planning', 'Active', 'stable'], ['Security Matrix', 'Hardened', 'watch']];
  const profileStats = [['Patients supervised', '164'], ['AI assist usage', '91%'], ['Treatment precision', '99.2%'], ['Oncology rank', '#04'], ['Session efficiency', '96.3%']];
  const performanceCards = [['AI-assisted procedures', 88, '+18 this week'], ['Precision score', 97, 'Top percentile'], ['Treatment success rate', 94, 'Last 30 sessions'], ['Workflow efficiency', 91, 'Daily average'], ['Adaptive AI interactions', 84, 'Realtime tuning']];
  const settingsModules = [[Bell, 'Notifications', 'Clinical signal alerts', 'Optimized'], [SlidersHorizontal, 'AI Configuration', 'Neural model tuning', 'Adaptive'], [Shield, 'Security Matrix', 'Zero-trust controls', 'Fortified'], [BrainCircuit, 'Neural Preferences', 'Operator cognition mode', 'Synced'], [Crosshair, 'Radiation Workflow', 'Beam logic presets', 'Ready'], [Orbit, 'System Synchronization', 'Cloud + edge coherence', 'Stable'], [Lock, 'Privacy Shield', 'Compliance + audit', 'Protected'], [AudioWaveform, 'Voice AI Settings', 'Command cadence', 'Listening']];
  const feed = ['Oncology engine updated', 'Neural sync optimized', 'AI recommendation recalibrated', 'Security verification complete', 'Voice AI synchronized'];
  const achievements = [['Precision Oncology Specialist', 'Unlocked 21 May', Award], ['AI Workflow Master', 'Unlocked 14 May', Bot], ['Radiation Expert', 'Unlocked 2 May', Target], ['Adaptive Planning Elite', 'Unlocked 28 Apr', Sparkles]];

  return <div className="space-y-3.5 pb-2">
    <NeonCard className="hud-overlay relative overflow-hidden p-4">
      <div className="absolute inset-0 cyber-fog opacity-70" />
      <div className="absolute inset-0 scanner-grid opacity-25" />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 rounded-full border border-neon/45 bg-black/40 p-1">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 rounded-full border-2 border-neon/70 border-t-transparent" />
              <div className="grid h-full w-full place-content-center rounded-full border border-white/20 bg-gradient-to-br from-neon/20 to-purple/20">
                <UserRound className="h-6 w-6 text-neon" />
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.18em] text-neon/90">ONCOLOGY OPERATOR ID</p>
              <h2 className="font-heading text-xl font-semibold">Dr. Aria Morgan</h2>
              <p className="text-xs text-white/70">Lead Radiation Oncologist • Clearance Level Ω-7</p>
            </div>
          </div>
          <motion.div animate={{ opacity: [0.55, 1, 0.55] }} transition={{ duration: 1.8, repeat: Infinity }} className="rounded-xl border border-success/40 bg-success/15 p-2 text-[10px] text-success">
            <p className="flex items-center gap-1"><Activity className="h-3 w-3" /> AI Sync Live</p>
            <p className="mt-1">Neural link 99.4%</p>
          </motion.div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
          {profileStats.map(([k, v], i) => <motion.div key={k} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-white/10 bg-white/[0.04] p-2"><p className="text-white/60">{k}</p><p className="mt-1 font-semibold text-neon">{v}</p></motion.div>)}
        </div>
      </div>
    </NeonCard>

    <GlassCard className="space-y-2.5">
      <div className="flex items-center justify-between"><p className="text-base font-semibold">AI Operator Status</p><Cpu className="h-4 w-4 text-neon" /></div>
      {operatorStatus.map(([k, v, state], i) => <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
        <div className="mb-1 flex items-center justify-between text-xs"><span className="text-white/70">{k}</span><span className={`${state === 'watch' ? 'text-amber-300' : 'text-success'}`}>{v}</span></div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div animate={{ width: ['25%', '100%', '60%'] }} transition={{ duration: 2.4 + i * 0.15, repeat: Infinity }} className={`h-full ${state === 'watch' ? 'bg-gradient-to-r from-amber-300 to-neon' : 'bg-gradient-to-r from-neon via-cyan-300 to-purple'}`} /></div>
      </div>)}
    </GlassCard>

    <section className="grid grid-cols-2 gap-2.5">
      {performanceCards.map(([k, v, s], i) => <motion.div key={k} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.06 }}><GlassCard className="p-3">
        <div className="flex items-center justify-between text-[11px]"><p className="text-white/70">{k}</p><BarChart3 className="h-3.5 w-3.5 text-neon" /></div>
        <div className="mt-2 flex items-center gap-2">
          <div className="relative h-11 w-11">
            <svg viewBox="0 0 36 36" className="h-full w-full">
              <path d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="3" />
              <motion.path d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32" fill="none" stroke="#00D1FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="100" animate={{ strokeDashoffset: [100, 100 - v] }} transition={{ duration: 1.1, delay: i * 0.1 }} />
            </svg>
            <p className="absolute inset-0 grid place-content-center text-[10px] font-semibold text-neon">{v}%</p>
          </div>
          <p className="text-[10px] text-white/65">{s}</p>
        </div>
      </GlassCard></motion.div>)}
    </section>

    <GlassCard className="space-y-2">
      <div className="flex items-center justify-between"><p className="text-base font-semibold">AI Personalization Module</p><BrainCircuit className="h-4 w-4 text-purple" /></div>
      {[['AI assistant personality', 72], ['Adaptive oncology mode', 88], ['AI confidence threshold', 93], ['Prediction sensitivity', 76]].map(([k, value]) => <div key={k} className="space-y-1"><div className="flex items-center justify-between text-xs"><p className="text-white/70">{k}</p><p className="text-neon">{value}%</p></div><div className="h-2 overflow-hidden rounded-full bg-white/10"><motion.div animate={{ width: [`${Math.max(value - 9, 25)}%`, `${value}%`, `${Math.max(value - 4, 25)}%`] }} transition={{ duration: 2.2, repeat: Infinity }} className="h-full rounded-full bg-gradient-to-r from-purple via-neon to-cyan-300" /></div></div>)}
      <div className="flex items-center justify-between rounded-xl border border-purple/35 bg-purple/10 p-2 text-xs"><span className="flex items-center gap-1 text-white/75"><Siren className="h-3.5 w-3.5 text-neon" /> Voice AI behavior</span><button className="rounded-full border border-neon/50 bg-neon/15 px-2 py-1 text-neon">Adaptive</button></div>
    </GlassCard>

    <GlassCard className="space-y-2">
      <div className="flex items-center justify-between"><p className="text-base font-semibold">Security Matrix Panel</p><ShieldCheck className="h-4 w-4 text-success" /></div>
      {[[ShieldCheck, 'Neural firewall', 'Fortified'], [Lock, 'Encryption integrity', '99.8%'], [ScanLine, 'Session shield', 'Active'], [Fingerprint, 'Biometric verification', 'Verified'], [Stethoscope, 'Secure oncology sync', 'Protected']].map(([Icon, label, status]) => <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-2"><span className="flex items-center gap-2 text-xs"><Icon className="h-3.5 w-3.5 text-neon" />{label}</span><span className="text-[11px] text-success">{status}</span></div>)}
    </GlassCard>

    <GlassCard className="space-y-2">
      <p className="text-base font-semibold">Advanced Settings Hub</p>
      {settingsModules.map(([Icon, label, subtitle, state], i) => <motion.button key={label} whileTap={{ scale: 0.985 }} whileHover={{ y: -1 }} className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-2.5 text-left">
        <div className="flex items-center justify-between gap-2"><div className="flex items-center gap-2.5"><span className="rounded-xl border border-neon/35 bg-neon/10 p-1.5"><Icon className="h-3.5 w-3.5 text-neon" /></span><div><p className="text-sm">{label}</p><p className="text-[11px] text-white/55">{subtitle}</p></div></div><div className="text-right"><p className="text-[10px] text-success">{state}</p><ChevronRight className="ml-auto h-3.5 w-3.5 text-white/50" /></div></div>
        <motion.div animate={{ width: ['10%', '95%', '45%'] }} transition={{ duration: 2.4 + i * 0.13, repeat: Infinity }} className="mt-2 h-1 rounded-full bg-gradient-to-r from-neon to-purple" />
      </motion.button>)}
    </GlassCard>

    <GlassCard className="space-y-2"><p className="text-base font-semibold">Live AI Activity Feed</p><div className="max-h-36 space-y-2 overflow-y-auto pr-1">{feed.map((item, idx) => <motion.div key={item} animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.8, repeat: Infinity, delay: idx * 0.2 }} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2 text-xs"><span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_10px_rgba(0,209,255,1)]" /><p className="flex-1">{item}</p><span className="text-[10px] text-white/45">+{idx + 1}m</span></motion.div>)}</div></GlassCard>

    <GlassCard><p className="mb-2 text-base font-semibold">Doctor Achievement System</p><div className="grid grid-cols-2 gap-2">{achievements.map(([name, unlocked, Icon]) => <div key={name} className="rounded-xl border border-purple/35 bg-gradient-to-br from-purple/15 to-neon/10 p-2"><p className="flex items-center gap-1 text-[11px] text-neon"><Icon className="h-3.5 w-3.5" />{name}</p><p className="mt-1 text-[10px] text-white/65">{unlocked}</p><motion.div animate={{ opacity: [0.25, 0.7, 0.25] }} transition={{ duration: 1.9, repeat: Infinity }} className="mt-2 h-1 rounded-full bg-gradient-to-r from-neon to-purple" /></div>)}</div></GlassCard>

    <GlassCard className="relative overflow-hidden"><div className="absolute inset-0 ai-scan-noise opacity-35" /><div className="relative z-10"><p className="mb-2 text-base font-semibold">System Diagnostics Center</p><div className="grid grid-cols-2 gap-2 text-xs">{[['AI Core Version', 'v3.4.9'], ['Neural Engine Build', '2026.05.27'], ['System Latency', '21 ms'], ['Cloud Sync Status', 'Synchronized'], ['Oncology AI Stability', '99.6%'], ['Radiation Runtime', '14h 32m']].map(([k,v]) => <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-2"><p className="text-white/60">{k}</p><p className="mt-1 text-neon">{v}</p></div>)}</div><p className="mt-2 text-[11px] text-white/50">OncoBeam AI operator node • premium oncology command interface.</p></div></GlassCard>
  </div>;
};

import { motion } from 'framer-motion';
import { Activity, CircleDot, Radar, Cpu, ScanLine, Orbit, ShieldCheck, Gauge } from 'lucide-react';
import NeonCard from './NeonCard';
import GlassCard from './GlassCard';

const analysisFeed = [
  'Tissue scan complete',
  'AI confidence updated',
  'Beam alignment optimized',
  'Toxicity threshold stable',
  'Adaptive planning active',
];

const risks = [
  { label: 'Lung Exposure', value: 32, tone: 'text-success', ring: '#42ffb8' },
  { label: 'Heart Exposure', value: 18, tone: 'text-neon', ring: '#00d1ff' },
  { label: 'Skin Toxicity', value: 44, tone: 'text-purple', ring: '#7b61ff' },
  { label: 'Tissue Stability', value: 91, tone: 'text-success', ring: '#42ffb8' },
];

export default function AIAnalysisPanel() {
  return (
    <div className="space-y-3.5">
      <NeonCard className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 ai-scan-noise" />
        <div className="mb-3 flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neon/90">Oncology AI Lab</p>
            <h3 className="text-xl font-bold leading-tight">Holographic Tumor Intelligence Scanner</h3>
          </div>
          <div className="rounded-xl border border-neon/30 bg-neon/10 p-2 text-neon"><Radar className="h-4 w-4" /></div>
        </div>

        <div className="relative h-64 overflow-hidden rounded-2xl border border-neon/30 bg-gradient-to-br from-neon/10 via-bg/80 to-purple/20 p-3">
          <div className="absolute inset-0 scanner-grid opacity-40" />
          <div className="absolute inset-0 radar-sweep" />
          <div className="absolute left-0 top-0 h-1.5 w-full scanner-sweep bg-gradient-to-r from-transparent via-neon to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/60" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/30 animate-spin-slow" />
          <div className="absolute left-[24%] top-[38%] h-2.5 w-2.5 rounded-full bg-danger shadow-[0_0_14px_rgba(255,71,126,0.9)] tumor-ping" />
          <div className="absolute left-[62%] top-[56%] h-2 w-2 rounded-full bg-neon shadow-[0_0_12px_rgba(0,209,255,0.9)] tumor-ping" />
          <div className="absolute inset-0 floating-particles" />

          <div className="absolute bottom-3 left-3 space-y-1.5 rounded-xl border border-white/10 bg-bg/45 px-3 py-2 text-[11px] backdrop-blur-lg">
            {['Analyzing tissue density…', 'Beam optimization in progress…', 'Target acquisition stable…'].map((line) => (
              <p key={line} className="flex items-center gap-1.5 text-white/80">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />{line}
              </p>
            ))}
          </div>

          <div className="absolute right-3 top-3 rounded-xl border border-success/30 bg-success/10 px-2 py-1 text-[11px] text-success">
            Confidence: 98.9%
          </div>

          <div className="absolute right-3 bottom-3 space-y-1 rounded-xl border border-neon/20 bg-bg/50 px-2 py-1 text-[10px] text-neon/90">
            <p className="flex items-center gap-1"><ScanLine className="h-3 w-3" /> Scan Progress 86%</p>
            <p className="flex items-center gap-1"><Cpu className="h-3 w-3" /> Neural Sync 97%</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          <GlassCard>Beam Angle: <span className="text-neon">132°</span></GlassCard>
          <GlassCard>Toxicity Risk: <span className="text-danger">Low-Moderate</span></GlassCard>
        </div>
      </NeonCard>

      <GlassCard className="overflow-hidden">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-semibold">AI System Status</p>
          <span className="text-[10px] text-neon">Realtime</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            ['AI Core Stable', '99.2%', ShieldCheck],
            ['Oncology Engine', 'Active', Orbit],
            ['Beam Sync', 'Online', CircleDot],
            ['Latency', '23ms', Gauge],
          ].map(([label, value, Icon]) => (
            <motion.div key={label} whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2">
              <p className="flex items-center gap-1 text-white/60"><Icon className="h-3.5 w-3.5 text-neon" />{label}</p>
              <p className="mt-1 font-semibold text-neon">{value}</p>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      <div className="grid grid-cols-2 gap-2.5">
        {risks.map((risk) => (
          <GlassCard key={risk.label} className="relative overflow-hidden">
            <p className="mb-2 text-xs text-white/70">{risk.label}</p>
            <div className="flex items-center gap-2">
              <svg className="h-12 w-12 -rotate-90" viewBox="0 0 44 44">
                <circle cx="22" cy="22" r="18" stroke="rgba(255,255,255,0.18)" strokeWidth="4" fill="none" />
                <motion.circle
                  cx="22"
                  cy="22"
                  r="18"
                  stroke={risk.ring}
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: risk.value / 100 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </svg>
              <p className={`text-xl font-bold ${risk.tone}`}>{risk.value}%</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard>
        <p className="mb-2 font-semibold">AI Recommendation Engine</p>
        <div className="space-y-2 text-sm">
          {[
            'Suggested treatment: Adaptive IMRT with dose painting.',
            'Beam optimization: Shift gantry +4° to reduce heart spill.',
            'Fraction recommendation: 30 fractions • 2.0 Gy per session.',
            'Adaptive note: Re-scan after fraction 6 for response recalibration.',
          ].map((rec) => (
            <motion.div key={rec} whileHover={{ x: 3 }} className="rounded-xl border border-neon/20 bg-neon/5 px-3 py-2 text-white/85">
              {rec}
            </motion.div>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <div className="mb-2 flex items-center justify-between">
          <p className="font-semibold">Realtime AI Analysis Feed</p>
          <Activity className="h-4 w-4 text-neon" />
        </div>
        <div className="max-h-28 space-y-1.5 overflow-hidden text-xs">
          <motion.div
            animate={{ y: ['0%', '-50%'] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            className="space-y-1.5"
          >
            {[...analysisFeed, ...analysisFeed].map((event, idx) => (
              <p key={`${event}-${idx}`} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
                {event}
              </p>
            ))}
          </motion.div>
        </div>
      </GlassCard>
    </div>
  );
}

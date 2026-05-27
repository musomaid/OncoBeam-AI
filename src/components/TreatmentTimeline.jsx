import { BadgeCheck, Clock3, AlertTriangle, UserCheck, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

const workflow = [
  { time: '07:40', title: 'CT simulation validated', state: 'completed', priority: 'high', ai: 'Verified 99.1%', operator: 'Dr. Morgan confirmed', sync: 'Synced' },
  { time: '08:05', title: 'Contouring update applied', state: 'completed', priority: 'med', ai: 'Auto-seg v4.2', operator: 'Team approved', sync: 'Synced' },
  { time: '08:22', title: 'Dose recalculation + OAR review', state: 'active', priority: 'high', ai: 'Optimization running', operator: 'Physics review live', sync: 'Realtime' },
  { time: '08:41', title: 'Beam arc alignment check', state: 'warning', priority: 'high', ai: 'Minor offset detected', operator: 'Operator intervention', sync: 'Delayed 140ms' },
  { time: '09:00', title: 'Fraction delivery session', state: 'pending', priority: 'med', ai: 'Queued', operator: 'Awaiting patient setup', sync: 'Standby' },
  { time: '09:15', title: 'Adaptive fraction recommendation', state: 'delayed', priority: 'low', ai: 'Awaiting toxicity model', operator: 'Escalated to AI board', sync: 'Delayed' },
];

const stateStyles = {
  completed: 'bg-success text-success',
  active: 'bg-neon text-neon',
  pending: 'bg-white/60 text-white/80',
  warning: 'bg-amber-300 text-amber-300',
  delayed: 'bg-danger text-danger',
};

export default function TreatmentTimeline() {
  return (
    <div className="relative space-y-2">
      <div className="absolute bottom-4 left-[1.1rem] top-4 w-px bg-gradient-to-b from-neon/10 via-neon/80 to-transparent" />
      {workflow.map((item, i) => {
        const isActive = item.state === 'active';
        return (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent light-sweep" />
            <div className="relative flex gap-3">
              <div className="mt-1 flex flex-col items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${stateStyles[item.state]} ${isActive ? 'animate-pulse shadow-[0_0_14px_rgba(0,209,255,0.95)]' : ''}`} />
                {i < workflow.length - 1 && <span className="h-8 w-px bg-gradient-to-b from-neon/60 to-transparent" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs text-white/50">{item.time}</p>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] ${item.priority === 'high' ? 'bg-danger/15 text-danger' : item.priority === 'med' ? 'bg-neon/15 text-neon' : 'bg-white/10 text-white/70'}`}>{item.priority.toUpperCase()}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium">{item.title}</p>
                <div className="mt-2 grid grid-cols-2 gap-1 text-[10px] text-white/70">
                  <p className="inline-flex items-center gap-1"><BadgeCheck className="h-3 w-3 text-neon" />{item.ai}</p>
                  <p className="inline-flex items-center gap-1"><UserCheck className="h-3 w-3 text-success" />{item.operator}</p>
                  <p className="inline-flex items-center gap-1"><Waves className="h-3 w-3 text-purple" />{item.sync}</p>
                  <p className="inline-flex items-center gap-1 capitalize"><Clock3 className="h-3 w-3 text-white/60" />{item.state}</p>
                </div>
              </div>
            </div>
            {item.state === 'warning' && <AlertTriangle className="absolute right-3 top-3 h-3.5 w-3.5 text-amber-300" />}
          </motion.div>
        );
      })}
    </div>
  );
}

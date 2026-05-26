import GlassCard from './GlassCard';

export default function AnalyticsChartCard({ title, values }) {
  return <GlassCard><p className="mb-3 text-sm font-semibold">{title}</p><div className="flex h-28 items-end gap-1.5">{values.map((v, i) => <div key={i} className="w-full rounded-t-xl bg-gradient-to-t from-purple to-neon" style={{ height: `${v}%` }} />)}</div></GlassCard>;
}

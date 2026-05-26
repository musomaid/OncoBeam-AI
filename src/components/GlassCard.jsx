export default function GlassCard({ children, className = '' }) {
  return <section className={`rounded-3xl border border-white/10 bg-card/70 p-4 backdrop-blur-xl ${className}`}>{children}</section>;
}

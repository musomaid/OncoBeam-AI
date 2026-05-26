export default function GlassCard({ children, className = '' }) {
  return <div className={`glass rounded-2xl p-4 ${className}`}>{children}</div>;
}

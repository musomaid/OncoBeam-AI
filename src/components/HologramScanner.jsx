export default function HologramScanner() {
  return <div className="relative h-48 overflow-hidden rounded-3xl border border-neon/30 bg-gradient-to-br from-neon/10 to-purple/15"><div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,209,255,0.35)_1px,transparent_1px)] bg-[length:16px_16px] opacity-50" /><div className="absolute left-0 top-0 h-1 w-full animate-[scan_2.6s_linear_infinite] bg-neon/80 shadow-neon" /><div className="absolute inset-0 border border-white/10" /><p className="absolute bottom-3 right-3 text-xs text-success">Tumor confidence 98.6%</p></div>;
}

import NeonCard from './NeonCard';

export default function AIAnalysisPanel() {
  return (
    <NeonCard>
      <h3 className="mb-2 text-lg font-semibold">AI Tumor Detection Scan</h3>
      <div className="relative h-48 rounded-xl border border-neon/30 bg-gradient-to-br from-neon/10 to-purple/10 p-3">
        <div className="absolute inset-0 animate-pulse rounded-xl border border-neon/20" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neon/60" />
        <div className="absolute top-1/2 w-full -translate-y-1/2 border-t border-neon/60" />
        <p className="absolute bottom-3 right-3 text-xs text-success">Confidence: 98.9%</p>
      </div>
    </NeonCard>
  );
}

export default function TelemetryChart() {
  const bars = [50, 67, 58, 88, 72, 91, 76];
  return (
    <div className="flex h-28 items-end gap-2">
      {bars.map((h, i) => (
        <div key={i} className="w-full rounded-t bg-gradient-to-t from-purple to-neon/90" style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

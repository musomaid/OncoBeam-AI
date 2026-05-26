export default function AIStatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-1 text-xs text-success">
      <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
      AI Core Online • 23ms
    </div>
  );
}

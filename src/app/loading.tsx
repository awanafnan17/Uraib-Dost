export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-black">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border border-brand-gold border-t-transparent rounded-full animate-spin" />
        <p className="text-xs tracking-[0.3em] uppercase text-brand-muted">Loading</p>
      </div>
    </div>
  );
}

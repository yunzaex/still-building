export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-8 py-12 text-sm text-[var(--brown-light)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <p>© YOONJAE ARCHIVE — STILL BUILDING</p>

        <div className="flex gap-6">
          <span>About this site</span>
          <span>Email</span>
          <span>GitHub</span>
        </div>

        <div className="flex gap-6 uppercase tracking-widest opacity-50">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Archive Map</span>
        </div>
      </div>
    </footer>
  );
}

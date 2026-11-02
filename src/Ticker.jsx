const ITEMS = [
  "Brand strategy with a clear purpose",
  "Thoughtful product design",
  "Support from idea to launch",
];

export default function Ticker({ items = ITEMS }) {
  return (
    <div
      className="overflow-hidden bg-slate-900 py-3 text-white"
      role="region"
      aria-label="Announcements"
    >
      {/* The list is rendered twice so the loop has no gap */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1}
          >
            {items.map((item) => (
              <li key={item} className="flex items-center whitespace-nowrap">
                <span className="px-8 text-sm font-medium">{item}</span>
                <span className="size-1.5 rounded-full bg-amber-300" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

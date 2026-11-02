import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal.jsx";

const STATS = [{ value: 3, label: "Core services" }];

function CountUp({ to, decimals = 0, duration = 1500 }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce || !("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setN(to));
      return () => cancelAnimationFrame(frame);
    }

    let raf;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setN(to * (1 - Math.pow(1 - p, 3))); // ease out
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {n.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}

export default function Stats({ stats = STATS }) {
  return (
    <section className="bg-white">
      <Reveal className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <dl
          className={`grid gap-8 ${
            stats.length === 1
              ? "mx-auto max-w-xs grid-cols-1 text-center"
              : "grid-cols-2 md:grid-cols-4"
          }`}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm text-slate-500">{s.label}</dt>
              <dd className="text-4xl font-bold tracking-tight text-slate-900">
                <CountUp to={s.value} decimals={s.decimals} />
                {s.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

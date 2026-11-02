import Reveal from "./Reveal.jsx";

export default function Hero({
  title = "Build something people remember",
  text = "Strategy, design, and launch support to turn your next big idea into meaningful momentum.",
  primary = { label: "Get started", href: "#contact" },
  secondary = { label: "See our work", href: "#services" },
}) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.9),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(253,186,116,0.8),_transparent_24%),linear-gradient(135deg,#e0f2fe_0%,#eef2ff_30%,#fdf2f8_52%,#fff7ed_100%)]"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/30 to-transparent" />
      <div className="absolute -left-12 top-12 h-52 w-52 rounded-full bg-blue-300/70 blur-3xl" />
      <div className="absolute right-0 top-20 h-60 w-60 rounded-full bg-violet-300/60 blur-3xl" />
      <div className="absolute -bottom-8 left-1/3 h-52 w-52 rounded-full bg-amber-200/80 blur-3xl" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-8 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-20">
        <div>
          <Reveal>
            <h1 className="mb-4 text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-7 max-w-[46ch] text-lg leading-relaxed text-slate-500">
              {text}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap gap-3">
              <a
                href={primary.href}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                {primary.label}
              </a>
              <a
                href={secondary.href}
                className="rounded-xl border border-slate-300 bg-white/50 px-6 py-3 font-semibold text-slate-900 backdrop-blur-sm transition hover:bg-white"
              >
                {secondary.label}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div
            aria-hidden="true"
            className="relative min-h-[260px] md:min-h-[360px]"
          >
            <span className="absolute bottom-[12%] left-[5%] right-[12%] top-[8%] rounded-[38%_62%_47%_53%/44%_35%_65%_56%] bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 shadow-[0_30px_60px_rgba(37,99,235,0.28)]" />
            <span className="absolute bottom-[-2%] left-[24%] right-0 top-[28%] rounded-[40%_60%_57%_43%/50%_48%_52%_50%] bg-slate-900 shadow-[0_28px_50px_rgba(15,23,42,0.25)]" />
            <span className="absolute right-[10%] top-[8%] h-[92px] w-[92px] rounded-full bg-gradient-to-br from-orange-300 to-orange-500 shadow-[0_18px_35px_rgba(249,115,22,0.3)]" />
            <span className="absolute left-[18%] top-[16%] rounded-full border border-white/60 bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700 backdrop-blur-sm">
              Launch
            </span>
            <span className="absolute bottom-[17%] right-[20%] rounded-2xl border border-slate-200 bg-white/75 px-3 py-2 text-sm font-medium text-slate-700 shadow-lg shadow-slate-200/80 backdrop-blur-sm">
              +42% growth
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

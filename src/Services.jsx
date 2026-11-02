import Reveal from "./Reveal.jsx";

const SERVICES = [
  {
    title: "Brand strategy",
    text: "Clarify your message, audience, and positioning so your next launch feels focused and memorable.",
    href: "#contact",
    cta: "Discuss your strategy",
  },
  {
    title: "Product design",
    text: "Turn ideas into product experiences that feel simple, premium, and easy to use from day one.",
    href: "#contact",
    cta: "Discuss product design",
  },
  {
    title: "Launch support",
    text: "Plan and ship campaigns, assets, and landing pages that convert visitors into customers.",
    href: "#contact",
    cta: "Plan a launch",
  },
];

export default function Services({
  title = "Built for what matters most.",
  intro = "From brand strategy to launch support, we help move your next idea forward.",
  services = SERVICES,
}) {
  return (
    <section id="services" className="scroll-mt-16 bg-slate-50">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-20">
        <Reveal>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
          <p className="mb-10 max-w-[52ch] leading-relaxed text-slate-500">
            {intro}
          </p>
        </Reveal>

        <ul className="grid gap-x-10 gap-y-8 md:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal
                delay={i * 120}
                className="h-full border-t-2 border-slate-900 pt-5"
              >
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mb-4 leading-relaxed text-slate-500">{s.text}</p>
                <a
                  href={s.href}
                  className="font-semibold text-blue-600 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {s.cta}
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Reveal from "./Reveal.jsx";

const VALUES = [
  {
    title: "Clear strategy",
    text: "Clarify your message, audience, and positioning before the next launch.",
  },
  {
    title: "Thoughtful design",
    text: "Turn ideas into product experiences that feel simple and easy to use.",
  },
  {
    title: "Launch support",
    text: "Plan campaigns, assets, and landing pages around your goals.",
  },
];

export default function About({
  title = "We help teams turn ideas into momentum.",
  paragraphs = [
    "From early strategy to polished launch execution, we make sure every step feels focused, clear, and built around the people you want to reach.",
  ],
  values = VALUES,
}) {
  return (
    <section id="about" className="scroll-mt-16 bg-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-2 md:gap-16 md:py-20">
        <Reveal>
          <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
          {paragraphs.map((p) => (
            <p
              key={p}
              className="mb-4 max-w-[52ch] leading-relaxed text-slate-500"
            >
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={150}>
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {values.map((v) => (
              <li key={v.title} className="py-5">
                <h3 className="mb-1 font-semibold text-slate-900">{v.title}</h3>
                <p className="leading-relaxed text-slate-500">{v.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

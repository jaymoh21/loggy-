import Reveal from "./Reveal.jsx";

export default function Cta({
  id = "contact",
  title = "Ready to build your next move?",
  text = "Tell us what you’re working on and start a conversation.",
  primary = { label: "Email us", href: "mailto:jaymoh21st@gmail.com" },
  secondary = { label: "Explore services", href: "#services" },
}) {
  return (
    <section id={id} className="bg-slate-900">
      <Reveal className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="max-w-[46ch] leading-relaxed text-slate-300">{text}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={primary.href}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {primary.label}
          </a>
          <a
            href={secondary.href}
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {secondary.label}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

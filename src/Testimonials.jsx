import Reveal from "./Reveal.jsx";

const TESTIMONIALS = [
  {
    quote:
      "We came in with a rough direction. The strategy helped us clarify what to say, who we were speaking to, and what to do next.",
    name: "Sample client",
    role: "Illustrative example · Brand strategy",
  },
  {
    quote:
      "They took a complicated idea and shaped it into a product that feels clear from the first click. The whole process felt thoughtful and collaborative.",
    name: "Sample client",
    role: "Illustrative example · Product design",
  },
  {
    quote:
      "Our launch ideas were all over the place. The plan brought them together into one clear story we could confidently share.",
    name: "Sample client",
    role: "Illustrative example · Launch support",
  },
];

export default function Testimonials({
  title = "Sample client testimonials",
  items = TESTIMONIALS,
}) {
  return (
    <section id="testimonials" className="bg-white scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-20">
        <Reveal>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
        </Reveal>

        {items.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-3">
            {items.map((t, i) => (
              <Reveal key={t.quote} delay={i * 120}>
                <figure className="h-full border-l-4 border-blue-600 pl-5">
                  <blockquote className="mb-4 leading-relaxed text-slate-900">
                    “{t.quote}”
                  </blockquote>
                  <figcaption>
                    <span className="block font-semibold text-slate-900">
                      {t.name}
                    </span>
                    <span className="text-sm text-slate-500">{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={120}>
            <p className="text-slate-500">
              Have a project in mind? Get in touch to start a conversation.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

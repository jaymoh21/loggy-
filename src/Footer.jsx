import Reveal from "./Reveal.jsx";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer({
  brand = "YourBrand",
  blurb = "We help teams turn ideas into focused, memorable launches.",
  links = LINKS,
  email = "jaymoh21st@gmail.com",
  phone = "",
  whatsapp = "0713962759",
}) {
  const whatsappDigits = whatsapp.replace(/\D/g, "").replace(/^0/, "254");

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <Reveal>
          <div>
            <a href="#home" className="text-xl font-bold text-white">
              {brand}
            </a>
            <p className="mt-3 max-w-[36ch] leading-relaxed text-slate-300">
              {blurb}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <nav aria-label="Footer">
            <h2 className="mb-3 font-semibold text-white">Pages</h2>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-300 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        <Reveal delay={240}>
          <div>
            <h2 className="mb-3 font-semibold text-white">Contact</h2>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href={`mailto:${email}`} className="hover:text-white">
                  {email}
                </a>
              </li>
              {phone && (
                <li>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-white"
                  >
                    {phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </Reveal>
      </div>

      <div>
        <Reveal delay={120}>
          <p className="mx-auto max-w-5xl px-5 py-5 text-sm text-slate-300">
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </p>
        </Reveal>
      </div>
      {whatsappDigits && (
        <a
          href={`https://wa.me/${whatsappDigits}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with us on WhatsApp at ${whatsapp}`}
          title={`Chat with us on WhatsApp at ${whatsapp}`}
          className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
          >
            <path d="M12.04 2a9.9 9.9 0 0 0-8.46 15.03L2.28 22l5.1-1.34A9.9 9.9 0 1 0 12.04 2Zm0 18.02a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.03.8.81-2.95-.19-.31a8.12 8.12 0 1 1 6.84 3.77Zm4.45-6.08c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.48.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.11 3.64.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        </a>
      )}
    </footer>
  );
}

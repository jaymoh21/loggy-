import { useState, useEffect } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ brand = "YourBrand", links = LINKS }) {
  const [open, setOpen] = useState(false); 

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white"> 
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5"
      >
        <a href="#home" className="text-xl font-bold text-slate-900"> 
          {brand}
        </a>

        <button
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg border border-slate-200 px-3.5 py-2 font-semibold text-slate-900 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul
          id="nav-menu"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-16 flex-col border-b border-slate-200 bg-white px-5 pb-5 pt-2 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:p-0`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-slate-200 py-3.5 font-medium text-slate-500 hover:text-slate-900 md:border-0 md:py-0"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-lg bg-blue-600 px-4 py-2.5 text-center font-semibold text-white hover:bg-blue-700 md:mt-0"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { STUDIO } from "@/lib/studio";
import logoMark from "@/assets/studio-pj-logo-mark.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Diensten" },
  { to: "/about", label: "Ons verhaal" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/60">
      {/* Announcement bar */}
      <div className="bg-foreground text-background text-xs tracking-[0.18em] uppercase py-1.5 text-center">
        <span className="hidden sm:inline">★ 4,9 op Google · 503 reviews op Treatwell · </span>
        Boek 24/7 online →
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between py-2.5 md:py-3">
        {/* Left: phone */}
        <div className="flex-1 flex items-center gap-3">
          <a
            href={STUDIO.phoneHref}
            aria-label="Bel Studio PJ"
            className="hidden md:inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-muted transition-colors"
          >
            <Phone className="h-4 w-4" strokeWidth={1.4} />
          </a>
          <button
            aria-label="Menu"
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-muted transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.4} /> : <Menu className="h-5 w-5" strokeWidth={1.4} />}
          </button>
        </div>

        {/* Center: logo */}
        <Link
          to="/"
          aria-label="Studio PJ — home"
          className="flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <img
            src={logoMark}
            alt="Studio PJ — Hair Design & Grooming"
            className="h-10 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Right: book */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <a
            href={STUDIO.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center h-9 text-xs uppercase tracking-[0.2em] border border-foreground px-4 hover:bg-foreground hover:text-background transition-colors"
          >
            Boek
          </a>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center justify-center gap-10 pb-3 text-[13px] uppercase tracking-[0.18em]">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            className="story-link text-foreground/80 hover:text-foreground transition-colors"
            activeProps={{ className: "story-link text-foreground" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-border/60 bg-background animate-fade-in">
          <ul className="flex flex-col py-3">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 font-serif text-2xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-6 pt-3 pb-5 flex flex-col gap-3">
              <a
                href={STUDIO.bookingUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="inline-block text-xs uppercase tracking-[0.2em] border border-foreground px-5 py-3 text-center"
              >
                Boek je stoel
              </a>
              <a
                href={STUDIO.phoneHref}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] px-5 py-3"
              >
                <Phone className="h-4 w-4" strokeWidth={1.4} /> {STUDIO.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

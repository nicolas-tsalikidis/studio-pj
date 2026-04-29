import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { STUDIO } from "@/lib/studio";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-serif text-3xl">Studio pj</div>
          <p className="mt-4 text-sm leading-relaxed text-background/70">
            Hair Design &amp; Grooming in het hart van Gent. Precision cuts, modern grooming —
            werken met Schwarzkopf Professional.
          </p>
          <a
            href={STUDIO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-background/85"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.4} />
            <span className="story-link">{STUDIO.instagramHandle}</span>
          </a>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-background/60">Bezoek</h3>
          <address className="not-italic mt-4 text-sm leading-relaxed text-background/85 flex gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" strokeWidth={1.4} />
            <span>
              {STUDIO.address.street}<br />
              {STUDIO.address.zip} {STUDIO.address.city}, {STUDIO.address.country}
            </span>
          </address>
          <a href={STUDIO.phoneHref} className="mt-4 inline-flex items-center gap-2 text-sm text-background/85">
            <Phone className="h-4 w-4" strokeWidth={1.4} />
            <span className="story-link">{STUDIO.phone}</span>
          </a>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-background/60">Openingsuren</h3>
          <ul className="mt-4 text-sm leading-relaxed text-background/85 space-y-1">
            {STUDIO.hours.map((h) => (
              <li key={h.day} className={`flex justify-between gap-6 ${h.closed ? "text-background/50" : ""}`}>
                <span>{h.day}</span><span>{h.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-background/60">Nieuwsbrief</h3>
          <p className="mt-4 text-sm text-background/70">
            Drops, openingsuren tijdens feestdagen en occasionele verhalen.
          </p>
          {subscribed ? (
            <p className="mt-4 text-sm font-serif italic text-background">Bedankt — tot binnenkort.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex border-b border-background/40">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="je@email.com"
                className="flex-1 bg-transparent py-2 text-sm placeholder:text-background/40 outline-none"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-[0.2em] py-2 pl-3 hover:text-background/70 transition-colors"
              >
                →
              </button>
            </form>
          )}
          <a
            href={STUDIO.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-xs uppercase tracking-[0.2em] border border-background/60 px-5 py-3 hover:bg-background hover:text-foreground transition-colors"
          >
            Boek via Treatwell
          </a>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row md:justify-between gap-3 text-xs text-background/55">
          <span>© {new Date().getFullYear()} Studio pj. Alle rechten voorbehouden.</span>
          <div className="flex gap-6">
            <Link to="/contact" className="story-link">Contact</Link>
            <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="story-link">Instagram</a>
            <a href={STUDIO.treatwellUrl} target="_blank" rel="noreferrer" className="story-link">Treatwell</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

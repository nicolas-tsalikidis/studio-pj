import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { STUDIO } from "@/lib/studio";
import salon4 from "@/assets/studio/salon-4.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Boek — Studio PJ Gent" },
      { name: "description", content: `Boek je stoel bij Studio PJ. ${STUDIO.address.street}, ${STUDIO.address.zip} ${STUDIO.address.city}. Telefoon ${STUDIO.phone}.` },
      { property: "og:title", content: "Contact & Boek — Studio PJ" },
      { property: "og:description", content: `Studio PJ, ${STUDIO.address.street}, ${STUDIO.address.zip} ${STUDIO.address.city}.` },
      { property: "og:image", content: salon4 },
      { name: "twitter:image", content: salon4 },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", service: "Mannen — Basis", date: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-16 md:pt-24 pb-8 text-center reveal">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Get in touch</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">
          Boek je stoel.
        </h1>
        <p className="mt-6 text-base md:text-lg text-foreground/70">
          De snelste weg: <strong>boek direct online</strong> via Treatwell.
          Liever bellen of een vraag stellen? Gebruik gerust het formulier hieronder.
        </p>
        <a
          href={STUDIO.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block text-[11px] uppercase tracking-[0.3em] bg-foreground text-background px-8 py-4 hover:bg-foreground/85 transition-colors"
        >
          Boek 24/7 via Treatwell
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-10 pb-20 md:pb-28 grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 mt-12">
        {/* Info */}
        <div className="reveal space-y-10">
          <div>
            <h2 className="font-serif text-2xl mb-4">Bezoek ons</h2>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" strokeWidth={1.4} />
                <address className="not-italic leading-relaxed">
                  {STUDIO.address.street}<br />
                  {STUDIO.address.zip} {STUDIO.address.city}, {STUDIO.address.country}
                </address>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 shrink-0" strokeWidth={1.4} />
                <a href={STUDIO.phoneHref} className="story-link">{STUDIO.phone}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 shrink-0" strokeWidth={1.4} />
                <a href={`mailto:${STUDIO.email}`} className="story-link">{STUDIO.email}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Instagram className="h-5 w-5 shrink-0" strokeWidth={1.4} />
                <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="story-link">
                  {STUDIO.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-4">Openingsuren</h2>
            <ul className="text-foreground/80 space-y-1.5 text-sm">
              {STUDIO.hours.map((h) => (
                <li key={h.day} className={`flex justify-between ${h.closed ? "text-foreground/45" : ""}`}>
                  <span>{h.day}</span><span>{h.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <iframe
              title="Locatie Studio PJ — François Laurentplein 3, Gent"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.7240%2C51.0490%2C3.7300%2C51.0520&layer=mapnik&marker=51.0506%2C3.7270"
              className="w-full h-full border-0 grayscale contrast-[1.05]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Form */}
        <div className="reveal">
          {sent ? (
            <div className="bg-foreground text-background p-10 md:p-14 text-center">
              <h2 className="font-serif text-3xl md:text-4xl">Dank je wel.</h2>
              <p className="mt-4 text-background/80">
                We hebben je aanvraag goed ontvangen en bevestigen binnen 24 uur.
                Voor een gegarandeerde slot raden we aan om ook online te boeken.
              </p>
              <a
                href={STUDIO.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-[11px] uppercase tracking-[0.3em] bg-background text-foreground px-7 py-3.5"
              >
                Boek nu via Treatwell
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-secondary p-8 md:p-12 space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl">Aanvraag of vraag</h2>
              <p className="text-sm text-foreground/65 -mt-3">
                Voor een directe afspraak kies je sneller via Treatwell hierboven.
              </p>

              <Field label="Naam">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/40 py-2 outline-none focus:border-foreground transition-colors"
                />
              </Field>

              <Field label="E-mail">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/40 py-2 outline-none focus:border-foreground transition-colors"
                />
              </Field>

              <Field label="Dienst">
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/40 py-2 outline-none focus:border-foreground transition-colors"
                >
                  <option>Mannen — Student (€32)</option>
                  <option>Mannen — Basis (€37)</option>
                  <option>Mannen — Knip + baard (€47)</option>
                  <option>Baard line up (€15)</option>
                  <option>Vrouwen — Wassen, snit & brushing (vanaf €55)</option>
                  <option>Kleur of Highlights (vanaf €65)</option>
                  <option>Kinderen (€27)</option>
                  <option>Iets anders</option>
                </select>
              </Field>

              <Field label="Voorkeursdatum">
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/40 py-2 outline-none focus:border-foreground transition-colors"
                />
              </Field>

              <Field label="Bericht (optioneel)">
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/40 py-2 outline-none focus:border-foreground transition-colors resize-none"
                />
              </Field>

              <button
                type="submit"
                className="mt-2 w-full bg-foreground text-background text-xs uppercase tracking-[0.3em] py-4 hover:bg-foreground/85 transition-colors"
              >
                Verstuur aanvraag
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

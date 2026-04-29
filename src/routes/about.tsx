import { createFileRoute } from "@tanstack/react-router";
import { Marquee } from "@/components/Marquee";
import { STUDIO } from "@/lib/studio";
import salon1 from "@/assets/studio/salon-1.jpg";
import salon2 from "@/assets/studio/salon-2.jpg";
import salon3 from "@/assets/studio/salon-3.jpg";
import salon4 from "@/assets/studio/salon-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Ons verhaal — Studio PJ" },
      { name: "description", content: "Studio PJ is een hair design & grooming atelier in Gent, gerund door PJ en zijn team. Werkt met Schwarzkopf Professional. 4,9★ op Google." },
      { property: "og:title", content: "Ons verhaal — Studio PJ" },
      { property: "og:description", content: "Een atelier voor hair design & grooming aan het François Laurentplein in Gent." },
      { property: "og:image", content: salon2 },
      { name: "twitter:image", content: salon2 },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Ons verhaal</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">
            Een atelier voor hair design &amp; grooming.
          </h1>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-foreground/75">
            Studio PJ ligt aan het François Laurentplein, op een steenworp van Gent-Zuid.
            Wat begon met PJ achter één stoel, groeide uit tot een herkenningspunt voor
            wie kwaliteit boven snelheid verkiest. Vandaag werken er vier hairdressers
            en barbers — elk met een eigen handtekening.
          </p>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/75">
            We werken met <strong>{STUDIO.brand}</strong>, draaien rustige muziek
            en nemen voor elke knip de tijd die ze verdient. Op afspraak,
            maar walk-ins zijn welkom wanneer er een stoel vrij is.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div>
              <p className="font-serif text-3xl">★ {STUDIO.rating.value}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-foreground/55">{STUDIO.rating.count} Google reviews</p>
            </div>
            <div>
              <p className="font-serif text-3xl">★ {STUDIO.treatwellRating.value}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-foreground/55">{STUDIO.treatwellRating.count} Treatwell reviews</p>
            </div>
            <div>
              <p className="font-serif text-3xl">10K+</p>
              <p className="text-xs uppercase tracking-[0.18em] text-foreground/55">Volgers op Instagram</p>
            </div>
          </div>
        </div>
        <div className="reveal aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={salon2}
            alt="Interieur van Studio PJ — meerdere stoelen, planten en zachte verlichting"
            width={1080}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <Marquee text={<>{`${STUDIO.address.street} · ${STUDIO.address.city} `}<b><i>BE</i></b>{` · Schwarzkopf Professional`}</>} />

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 reveal">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Het team</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Ontmoet de stylisten</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STUDIO.team.map((p) => (
            <div key={p.name} className="text-center">
              <div className="aspect-square rounded-full bg-secondary flex items-center justify-center font-serif text-5xl">
                {p.name.charAt(0)}
              </div>
              <p className="mt-5 font-serif text-2xl">{p.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-foreground/55 mt-1">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 md:pb-28 text-center reveal">
        <h2 className="font-serif text-4xl md:text-5xl">Onze filosofie</h2>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/75">
          Een knip is meer dan een dienst — het is een ritueel. Een moment van rust
          in een lawaaierige week. Een gesprek met je barbier. Een lijn die net iets
          scherper getrokken werd dan vorige keer.
        </p>
        <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/75">
          Atmosfeer: relaxing, chill en open minded. Iedereen welkom.
        </p>
      </section>

      {/* Two-up tiles */}
      <section className="grid md:grid-cols-2">
        <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
          <img src={salon3} alt="Barbierstoel met Schwarzkopf Professional" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
          <img src={salon4} alt="Voorgevel van Studio PJ aan het François Laurentplein" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="grid md:grid-cols-2 items-stretch">
        <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
          <img src={salon1} alt="Klant na een knip" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="bg-foreground text-background flex flex-col justify-center p-10 md:p-16 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-background/60">Maak een afspraak</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Klaar voor je volgende knip?</h2>
          <p className="mt-5 text-background/75 max-w-md">
            Boek 24/7 online via Treatwell, of bel ons op {STUDIO.phone}.
            Walk-ins zijn welkom wanneer er een stoel vrij is.
          </p>
          <a
            href={STUDIO.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 self-start text-[11px] uppercase tracking-[0.3em] bg-background text-foreground px-7 py-3.5 hover:bg-background/85 transition-colors"
          >
            Boek je stoel
          </a>
        </div>
      </section>
    </>
  );
}

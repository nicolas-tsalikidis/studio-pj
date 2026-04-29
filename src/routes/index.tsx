import { createFileRoute, Link } from "@tanstack/react-router";
import { StudioLogo } from "@/components/StudioLogo";
import { Marquee } from "@/components/Marquee";
import { InstagramFeed } from "@/components/InstagramFeed";
import { STUDIO } from "@/lib/studio";

import salon1 from "@/assets/studio/salon-1.jpg";
import salon2 from "@/assets/studio/salon-2.jpg";
import salon3 from "@/assets/studio/salon-3.jpg";
import salon4 from "@/assets/studio/salon-4.jpg";
import heroSalon from "@/assets/studio/hero-salon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio PJ — Hair Design & Grooming in Gent" },
      { name: "description", content: "Studio PJ in Gent: precision cuts, modern grooming en kleurwerk met Schwarzkopf. 4,9★ op Google. Boek je stoel via Treatwell." },
      { property: "og:title", content: "Studio PJ — Hair Design & Grooming in Gent" },
      { property: "og:description", content: "Precision cuts, modern grooming en kleur — Studio PJ aan het François Laurentplein in Gent." },
      { property: "og:image", content: salon1 },
      { name: "twitter:image", content: salon1 },
    ],
  }),
  component: HomePage,
});

const FEATURED = [
  { title: "Mannen — Student", price: "€32", duration: "30 min" },
  { title: "Vrouwen — Wassen, snit & brushing", price: "vanaf €55", duration: "50 min" },
  { title: "Baard line up", price: "€15", duration: "10 min" },
  { title: "Vrouwen — Highlights & Balayage", price: "vanaf €75", duration: "vanaf 90 min" },
];

function HomePage() {
  return (
    <>
      {/* ============ HERO — fullscreen salon + animated logo ============ */}
      <section className="relative h-[68vh] md:h-[72vh] w-full overflow-hidden">
        <img
          src={heroSalon}
          alt="Interieur van Studio PJ in Gent met Schwarzkopf-stoel en planten"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/45" />
        <div className="absolute inset-0 flex items-center justify-center p-10 md:p-16">
          <div className="w-full max-w-md md:max-w-lg aspect-square">
            <StudioLogo variant="light" />
          </div>
        </div>
        <span className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.3em] text-background/85 z-10">
          Studio pj · {STUDIO.tagline}
        </span>
      </section>

      {/* ============ Marquee ============ */}
      <Marquee text={<>{`★ ${STUDIO.rating.value} op Google · ${STUDIO.rating.count} reviews · ${STUDIO.brand} · Gent\u00A0`}<b><i>BE</i></b></>} />

      {/* ============ Intro split — text left, video + THE CUT right ============ */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">
        {/* Left — intro text */}
        <div className="flex items-center px-6 md:px-14 lg:px-20 py-16 md:py-24 reveal">
          <div className="max-w-md">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Hair design met karakter.</h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/75">
              Bij Studio PJ nemen we de tijd. Elke knip is een gesprek, elk detail is bewust.
              PJ en zijn team werken aan het François Laurentplein in Gent — met respect voor
              het haar, het hoofd en de persoon die in onze stoel plaatsneemt.
            </p>
          </div>
        </div>

        {/* Right — looping video tile with THE CUT */}
        <div className="relative min-h-[60vh] md:min-h-full overflow-hidden">
          <video
            src="/media/ph-hero.mp4"
            poster={salon1}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/15 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 text-background">
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-none">THE&nbsp;CUT</h1>
            <p className="mt-3 max-w-sm text-sm md:text-base font-serif italic text-background/90">
              Precision cuts &amp; modern grooming — voor elk karakter, in elk seizoen.
            </p>
            <a
              href={STUDIO.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 self-start text-[11px] uppercase tracking-[0.3em] bg-background text-foreground px-7 py-3.5 hover:bg-background/85 transition-colors"
            >
              Boek nu via Treatwell
            </a>
          </div>
        </div>
      </section>

      {/* ============ Featured services ============ */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="text-center mb-10 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Populair</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Onze klassiekers</h2>
        </div>
        <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((s, i) => (
            <article
              key={s.title}
              className="reveal group border border-border/70 bg-background p-6 md:p-8 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/50">{s.duration}</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight">{s.title}</h3>
              <p className="mt-4 font-serif text-3xl">{s.price}</p>
              <a
                href={STUDIO.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block w-full text-center text-[11px] uppercase tracking-[0.22em] border border-foreground py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                Boek
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-block text-xs uppercase tracking-[0.3em] story-link"
          >
            Bekijk de volledige prijslijst →
          </Link>
        </div>
      </section>

      <Marquee text="Precision cuts · Beard sculpts · Color & balayage · Schwarzkopf Professional" reverse />

      {/* ============ Editorial banner — real shop interior ============ */}
      <section className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <img
          src={salon2}
          alt="Interieur van Studio PJ in Gent met meerdere stoelen en planten"
          loading="lazy"
          width={1080}
          height={720}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/45" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-background text-center px-6 reveal">
          <p className="font-serif text-3xl md:text-5xl max-w-3xl leading-tight">
            "A unique hair style is accompanied by a unique hairdresser."
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-background/75">— PJ</p>
          <Link
            to="/services"
            className="mt-8 text-[11px] uppercase tracking-[0.3em] border border-background/80 px-7 py-3.5 hover:bg-background hover:text-foreground transition-colors"
          >
            Ontdek de diensten
          </Link>
        </div>
      </section>

      {/* ============ Triptych — real photos ============ */}
      <section className="grid md:grid-cols-3">
        {[
          { label: "STUDIO", img: salon3, to: "/about" as const },
          { label: "FRONT", img: salon4, to: "/contact" as const },
          { label: "WORK", img: salon1, to: "/journal" as const },
        ].map((tile) => (
          <Link
            key={tile.label}
            to={tile.to}
            className="relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden group"
          >
            <img
              src={tile.img}
              alt={tile.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/35 group-hover:bg-foreground/50 transition-colors" />
            <span className="relative z-10 flex h-full items-center justify-center font-serif text-5xl md:text-7xl text-background tracking-wider">
              {tile.label}
            </span>
          </Link>
        ))}
      </section>

      {/* ============ Instagram ============ */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20 md:py-28 reveal">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Journal</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Live van de stoel</h2>
          <p className="mt-3 text-sm text-foreground/65">
            Volg <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="story-link">{STUDIO.instagramHandle}</a> · 10K+ volgers
          </p>
        </div>
        <InstagramFeed />
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import {
  STUDIO,
  SERVICES_MEN,
  SERVICES_WOMEN,
  SERVICES_KIDS,
  SERVICES_COLOR,
  TREATWELL_CATEGORY,
  type Service,
} from "@/lib/studio";
import salon3 from "@/assets/studio/salon-3.jpg";
import salon4 from "@/assets/studio/salon-4.jpg";
import catVrouwen from "@/assets/studio/cat-vrouwen.png";
import catMannen from "@/assets/studio/cat-mannen.png";
import catKinderen from "@/assets/studio/cat-kinderen.png";
import catKleur from "@/assets/studio/cat-kleur.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Diensten & Tarieven — Studio PJ Gent" },
      { name: "description", content: "Bekijk alle diensten en tarieven van Studio PJ in Gent: vrouwen, mannen, kinderen, kleur en balayage. Boek direct via Treatwell." },
      { property: "og:title", content: "Diensten & Tarieven — Studio PJ" },
      { property: "og:description", content: "Vrouwen vanaf €55 · Mannen vanaf €32 · Kleur vanaf €65. Echte prijzen, geen verrassingen." },
      { property: "og:image", content: catVrouwen },
      { name: "twitter:image", content: catVrouwen },
    ],
  }),
  component: ServicesPage,
});

type Category = {
  title: string;
  img: string;
  intro: string;
  items: Service[];
  bookingUrl: string;
  bookLabel: string;
  rotate: string; // tailwind-friendly inline rotation
};

const CATEGORIES: Category[] = [
  {
    title: "Vrouwen",
    img: catVrouwen,
    intro: "Wassen, snijden en brushing — afgestemd op je haarlengte en stijl.",
    items: SERVICES_WOMEN,
    bookingUrl: TREATWELL_CATEGORY.womenCut,
    bookLabel: "Boek vrouwen",
    rotate: "-2.5deg",
  },
  {
    title: "Mannen",
    img: catMannen,
    intro: "Precision cuts en grooming voor elk type haar. Studentenkorting met geldige kaart.",
    items: SERVICES_MEN,
    bookingUrl: TREATWELL_CATEGORY.menCut,
    bookLabel: "Boek mannen",
    rotate: "1.8deg",
  },
  {
    title: "Kinderen",
    img: catKinderen,
    intro: "Een rustige plek voor de jongste klanten. Kindvriendelijk salon.",
    items: SERVICES_KIDS,
    bookingUrl: TREATWELL_CATEGORY.kidsCut,
    bookLabel: "Boek kinderen",
    rotate: "-1.4deg",
  },
  {
    title: "Kleur & Balayage",
    img: catKleur,
    intro: `Kleurwerk met ${STUDIO.brand}. Reserveer een gratis consultatie voor het juiste resultaat.`,
    items: SERVICES_COLOR,
    bookingUrl: TREATWELL_CATEGORY.womenBalayage,
    bookLabel: "Boek kleur & balayage",
    rotate: "2.2deg",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-16 md:pt-24 pb-12 text-center reveal">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Diensten &amp; Tarieven</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">
          Vakmanschap, in detail.
        </h1>
        <p className="mt-6 text-base md:text-lg text-foreground/70">
          Onze volledige kaart, met de echte tarieven uit onze Treatwell-boekingsmodule.
          Twijfel je? Bel ons op <a href={STUDIO.phoneHref} className="story-link">{STUDIO.phone}</a> — we denken graag mee.
        </p>
        <a
          href={STUDIO.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block text-[11px] uppercase tracking-[0.3em] bg-foreground text-background px-7 py-3.5 hover:bg-foreground/85 transition-colors"
        >
          Boek direct via Treatwell
        </a>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20 md:pb-28 space-y-16 md:space-y-24">
        {CATEGORIES.map((cat, idx) => (
          <div
            key={cat.title}
            className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center reveal ${
              idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Polaroid */}
            <div className="flex items-center justify-center py-6 md:py-12">
              <div
                className="transition-transform duration-500 ease-out hover:rotate-0"
                style={{
                  transform: `rotate(${cat.rotate})`,
                  filter: "drop-shadow(0 18px 30px rgba(29,29,27,0.18)) drop-shadow(0 4px 8px rgba(29,29,27,0.12))",
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full max-w-xl h-auto object-contain"
                />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-4xl md:text-5xl">{cat.title}</h2>
              <p className="mt-4 text-foreground/70">{cat.intro}</p>
              <ul className="mt-8 divide-y divide-border/70">
                {cat.items.map((item) => (
                  <li key={item.name} className="py-5 grid grid-cols-[1fr_auto] gap-x-6 items-baseline">
                    <div>
                      <p className="font-serif text-xl">{item.name}</p>
                      {item.note && <p className="text-sm text-foreground/65 mt-1">{item.note}</p>}
                      <p className="text-xs uppercase tracking-[0.18em] text-foreground/45 mt-2">
                        {item.duration}
                      </p>
                    </div>
                    <p className="font-serif text-2xl whitespace-nowrap">{item.price}</p>
                  </li>
                ))}
              </ul>
              <a
                href={cat.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block text-[11px] uppercase tracking-[0.3em] border border-foreground px-7 py-3.5 hover:bg-foreground hover:text-background transition-colors"
              >
                {cat.bookLabel}
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2">
        <a href={STUDIO.bookingUrl} target="_blank" rel="noreferrer" className="relative block aspect-[3/2] md:aspect-auto md:min-h-[420px] overflow-hidden group">
          <img src={salon4} alt="Boek je stoel bij Studio PJ" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/55 transition-colors" />
          <span className="relative z-10 flex h-full items-center justify-center font-serif text-5xl md:text-6xl text-background">Boek</span>
        </a>
        <a href={STUDIO.treatwellUrl} target="_blank" rel="noreferrer" className="relative block aspect-[3/2] md:aspect-auto md:min-h-[420px] overflow-hidden group">
          <img src={salon3} alt="Cadeaubonnen via Treatwell" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/55 transition-colors" />
          <span className="relative z-10 flex h-full items-center justify-center font-serif text-5xl md:text-6xl text-background">Cadeaubon</span>
        </a>
      </section>
    </>
  );
}

import { Instagram, ArrowUpRight } from "lucide-react";
import { STUDIO } from "@/lib/studio";
import salon1 from "@/assets/studio/salon-1.jpg";
import salon2 from "@/assets/studio/salon-2.jpg";
import salon3 from "@/assets/studio/salon-3.jpg";
import salon4 from "@/assets/studio/salon-4.jpg";

/**
 * Live Instagram feed van @studiopj_9000.
 *
 * Instagram blokkeert directe scraping van publieke profielen — de officiële
 * Meta Graph API vereist een goedgekeurde Business app (dagen-weken setup).
 * De snelste no-key route is een gratis widget die zelf met IG praat:
 *
 *   1. Ga naar https://behold.so en login
 *   2. Koppel de @studiopj_9000 account
 *   3. Kopieer de widget ID en plak hieronder als BEHOLD_WIDGET_ID
 *
 * Zodra de ID gezet is schakelt deze component automatisch over op de live
 * feed. Tot die tijd tonen we echte salon-fotografie (gedownload van de
 * officiële Treatwell-pagina van Studio PJ — geen AI) waarbij elke tegel
 * direct doorlinkt naar het Instagram-profiel.
 */
const BEHOLD_WIDGET_ID = ""; // <-- plak hier de behold.so widget ID

const REAL_SHOTS = [
  { src: salon1, alt: "Fresh haircut bij Studio PJ", caption: "Cut by PJ" },
  { src: salon2, alt: "Het interieur van Studio PJ in Gent", caption: "Atelier" },
  { src: salon3, alt: "Barbierstoel met Schwarzkopf Professional", caption: "De stoel" },
  { src: salon4, alt: "Voorgevel van Studio PJ aan het François Laurentplein", caption: "Gent · 9000" },
];

export function InstagramFeed() {
  // Live Behold widget zodra geconfigureerd
  if (BEHOLD_WIDGET_ID) {
    return (
      <div>
        <div data-widget-id={BEHOLD_WIDGET_ID} className="min-h-[400px]" />
        <div className="mt-8 text-center">
          <a
            href={STUDIO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] story-link"
          >
            Volg {STUDIO.instagramHandle}
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.4} />
          </a>
        </div>
      </div>
    );
  }

  // Fallback: editorial grid van enkel de 4 echte salon-foto's + CTA naar IG.
  const [featured, ...rest] = REAL_SHOTS;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-fr">
        {/* Featured (groot) — span 2x2 op desktop */}
        <a
          href={STUDIO.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative col-span-2 row-span-2 aspect-square overflow-hidden bg-muted"
        >
          <img
            src={featured.src}
            alt={featured.alt}
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-background opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] mb-1 opacity-80">
              <Instagram className="h-3.5 w-3.5" strokeWidth={1.4} />
              {STUDIO.instagramHandle}
            </div>
            <p className="font-serif text-xl leading-tight">{featured.caption}</p>
          </div>
        </a>

        {/* Reguliere tegels */}
        {rest.map((shot, i) => (
          <a
            key={i}
            href={STUDIO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative block aspect-square overflow-hidden bg-muted"
          >
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              width={512}
              height={512}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/55 transition-colors duration-300 flex flex-col items-center justify-center gap-1.5 text-background">
              <Instagram
                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                strokeWidth={1.2}
              />
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                {shot.caption}
              </span>
            </div>
          </a>
        ))}

        {/* IG profiel CTA tegel */}
        <a
          href={STUDIO.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative aspect-square overflow-hidden bg-foreground text-background flex flex-col items-center justify-center text-center p-5"
        >
          <Instagram className="h-9 w-9 mb-3" strokeWidth={1.2} />
          <p className="font-serif text-xl leading-tight">{STUDIO.instagramHandle}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em]">
            Bekijk live
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.4}
            />
          </span>
        </a>
      </div>

      <div className="mt-8 text-center">
        <a
          href={STUDIO.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] border border-foreground/20 px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          Bekijk alle posts op Instagram
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.4} />
        </a>
      </div>
    </div>
  );
}

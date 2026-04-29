import { createFileRoute } from "@tanstack/react-router";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Marquee } from "@/components/Marquee";
import { STUDIO } from "@/lib/studio";
import j1 from "@/assets/studio/journal-1.png";
import j2 from "@/assets/studio/journal-2.png";
import j3 from "@/assets/studio/journal-3.png";
import j4 from "@/assets/studio/journal-4.png";
import j5 from "@/assets/studio/journal-5.png";
import j6 from "@/assets/studio/journal-6.png";
import j7 from "@/assets/studio/journal-7.png";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Studio PJ" },
      { name: "description", content: `Verhalen, knips en momenten uit Studio PJ in Gent. Volg ${STUDIO.instagramHandle} op Instagram.` },
      { property: "og:title", content: "Journal — Studio PJ" },
      { property: "og:description", content: "Verhalen, knips en momenten uit Studio PJ." },
      { property: "og:image", content: j5 },
      { name: "twitter:image", content: j5 },
    ],
  }),
  component: JournalPage,
});

const SHOTS = [
  { src: j5, alt: "Heren knip — gestyled bij Studio PJ", span: "md:col-span-2 md:row-span-2 aspect-square" },
  { src: j7, alt: "Lang koperblond haar", span: "aspect-[3/4]" },
  { src: j6, alt: "Bob cut bij Studio PJ", span: "aspect-[3/4]" },
  { src: j2, alt: "Mullet cut — getailleerde fade", span: "md:col-span-2 aspect-[4/3]" },
  { src: j1, alt: "Textured crop in het atelier", span: "aspect-[3/4]" },
  { src: j4, alt: "Curly long hair — natural texture", span: "aspect-[3/4]" },
  { src: j3, alt: "Shag cut met balayage", span: "md:col-span-2 aspect-[4/3]" },
];

function JournalPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-16 md:pt-24 pb-12 text-center reveal">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Journal</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">
          Live van de stoel.
        </h1>
        <p className="mt-6 text-base md:text-lg text-foreground/70">
          Een collectie van recent werk, momenten en verhalen — recht uit
          <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="story-link mx-1">{STUDIO.instagramHandle}</a>.
        </p>
      </section>

      {/* Editorial bento grid */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-12 reveal">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-auto">
          {SHOTS.map((shot, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-muted ${shot.span}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <Marquee text={`Volg ${STUDIO.instagramHandle} · 10K+ volgers · Precision Cuts • Modern Grooming`} reverse />

      <section className="mx-auto max-w-7xl px-4 md:px-8 py-20 md:py-28 reveal">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Instagram</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Recent op @studiopj_9000</h2>
        </div>
        <InstagramFeed />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 md:pb-28 text-center reveal">
        <h2 className="font-serif text-3xl md:text-4xl">Een verhaal te delen?</h2>
        <p className="mt-5 text-base md:text-lg text-foreground/75">
          Tag <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="story-link">{STUDIO.instagramHandle}</a> in
          je foto en je verschijnt mogelijk in onze volgende journal-update.
        </p>
      </section>
    </>
  );
}

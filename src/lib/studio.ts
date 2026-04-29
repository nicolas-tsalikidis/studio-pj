/**
 * Single source of truth for Studio PJ business details.
 * Sourced from the official Google Business profile and the Treatwell page.
 */
export const STUDIO = {
  name: "Studio PJ",
  tagline: "Hair Design & Grooming",
  bookingUrl: "https://widget.treatwell.be/en/place/431934/menu/",
  treatwellUrl: "https://www.treatwell.be/salon/studio-pj/",
  instagramUrl: "https://www.instagram.com/studiopj_9000/",
  instagramHandle: "@studiopj_9000",
  rating: { value: 4.9, count: 255, source: "Google" as const },
  treatwellRating: { value: 4.8, count: 503 },
  address: {
    street: "François Laurentplein 3",
    zip: "9000",
    city: "Gent",
    country: "België",
  },
  phone: "+32 9 342 83 55",
  phoneHref: "tel:+3293428355",
  email: "info@studiopj.be",
  hours: [
    { day: "Maandag", value: "14:00 — 19:00", closed: false },
    { day: "Dinsdag", value: "10:00 — 19:00", closed: false },
    { day: "Woensdag", value: "10:00 — 19:00", closed: false },
    { day: "Donderdag", value: "10:00 — 19:00", closed: false },
    { day: "Vrijdag", value: "10:00 — 19:00", closed: false },
    { day: "Zaterdag", value: "10:00 — 17:00", closed: false },
    { day: "Zondag", value: "Gesloten", closed: true },
  ] as ReadonlyArray<{ day: string; value: string; closed: boolean }>,
  team: [
    { name: "PJ", role: "Hair Stylist & Founder" },
    { name: "Yari", role: "Hairstylist" },
    { name: "Hama", role: "Hairdresser" },
    { name: "Emran", role: "Barber" },
  ],
  brand: "Schwarzkopf Professional",
} as const;

/**
 * Deep-links naar specifieke categorieën op de Treatwell salon-pagina.
 * De widget (widget.treatwell.be) ondersteunt geen anchors, maar de publieke
 * salon-pagina wel — gebruiker landt direct in de juiste sectie en klikt daar
 * "Kies" om de boekflow te starten.
 */
export const TREATWELL_CATEGORY = {
  womenCut: "https://www.treatwell.be/salon/studio-pj/#menu-group-431934001",
  menCut: "https://www.treatwell.be/salon/studio-pj/#menu-group-431934002",
  kidsCut: "https://www.treatwell.be/salon/studio-pj/#menu-group-431934004",
  womenColor: "https://www.treatwell.be/salon/studio-pj/#menu-group-431934005",
  womenBalayage: "https://www.treatwell.be/salon/studio-pj/#menu-group-431934006",
  womenStyling: "https://www.treatwell.be/salon/studio-pj/#menu-group-431934007",
} as const;

export type Service = { name: string; duration: string; price: string; note?: string };

export const SERVICES_MEN: Service[] = [
  { name: "Mannen — Student", duration: "30 min", price: "€32", note: "Met geldige studentenkaart" },
  { name: "Mannen — Basis", duration: "30 min", price: "€37" },
  { name: "Mannen — Knip + baard trimmen", duration: "45 min", price: "€47" },
  { name: "Mannen — Medium length (layering, wolf cut…)", duration: "40 min", price: "vanaf €40" },
  { name: "Mannen — Long hair (shoulder length)", duration: "45 min", price: "vanaf €45" },
  { name: "Baard line up", duration: "10 min", price: "€15" },
  { name: "Baard trimmen & scheren", duration: "20 min", price: "€20" },
  { name: "Baard modelleren (fade, line up)", duration: "25 min", price: "vanaf €25" },
];

export const SERVICES_WOMEN: Service[] = [
  { name: "Wassen, snit & brushing — kort", duration: "50 min", price: "€55" },
  { name: "Wassen, snit & brushing — halflang", duration: "55 min", price: "€60" },
  { name: "Wassen, snit & brushing — lang", duration: "55 min", price: "€65" },
  { name: "Knippen + brushing", duration: "50–55 min", price: "vanaf €55" },
  { name: "Brushing", duration: "30 min", price: "vanaf €30" },
  { name: "Föhnen / stylen", duration: "30 min", price: "vanaf €35" },
  { name: "Pony knippen", duration: "20 min", price: "€15" },
];

export const SERVICES_KIDS: Service[] = [
  { name: "Jongens knippen (4 t/m 11 jaar)", duration: "30 min", price: "€27" },
  { name: "Meisjes knippen (-12 jaar)", duration: "30 min", price: "€27" },
];

export const SERVICES_COLOR: Service[] = [
  { name: "Vrouwen kleuren — volledig", duration: "vanaf 60 min", price: "vanaf €65" },
  { name: "Kleuren zonder ammoniak", duration: "vanaf 60 min", price: "vanaf €65" },
  { name: "Natuurlijke haarkleuring", duration: "vanaf 60 min", price: "op aanvraag" },
  { name: "Toner / Blonderen & toner", duration: "vanaf 30 min", price: "op aanvraag" },
  { name: "Highlights — met folie", duration: "vanaf 90 min", price: "vanaf €75" },
  { name: "Lowlights", duration: "vanaf 90 min", price: "vanaf €75" },
  { name: "Balayage — heel haar", duration: "vanaf 120 min", price: "vanaf €95" },
  { name: "Ombre", duration: "vanaf 120 min", price: "op aanvraag" },
  { name: "Sunlight", duration: "vanaf 90 min", price: "op aanvraag" },
];

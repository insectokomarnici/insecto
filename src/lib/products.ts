export type ProductColor = "bela" | "braon" | "antracit";

export const productColors = [
  { id: "bela", label: "Bela" },
  { id: "braon", label: "Braon" },
  { id: "antracit", label: "Antracit" },
] as const;

export type ProductAccordion = {
  title: string;
  body: string;
};

export type Product = {
  slug: string;
  path: string;
  title: string;
  description: string;
  images: Record<ProductColor, string>;
  accordions: ProductAccordion[];
};

export const products: Product[] = [
  {
    slug: "plise",
    path: "/plise-komarnici-novi-sad",
    title: "Plise komarnici",
    description: "Plise ili klizni komarnici su odličan izbor za sve tipove otvora: prozore, ulazna i balkonska vrata.",
    images: {
      bela: "/products/plise-komarnici-bela-boja.avif",
      braon: "/products/plise-komarnici-braon-boja.avif",
      antracit: "/products/plise-komarnici-antracit-boja.avif",
    },
    accordions: [
      { title: "Opis proizvoda", body: "Plise komarnik se lako otvara i zatvara, a kada nije u upotrebi skloni se u ram. Pravimo ga po tačnim merama prozora, vrata i balkona." },
      { title: "Boje i materijali", body: "Dostupan je u beloj, braon i antracit boji. Aluminijumski profil i otporna mrežica napravljeni su za svakodnevnu upotrebu i dug vek trajanja." },
      { title: "Ugradnja plise komarnika", body: "Plise komarnici se ugrađuju na PVC, aluminijumske i drvene okvire. Naš tim uzima mere i preporučuje najbolje rešenje za tvoj otvor." },
    ],
  },
  {
    slug: "rolo",
    path: "/rolo-komarnici-novi-sad",
    title: "Rolo komarnici",
    description: "Rolo komarnici su najpopularniji izbor za standardne prozore. Kada se ne koriste, skupljaju se u kutiju poput roletne.",
    images: {
      bela: "/products/rolo-komarnici-bela-boja.avif",
      braon: "/products/rolo-komarnici-braon-boja.avif",
      antracit: "/products/rolo-komarnici-antracit-boja.avif",
    },
    accordions: [
      { title: "Opis proizvoda", body: "Rolo komarnik se spušta i podiže vertikalno, kao roletna. Kada se ne koristi, mrežica se skuplja u kutiju i ostaje zaštićena." },
      { title: "Boje i materijali", body: "Dostupan je u beloj, braon i antracit boji. Aluminijumski profil i fiberglas mrežica pružaju stabilnost i otpornost na svakodnevne vremenske uslove." },
      { title: "Ugradnja rolo komarnika", body: "Rolo komarnike ugrađujemo na PVC, aluminijumske i drvene okvire. Merenje i preporuku rešenja radimo na tvojoj adresi." },
    ],
  },
  {
    slug: "fiksni",
    path: "/fiksni-komarnici-novi-sad",
    title: "Fiksni komarnici",
    description: "Fiksni komarnici se stavljaju na prozore koje koristiš isključivo za provetravanje, tj. ne treba ti prolaznost kroz njih.",
    images: {
      bela: "/products/fiksni-komarnici-bela-boja.avif",
      braon: "/products/fiksni-komarnici-braon-boja.avif",
      antracit: "/products/fiksni-komarnici-antracit-boja.avif",
    },
    accordions: [
      { title: "Opis proizvoda", body: "Fiksni komarnik se postavlja direktno na ram prozora i ostaje na svom mestu tokom cele godine. Idealan je za otvore koji služe samo za provetravanje." },
      { title: "Boje i materijali", body: "Dostupan je u beloj, braon i antracit boji. Tanak aluminijumski profil i fiberglas mrežica pružaju diskretan izgled i pouzdanu zaštitu." },
      { title: "Ugradnja fiksnih komarnika", body: "Fiksne komarnike ugrađujemo na PVC, aluminijumske i drvene okvire. Izrađujemo ih po tačnim merama tvog prozora." },
    ],
  },
];

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
  title: string;
  description: string;
  images: Record<ProductColor, string>;
  accordions: ProductAccordion[];
};

export const products: Product[] = [
  {
    slug: "plise",
    title: "Plise komarnici",
    description: "Plise ili klizni komarnici su odličan izbor za sve tipove otvora: prozore, ulazna i balkonska vrata.",
    images: {
      bela: "/products/plise-komarnici-bela-boja.avif",
      braon: "/products/plise-komarnici-braon-boja.avif",
      antracit: "/products/plise-komarnici-antracit-boja.avif",
    },
    accordions: [
      { title: "Opis proizvoda", body: "Plise komarnik se lako otvara i zatvara, pa ga bez problema mogu koristiti mala deca, a i ti s punim rukama stvari. Pri otvaranju klizi na stranu, a izgledom podseća na harmonika vrata. Dobra stvar je što ne moraš svaki put da ga otvaraš do kraja pri izlasku, jer se može zaustaviti bilo gde na svom putu. Sa druge strane, kada nije u upotrebi, možeš ga skroz povući u ram. Tako ti neće smetati, niti ćeš morati stalno da ga otvaraš i zatvaraš radi ulaska u prostoriju. Plise komarnike pravimo po tačnim merama prozora, vrata, i balkona, a mogu biti jednokrilni ili dvokrilni." },
      { title: "Boje i materijali", body: "Plise komarnici su dostupni u sledećim bojama: Bela, Braon i Antracit.\n\nProfil plise komarnika je izrađen od aluminijuma, što znači da ne menja boju na suncu i ne rđa od kiše, a izdržljiv je na jake vetrove i hladne zime. Sa druge strane – mreža je od poliestera sa specijalnim premazom, otporna na visoke temperature. To znači da se neće otopiti, izdeformisati, niti gubiti čvrstinu na većim temperaturama, a zimi je bezbedna jer se nalazi u ramu, dokle god ti ponovo ne zatreba." },
      { title: "Ugradnja plise komarnika", body: "Alu plise/klizni komarnici se postavljaju na sve vrste okvira (PVC, aluminijum, drvo)." },
    ],
  },
  {
    slug: "rolo",
    title: "Rolo komarnici",
    description: "Rolo komarnici su najpopularniji izbor za standardne prozore. Kada se ne koriste, skupljaju se u kutiju poput roletne.",
    images: {
      bela: "/products/rolo-komarnici-bela-boja.avif",
      braon: "/products/rolo-komarnici-braon-boja.avif",
      antracit: "/products/rolo-komarnici-antracit-boja.avif",
    },
    accordions: [
      { title: "Opis proizvoda", body: "Rolo komarnik se spušta i podiže vertikalno, kao roletna. Kada se ne koristi, možeš podići mrežicu u njenu kutiju, da ne bi bespotrebno bila izložena vetru, kiši ili suncu. Izgleda diskretno jer se komarnik montira sa spoljne strane. Ovi komarnici su super za prozore koje često otvaraš i koristiš da nešto preneseš spolja ili da zaliješ cveće. Rolo komarnike pravimo po tačnim merama tvojih prozora." },
      { title: "Boje i materijali", body: "Rolo komarnici su dostupni u sledećim bojama: Bela, Braon i Antracit\n\nProfil rolo komarnika je izrađen od aluminijuma, što znači da ne menja boju na suncu i ne rđa od kiše, a izdržljiv je na jake vetrove i hladne zime. Sa druge strane – mreža je od fiberglasa, otporna na visoke temperature (do 250°C). To znači da se neće otopiti, izdeformisati, niti gubiti čvrstinu na većim temperaturama, a zimi je bezbedna jer se nalazi namotana u svojoj kutiji, dokle god ti ponovo ne zatreba." },
      { title: "Ugradnja rolo komarnika", body: "Alu rolo komarnici se postavljaju na sve vrste okvira (PVC, aluminijum, drvo)." },
    ],
  },
  {
    slug: "fiksni",
    title: "Fiksni komarnici",
    description: "Fiksni komarnici se stavljaju na prozore koje koristiš isključivo za provetravanje, tj. ne treba ti prolaznost kroz njih.",
    images: {
      bela: "/products/fiksni-komarnici-bela-boja.avif",
      braon: "/products/fiksni-komarnici-braon-boja.avif",
      antracit: "/products/fiksni-komarnici-antracit-boja.avif",
    },
    accordions: [
      { title: "Opis proizvoda", body: "Fiksni komarnik se postavlja direktno na ram prozora i ostaje na tom mestu tokom cele godine. Ne pomera se i ne otvara, što ga čini idealnim za prozor koji koristiš isključivo za provetravanje, bez potrebe da kroz njega nešto prenosiš. Zahvaljujući svetloj mrežici i tankom alu profilu, fiksni komarnici gotovo da se i ne primećuju kada ih gledaš spolja. Fiksne komarnike pravimo po tačnim merama tvojih prozora." },
      { title: "Boje i materijali", body: "Fiksni komarnici su dostupni u sledećim bojama: Bela, Braon i Antracit.\n\nProfil fiksnih komarnika je izrađen od aluminijuma, što znači da ne menja boju na suncu i ne rđa od kiše, a izdržljiv je na jake vetrove i hladne zime. Sa druge strane – mreža je od fiberglasa, otporna na visoke temperature (do 250°C). To znači da se neće otopiti, izdeformisati, niti gubiti čvrstinu na većim temperaturama." },
      { title: "Ugradnja fiksnih komarnika", body: "Alu fiksni komarnici se postavljaju na sve vrste okvira (PVC, aluminijum, drvo)." },
    ],
  },
];

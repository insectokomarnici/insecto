export type FixedGoogleReview = {
  rating: number;
  text: string;
  relativePublishTimeDescription: string;
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  googleMapsUri: string;
};

// Manually selected from the business's Google Maps profile on 2026-10-24.
// Preserve original wording (including typos), rating and author attribution.
// Relative publication ages are manually maintained; refresh them with the review selection.
// CTA rating/count belong to GoogleRating and must not be hardcoded here.
export const fixedGoogleReviews: FixedGoogleReview[] = [
  {
    rating: 5,
    text: "odličan izbor boja, kvqlitetni materijali, profesionalno izvedena montaža i vrlo stručno savetovanje pre kupovine",
    relativePublishTimeDescription: "pre 2 nedelje",
    authorName: "Milos Milosevic",
    authorUri: "https://www.google.com/maps/contrib/111222766856095664140/reviews",
    authorPhotoUri: "https://lh3.googleusercontent.com/a-/ALV-UjWYg4K9KzizIRMTrRO_z2Y2Ld7SjxPAWp2C9NVqT4dcITcpFRxP=w72-h72-p-rp-mo-ba12-br100",
    googleMapsUri: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2tjd1JFTlNURWhUVmxOb1UwMUdiSFpMVW1GdkxYYxAB!2m1!1s0x80b0687fa7a6efbd:0x7e802234177fb0cd",
  },
  {
    rating: 5,
    text: "Sve preporuke!\nProfesionalno, detaljno, sve po dogovoru.",
    relativePublishTimeDescription: "pre mesec dana",
    authorName: "biljana d",
    authorUri: "https://www.google.com/maps/contrib/100345570852458017226/reviews",
    authorPhotoUri: "https://lh3.googleusercontent.com/a/ACg8ocKIUyTMry71ZVN9h7KJqucbnhHsAPQJHOYqpOxHZgvlrrIjcQ=w72-h72-p-rp-mo-br100",
    googleMapsUri: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT21saFZEQnRVV2swUzBFNFEyRlpOWFV4VFY5RlRrRRAB!2m1!1s0x80b0687fa7a6efbd:0x7e802234177fb0cd",
  },
  {
    rating: 5,
    text: "Jako dobri komarnici sa jako dobrim kvalitetom i jako brzom ugradnjom. Sve je proslo brzo i po dogovoru. Sve preporuke",
    relativePublishTimeDescription: "pre 7 meseci",
    authorName: "Igor Gut",
    authorUri: "https://www.google.com/maps/contrib/114078085002658437631/reviews?hl=en",
    authorPhotoUri: "https://lh3.googleusercontent.com/a/ACg8ocJx9cP2pdd7PUtx5LnaQs4mZxFyxVTCR2WQIsSvGPu-lYnEtg=w72-h72-p-rp-mo-br100",
    googleMapsUri: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xGclVtVm5RMWd5TTFsNGRFMVFWbTlKU0VsaFlYYxAB!2m1!1s0x80b0687fa7a6efbd:0x7e802234177fb0cd",
  },
];

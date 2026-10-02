export type FixedGoogleReview = {
  rating: number;
  text: string;
  relativePublishTimeDescription: string;
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  googleMapsUri: string;
};

// Edit this list manually whenever you want to change the displayed reviews.
export const fixedGoogleReviews: FixedGoogleReview[] = [
  {
    rating: 5,
    text: "Sve preporuke za ovog čoveka! Komarnici su urađeni savršeno, kvalitet vrhunski, a montaža brza i profesionalna. Dogovor je ispoštovan u minut, što se danas retko viđa. Ljubazan, korektan i pouzdan — sigurno ću ga preporučiti svima!",
    relativePublishTimeDescription: "pre 5 meseci",
    authorName: "Sara Gal",
    authorUri: "https://www.google.com/maps/contrib/111922761894960813795/reviews",
    authorPhotoUri: "https://lh3.googleusercontent.com/a/ACg8ocKzcg1q6kb2DUtLocf2O7rhyVktGC36FL1hPVW3u4_GrgB9WQ=s128-c0x00000000-cc-rp-mo",
    googleMapsUri: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xSTFZtcFZiMVpxUVRGUFlVWkxjWEZJUWpOUWRuYxAB!2m1!1s0x80b0687fa7a6efbd:0x7e802234177fb0cd",
  },
  {
    rating: 5,
    text: "Super saradnja,sve urađeno kako treba,jako sam zadovoljan,preporučićemo firmu drugima.",
    relativePublishTimeDescription: "pre 8 meseci",
    authorName: "Goran Subic",
    authorUri: "https://www.google.com/maps/contrib/108779899166386623168/reviews",
    authorPhotoUri: "https://lh3.googleusercontent.com/a/ACg8ocKj0j_M45FJhKsGD_w4dfWXg6S9UOFREDsaUAEbPYXWS_gRxQ=s128-c0x00000000-cc-rp-mo",
    googleMapsUri: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2toUFQzWjBRVFJXVlU1SGMwcERRamx2Wmt0UFFrRRAB!2m1!1s0x80b0687fa7a6efbd:0x7e802234177fb0cd",
  },
  {
    rating: 5,
    text: "Divni mladi ljudi😊Sjajna saradnja od prvog poziva pa do konačne ugradnje.Topla preporuka🙂🙂🙂",
    relativePublishTimeDescription: "pre 5 meseci",
    authorName: "ivana vuksa",
    authorUri: "https://www.google.com/maps/contrib/105360454855478514487/reviews",
    authorPhotoUri: "https://lh3.googleusercontent.com/a/ACg8ocJVI0qejJTPg6JDjGPdg9x6OO7ebE9yrYabS7b4kAJAxiQ8Vg=s128-c0x00000000-cc-rp-mo",
    googleMapsUri: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25WUmJXVkVNV0puVUZZelprTjRSM05qV1VWa01WRRAB!2m1!1s0x80b0687fa7a6efbd:0x7e802234177fb0cd",
  },
];

import { StarFilled } from "@carbon/icons-react";

type PlaceRating = {
  rating: number;
  userRatingCount: number;
  googleMapsUri?: string;
};

type PlaceDetailsResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
};

function GoogleMark() {
  return (
    <svg className="google-rating-logo" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z" />
      <path fill="#34A853" d="M12 22c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.02H3.29v2.53A9.74 9.74 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.54 14.09A5.84 5.84 0 0 1 6.23 12c0-.73.12-1.44.31-2.09V7.38H3.29A9.99 9.99 0 0 0 2 12c0 1.67.4 3.24 1.29 4.62l3.25-2.53Z" />
      <path fill="#EA4335" d="M12 5.88c1.43 0 2.72.49 3.74 1.45l2.8-2.8C16.84 2.93 14.63 2 12 2a9.74 9.74 0 0 0-8.71 5.38l3.25 2.53C7.31 7.6 9.46 5.88 12 5.88Z" />
    </svg>
  );
}

async function getPlaceRating(): Promise<PlaceRating | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri",
        },
        next: { revalidate: 604800 },
      },
    );

    if (!response.ok) return null;

    const place = (await response.json()) as PlaceDetailsResponse;
    if (
      typeof place.rating !== "number" ||
      typeof place.userRatingCount !== "number" ||
      place.rating < 0 ||
      place.rating > 5 ||
      place.userRatingCount < 0
    ) {
      return null;
    }

    return {
      rating: place.rating,
      userRatingCount: place.userRatingCount,
      googleMapsUri: place.googleMapsUri,
    };
  } catch {
    return null;
  }
}

export async function GoogleRating() {
  const place = await getPlaceRating();
  if (!place) return null;

  const reviewCount = new Intl.NumberFormat("sr-Latn-RS").format(place.userRatingCount);
  const mapsUrl = place.googleMapsUri ?? "https://www.google.com/maps";

  return (
    <div className="google-rating">
      <a
        className="google-rating-link"
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Google ocena ${place.rating.toFixed(1)} od 5 na osnovu ${reviewCount} recenzija`}
      >
        <GoogleMark />
        <span className="google-rating-stars" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => <StarFilled key={index} />)}
        </span>
        <span className="google-rating-value">{place.rating.toFixed(1)}</span>
        <span className="google-rating-separator" aria-hidden="true">·</span>
        <span className="google-rating-count">({reviewCount})</span>
      </a>
    </div>
  );
}

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
        <span className="google-rating-stars" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => <StarFilled key={index} />)}
        </span>
        <span className="google-rating-value">{place.rating.toFixed(1)}</span>
        <span className="google-rating-separator" aria-hidden="true">·</span>
        <span className="google-rating-count">{reviewCount} Google recenzije</span>
      </a>
    </div>
  );
}

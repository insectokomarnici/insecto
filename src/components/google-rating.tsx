import { GoogleRatingView, type PlaceRating } from "@/components/google-rating-view";

export type { PlaceRating } from "@/components/google-rating-view";

type PlaceDetailsResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
};

async function getPlaceDetails(fieldMask: string): Promise<PlaceDetailsResponse | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=sr-Latn`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": fieldMask,
        },
        next: { revalidate: 604800 },
      },
    );

    if (!response.ok) return null;
    return (await response.json()) as PlaceDetailsResponse;
  } catch {
    return null;
  }
}

export async function getPlaceRating(): Promise<PlaceRating | null> {
  const place = await getPlaceDetails("rating,userRatingCount,googleMapsUri");
  if (!place) return null;

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
}

export async function GoogleRating() {
  const place = await getPlaceRating();
  if (!place) return null;

  return <GoogleRatingView place={place} />;
}

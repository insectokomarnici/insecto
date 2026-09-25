import { GoogleRatingView, type PlaceRating } from "@/components/google-rating-view";

export type { PlaceRating } from "@/components/google-rating-view";

type PlaceDetailsResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    authorAttribution?: { displayName?: string; uri?: string };
    googleMapsUri?: string;
  }>;
};

export type PlaceReview = {
  rating: number;
  text: string;
  relativePublishTimeDescription: string;
  authorName: string;
  authorUri?: string;
  googleMapsUri: string;
};

export type PlaceReviews = {
  reviews: PlaceReview[];
  googleMapsUri?: string;
};

async function getPlaceDetails(fieldMask: string): Promise<PlaceDetailsResponse | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
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

export async function getPlaceReviews(): Promise<PlaceReviews | null> {
  const place = await getPlaceDetails("googleMapsUri,reviews");
  if (!place?.reviews?.length) return null;

  const reviews = place.reviews.flatMap((review) => {
    if (
      typeof review.rating !== "number" ||
      review.rating < 0 ||
      review.rating > 5 ||
      !review.text?.text ||
      !review.relativePublishTimeDescription ||
      !review.authorAttribution?.displayName ||
      !review.googleMapsUri
    ) {
      return [];
    }

    return [{
      rating: review.rating,
      text: review.text.text,
      relativePublishTimeDescription: review.relativePublishTimeDescription,
      authorName: review.authorAttribution.displayName,
      authorUri: review.authorAttribution.uri,
      googleMapsUri: review.googleMapsUri,
    }];
  });

  return reviews.length ? { reviews, googleMapsUri: place.googleMapsUri } : null;
}

export async function GoogleRating() {
  const place = await getPlaceRating();
  if (!place) return null;

  return <GoogleRatingView place={place} />;
}

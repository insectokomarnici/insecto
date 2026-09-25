import Image from "next/image";
import { Star, UserCircle } from "@boxicons/react";
import { PhoneFilled } from "@carbon/icons-react";
import { getPlaceReviews, type PlaceReviews } from "@/components/google-rating";
import { GoogleRatingView } from "@/components/google-rating-view";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";

export async function GoogleReviewsSection() {
  const place = await getPlaceReviews();
  return <GoogleReviewsContent place={place} />;
}

function GoogleReviewsContent({ place }: { place: PlaceReviews | null }) {
  const reviews = place?.reviews ?? [];
  const placeRating = place?.rating !== undefined && place.userRatingCount !== undefined
    ? { rating: place.rating, userRatingCount: place.userRatingCount, googleMapsUri: place.googleMapsUri }
    : null;

  return (
    <section className="section google-reviews-section" aria-labelledby="google-reviews-title">
      <Container>
        <div className="google-reviews-layout">
          <div className="google-reviews-intro">
            <Heading as="h2" size="section" id="google-reviews-title">Šta kupci kažu:</Heading>
          </div>

          {reviews.length > 0 && <div className="google-reviews-grid">
            {reviews.map((review) => (
              <article className="google-review-card" key={review.googleMapsUri}>
                <div className="google-review-card-header">
                  <div className="google-review-author">
                    <div className="google-review-author-row">
                      <span className="google-review-author-avatar" aria-hidden="true">
                        {review.authorPhotoUri ? <Image src={review.authorPhotoUri} alt="" width={40} height={40} unoptimized /> : <UserCircle />}
                      </span>
                      <a className="google-review-author-link" href={review.authorUri ?? review.googleMapsUri} target="_blank" rel="noopener noreferrer">
                        {review.authorName}
                      </a>
                    </div>
                    <span className="google-review-time">{review.relativePublishTimeDescription}</span>
                  </div>
                  <div className="google-review-rating" aria-label={`Ocena ${review.rating.toFixed(1)} od 5`}>
                    <span className="google-review-stars" aria-hidden="true">
                      {Array.from({ length: 5 }, (_, index) => <Star key={index} pack="filled" />)}
                    </span>
                    <span>{review.rating.toFixed(1)}</span>
                  </div>
                </div>
                <p className="google-review-text">{review.text}</p>
                <a className="google-review-link" href={review.googleMapsUri} target="_blank" rel="noopener noreferrer">Pogledaj na Google-u</a>
              </article>
            ))}
          </div>}

          <div className="google-reviews-actions">
            <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />Zakaži merenje</ButtonLink>
            {placeRating && <GoogleRatingView place={placeRating} />}
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Star, UserCircle } from "@boxicons/react";
import { PhoneFilled } from "@carbon/icons-react";
import { getPlaceReviews, type PlaceReviews } from "@/components/google-rating";
import { GoogleMark, GoogleRatingView } from "@/components/google-rating-view";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";

function GoogleVerifiedMark() {
  return (
    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
    </svg>
  );
}

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
                <div className="google-review-card-top">
                  <div className="google-review-author-row">
                    <span className="google-review-author-avatar" aria-hidden="true">
                      {review.authorPhotoUri ? <Image src={review.authorPhotoUri} alt="" width={40} height={40} unoptimized /> : <UserCircle />}
                    </span>
                    <div className="google-review-author">
                      <a className="google-review-author-link" href={review.authorUri ?? review.googleMapsUri} target="_blank" rel="noopener noreferrer">
                        {review.authorName}
                      </a>
                      <span className="google-review-time">{review.relativePublishTimeDescription}</span>
                    </div>
                  </div>
                  <a className="google-review-source" href={review.googleMapsUri} target="_blank" rel="noopener noreferrer" aria-label="Pogledaj recenziju na Google-u">
                    <GoogleMark />
                  </a>
                </div>
                <div className="google-review-rating" aria-label={`Ocena ${review.rating.toFixed(1)} od 5`}>
                  <span className="google-review-stars" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, index) => <Star key={index} pack="filled" />)}
                  </span>
                  <span className="google-review-verified"><GoogleVerifiedMark /></span>
                </div>
                <div className="google-review-copy">
                  <p className="google-review-text">{review.text}</p>
                  <a className="google-review-more" href={review.googleMapsUri} target="_blank" rel="noopener noreferrer">
                    Pročitaj više
                  </a>
                </div>
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

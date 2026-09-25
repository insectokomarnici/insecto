import { Star } from "@boxicons/react";
import { getPlaceReviews, type PlaceReviews } from "@/components/google-rating";
import { GoogleMark } from "@/components/google-rating-view";
import { Container, Heading } from "@/components/ui/layout";

export async function GoogleReviewsSection() {
  const place = await getPlaceReviews();
  if (!place) return null;

  return <GoogleReviewsContent place={place} />;
}

function GoogleReviewsContent({ place }: { place: PlaceReviews }) {
  const googleMapsUri = place.googleMapsUri ?? place.reviews[0]?.googleMapsUri ?? "https://www.google.com/maps";

  return (
    <section className="section google-reviews-section" aria-labelledby="google-reviews-title">
      <Container>
        <div className="google-reviews-layout">
          <div className="google-reviews-intro">
            <Heading as="h2" size="section" id="google-reviews-title">Google recenzije</Heading>
            <p>Pročitaj utiske klijenata sa našeg Google profila.</p>
            <a className="google-reviews-google-link" href={googleMapsUri} target="_blank" rel="noopener noreferrer">
              <GoogleMark />
              <span>Otvori Google profil</span>
            </a>
          </div>

          <div className="google-reviews-grid">
            {place.reviews.map((review) => (
              <article className="google-review-card" key={review.googleMapsUri}>
                <div className="google-review-card-header">
                  <div className="google-review-author">
                    <a className="google-review-author-link" href={review.authorUri ?? review.googleMapsUri} target="_blank" rel="noopener noreferrer">
                      {review.authorName}
                    </a>
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
          </div>
        </div>
      </Container>
    </section>
  );
}

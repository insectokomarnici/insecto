# Google rating integration

The homepage Hero can show the business's live Google rating and review count below the primary CTA. The data is requested server-side from the Google Places API (New) Place Details endpoint and is never exposed through a client-side environment variable.

## Required environment variables

Copy `.env.example` to `.env.local` and set:

```env
GOOGLE_MAPS_API_KEY=your_server_side_api_key
GOOGLE_PLACE_ID=your_business_place_id
```

`GOOGLE_MAPS_API_KEY` must remain server-only. Do not rename it with a `NEXT_PUBLIC_` prefix and do not commit `.env.local`.

`GOOGLE_PLACE_ID` identifies the Insecto Google Business Profile location. It is different from the API key and can be obtained with Google's Place ID finder or from a Places API search.

## API setup

1. Create or select a Google Cloud project with billing enabled.
2. Enable **Places API (New)**.
3. Create an API key under **Google Maps Platform → Credentials**.
4. Restrict the key to **Places API (New)**. Since this request runs on the server, use an appropriate server-side application restriction for the deployment environment.
5. Add the key and Place ID to local `.env.local` and to Vercel Environment Variables for Preview and Production.

The component requests only `rating`, `userRatingCount` and `googleMapsUri`, and revalidates the response hourly. If credentials are missing or the API request fails, it renders nothing rather than showing stale or fabricated values. The visible Google label and link provide attribution and take visitors to the source listing.

# Nova Wealth Advisers website

Conversion-focused Next.js website for Nova Wealth Advisers. The site positions
Nova Wealth as a personal, experienced guide for established migrant families
building wealth and preparing for retirement in Australia.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content and media

- Core approved copy and lists: `content/site-content.ts`
- Site details, links and stock placeholders: `lib/site-config.ts`
- Global design system: `app/globals.css`
- Final founder/team photography should replace the stock URLs in
  `lib/site-config.ts`.
- The homepage cover video is a temporary stock URL. Move the approved final
  video into `public/video/`, export an optimized MP4/WebM, and update
  `stockMedia.heroVideo`.
- Team profiles, qualifications, proof figures, testimonials and client stories
  are intentionally omitted until approved evidence is supplied.

## Integrations

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_CALENDLY_URL`: consultation calendar embed.
- `NEXT_PUBLIC_SCOREAPP_URL`: Retirement Ready Scorecard embed.
- `ACTIVECAMPAIGN_URL` and `ACTIVECAMPAIGN_API_KEY`: contact sync.
- `MONDAY_API_TOKEN` and `MONDAY_BOARD_ID`: lead item creation.
- `LEAD_WEBHOOK_URL`: optional additional lead destination.
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager container.

Contact forms post to `/api/leads`. The endpoint validates server-side and sends
the lead to every configured destination. Monday column IDs in
`lib/integrations.ts` must be matched to the production board before launch.

Tracked data-layer events:

- `booking_click`
- `contact_submit`
- `scorecard_start`
- `scorecard_complete` (requires ScoreApp completion callback wiring)
- `phone_click`
- `resource_download`

## SEO and accessibility

The App Router renders crawlable copy and per-page metadata. The project includes
canonical base metadata, structured financial-service data, Open Graph imagery,
`sitemap.xml`, and `robots.txt`.

Motion honors `prefers-reduced-motion`; all interactive controls have keyboard
focus styles; video has a pause control; forms include labels, validation and
status messaging.

## Pre-launch checklist

- Replace all stock founder, team, family and cover-video assets.
- Add verified founder/team names, roles, qualifications and biographies.
- Add approved years of experience, families advised and audience figures.
- Add only licensee-approved reviews, testimonials and client stories.
- Confirm phone, email, social profiles, domain and office/service areas.
- Supply approved AFSL/authorised-representative wording, FSG and privacy policy.
- Confirm tax language, disclaimers, cookie consent and form consent with compliance.
- Verify Calendly, ScoreApp, ActiveCampaign and Monday journeys end to end.
- Confirm Monday column mapping and duplicate handling.
- Configure GTM/GA4 and verify every conversion event fires once.
- Replace temporary resource cards with selected approved videos and articles.
- Run Lighthouse on mobile for key pages and review WCAG 2.2 AA requirements.

# Ashley Hickmon — Loan Officer Lead-Gen Site

A single-page Next.js (App Router) landing site for **Ashley Hickmon**, SVP
of Sales Development & Growth / Branch Manager at Fairway Independent
Mortgage Corporation (NMLS #250615).

When a lead completes the multi-step form, the backend API route texts
a summary via Twilio to **+1 (303) 669-8454**.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Twilio Node SDK (server-only)

## Local development

```bash
npm install
cp .env.example .env.local    # optional for local SMS testing
npm run dev
```

Visit http://localhost:3000.

If Twilio env vars are not set, form submissions still succeed but the
lead payload is logged to the server console (nothing is texted). That
keeps local development easy.

## Replace Ashley's photo

Drop the real portrait at `public/ashley.jpg`. The Hero component loads
it via `next/image` at `/ashley.jpg`. The placeholder shipped with the
repo is a 1×1 JPEG that should be replaced before shipping.

## Deploy on Vercel

1. Push this branch to GitHub and import the repo in Vercel.
2. Framework preset: **Next.js** (auto-detected).
3. Add the following **Environment Variables** in the Vercel project
   settings (Production, Preview, Development):

   | Name | Example | Notes |
   | --- | --- | --- |
   | `TWILIO_ACCOUNT_SID` | `ACxxxxxxxxxxxx...` | From Twilio Console |
   | `TWILIO_AUTH_TOKEN` | `...` | From Twilio Console |
   | `TWILIO_FROM_NUMBER` | `+15551234567` | A Twilio-owned SMS-capable number |
   | `LEAD_TO_NUMBER` | `+13036698454` | *(optional — defaults to this)* |

4. Deploy. Submit a test lead; you should receive an SMS like:

   ```
   🏡 New lead — Jane Doe
   Phone: (555) 123-4567
   Email: jane@example.com
   State: CO

   Goal: Buy a home
   Property: Single-family home
   Target price: $450,000
   Down payment: $50,000
   Goal monthly: $2,500
   Credit: Excellent (740+)
   First-time buyer: Yes
   Military: Civilian
   Timeline: Within 3 months
   ```

## Files of interest

- `app/page.tsx` — assembles the page
- `components/Hero.tsx` — hero with Ashley's photo + primary CTA
- `components/LeadForm.tsx` — the multi-step form (9 steps)
- `components/About.tsx` — bio, credentials, loan types
- `components/SocialProof.tsx` — testimonials + stats
- `app/api/lead/route.ts` — Twilio SMS dispatch

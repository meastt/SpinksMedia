# Spinks Media — Booking System Plan

## Context

Jayden currently manages all booking manually and spends too much time adding/maintaining his Google Calendar. The goal is a `/book` page where prospective clients fill out a form, which automatically:
- Creates an event on Jayden's Google Calendar
- Sends the client a branded confirmation email with a working "Add to Calendar" link
- Notifies Jayden of the new booking

All CTA buttons on the homepage ("Book a Shoot", "Book a Call") will route to this page.

---

## Stack Additions

| Layer | Tool | Notes |
|-------|------|-------|
| Database | Vercel Postgres via Prisma | Already used on other projects |
| Google Calendar | `googleapis` npm package | OAuth2 with stored refresh token |
| Email | `resend` npm package | Already have account |
| Email Templates | `@react-email/components` | Nice templated HTML emails |
| Date Picker | `react-day-picker` | Lightweight, no heavy UI lib needed |

---

## Credentials You'll Need to Gather

### 1. Google Cloud Console (free)
- Go to console.cloud.google.com → New project → Enable **Google Calendar API**
- Create **OAuth 2.0 Client ID** (type: Web Application)
- Add `http://localhost:3000` as an authorized redirect URI (for one-time auth)
- Copy **Client ID** and **Client Secret**
- Run the one-time OAuth flow (a script we'll write) → produces a **Refresh Token**
- Store all three as env vars: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`
- Also need: `GOOGLE_CALENDAR_ID` (Jayden's calendar ID — usually his Gmail address)

> Note: Works with personal Gmail or Google Workspace. We'll confirm which account during setup.

### 2. Resend (you already have this)
- `RESEND_API_KEY` — from resend.com dashboard
- Verify a sender domain (e.g. `noreply@spinksmedia.com`) in Resend → DNS records added to domain host

### 3. Vercel Postgres / Prisma
- Provision a Postgres DB in Vercel dashboard → Storage tab
- Vercel auto-injects `POSTGRES_PRISMA_URL` and `POSTGRES_URL_NON_POOLING` as env vars
- Run `prisma db push` to sync schema

---

## `/book` Page — User Flow

All CTA buttons ("Book a Shoot", "Book a Call", "Explore Package", etc.) route to `/book`.

The `/book` page presents **two cards** side by side:

### Card 1: "Book a Call"
- Clicking this card expands/navigates to the full booking form
- Integrates with Google Calendar + Resend email (full flow described above)

### Card 2: "Content Creation Packages"
- Displayed as a second option card
- **Dead end for now** — no functionality wired yet
- Placeholder for the future packages/pricing selection flow

---

## Booking Form Fields (triggered by Card 1 — "Book a Call")

| Field | Type | Required |
|-------|------|----------|
| Full Name | text | yes |
| Email | email | yes |
| Phone | tel | yes |
| Preferred Date | date picker | yes |
| Preferred Time | time select (business hours) | yes |
| Notes / Message | textarea | no |

---

## Files to Create

```
app/book/page.tsx                  # /book page with two cards
app/api/bookings/route.ts          # POST handler: DB + Calendar + Email
components/BookingForm.tsx         # Client-side form with validation
emails/BookingConfirmation.tsx     # React Email template for client
emails/BookingNotification.tsx     # Internal email to Jayden
lib/google-calendar.ts             # Google Calendar API helper
lib/resend.ts                      # Resend email helper
prisma/schema.prisma               # Add Booking model
scripts/get-google-token.ts        # One-time OAuth flow to get refresh token
```

## Files to Modify

```
components/Header.tsx              # Wire "Book a Shoot" button to /book
components/HeroSection.tsx         # Wire CTA buttons to /book
components/CTASection.tsx          # Wire "Book a Shoot" to /book
components/Footer.tsx              # Wire "Book a Shoot" to /book
components/PackagesSection.tsx     # Wire "Explore Package" buttons to /book
```

---

## Prisma Schema Addition

```prisma
model Booking {
  id              String   @id @default(cuid())
  name            String
  email           String
  phone           String
  date            DateTime
  notes           String?
  calendarEventId String?
  createdAt       DateTime @default(now())
}
```

---

## API Route Logic (`/api/bookings` POST)

1. Validate request body
2. Write booking to Postgres via Prisma
3. Call Google Calendar API → create event on Jayden's calendar
4. Generate "Add to Calendar" links:
   - **Google Calendar**: pre-filled URL (`calendar.google.com/calendar/render?action=TEMPLATE&...`)
   - **Apple/Outlook**: `.ics` file content attached to the email
5. Send confirmation email to client (via Resend) with both calendar options
6. Send notification email to Jayden with booking details
7. Return success response to form

---

## "Add to Calendar" Implementation

No third-party service needed:
- **Google Calendar link** — URL with query params, opens pre-filled in browser
- **.ics attachment** — generated server-side, works for Apple Calendar, Outlook, and everything else

---

## Verification Plan

1. Run `prisma db push` — confirm Booking table created in Vercel Postgres
2. Submit test booking via `/book` form
3. Confirm booking row appears in DB
4. Confirm event appears on Jayden's Google Calendar
5. Confirm client confirmation email received with both calendar options
6. Confirm Jayden notification email received
7. Test "Add to Calendar" links: Google link opens pre-filled, .ics imports correctly

---

---

# Client Portal — Deferred (Options Preserved for Later)

Not building this now. Options researched so we don't redo this planning:

## What It Needs to Do
- Clients log in and see their project
- Digital media files (video, photos) gated behind a paid invoice
- Once invoice is paid → download unlocked

## Option A: Off-the-Shelf Service (~$20-30/mo) — Recommended for a 1-man shop
**Pic-Time** or **Shootproof** — built specifically for photo/video professionals. Galleries, delivery, invoicing, and payment gating all included. Just link from the site.

**HoneyBook** (~$20/mo) — booking + CRM + invoicing + client portal in one package. Could potentially replace the custom booking system above too.

## Option B: Custom Build (Full In-House)
- Auth: **Clerk** (free up to 10k MAU) or **NextAuth**
- Payment gate: **Stripe** invoicing API or Payment Links
- File storage: **Vercel Blob** or **Cloudflare R2** (cheaper for large video files)
- Database: same Vercel Postgres / Prisma instance

**Effort:** ~5-7 days. 4 systems to wire together. Real ongoing maintenance.

## Option C: Lightweight Custom (Magic-link + Stripe + Vercel Blob)
No passwords — just magic-link email login. Stripe payment link per project. On payment webhook → file download unlocked. ~2-3 days.

## Credentials Needed (Option B or C)
- `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` + `CLERK_SECRET_KEY` (Option B only)
- `BLOB_READ_WRITE_TOKEN` (Vercel Blob)

## Recommendation When Ready
Start with **Option A** (Pic-Time or HoneyBook free trial) to validate the workflow. If Jayden needs custom branding or outgrows it, migrate to **Option C**. Option B is only worth it at higher volume.

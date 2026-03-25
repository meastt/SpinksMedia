# Build Spec: Spinks Media Landing Page

> **Purpose**: A single-page marketing website for **Spinks Media**, a real estate media production company based in St. George, Utah. The design is a faithful recreation of [fourhorsemenmedia.com](https://fourhorsemenmedia.com) — adapted with Spinks Media branding, a southern Utah red rock accent palette, and local market content.

> **Tech Stack**: Next.js 14 (App Router) + Tailwind CSS + Framer Motion + GSAP (ScrollTrigger). Deploy-ready.

> **Brand**: Spinks Media. All placeholder references use `SPINKS_MEDIA` or the brand name directly. The client will provide their own logo, phone number, videos, and photos.

---

## 1. GLOBAL DESIGN TOKENS

### 1.1 Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--color-black` | `#1A1A1A` | Primary background (hero, process section, footer, dark sections) |
| `--color-dark` | `#2B2B2B` | Card backgrounds on dark sections |
| `--color-white` | `#FFFFFF` | Light section backgrounds |
| `--color-off-white` | `#F5F3EF` | Subtle warm white for alternating sections |
| `--color-gold` | `#C4512A` | Primary accent — buttons, highlights, "GO VIRAL" text, icon tints, chart lines. Warm terracotta/burnt sienna inspired by southern Utah red rock sandstone. |
| `--color-gold-light` | `#F5DCD3` | Light sandstone tint for metric card backgrounds — warm pinkish-beige like sun-bleached slickrock |
| `--color-gold-dark` | `#8B3219` | Hover state for buttons, header background — deep red rock shadow tone, like shaded canyon walls |
| `--color-text-light` | `#E8E8E8` | Body text on dark backgrounds |
| `--color-text-dark` | `#333333` | Body text on light backgrounds |
| `--color-muted` | `#888888` | Secondary/caption text |

### 1.2 Typography
| Role | Font | Weight | Size (desktop) |
|---|---|---|---|
| H1 (Hero headline) | **Oswald** (Google Fonts) or similar bold condensed sans | 800 (Extra Bold) | 56–72px, uppercase, tight letter-spacing (-0.02em) |
| H2 (Section headers) | **Oswald** | 700 | 40–48px, uppercase |
| H3 (Card titles) | **Oswald** | 600 | 24–28px |
| Body | **DM Sans** or **Outfit** | 400 | 16px, line-height 1.6 |
| Button text | **DM Sans** | 600 | 14–16px |
| Caption / labels | **DM Sans** | 500 | 12–14px, uppercase, letter-spacing 0.05em |
| Metric numbers | **Oswald** | 700 | 36–48px |

### 1.3 Spacing & Layout
- Max content width: `1280px`, centered
- Section vertical padding: `80–120px`
- Card border-radius: `12–16px`
- Button border-radius: `8px` (pill-ish but not full-round)
- Standard gap: `24px` between cards
- Mobile breakpoint: `768px`

### 1.4 Button Styles
| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary (CTA) | `--color-gold` | `#1A1A1A` (black text) | none | `--color-gold-dark`, slight scale(1.02) |
| Secondary (outline) | transparent | white | 1px solid white | white bg, black text |
| Ghost (dark bg) | transparent | `--color-gold` | 1px solid `--color-gold` | accent bg, black text |

> **Note on naming**: The CSS variable is named `--color-gold` as a legacy convention from the reference site. In Spinks Media's build, this variable renders as **terracotta red rock** (`#C4512A`), not gold. All references to "gold" in this spec mean the red rock accent color.

Buttons have a small calendar/link icon to the left of "Book a Shoot" text (use Lucide `CalendarDays` icon).

---

## 2. SECTION-BY-SECTION BREAKDOWN

### 2.0 HEADER / NAVIGATION BAR
- **Height**: ~64px
- **Background**: `--color-gold-dark` (deep red rock tone, ~`#8B3219` — a dark warm brownish-red like shaded canyon sandstone, NOT bright red)
- **Position**: `sticky`, top: 0, z-index: 50
- **Layout**: Flexbox, `justify-between`, `align-center`, full-width with `max-w-[1280px]` inner container
- **Left side**: Nav links — "Services", "Portfolio", "About", "Listing Media" — white text, DM Sans 500, 15px, horizontal row, ~32px gap
- **Center**: Logo SVG, white, approximately 200px wide. Use "SPINKS MEDIA" wordmark or provided logo file.
- **Right side**: Phone number with a small phone icon `(XXX) XXX-XXXX` in white, then a **"Book a Shoot"** button (red rock accent background `--color-gold`, black text, small calendar icon left of text)
- **Mobile**: Hamburger menu, logo centered, book button stays visible

### 2.1 HERO SECTION
- **Background**: Dark (`--color-black`) with a fullscreen background video (looping, muted, autoplay). The video is a cinematic speed-ramped montage of real estate content work. Use a `<video>` element with `object-fit: cover`, `opacity: 0.4–0.5` to keep text readable.
- **Layout**: Centered text overlay
- **Top tag**: Small accent-outlined pill badge — location pin icon + "St. George Based Real Estate Media Company" in white caps
- **H1**: Two lines:
  - Line 1: `CINEMATIC CONTENT` in white + `THAT WINS` in `--color-gold`
  - Line 2: `LISTINGS AND GETS CLIENTS.` in white
  - All uppercase, Oswald 800, ~56–64px
- **Selling points**: 3 rows below headline, each with a small icon (play-square, pencil, user — use Lucide icons in gold) + descriptive text in white:
  1. "Cinematic 45–60s videos: built to stop the scroll."
  2. "Hooks + scripts included: we tell you exactly what to say."
  3. "Made for agents: branding videos, short-form reels, photos, drone."
- **Buttons row**: Two buttons side by side:
  - "Explore Features" — secondary/outline style (white border, white text)
  - "Our Packages" — primary accent style
  - Both link to `#services`
- **Bottom**: Phone mockup image — a hand holding an iPhone at an angle, bottom of hero, overlapping into the next section. The phone shows a freeze-frame from the video reel. This is a PNG with transparent background positioned `absolute` or `relative` at the bottom-center of the hero, extending ~50% below the hero fold.

### 2.2 SCROLL-DRIVEN PHONE SECTION ⚡ (THE COMPLEX ONE)

**This is the signature interactive section.** It occupies a large scroll distance (~3–4 viewport heights) but the phone stays pinned in place while content around it transitions.

#### Technical Architecture:
- **Container**: A tall wrapper div (height: ~400vh) with `position: relative`
- **Pinned inner**: Use GSAP ScrollTrigger `pin: true` to pin a flex-centered layout containing the phone + surrounding elements for the duration of the scroll
- **Phone element**: Static PNG of a hand holding an iPhone, centered. The phone frame is a transparent PNG with a "screen" area where video content is composited behind/inside using `clip-path` or absolute positioning within the phone frame
- **Phone screen content**: 3 different looping `<video>` elements that crossfade as the user scrolls through 3 "phases"

#### Structure — 3 Scroll Phases:
Each phase occupies ~1 viewport of scroll distance. As the user scrolls:

**Phase Header (persistent above phone):**
- H2: `WE MAKE LISTINGS` (white) + `GO VIRAL` (gold), Oswald 700, ~40px, centered
- Subhead: "Scroll-stopping content that drives engagement." — DM Sans 400, ~16px, muted text

**Phase 1** (scroll 0–33%):
- Video 1 plays in phone screen (real estate lifestyle CTA montage)
- Flanking metric cards animate IN from behind the phone (scale 0→1, opacity 0→1):
  - **Left card**: Rounded white card (~260×160px), light gold tint bg (`--color-gold-light`), contains: gold heart icon + "Likes" label + **"2,200"** in Oswald 700 + small gold sparkline chart SVG
  - **Right card**: Same style — eye icon + "Views" label + **"78,926"** + sparkline
- **Floating social icons**: 4 small (~48px) white rounded-square icons with gold icons (eye, heart, chat-bubble, share-arrow) positioned in a loose diamond/scattered arrangement around the phone. These fade in with a staggered delay.

**Phase 2** (scroll 33–66%):
- Phase 1 metric cards and icons animate OUT (reverse of entrance)
- Video crossfades to Video 2 (different presenter/CTA)
- Phase 2 metric cards animate IN:
  - Left: heart + "Likes" + **"756"** + sparkline
  - Right: eye + "Views" + **"20,602"** + sparkline
- Same 4 floating icons rearrange/re-enter with new positions

**Phase 3** (scroll 66–100%):
- Phase 2 elements out, Video 3 in
- Left: heart + "Likes" + **"6,700"** + sparkline
- Right: eye + "Views" + **"181,705"** + sparkline
- Same floating icon pattern

**After Phase 3**: The pinning releases, phone scrolls away naturally, next section enters.

#### Metric Card Spec:
- Size: ~260px wide, ~160px tall
- Border-radius: 16px
- Background: `--color-gold-light` with a subtle diagonal accent gradient stripe (like a faint sandstone ribbon across the top-right corner at ~30° angle)
- Shadow: `0 4px 24px rgba(0,0,0,0.08)`
- Icon: ~20px, accent filled (`--color-gold`)
- Label: "Likes" or "Views" — DM Sans 500, 13px, `--color-muted`
- Number: Oswald 700, 36px, `--color-text-dark`
- Sparkline: Small inline SVG line chart, accent stroke (`--color-gold`), no fill, ~80px wide, positioned bottom-left of card

#### Floating Icon Spec:
- Size: 48×48px
- Background: white
- Border-radius: 12px
- Shadow: `0 2px 12px rgba(0,0,0,0.06)`
- Icon: accent color (`--color-gold`), ~24px (Lucide: Eye, Heart, MessageCircle, Share2)
- Positioned absolute, scattered asymmetrically: top-left, top-right, bottom-left, bottom-right of the phone — not symmetrical grid, slightly offset/organic

#### Implementation Notes:
```
GSAP ScrollTrigger approach:
1. Outer container: height 400vh
2. Inner pinned container: height 100vh, display flex, align-items center, justify-content center
3. ScrollTrigger({ trigger: outerContainer, start: "top top", end: "bottom bottom", pin: innerContainer, scrub: true })
4. Create a GSAP timeline with 3 phases:
   - 0-0.33: fade in phase 1 elements
   - 0.33-0.34: crossfade videos + swap metric data
   - 0.34-0.66: phase 2 elements visible
   - 0.66-0.67: crossfade again
   - 0.67-1.0: phase 3 elements visible, then fade all out at end
```

### 2.3 PROCESS SECTION — "It's As Easy As One, Two, Three"
- **Background**: `--color-black` (dark)
- **Header**: H2 "IT'S AS EASY AS ONE, TWO THREE." — Oswald 700, white, centered
- **Subhead**: "Learn more about our process." + "Explore Features" gold text link
- **Cards**: 4 cards in a horizontal row (grid, 4 columns on desktop, stacked on mobile)
- **Each card**:
  - Background video thumbnail (short looping clip with dark overlay)
  - "Step X" — gold text, DM Sans 500, 13px uppercase
  - Card title — Oswald 600, 22px, white (e.g., "Book Your Shoot", "Select Package", "Shoot Day", "Media Delivery")
  - Description — DM Sans 400, 14px, muted gray
  - Border-radius: 16px
  - Aspect ratio: ~3:4 (portrait)

### 2.4 PACKAGES SECTION — "What We Offer"
- **Background**: `--color-off-white` (warm light)
- **id**: `services` (anchor target for nav links)
- **Header**: H2 "WHAT WE OFFER" — Oswald 700, dark, centered
- **Subhead**: Descriptive line about serving local real estate pros
- **Layout**: 4 cards in a row — but at STAGGERED vertical offsets (card 1 at 0px, card 2 at -20px, card 3 at -40px or similar, creating an ascending staircase effect left to right). On mobile, stack vertically.

#### Package Card Spec:
- Width: ~280px each (fluid in grid)
- Background: white
- Border-radius: 16px
- Shadow: subtle
- Top section: Background image (dark real estate photo, ~120px tall) with package name overlay
- **Name badge**: Oswald 600, 20px, white on dark image
- **Service count**: "X Services" — small accent pill
- **Expandable description**: A "Read More / Show Less" toggle for the package overview paragraph
- **Price**: Oswald 700, 28px, dark — e.g., "$750.00"
- **Service list**: Each service is an accordion item:
  - Collapsed: Service name + down-arrow chevron icon
  - Expanded: Service name (bold) + description paragraph below
  - Thin divider line between items
  - Chevron rotates 180° on expand
  - Use `--color-gold` for the chevron icon
- **CTA button**: "Explore Package" — gold button, full-width at bottom of card
- **"Most Popular" badge**: The 3rd card ("Full Stable" equivalent) gets an accent-colored "Most Popular" tag at the top

#### Package Data (use as placeholder structure):
1. **Starter** — $750 — 5 services
2. **Signature** — $1,100 — 8 services  
3. **Full Stable** (Most Popular) — $1,425 — 10 services
4. **Custom** — Custom pricing — X services

### 2.5 OUT-OF-STATE PACKAGES
- **Background**: `--color-black`
- **Header**: H2 — "NOT BASED IN `SOUTHERN UTAH`?" line 1, "NOT A PROBLEM" line 2 — Oswald 700, white, "SOUTHERN UTAH" in `--color-gold`
- **Subhead**: "We offer out of state packages."
- **Layout**: 3 cards in a row, same accordion-style as above

#### Card spec: Same as 2.4 but:
- Dark card background (`--color-dark`)
- White text
- Gold accents
- Package names: "Package 01", "Package 02" (Most Popular), "Package 03"
- Prices: $6,500 / $7,500 / $8,500
- Each has 6–8 expandable service bullet points
- "Most Popular" badge on Package 02

### 2.6 SOCIAL PROOF GRID — "Trusted By Realtors Nation-Wide"
- **Background**: `--color-off-white`
- **Header**: H2 "TRUSTED BY REALTORS NATION-WIDE" — Oswald 700, dark, centered. Optional: gold underline accent
- **Layout**: 2 rows × 7 columns grid of realtor profile cards (14 total)
- **Each card**:
  - Circular or rounded-square headshot image (~100×100px)
  - Name below — DM Sans 600, 14px
  - Instagram icon + follower count — small, muted
  - Entire card is a link to their IG profile
  - On hover: slight scale(1.05) + shadow increase
- **Mobile**: Horizontally scrollable row or 2×3 grid

### 2.7 METRICS BANNER
- **Background**: `--color-off-white` — 4 cards in a row
- **Card spec**: Square-ish (~1:1 aspect), white bg, rounded corners, subtle shadow
- Each card has:
  - Background decorative element: faded accent diagonal stripe/gradient (same style as the phone metric cards — warm sandstone tint)
  - Large number: Oswald 700, 40px, dark (e.g., "$1 Billion", "700+", "5,000,000+", "24")
  - Label below: DM Sans 400, 14px, muted (e.g., "Filmed in Real Estate", "Happy Clients", "Monthly Views", "Months Active")
- **Animation**: Numbers count-up on scroll into view using Framer Motion or GSAP

### 2.8 TESTIMONIALS SLIDER
- **Background**: `--color-off-white`
- **Header**: H2 "WHAT CUSTOMERS SAY AFTER THE SHOOT" — Oswald 700, dark, centered
- **Layout**: Horizontal card slider (5 cards), auto-width, CSS scroll-snap or Framer Motion drag
- **Each testimonial card**:
  - Width: ~400px (shows ~2.5 cards at once on desktop)
  - Background: white
  - Border-radius: 16px
  - Top: 5-star rating in gold (SVG stars)
  - Body: Testimonial text, DM Sans 400, 15px, dark. Truncated with "read more" if long.
  - Bottom: Headshot image (small circle) + name (DM Sans 600) + subtitle/role
  - Shadow: `0 4px 20px rgba(0,0,0,0.06)`
- **Nav**: Left/right arrow buttons or dot indicators below

### 2.9 FAQ SECTION
- **Background**: `--color-off-white`
- **Header**: H2 "FREQUENTLY ASKED QUESTIONS" — Oswald 700, centered

#### Topic Button Layout (Pyramid):
3 rows of topic filter buttons, arranged in an inverted pyramid (narrow at top, wide at bottom):
- **Row 1** (top, narrowest): 3 buttons with shorter names — e.g., "General Questions", "Booking & Scheduling", "Pricing & Packages"
- **Row 2** (middle): 3 buttons with longer names — "Video & Content Production", "Turnaround & Delivery", "Revisions & Edits"
- **Row 3** (bottom, widest): 4 buttons — "Licensing & Usage", "Shoot Day Expectations", "Payments & Policies", "Results & Growth"
- All centered, creating a pyramid/fan shape

#### Button Spec:
- Background: white (inactive) / `--color-gold` (active)
- Text: dark (inactive) / black (active)
- Border-radius: full pill (rounded-full)
- Border: 1px solid `--color-muted` (inactive) / none (active)
- DM Sans 500, 13px
- Transition: 200ms background-color

#### FAQ Cards:
- When a topic is clicked, 2–3 FAQ accordion cards appear below
- Each card: full-width horizontal bar, white bg, rounded corners, shadow
- Collapsed: Question text (DM Sans 600, 16px) + gold chevron-down on right
- Expanded: Question + answer paragraph below (DM Sans 400, 15px, muted)
- Animation: smooth height transition (Framer Motion `AnimatePresence` + `motion.div` with `layout`)

#### "Still Have Questions?" Bar:
- Below the FAQ cards
- Full-width bar, `--color-black` bg
- Left-aligned text: "Still have questions?" + smaller "Still can't find the answer? Contact us here:"
- Right side: Gold "Contact Us" button
- Border-radius: 12px

### 2.10 CTA SECTION — "Become The Agent On Instagram"
- **Background**: `--color-black`
- **Layout**: Large horizontal card/banner, ~full-width with padding
- **Left side**: 
  - H2: "BECOME THE AGENT ON INSTAGRAM" — Oswald 700, white
  - Body text: "In 48 hours, we film 45-second branding videos..." — DM Sans 400, light gray
  - Gold "Book a Shoot" button
- **Right side**: 
  - Mockup of an IG profile — a screenshot-style image showing a realtor's IG bio, profile pic, and grid. White card with rounded corners. This is a static image placeholder.
  - Next to it: A portrait photo of the featured realtor

### 2.11 FOOTER
- **Background**: `--color-black`
- **Layout**: 3-column grid
- **Left column**: 
  - Decorative gold line/divider image (horizontal flourish)
  - Large logo (white, ~240px wide)
  - Gold "Book a Shoot" button below logo
- **Center column**: Empty (spacer)
- **Right column**: Two vertical link lists side by side:
  - **"Quick Links"** header (gold, uppercase, small) — then: Home, Services, Portfolio, Team, Listing Media, Contact (white links, DM Sans 400, 14px, stacked vertically)
  - **"Socials"** header — then: YouTube, Discord, Instagram, Twitter/X (white links)
- **Bottom bar**: "© 2026 Spinks Media. All rights reserved." centered, muted text + Privacy Policy / Terms links

---

## 3. ANIMATIONS & INTERACTIONS SUMMARY

| Element | Trigger | Animation |
|---|---|---|
| Hero text | Page load | Staggered fade-up, 0.1s delay between lines |
| Hero selling points | Page load | Fade-in from left, 0.2s stagger |
| Hero buttons | Page load | Fade-up after text, 0.4s delay |
| Phone section (2.2) | Scroll | GSAP ScrollTrigger pin + scrub timeline |
| Phone metric cards | Scroll phase | Scale + opacity from 0 to 1, ease: power2.out |
| Phone floating icons | Scroll phase | Staggered scale-in, slight rotation |
| Phone videos | Scroll phase | Crossfade opacity (video 1 out, video 2 in) |
| Process cards (2.3) | Scroll into view | Staggered fade-up from bottom |
| Package cards (2.4) | Scroll into view | Staggered fade-up with 0.1s delay, respecting stagger offset |
| Metric numbers (2.7) | Scroll into view | Count-up animation from 0 to target |
| Testimonial slider (2.8) | User drag/click | Horizontal scroll with snap |
| FAQ topic buttons (2.9) | Click | Active state swap, accent fill |
| FAQ cards (2.9) | Click topic | AnimatePresence fade-in, layout animation |
| FAQ accordion | Click card | Height expand with chevron rotation |
| All sections | Scroll into view | Subtle fade-up (opacity 0→1, translateY 30→0) with IntersectionObserver or Framer Motion `whileInView` |

---

## 4. RESPONSIVE BEHAVIOR

### Desktop (>1024px)
- Full layouts as described
- 4-column grids for packages and process
- Phone section with full flanking metric cards

### Tablet (768–1024px)
- 2-column grids for packages
- Phone section: metric cards scale down, may stack below
- Testimonial slider shows 2 cards

### Mobile (<768px)
- Single column everything
- Header becomes hamburger menu + logo + book button
- Hero text scales to 36–40px
- Phone section: phone centered, metric cards stack below as a 2-up grid, no floating icons
- Process: single column stacked cards
- Packages: single column
- Social proof grid: horizontal scroll
- FAQ pyramid: buttons wrap naturally (no forced pyramid — just centered flex-wrap)

---

## 5. ASSET REQUIREMENTS (CLIENT TO PROVIDE)

These are placeholders the developer should wire up with easy-to-swap paths:

| Asset | Format | Notes |
|---|---|---|
| Logo (light) | SVG | White version for dark backgrounds |
| Logo (dark) | SVG | Dark version for light backgrounds |
| Hero background video | MP4 | 15–30s looping cinematic montage, 1920×1080 |
| Phone frame image | PNG (transparent bg) | Hand holding iPhone, ~600px wide |
| Phone screen videos (×3) | MP4 | Vertical 9:16, each 15–30s looping |
| Process step videos (×4) | MP4 | Short loops for process card backgrounds |
| Realtor headshots (×14) | JPG/PNG | For social proof grid, square crop |
| Testimonial avatars (×5) | JPG/PNG | Small circles |
| IG profile mockup image | PNG | For CTA section |
| Featured realtor photo | JPG/PNG | For CTA section |
| Package header images (×4) | JPG | Dark real estate photos for card headers |

---

## 6. FILE STRUCTURE

```
/app
  /page.tsx                  ← Main landing page, imports all sections
  /layout.tsx                ← Root layout with fonts, metadata
  /globals.css               ← CSS variables, base styles, Tailwind
/components
  /Header.tsx                ← Sticky nav bar
  /HeroSection.tsx           ← 2.1
  /PhoneScrollSection.tsx    ← 2.2 (GSAP ScrollTrigger logic here)
  /ProcessSection.tsx        ← 2.3
  /PackagesSection.tsx       ← 2.4
  /OutOfStatePackages.tsx    ← 2.5
  /SocialProofGrid.tsx       ← 2.6
  /MetricsBanner.tsx         ← 2.7
  /TestimonialsSlider.tsx    ← 2.8
  /FAQSection.tsx            ← 2.9
  /CTASection.tsx            ← 2.10
  /Footer.tsx                ← 2.11
  /ui
    /AccordionItem.tsx       ← Reusable expand/collapse for packages + FAQ
    /AccentButton.tsx          ← Primary CTA button component (uses --color-gold red rock accent)
    /OutlineButton.tsx       ← Secondary button
    /MetricCard.tsx          ← Reusable for phone section + metrics banner
    /FloatingIcon.tsx        ← Small white-square icon used in phone section
/data
  /packages.ts               ← Package names, prices, services array
  /outOfStatePackages.ts     ← Out-of-state package data
  /testimonials.ts           ← Testimonial text, names, images
  /faq.ts                    ← FAQ topics + questions/answers keyed by topic
  /socialProof.ts            ← Realtor names, IG handles, follower counts, images
  /metrics.ts                ← Stat numbers and labels
/public
  /videos/                   ← All MP4s
  /images/                   ← All PNGs, JPGs, SVGs
```

---

## 7. DEPENDENCIES

```json
{
  "dependencies": {
    "next": "^14",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^11",
    "gsap": "^3.12",
    "@gsap/react": "^2",
    "lucide-react": "^0.383",
    "tailwindcss": "^3.4",
    "clsx": "^2"
  }
}
```

**Google Fonts to load** (in `layout.tsx` via `next/font/google`):
- Oswald: weights 600, 700, 800
- DM Sans: weights 400, 500, 600

---

## 8. CRITICAL IMPLEMENTATION NOTES

1. **Phone section is the hardest part.** Get the GSAP pin + scrub working first as an isolated prototype before integrating. The phone PNG must have a transparent screen area OR use a mask/clip-path to composite the video behind it.

2. **Video performance**: Use `<video preload="metadata" muted loop playsinline>` for all videos. Lazy-load phone screen videos — only start playing when the section enters viewport. Keep hero video compressed (<5MB).

3. **Accordion component**: Build one reusable `AccordionItem` that handles the expand/collapse with height animation. Use it in both Packages and FAQ sections.

4. **FAQ state**: When a topic button is clicked, filter the FAQ array by topic and render only those 2–3 questions. Use `AnimatePresence` to animate the swap.

5. **Scroll animations**: Use Framer Motion `whileInView` for simple fade-ups on most sections. Reserve GSAP only for the phone scroll section (2.2) where you need precise scrub-linked timeline control.

6. **The staggered package cards**: Use CSS `transform: translateY()` with different values per card index to create the ascending staircase look. Don't overcomplicate — a simple negative margin-top increasing per card works.

7. **Metric count-up**: Use a simple `useEffect` + `requestAnimationFrame` or Framer Motion `useMotionValue` + `animate` to count from 0 to target when in view.

8. **Mobile phone section fallback**: On mobile, skip the GSAP pin entirely. Just show the phone centered with 3 stacked sections below it (each with their metric cards), scrolling normally. The pin effect on mobile is bad UX.
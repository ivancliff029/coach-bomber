# Bomber Style Fitness and Boxing

Website for Bomber Style Fitness and Boxing — Naguru, Kampala. Built with
Next.js 14 (App Router), plain JavaScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Where everything lives

```
app/
  layout.js        — fonts, <head> metadata, wraps every page
  page.js           — the homepage, just assembles the section components below
  globals.css       — Tailwind + a handful of base styles (selection color, focus ring, noise texture)

components/
  Header.jsx        — sticky nav bar + mobile menu
  Hero.jsx          — top banner with headline and CTA buttons
  SessionFlow.jsx   — the 4-step "how a class runs" section
  Programs.jsx      — the class/program cards
  Testimonials.jsx  — member quotes
  CoachCTA.jsx       — the "talk to Coach" WhatsApp/call section
  Location.jsx       — address, hours, directions link
  Footer.jsx          — footer nav + contact
  WhatsAppButton.jsx  — the floating WhatsApp bubble shown on every page
  graphics/ImpactMark.jsx — the decorative SVG behind the hero headline

lib/
  constants.js      — ALL editable content lives here: the coach's phone
                      number, WhatsApp link, nav links, program copy,
                      testimonials, address and hours. Change the site's
                      text/contact info here without touching any component.
```

## Common edits

- **Change the coach's phone number:** edit `COACH_PHONE_INTL` and
  `COACH_PHONE_DISPLAY` in `lib/constants.js`. Every WhatsApp/call button on
  the site reads from this one place.
- **Edit programs, testimonials, hours, nav links:** all in
  `lib/constants.js`.
- **Change colors/fonts:** edit `tailwind.config.js` (`clay`, `ochre`,
  `sand`, `charcoal` color tokens) and the font imports in `app/layout.js`.
- **Add a real photo to the hero or location section:** drop the image in
  `public/`, then use Next's `<Image>` component inside `Hero.jsx` or
  `Location.jsx`.

## Deploying

This is a standard Next.js app — it deploys as-is to Vercel, Netlify, or any
Node host. Push it to GitHub and import it on vercel.com for the quickest
path to a live URL.

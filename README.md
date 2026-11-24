# Energy Mining Academy — UI/UX Design (plain HTML)

Design-only repo for **Energy Mining Academy** (Sayful Alvi) — the full UI/UX in plain HTML/CSS/JS, no build step, no framework. Open any page directly in a browser.

**Live design:** https://mrbahar666.github.io/energymining-academy-ui-ux/
**Live plan:** [DESIGN-PLAN.md](DESIGN-PLAN.md)
**Main app (separate repo, Next.js):** https://github.com/mrbahar666/energymining-academy

## What this is

The owner ordered the UI/UX to be designed here first — in a public, plain-HTML repo — before it is built into the main site. Every page is designed mobile-first, in Bangla first (English alongside), following Sayful Alvi's brand guideline exactly.

- **Courses sell first, books sell second.** Assessment is the free heart of the site — its own menu section and exactly one homepage section, never the hero.
- **Assessment is completely free** — no paywall cues, no price on any assessment.
- **Books** are a full Rokomari-style shop (search/filter/sort, PDF / hard copy / audio formats, cart → order confirmation). **Courses** are a multi-teacher platform (Four Energy: Voice / Body / Mind / Purpose).

## How to view it

Open `index.html` in any browser, or visit the GitHub Pages link above. No install, no build, no server needed.

## Brand

- Colours (only these): Navy `#032C42` (60%), Off-white `#F6F3EC` (25%), Gold `#C9A24B` (10%), Charcoal `#1C1C1E` (~5%). No gradients, no pure white/black. Gold text on light backgrounds is forbidden by the guideline — gold is for lines, icons and shapes only.
- Fonts (supplied files only, as-is): **Domaine Display** (main — headlines/brand) and **Synonym** (secondary — body/UI). No Google Fonts. Neither font has Bengali glyphs; Bangla renders in the device system font.
- Font licences: Domaine Display files are from OnlineWebFonts (CC BY 4.0 — credit required; see `fonts/DOMAINE-LICENSE.txt`). Synonym is under the ITF Free Font License (see `fonts/SYNONYM-LICENSE.txt`).

## Structure

```
index.html            Bangla home (shopfront-led)
en/                   English pages
courses.html          Course catalogue (Four Energy)
books.html            Bookshop (Rokomari-style)
cart.html             Cart → order-confirmation.html (no payment — owner order)
self-test.html        Free self-tests (+ flow + result)
human-assessment.html Free Human Assessment (210-question flow design)
teachers.html         Teachers + teacher dashboard
login.html / signup.html   Password-led login (OTP secondary); phone-focus signup + email
my-courses.html / my-orders.html / my-results.html
admin.html            Advanced-level admin design
about.html / help.html / legal.html
css/                  design-system.css + pages.css
js/                   main.js (menu, toggle, cart, motion)
assets/               placeholder cover art in brand colours (marked placeholder)
fonts/                Domaine Display + Synonym woff2 (supplied files, as-is)
docs/                 research-bd.md, research-international.md
DESIGN-PLAN.md        the living plan — research, decisions, progress
```

## Rules

No invented content (4 real programmes, 1 real book so far, prices unknown — placeholders are marked). No fake testimonials, counters or timers. No ranking or total score on assessments, no diagnosis labels. Light mode only. Motion on every button and card.

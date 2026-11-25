# Energy Mining Academy — Redesign v3 Design Spec ("The Bookmark")

**Status:** design spec only. No code, CSS or HTML was changed; nothing was
committed, pushed or deployed. The v3 build rounds work from this document.
**Date:** 2026-11-25 · **Author:** v3 design-concepts pass (Claude Opus 5.5)
**Brief:** DESIGN-PLAN.md §11 + the v3 design-concepts prompt.
**Numbering:** sections §3–§13 use the same numbers as the brief's sections, so
they can be checked one against the other. Brief §1–§2 (the situation and the
skills) are covered in §0. §14 is the verification log.

---

## 0. What this spec is built on

### 0.1 Sources read in full

- `DESIGN-PLAN.md` (149 lines): §2 brand rules, §10 the v2 rejection log, §11
  the v3 brief.
- `docs/redesign-v2-design.md` (587 lines): the v2 spec, used as the
  **anti-reference** (what not to repeat).
- `/home/hatch/workspace/energymining-academy-uiux-draft/Sayful_Alvi_Brand_Colors__2.txt`
  (47 lines): the client guideline, quoted in §9.1.
- `index.html` (live v2 home, 350 lines) and `en/index.html` (339 lines):
  the source of every Bangla/English string reused here (all verified
  verbatim, §14.3).
- `css/design-system-v2.css` (tokens, surfaces, `@font-face`) and the five
  `assets/cover-*.svg` files (navy ground with off-white and gold geometry).
- `fonts/*.woff2`: inspected with fontTools for glyph coverage and advance
  widths. The wordmark sizes in §4 come from **measured** Domaine Display
  widths, not guesses (§14.2).

### 0.2 Skills: what was applied, honestly

| Skill | Used how | Where it does NOT apply |
|---|---|---|
| `frontend-design` | Subject-grounded point of view (books, mining the self, trust); boldness spent in ONE place (the gold bookmark ribbon, §3); none of its listed tells (no eyebrow labels, no 01/02/03, no single-word accent, no `→` on links, no middle-dot meta strings in chrome); plan, then review against the brief (§3.3) | — |
| `canvas-design` | The emblem was treated as a crafted mark, not a glyph: 5 candidate marks were drawn and **rendered in Chromium at 16/32/48/96px** and compared; 4 were rejected on sight (§5.5) | Its `.png/.pdf` art output is not a deliverable here; only its craft discipline was used |
| `impeccable` | Redesign **replaces** the v2 look and does not polish it. Persuade mode for the home; Operate mode for shop/cart/account/admin; Read mode for legal/help. Craft-floor rules applied: no eyebrows, no hard offset shadows, no colored `border-left` above 1px, browser surfaces themed (selection, focus, scrollbar) | `impeccable context` ran and returned `NO_PRODUCT_MD` / `BUILD_INIT_REQUIRED`. Its `concept-seed` refused to roll without PRODUCT.md. Init needs an owner interview, which this brief forbids, and the brief allows only one output file. **Substitution:** DESIGN-PLAN.md §2–§6 + §11 serve as product truth, and the brief's own candidate list replaced the dice roll |
| `web-design-guidelines` | Its rule set (focus visible, ≥48px targets, reduced motion, semantic links not buttons for navigation, `aria-current`) is applied in §6, §10 | It requires a live fetch of the Vercel rules before a **code review**. This is a design pass with no code yet, so it was not fetched. It belongs to the build round's review step (§14.5) |
| `theme-factory` | Only its discipline: one theme, applied consistently, contrast checked per surface | Its 10 preset themes do **not** apply. The client guideline IS the theme |
| `brand-guidelines` | Not used | It is **Anthropic's** brand, not this client's. The Sayful Alvi guideline wins everywhere |

### 0.3 Claude run history

A single Claude Opus 5.5 session: no retries, no limit errors. All the
rendering for the emblem checks went to `/tmp/v3mark/`, outside the repo.
The only repo write is this file.

---

## 3. The one direction — "The Bookmark"

### 3.1 Thesis (one line)

**Every page opens like a navy book cover, with a gold foil bookmark ribbon
hanging from its top edge. The ribbon carries the logo.**

### 3.2 Why this, for this client

- **It is the guideline's own recipe.** "Navy: Main background, logo,
  headline, button, book cover" and "Navy background: Off-white text, Gold
  highlight". The masthead is navy (trust). The logo sits on gold (gold = "result
  dey"), as a single foil stamp.
- **It is the subject.** The academy sells books and courses about going deep
  into the self. A bookmark means "where you are in your journey". The emblem
  inside it is a gold vein mined upward through a navy block to a gem: energy
  mining, literally (§5).
- **It solves the real-logo problem.** The guideline names navy as the logo
  colour. A navy logo disappears on a navy header and is weak on off-white
  without a frame. Navy on gold computes to **6.07:1** (§9.2), so a future
  one-colour navy logo drops into the gold ribbon and reads at once.
- **It is ONE bold move.** Everything else (nav, footer columns, cards) is quiet
  and disciplined, so the ribbon is what people remember after one look.

### 3.3 Candidates considered, and the verdict

| Candidate | Verdict | Reason |
|---|---|---|
| (a) "Cover Plate": navy plate holding the brand on an off-white header | Rejected | A navy block inside an off-white bar is the same split as v2 Concept C (navy spine block + off-white bar). The owner would read it as v2 again |
| (b) "Gold Seal": gold square on an **off-white** header | Rejected (colour) | The gold block edge against off-white is **2.16:1**, below WCAG's 3:1 for meaningful non-text shapes, so the seal would look faded and soft. On navy the same gold is 6.07:1. Its good idea, gold as a structural shape, is kept |
| (c) "Tall Masthead": 96px navy masthead, big lockup | Adapted | Its height and navy ground are kept. Its "big emblem in the masthead" became the hanging ribbon, which makes it unlike v1's and v2 B's navy bars |
| **Chosen: (b)+(c) fused = "The Bookmark"** | **Adopted** | Navy masthead (c) + gold structural shape (b), hung **outside** the bar's box so it is a bookmark, not a bar or a block |

### 3.4 How it differs from v1 and v2

| | v1 (rejected) | v2 live hybrid (rejected) | **v3 "The Bookmark"** |
|---|---|---|---|
| Header | Navy, 3 stacked centred rows (utility strip, brand, nav), ~170px | Off-white one row 72px + 2px gold rule (desktop); 56px mini-split (mobile) | **One navy row, 96px desktop / 64px mobile. A gold ribbon hangs from the top edge 16px past the bar, holding the logo slot.** No rules, no utility strip |
| Brand | Text wordmark | Text wordmark only (EMA initials on mobile) | **Drawn emblem in a logo slot + 2-line Domaine wordmark** |
| Current page | — | 2px navy underline | **Off-white filled plate (4px radius) with navy text**: no underline |
| Footer | 3 bands navy/light/navy | Navy, 3 door cards, giant Domaine wordmark `clamp(3rem,11vw,9rem)` | **Navy colophon: the ribbon hangs again from the footer's top edge as the publisher's device; 32px wordmark; gold group headings.** No door cards, no giant wordmark |
| Mobile nav | Slide menu | Fixed 5-tab bottom bar + "আরও" sheet | **No bottom bar. A full-screen paper (off-white) sheet drops from under the navy bar; BN/EN first** |
| Cards | Border-only, zero shadow | Off-white, 12px radius, diffuse navy-alpha shadow | **Mostly navy "cover" cards on paper, 4px radius, a "shelf" shadow (tight contact + drop below)** |
| Radius | Varied | 12 / 10 / pill | **One radius: 4px** (0 for bands and the ribbon) |
| Bold moment | — | Giant footer wordmark; tab bar | **The hanging gold bookmark** (header + footer) |

---

## 4. The logo slot (the heart of v3)

### 4.1 Geometry

The slot always sits inside the **ribbon**: a gold (`#C9A24B`) shape whose
top edge is flush with the very top of the page and whose bottom has a V-notch.

| | Desktop + tablet (≥768px) | Mobile (<768px) |
|---|---|---|
| Header bar height | 96px | 64px |
| Ribbon (W × H) | **96 × 112px** (hangs 16px below the bar) | **56 × 80px** (hangs 16px below the bar) |
| V-notch depth | 12px (apex at y=100) | 10px (apex at y=70) |
| **Logo slot (W × H)** | **64 × 64px** at x=16, y=16 inside the ribbon | **40 × 40px** at x=8, y=12 inside the ribbon |
| Clear space: top / left / right | 16 / 16 / 16px | 12 / 8 / 8px |
| Clear space: bottom (to notch apex) | 20px (to the ribbon sides: 32px) | 18px (to the ribbon sides: 28px) |
| Slot centre line | y=48 = bar centre line | y=32 = bar centre line |
| Ribbon inline start | the container's content start (same x as every H1) | same |

- **Aspect ratio: 1:1.** The slot holds a square **symbol**, not a horizontal
  lockup. The wordmark stays live text next to it (§4.3).
- **Background the slot sits on:** solid gold `#C9A24B`. Nothing else ever sits
  in the ribbon.
- **Ribbon CSS (exact):**

```css
.v3-ribbon {
  inline-size: 96px; block-size: 112px; flex: none;
  align-self: flex-start;           /* top edge flush with the page top */
  display: grid; justify-items: center; align-content: start;
  padding-block-start: 16px; box-sizing: border-box;
  background: var(--v3-gold);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 12px), 0 100%);
  transition: block-size 180ms cubic-bezier(.2,.8,.2,1);
}
.v3-logo { inline-size: 64px; block-size: 64px; display: block; }
@media (max-width: 767px) {
  .v3-ribbon { inline-size: 56px; block-size: 80px; padding-block-start: 12px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 10px), 0 100%); }
  .v3-logo { inline-size: 40px; block-size: 40px; }
}
```

The header must allow the overhang: `.v3-masthead { position: relative;
z-index: 10; overflow: visible; }`. The band below it must not create a stacking
context above the header.

**Hard rule (needed by the ribbon):** the first band under the header on
**every** page is navy (the hero on the home, a navy title band on the inner
pages, §6.6). The ribbon therefore always hangs over navy and never over
off-white (where gold would be 2.16:1).

### 4.2 The swap path (one-file change)

Markup, identical on all 27 pages (pages in `courses/`, `books/` and `en/` use
`../assets/…` and `../index.html`):

```html
<a class="v3-brand" href="index.html" lang="en" translate="no">
  <span class="v3-ribbon">
    <img class="v3-logo" src="assets/logo-placeholder.svg" width="64" height="64"
         alt="" decoding="async" data-placeholder="true">
  </span>
  <span class="v3-wordmark"><span>Energy Mining</span> <span>Academy</span></span>
</a>
```

- **`alt=""` is deliberate.** The link's accessible name is the live wordmark
  text "Energy Mining Academy". An alt text would make screen readers say the
  name twice. This stays true for the real logo as long as the live wordmark
  stays.
- `width="64" height="64"` reserves the box (no layout shift); CSS sizes it to
  40px on mobile.
- On the home page the link also carries `aria-current="page"`.

**To install the real logo:** overwrite `assets/logo-placeholder.svg` with the
real artwork, **keeping the file name**. All 27 pages, the footer ribbon and
the favicon update at once. No HTML or CSS change, no header redesign.
Optional later clean-up (a scoped round, not needed for the logo to work):
rename to `assets/logo.svg` and drop `data-placeholder` from the 27 `<img>`
tags and the favicon link.

**Requirements for the real logo file:**

| | Requirement |
|---|---|
| Format | **SVG preferred** (square artboard, `viewBox="0 0 64 64"` or any square). If only a raster exists: PNG or WebP at **192×192px** (3× the 64px slot), transparent background, **wrapped in an SVG** (`<svg viewBox="0 0 192 192"><image href="data:image/png;base64,…" width="192" height="192"/></svg>`) so the file name and the one-file swap stay the same |
| Colour | A **one-colour navy `#032C42`** version on a transparent background is ideal (6.07:1 on the gold ribbon). A logo with its own solid background also works, since it carries its own ground. A gold-only logo does NOT work on the ribbon (1:1); see §13 Q2 |
| Weight | SVG ≤ **8 KB**; raster-in-SVG ≤ **24 KB** (slow mobile connections; it loads on every page) |
| Inner margin | Keep about 12% (8/64) inner margin in the artwork, as the placeholder does, or the mark will touch the slot edge |
| Never | A horizontal lockup squeezed into the square (see §13 Q3), text-as-logo, pure white or black fills |

### 4.3 Lockup: slot + wordmark + tagline

| Element | Desktop (≥768) | Mobile (<768) | Mobile ≤359px |
|---|---|---|---|
| Ribbon → wordmark gap | 20px | 12px | 12px |
| Wordmark | Domaine Display 400, **26px / 28px**, 2 lines ("Energy Mining" / "Academy"), off-white `#F6F3EC`, `letter-spacing: 0` | **18px / 20px**, 2 lines | **16px / 18px**, 2 lines |
| Measured line widths (fontTools) | "Energy Mining" 171px, "Academy" 109px | 118px / 76px | 105px / 67px |
| Wordmark block height | 56px, vertically centred on y=48 (top 20, bottom 76) against the slot's 16–80 | 40px, centred on y=32 (12–52) = **exactly the slot's 12–52** | 36px, centred on y=32 |
| Tagline "নিজেকে জানা → নিজেকে বদলানো" | **Not in the header.** It lives in the footer lockup (§7.2) and at the bottom of the mobile menu (§6.4). Reason: under a 2-line wordmark inside a 96px bar it would be a cramped 3rd line, and the `→` glyph is missing from both supplied fonts (§14.2) | — | — |

Why the wordmark is 2 lines: a one-line 26px wordmark is 286px wide; stacked
it is 171px. That 115px buys the full desktop nav row (§6.1).

### 4.4 It must never look broken

- The ribbon is CSS, not part of the image. If the SVG ever fails to load, a
  gold bookmark with an empty centre still shows, never a broken-image icon
  inside a box. `alt=""` also suppresses the broken-image glyph.
- The placeholder fills the slot with a complete gold tile, so the ribbon and
  the image are one surface with no visible seam (§5.1).

---

## 5. The placeholder emblem — "The Vein"

### 5.1 Exact file: `assets/logo-placeholder.svg` (NEW, 483 bytes)

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-labelledby="t" data-placeholder="true"><title id="t">Energy Mining Academy placeholder mark</title><rect width="64" height="64" fill="#C9A24B"/><rect x="8" y="8" width="48" height="48" fill="#032C42"/><path d="M8 46H20V32H32V18H40" fill="none" stroke="#C9A24B" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M45 11L52 18L45 25L38 18Z" fill="#C9A24B"/></svg>
```

### 5.2 Every shape, its colour and its meaning

| # | Shape | Geometry (viewBox 0 0 64 64) | Colour | Meaning, and why this colour |
|---|---|---|---|---|
| 1 | Ground tile | rect 0,0 → 64,64 | Gold `#C9A24B` | The foil. It matches the ribbon exactly, so in the header it disappears into the ribbon. As a standalone file (favicon, share image) it is a complete gold tile |
| 2 | The self | rect x=8 y=8 w=48 h=48 (square corners) | Navy `#032C42` | The person: deep, steady, trusted ("Navy bishwash dey"). Square corners = a printed block, a book |
| 3 | The vein | polyline M8,46 → H20 → V32 → H32 → V18 → H40; stroke **4**, butt caps, miter joins | Gold `#C9A24B` | The energy being mined: it enters from the outside world (it starts on the block's left edge, open to the gold ground) and climbs **upward** through the self in three treads and two risers. Gold = "result" |
| 4 | The gem | diamond (45,11) (52,18) (45,25) (38,18); 14 wide × 14 tall | Gold `#C9A24B` | What the mining finds: the gem near the top of the self. The vein's last tread (H40) overlaps the diamond's left point, so vein and gem join with no gap (checked at 192px) |

- **Colours used: 2 of the 4** (gold, navy). Off-white would be 2.16:1 on gold,
  and charcoal is a text colour; neither belongs in a stamped mark.
- **No numbers are claimed.** The three treads are not "three layers" or
  "three stages". The mark asserts no product fact.
- All coordinates are even and the stroke is 4, so every edge lands on whole
  pixels at **32px and 64px** (scale 0.5 and 1). Only the gem's diagonals are
  anti-aliased, as all diagonals are.

### 5.3 How it reads at each size (rendered in Chromium, §14.4)

| Size | What stays | What simplifies |
|---|---|---|
| 96–192px | Everything: square, crisp 90° steps, the gem's points, the 8px gold margin | Nothing |
| 64px (desktop slot) | All four shapes, pixel-exact; the vein is 4px | — |
| 40px (mobile slot) | Navy block, rising gold stair, gem | The vein is 2.5px, edges slightly soft at 1× DPR; crisp at 2×/3× |
| 32px | Block + stair + gem, pixel-exact (vein 2px) | The gem reads as a dot-diamond |
| 16px (favicon) | A navy square with a gold zig-zag rising to a gold point | The vein is 1px; the steps merge into a rising line |

### 5.4 Favicon (one line)

`<link rel="icon" href="assets/logo-placeholder.svg" type="image/svg+xml">`
on every page (with `../` in subfolders): the same file, a gold tile with a navy
block, readable on both light and dark browser tabs. `theme-color` stays
`#032C42`.

### 5.5 Candidates drawn and rejected (rendered side by side at 16/32/48/96px)

1. **Plain stepped seam** (two interlocking navy stair-halves): read as a
   generic "stairs/upgrade" UI icon. Rejected.
2. **Inverted strata + diamond above** (three shrinking bars): read as an
   hourglass or a toilet pictogram at 32px. Rejected.
3. **Block mosaic**: read as a "layout/grid" app icon. Rejected.
4. **Stepped pyramid with lamp tip**: read as a temple/shrine. Rejected for an
   audience of Muslims and non-Muslims alike (no religious-looking forms).
5. **"The Vein"** (seam + gem): the only one that reads as *something found by
   digging upward*. **Adopted.**

---

## 6. Header — full spec

### 6.1 Desktop ≥1240px (one row, 96px)

```
 page top ─────────────────────────────────────────────────────────────────────────────
┌────────┬─────────────────────────────────────────────────────────────────────────────┐ navy #032C42
│▓▓▓▓▓▓▓▓│ Energy Mining     ┌─────┐                                   🛒কার্ট  [লগ ইন] [BN|EN]│ 96px
│▓┌────┐▓│ Academy           │কোর্স│  বই  ফ্রি অ্যাসেসমেন্ট  শিক্ষক  পরিকল্পনা                    │
│▓│mark│▓│                   └─────┘ ← current page = off-white plate, navy text        │
│▓└────┘▓│                                                                             │
└▓▓▓▓▓▓▓▓┴─────────────────────────────────────────────────────────────────────────────┘
 ▓▓▓\/▓▓▓   ← gold ribbon 96×112, hangs 16px over the navy band below (notch 12px)
  navy hero / navy title band continues here …
```

- **Container:** `max-inline-size: 1200px; padding-inline: 24px` → content
  width 1152px.
- **Order (left → right):** ribbon · 20px · wordmark (171px) · 48px · nav ·
  `margin-inline-start: auto` · actions.
- **Nav:** 5 links, in the v2 order and with the v2 hrefs (§12.3): কোর্স
  `courses.html` · বই `books.html` · ফ্রি অ্যাসেসমেন্ট `human-assessment.html` ·
  শিক্ষক `teachers.html` · পরিকল্পনা `personal-project-plan.html`. Each link:
  `min-block-size: 48px; padding-inline: 14px; display: inline-flex;
  align-items: center; border-radius: 4px`; 4px gap between links; text 16px
  / 24px, weight 500, off-white.
- **Current page:** background off-white, text navy (13.13:1),
  `aria-current="page"`. On sub-pages the parent item gets the same plate with
  `aria-current="true"` (courses/*, books/*, cart, order-confirmation → বই;
  self-test* → ফ্রি অ্যাসেসমেন্ট).
- **Hover (not current):** underline 1px off-white, `text-underline-offset:
  8px`, thickness 1px → 2px. No colour change. 180ms.
- **Actions (right cluster, gap 8px):**
  1. Cart: link to `cart.html`, 48px tall, 24px drawn cart icon
     (stroke 1.8, `currentColor`) + label "কার্ট", off-white text, no border.
  2. "লগ ইন": `login.html`, **secondary-on-navy** button (navy fill, 1.5px
     gold border, off-white text), 48px tall, padding 0 18px.
  3. Language: a `<nav aria-label="ভাষা নির্বাচন">` with two **links** BN
     (`index.html` / the same page) and EN (`en/index.html`), each 48×48px.
     The pair has a 1.5px off-white outer border and 4px radius; the active
     half is off-white fill with navy text, the other half navy fill with
     off-white text. The v2 note "ইংরেজি সংস্করণ এখন শুধু হোম পাতায়" stays as
     `aria-describedby` text (visually hidden on desktop, visible in the menu).
- **Width check (estimate):** 96 + 20 + 171 + 48 + nav ≈ 540 + 32 + actions
  ≈ 250 = **≈1157px** against 1152px available. That is too tight to promise, so
  the full row turns on at **≥1240px viewport** (content 1192px). Bangla label
  widths depend on the device's system font. The build must measure at 1240
  and 1440 (§14.5).

### 6.2 Tablet 768–1239px (96px, same ribbon)

The ribbon and the 26px wordmark are unchanged. The nav, "লগ ইন" and BN/EN
move into the menu. Right cluster: cart icon link (48×48, visible label
"কার্ট" kept as `.visually-hidden`) + **"মেনু" button** (secondary-on-navy,
48px tall, drawn 3-line icon 20px + label "মেনু", padding 0 16px).

### 6.3 Mobile <768px (64px)

```
┌──────────────────────────────────────┐ navy, 64px, padding-inline 16px
│▓▓▓▓▓▓│ Energy Mining        ┌───────┐│
│▓┌──┐▓│ Academy              │☰ মেনু ││ 48px button
│▓└──┘▓│                      └───────┘│
└▓▓▓▓▓▓┴───────────────────────────────┘
 ▓▓\/▓▓  ← ribbon 56×80, hangs 16px; notch 10px
```

- Ribbon (56) · 12px · wordmark 18/20 (118px wide) · `auto` · "মেনু" button.
- Width at 360px: 16 + 56 + 12 + 118 + gap 12 + button 88 + 16 = **318px** ✓.
  At ≤359px the wordmark drops to 16/18 (105px).
- Cart, login and language live in the menu (no icon clutter on 360px
  screens).
- **All tap targets ≥48px.** The brand link is 56–96px wide and 64–96px tall.

### 6.4 Mobile/tablet menu (native `<dialog>`, full-screen "paper" sheet)

```
┌──────────────────────────────────────┐ navy 64px bar (repeated inside the dialog;
│▓▓▓▓▓▓│ Energy Mining   [✕ বন্ধ করুন] │  the ribbon stays exactly where it was)
└▓▓\/▓▓┴───────────────────────────────┘
│ off-white #F6F3EC sheet              │
│ ┌────────────────┬─────────────────┐ │ language, 64px tall, full width
│ │ ■■■■ BN ■■■■■■ │       EN        │ │ (active = navy fill, off-white text)
│ └────────────────┴─────────────────┘ │
│ ইংরেজি সংস্করণ এখন শুধু হোম পাতায়      │ charcoal 15px
│ কোর্স                                │ 56px rows, 20px navy,
│ ──────────────────────────────────── │ 1px navy rules between rows
│ বই                                   │ current row: navy fill, off-white text
│ ফ্রি অ্যাসেসমেন্ট                       │
│ শিক্ষক · পরিকল্পনা · আমাদের কথা · সাহায্য │ (one row each; 7 rows total)
│ [■■■■■ লগ ইন ■■■■■] [ সাইন আপ ]      │ primary navy / secondary, 48px
│ [ কার্ট ]                             │
│ নিজেকে জানা → নিজেকে বদলানো              │ tagline, charcoal 16px, at the end
└──────────────────────────────────────┘
```

- Opened by the "মেনু" button (`command="show-modal"`, `commandfor`, as v2,
  plus the click fallback in §13 Q6); closed by "বন্ধ করুন", Esc, or picking a
  link. Background scroll is locked (the existing v2 `toggle`/`close`
  listener pattern, renamed `v3`).
- Focus starts on the active language link.
- Order: language → note → 7 nav items (কোর্স, বই, ফ্রি অ্যাসেসমেন্ট, শিক্ষক,
  পরিকল্পনা, আমাদের কথা `about.html`, সাহায্য `help.html`) → account
  (লগ ইন `login.html`, সাইন আপ `signup.html`, কার্ট `cart.html`) → tagline.
- Sheet colours: off-white + navy + charcoal = 3. The bar is its own component
  (navy + gold + off-white).

### 6.5 States, motion, stickiness

| Item | Value |
|---|---|
| Sticky | **No, the header is static on every size.** A hanging ribbon cannot be sticky without covering content. The v2 sticky bar plus tab bar cost a 390px phone 120px of screen; v3 gives that back. Every nav destination is repeated in the footer |
| Focus on navy | `outline: 2px solid #C9A24B; outline-offset: 3px` (6.07:1) |
| Focus on the brand link | `outline: 2px solid #F6F3EC; outline-offset: 4px` (13.13:1). A gold ring would vanish against the gold ribbon (1:1) |
| Focus in the paper sheet | `outline: 2px solid #032C42; outline-offset: 3px` |
| Brand-link hover/focus (the one header motion) | The ribbon lengthens like a tugged bookmark: `block-size` 112→120px desktop, 80→86px mobile, 180ms `cubic-bezier(.2,.8,.2,1)`. The logo does not move |
| Nav hover | Underline only (above), 180ms |
| Buttons | §10.1 |
| Dialog open | The sheet slides `translateY(-16px)→0` + `opacity 0→1`, 240ms `cubic-bezier(.2,.8,.2,1)`; backdrop navy `rgba(3,44,66,.6)` |
| `prefers-reduced-motion: reduce` | No ribbon growth, no translate; the dialog uses opacity only, 120ms |

### 6.6 Inner-page title band (directly under the header)

Navy band holding the breadcrumb (off-white 15px links, `›` separators),
the H1 (§11), and one line (off-white). Padding: desktop **56px top / 64px
bottom**; mobile **40px / 48px**. The H1 starts at x = the ribbon's left edge;
vertically it clears the ribbon (desktop ribbon bottom 112 < H1 top 152;
mobile 80 < 104). There is no rule between the header and the band. The two
navy areas read as one cover, with the ribbon crossing the seam.

---

## 7. Footer — "The Colophon"

### 7.1 Structure (one navy band, three rows)

```
DESKTOP ≥1024 (container 1200, padding 24)
┌▓▓▓▓▓▓▓▓┬─────────────────────────────────────────────────────────────────────────┐ navy
│▓┌────┐▓│ Energy Mining Academy                  নিজেকে জানার ও শেখার পথে চার        │
│▓│mark│▓│ নিজেকে জানা → নিজেকে বদলানো              এনার্জির কোর্স, বই এবং ফ্রি অ্যাসেসমেন্ট। │
│▓└────┘▓│                                        Trust · Training · Loyalty (gold)  │
 ▓▓▓\/▓▓▓  ← the same ribbon, flush with the footer's TOP edge (the publisher's device)
│                                                                                  │ 56px
│ শিখুন (gold)     বই (gold)        নিজেকে জানা (gold)  অ্যাকাউন্ট (gold)   একাডেমি (gold)   │
│ সব কোর্স         বইয়ের তাক          ফ্রি অ্যাসেসমেন্ট      লগ ইন             আমাদের কথা       │
│ কণ্ঠস্বর          আত্মার রসায়ন       ফ্রি সেলফ-টেস্ট      সাইন আপ           সাহায্য          │
│ শরীর            কার্ট                                 আমার কোর্স          আইনি তথ্য        │
│ মন                                                   আমার অর্ডার                        │
│ উদ্দেশ্য                                                আমার ফলাফল                        │
│ শিক্ষক                                                                           │
│ পরিকল্পনা                                                                          │
│ ─────────────────────────── 1px gold ──────────────────────────────────────────── │
│ © Energy Mining Academy      হেল্পলাইন: শীঘ্রই জানানো হবে                আইনি তথ্য     │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Row 1: brand (the colophon)

- The **same ribbon component**, same sizes as the header (96×112 desktop /
  56×80 mobile), same `<img>` (`width/height 64`, `alt=""`,
  `data-placeholder="true"`), its top flush with the footer's top edge. One
  device, at the start and end of every page, like the bookmark at both ends
  of a book.
- Next to it (gap 20px desktop / 12px mobile), centred on the slot centre
  line (y=48 desktop / y=32 mobile):
  - Wordmark "Energy Mining Academy": Domaine 400, **32px / 36px**, one line
    (351px measured), off-white. Mobile: 22px / 24px on 2 lines ("Energy
    Mining" 145px).
  - 8px gap, then the tagline **"নিজেকে জানা → নিজেকে বদলানো"**: 18px / 28px
    off-white (mobile 16/26). The `→` renders in the system fallback font
    (§14.2).
- Right side (desktop; on mobile it stacks under the row, 24px below the
  ribbon): the purpose line, verbatim, **"নিজেকে জানার ও শেখার পথে চার
  এনার্জির কোর্স, বই এবং ফ্রি অ্যাসেসমেন্ট।"**, off-white 16px / 26px,
  max 28rem; then 12px below it **"Trust · Training · Loyalty"** in Domaine
  20px / 28px **gold** (6.07:1). This is the brand's own line from the
  guideline, so its middle dots are verbatim, not template chrome.
- The wordmark is a link to `index.html` (with `../` in subfolders).

### 7.3 Row 2: link groups (reused from v2 §4.3 unchanged)

They are reused because the owner did not object to the grouping and every
href is real (§14.3). Desktop: 5 columns, `grid-template-columns: repeat(5,
minmax(0,1fr))` at ≥1024px, gap 32px, 56px below row 1. Tablet (768–1023): 3 columns. Mobile: 2
columns, gap 24px (order: শিখুন | বই + নিজেকে জানা stacked; অ্যাকাউন্ট |
একাডেমি).

- Group heading: `<h2>`, system Bangla 16px / 24px, weight 600, **gold**
  (6.07:1 ≥ 4.5 AA). 8px below it.
- Links: off-white 16px, each `min-block-size: 48px; display: flex;
  align-items: center`. Hover: 1px off-white underline → 2px. Focus: gold
  ring.
- **শিখুন:** সব কোর্স `courses.html`, কণ্ঠস্বর `courses/voice.html`, শরীর
  `courses/body.html`, মন `courses/mind.html`, উদ্দেশ্য
  `courses/purpose.html`, শিক্ষক `teachers.html`, পরিকল্পনা
  `personal-project-plan.html`
- **বই:** বইয়ের তাক `books.html`, আত্মার রসায়ন `books/atmar-rosayon.html`,
  কার্ট `cart.html`
- **নিজেকে জানা:** ফ্রি অ্যাসেসমেন্ট `human-assessment.html`, ফ্রি সেলফ-টেস্ট
  `self-test.html` (nothing priced sits in this group)
- **অ্যাকাউন্ট:** লগ ইন `login.html`, সাইন আপ `signup.html`, আমার কোর্স
  `my-courses.html`, আমার অর্ডার `my-orders.html`, আমার ফলাফল
  `my-results.html`
- **একাডেমি:** আমাদের কথা `about.html`, সাহায্য `help.html`, আইনি তথ্য
  `legal.html`
- Never in public chrome: `admin.html`, `components.html`,
  `self-test-take.html`, `self-test-result.html`, `order-confirmation.html`.

### 7.4 Row 3: bottom line

- A 1px **gold** rule (6.07:1) across the container, 48px below row 2.
- Then 24px padding top, 32px bottom. Three items as flex children with
  `gap: 16px 40px; flex-wrap: wrap` (**no middle-dot joiners**):
  "© Energy Mining Academy" (`lang="en"`), `<p data-helpline>হেল্পলাইন:
  শীঘ্রই জানানো হবে</p>`, and the link "আইনি তথ্য" `legal.html`. All 15px
  off-white. On mobile they stack, 8px apart.
- **Hours: not shown at all** (no real hours exist). No phone, no email, no
  address, no social links until the owner supplies real ones.

### 7.5 Footer measurements

| | Desktop | Mobile (390) |
|---|---|---|
| Padding top | 0 (the ribbon is flush with the top; the text column has 20px top padding) | 0 / 12px |
| Row 1 height | 112px (ribbon) | 80px + stacked purpose block ≈ 140px |
| Row 2 | ≈ 32 + 7 × 48 = **368px** (tallest group) | ≈ 672px (2 columns × 2 rows) |
| Row 3 | 1 + 24 + 24 + 32 = **81px** | ≈ 144px |
| Total (estimate) | **≈ 670px** | **≈ 1190px** |
| Colours | navy + off-white + gold = 3 ✓ (the ribbon is its own gold + navy component) | same |

---

## 8. New home — 6 sections (Persuade mode)

Shopfront-led: courses and books come first; the assessment is exactly one
section and never the hero. **No `#` anchor anywhere** except the skip link
`href="#main"`. Every href below exists (§14.3).

| # | Section | Surface | Layout | Copy (all verbatim from the live `index.html`) | Links out |
|---|---|---|---|---|---|
| 1 | **Hero** | Navy (merges with the navy masthead; the ribbon hangs into it) | Left-aligned, max 40rem text column; desktop padding 64px top (from the bar) / 96px bottom; mobile 40 / 56. Two buttons in a row (wrap on mobile, each full width) | H1 "নিজেকে জানা, নিজেকে বদলানো"; lead "চারটি এনার্জির কোর্স, বই ও নিজের সম্পর্কে জানার পথ। আপনার লক্ষ্য থেকে শুরু করুন।" | Primary-on-navy "কোর্স দেখুন" → `courses.html`; secondary-on-navy "বইয়ের তাক দেখুন" → `books.html` |
| 2 | **Four Energy courses** | **Off-white band with 4 NAVY cover cards** (navy books on paper) | Desktop: 4 columns, gap 24px; tablet and mobile: 2 columns, gap 12px. Card = cover image (`assets/cover-*.svg`, 4:5) + navy caption (§10.2) | H2 "চার এনার্জি, শেখার চার দিক"; line "কণ্ঠস্বর, শরীর, মন ও উদ্দেশ্য। প্রতিটি এনার্জির জন্য একটি প্রোগ্রাম।"; cards: Voice/কণ্ঠস্বর, Body/শরীর, Mind/মন, Purpose/উদ্দেশ্য, each "১টি কোর্স" (gold) | `courses/voice.html`, `courses/body.html`, `courses/mind.html`, `courses/purpose.html`; link "সব কোর্স দেখুন" → `courses.html` |
| 3 | **Book shelf** | **Navy band with one off-white book card** | Card max 880px; desktop 2 columns (cover 240px \| details), mobile stacked (cover 160×200 centred). The navy cover shows against the paper card | H2 "বইয়ের তাক"; line "একটি বই, পড়া ও শোনার আলাদা মাধ্যম।"; card: "আত্মার রসায়ন", "Atmar Rosayon" (Domaine), "লেখক: Sayful Alvi", format badges PDF / hardcopy / audio, "স্টকের তথ্য: নিশ্চিত করা বাকি", "প্রি-অর্ডার সম্পর্কে বিস্তারিত শীঘ্রই জানানো হবে।" **No price** | Primary navy "বিস্তারিত দেখুন" → `books/atmar-rosayon.html`; link (off-white, on the band) "বইয়ের তাক দেখুন" → `books.html` |
| 4 | **Free assessment (the only one)** | Off-white band | Text column max 40rem. The badge sits above the H2 as a **status**, not an eyebrow (a navy pill with real content: the service is free) | Badge "সম্পূর্ণ ফ্রি"; H2 "নিজেকে জানার অ্যাসেসমেন্ট"; "Human Assessment — ২১০টি প্রশ্ন, ৭টি স্তর। সঙ্গে ২৬টি সেলফ-টেস্ট। আগে ৭টি স্তর ও চার এনার্জির ধারণা বুঝুন, তারপর প্রশ্নের উত্তর দিন। সম্পূর্ণ ফলাফল ফ্রি।"; "সময় নিয়ে এগোন—তাড়াহুড়ো নেই।"; "নিজের প্রোফাইল, কোনো র‍্যাঙ্কিং বা মোট স্কোর নয়।" No price, no "unlock", no blur | Primary navy "অ্যাসেসমেন্ট সম্পর্কে জানুন" → `human-assessment.html`; secondary "ফ্রি সেলফ-টেস্ট" → `self-test.html` |
| 5 | **Founder + teachers** | Navy band | Large quote, left-aligned, max 36rem; attribution below; then 2 text links | H2 "প্রতিষ্ঠাতার কথা"; quote "আমার লক্ষ্য — মানুষ যেন আমার ওপর ভরসা রাখে, আমার কাছ থেকে শেখে, আর দীর্ঘদিন আমার সঙ্গে থাকে।" (26/40 desktop, 21/34 mobile, off-white); attribution "— Sayful Alvi" (Domaine 22px **gold**) + "প্রতিষ্ঠাতা ও শিক্ষক, Energy Mining Academy।" (off-white 16px); "শিক্ষক হতে চান?" (H3) | "শিক্ষক হওয়ার পথ দেখুন" → `teachers.html`; "আমাদের কথা ও ছয় ধাপের যাত্রা" → `about.html` |
| 6 | **Plan + help** | Off-white band, 2 light cards (§10.2), side by side ≥768, stacked below | Equal columns, gap 24px | Card 1: H2 "Personal Project Plan" (Domaine) + "ভিশন ও বর্তমান অবস্থা থেকে নিজের পরিকল্পনা — কোন দিক নিয়ে, কীভাবে এগোবেন, তার লিখিত পথ।"; Card 2: H2 "শুরু করার আগে প্রশ্ন?" | "পরিকল্পনা সম্পর্কে জানুন" → `personal-project-plan.html`; "সাহায্য পাতা দেখুন" → `help.html` |

Rhythm: navy · paper · navy · paper · navy · paper · navy footer. Dense
sections (2, 3) alternate with quiet ones (4, 5).

**Removed from the v2 home, and where each now lives:**
- The hero goal doors: "নিজেকে জানতে চাই" pointed at the self-test, which put
  assessment in the hero against the brief. It is gone; the self-test is
  linked in section 4 and the footer. "একটি এনার্জি গড়তে চাই" duplicated
  section 2 → replaced by "কোর্স দেখুন". "জীবনের পরিকল্পনা করতে চাই" →
  section 6.
- The two v2 teacher cards (Sayful Alvi card + "become a teacher" card) were
  merged into section 5. The card line "লক্ষ্য: ভরসা, শেখা ও দীর্ঘদিনের সঙ্গ।"
  is dropped because the founder quote says the same thing in his own words.
- "Trust · Training · Loyalty" → moved to the footer colophon (§7.2).
- v2 footer door cards (কোর্স দেখুন / বইয়ের তাক / ফ্রি অ্যাসেসমেন্ট)
  duplicated the nav and are removed.
- The v2 mobile bottom tab bar → removed. Its role is covered by the header
  menu and the footer.

`en/index.html` has the same 6 sections with its existing English strings
(e.g. H1 "Know yourself, change yourself", "Four energies, four directions of
learning", "Bookshop", "The assessment to know yourself", "Teachers",
"Questions before you start?"). There, headings set in Domaine use the en type
scale (§11).

---

## 9. Colour: combinations done well, per the guideline

### 9.1 The law (quoted from the guideline extraction)

"Navy background: Off-white text, Gold highlight." · "Light background: Navy
headline, Charcoal body text." · "Gold text: light background e dio na, pora
jay na. Gold sudhu line, icon ba shape e." · "Ekta design e: maximum 3 ta
color. Pure white ar pure black use korba na." · "Navy 60% | Off-white 25% |
Gold 10%" + "Charcoal ~5%: body text ar chhoto detail e."
Placement: Navy "Main background, logo, headline, button, book cover"; Gold
"Ekta key word, underline, icon, border"; Off-white "Light background, card,
navy er upor text"; Charcoal "Light background e body text, caption".

### 9.2 Contrast: all 6 pairs recomputed with Python (WCAG 2.x)

| Pair | Guideline says | **Recomputed** | v3 use |
|---|---|---|---|
| Off-white on Navy | ~13:1 | **13.13:1** | All text on navy; nav plate (navy text on off-white) |
| Gold on Navy | ~6:1 | **6.07:1** | Ribbon edge vs bar, focus rings on navy, group headings, counts, attribution, 1px rule, button borders |
| Navy on Gold | — | **6.07:1** | The emblem and the future logo inside the ribbon |
| Charcoal on Off-white | ~15:1 | **15.35:1** | Body text on paper |
| Gold on Off-white | "Use korba na (~2:1)" | **2.16:1** | ✗ **never**: not text, not a meaningful line, not the ribbon ground's edge |
| Gold vs Charcoal | — | **7.09:1** | Not used (charcoal is never next to gold) |
| Navy vs Charcoal | — | **1.17:1** | ✗ never adjacent |

### 9.3 Combinations tested and REJECTED (with ratios)

1. **Gold seal/ribbon on an off-white header** (candidate b): the ribbon edge is
   2.16:1 against the bar, under the 3:1 WCAG 1.4.11 minimum for a meaningful
   graphic. Rejected; the ribbon only ever hangs over navy (§4.1 hard rule).
2. **Gold-filled button with off-white label**: 2.16:1 text. Rejected (and gold is
   "line, icon, shape", never an action surface).
3. **Gold focus ring around the brand link**: the ring touches the gold ribbon
   at 1:1 and disappears there. Rejected → off-white ring (13.13:1).
4. **Charcoal footer band** (carried from v2 §1.4): navy on charcoal is 1.17:1.
   Still rejected.
5. **Off-white details inside the emblem**: 2.16:1 on gold. Rejected; the
   emblem is gold + navy only.

### 9.4 "Max 3 colours": the decision rule (carried from v2)

**Adopted: per component (v2's R1, kept).** One component = one band, header,
footer, card, button, badge, form field or the ribbon. Each uses at most 3 of
the 4 colours. A component nested inside another is counted on its own. Why
keep it: the guideline's own 60/25/10/5 split asks one page to use all four,
so "3 per design" cannot mean "3 per page". The owner can redirect this on
seeing v3 (§13 Q1).

Companion rules:
- **R2:** light components never contain gold (off-white + navy + charcoal
  already make 3).
- **R3:** gold never marks state on light surfaces; state on light is navy.
- **R4:** charcoal only on off-white, only for text.
- **R5:** no tints, alpha fills or gradients for text and fills. Navy-alpha is
  allowed only in shadows and the dialog backdrop.
- **R6 (new):** gold appears on navy only, as a shape (ribbon, rules, borders,
  rings, cover art) or as **short text highlights**: group headings, the
  "১টি কোর্স" counts, "Sayful Alvi", "Trust · Training · Loyalty". Never
  a whole headline, never body copy, and never one gold word inside a
  headline.

### 9.5 Per-component colour ledger

| Component | Colours (≤3) | How it carries the balance |
|---|---|---|
| Masthead bar | navy + off-white + gold | 96px of solid navy across the page = the biggest single navy statement at the top |
| Ribbon + emblem | gold + navy | The 10% gold "result", concentrated in one place |
| Hero / title band | navy + off-white (+ gold only for focus and secondary-button borders) | Navy continues from the bar into one cover |
| Footer | navy + off-white + gold | Large navy close; gold carries the headings, rule and ribbon |
| Light band (sections 2, 4, 6) | off-white + navy + charcoal | The 25% paper = "learning"; charcoal body text = the 5% |
| Navy cover card | navy + off-white + gold | Navy volume placed on paper (it puts navy inside light bands) |
| Light card | off-white + navy + charcoal | Paper on paper, separated by the shelf shadow |
| Primary button on light | navy + off-white | — |
| Primary button on navy | off-white + navy | Guideline: "Buttons on navy: Off-white background + Navy text" |
| Secondary button on navy | navy + gold border + off-white text | One gold line |
| Form field | off-white + navy (border, label) + charcoal (value) | — |
| Mobile menu sheet | off-white + navy + charcoal | A paper page under the navy bar |

### 9.6 Per-page balance at 390px (estimates by band area)

Method: each band's height × width. For bands with cards, the card area is
counted in the card's colour. Gold and charcoal are mostly marks and text
inside these areas, so they are given as visual weight, not area.

**Home (390 × ≈5,120px):**

| Band | Height | Navy px-height eq. | Off-white eq. |
|---|---|---|---|
| Header bar | 64 | 64 | — |
| 1 Hero (navy) | ≈436 | 436 | — |
| 2 Courses (paper + 4 navy cards, 59% card area) | ≈980 | 578 | 402 |
| 3 Book shelf (navy + paper card 61% + navy cover) | ≈860 | 417 | 443 |
| 4 Assessment (paper; navy badge + button) | ≈568 | 51 | 517 |
| 5 Founder (navy) | ≈464 | 464 | — |
| 6 Plan + help (paper) | ≈560 | — | 560 |
| Footer (navy) | ≈1,190 | 1,190 | — |
| **Total** | **≈5,122** | **3,200 = 62.5%** | **1,922 = 37.5%** |

Reading of the 37.5% light: ≈30% off-white ground + ≈5% charcoal text ink +
links/rules in navy. **Gold: ≈1–2% by area** (two ribbons, cover accents,
counts, headings, rule) and about 10% by visual weight, as the guideline
intends a "highlight" to work.

**Inner pages (390, estimated by page type):**

| Page type | Pages | Navy share | Rule |
|---|---|---|---|
| Shopfront (Persuade) | `courses.html`, `courses/*`, `books.html`, `books/atmar-rosayon.html`, `human-assessment.html`, `teachers.html`, `personal-project-plan.html` | ≈50–60% | Title band + navy cover cards on paper + footer. **Target ≥55%**: put product covers as navy cards on paper, and end with a navy band (e.g. the related-items or call-to-action band) before the footer |
| Operate (flows, forms, account, admin) | `cart.html`, `order-confirmation.html`, `self-test.html`, `self-test-take.html`, `self-test-result.html`, `login.html`, `signup.html`, `my-*.html`, `admin.html` | ≈40–50% | Forms and answers stay on paper for readability; the title band + footer carry the navy |
| Read | `about.html`, `help.html`, `legal.html`, `components.html` | ≈35–45% | Long reading on navy would hurt readability, and the guideline itself gives off-white to "learning … chokhe kom lage". **Allowed down to 35%**; a site-wide navy majority is still held by the bookends |

These are estimates. The build verifies them with the Playwright band-area
script in §14.5.

---

## 10. Component updates

### 10.1 Buttons

| Token | Value |
|---|---|
| Height | `min-block-size: 48px` |
| Padding | `0 20px` (mobile full-width buttons: `0 16px`) |
| Radius | **4px** |
| Type | 16px / 24px, weight 600, Synonym (Latin) + system (Bangla) |
| Primary on light | navy fill, off-white text, no border |
| Secondary on light | off-white fill, 1.5px navy border, navy text |
| Primary on navy | off-white fill, navy text |
| Secondary on navy | navy fill, 1.5px gold border, off-white text |
| Hover | `translateY(-2px)`; on light also `box-shadow: var(--v3-shadow)`; 180ms `cubic-bezier(.2,.8,.2,1)` |
| Active | `translateY(0) scale(.98)`, 90ms |
| Disabled | `opacity: .55; cursor: not-allowed`; no transform; `aria-disabled` for links |
| Focus | Per surface (§10.6) |
| Never | Gold fill, pill shape, a `→` in the label |

### 10.2 Cards

| Card | Spec |
|---|---|
| **Cover card (course; the main card)** | Navy fill, radius 4px, `overflow: hidden`, `box-shadow: var(--v3-shadow)`. Top: the cover SVG, `aspect-ratio: 4/5`, full card width. Caption padding 16px (mobile) / 20px (desktop): Energy name Domaine off-white **36/40 desktop, 26/30 mobile**; Bangla name 16/24 off-white; "১টি কোর্স" 15/24 **gold**. The whole card is one `<a>`. Hover: `translateY(-4px)` + `--v3-shadow-lift`, 180ms |
| **Book card (on navy)** | Off-white fill, radius 4px, padding 24px (mobile 20px), **no shadow** (it would not show on navy). Cover 240px wide desktop / 160×200 mobile, square corners (a book cover has no radius). Title: system Bangla 24/34 navy 700; "Atmar Rosayon" Domaine 20/28 navy; author line charcoal 16; formats as outline badges; primary navy button |
| **Light card (on paper)** | Off-white fill, radius 4px, padding 24px (mobile 20px), `box-shadow: var(--v3-shadow)`, **no border** |
| **Assessment** | No card. It is a band (§8 section 4). Inner pages that list self-tests use light cards |
| Shadows (new "shelf" system: navy-alpha with negative spread, so the shadow pools *under* the object like a book on a shelf) | `--v3-shadow: 0 1px 1px rgba(3,44,66,.16), 0 14px 20px -12px rgba(3,44,66,.45);` `--v3-shadow-lift: 0 2px 2px rgba(3,44,66,.14), 0 22px 28px -14px rgba(3,44,66,.50);` Used only on paper surfaces. Never on navy. No hard 0-blur offsets |
| What changed vs v2 | v2: off-white cards everywhere, 12px radius, diffuse two-layer shadow on all sides. v3: products are **navy covers on paper**, 4px radius, a shadow that sits under the card, light cards only for text panels |

### 10.3 Section headings

No eyebrow, no number, no ornament, no gold word. H2 (sizes in §11),
`margin-block: 0 16px`. A section's top padding (96 desktop / 56 mobile) is
always larger than the H2's bottom margin, so there is more space above a
heading than below it. On navy the heading is off-white; on paper it is navy.
An optional one-line lead under the H2 uses body size, max 40rem.

### 10.4 Dividers

- On paper: 1px solid navy, only where content needs splitting (menu rows,
  tables, the order summary).
- On navy: 1px solid gold, used once per page as the footer bottom rule
  (§7.4). Elsewhere on navy, space divides.
- No decorative double rules, no gold rules on paper.

### 10.5 Forms (Operate mode: cart, login, signup, self-test-take, admin)

| Part | Value |
|---|---|
| Label | navy 15/24, weight 600, 8px above the field |
| Input / select / textarea | `min-block-size: 48px`; padding `12px 14px`; off-white fill; **1.5px navy border**; radius 4px; value charcoal 17px |
| Placeholder | charcoal (15.35:1); never navy-alpha |
| Focus | `outline: 2px solid #032C42; outline-offset: 2px` (border stays) |
| Error | Border 3px navy + a 20px drawn "!" circle icon (navy) + a message in navy 15/24 600 under the field, linked with `aria-describedby`, plus `aria-invalid="true"`. The palette has no red, so shape and weight carry the error. The existing message text stays |
| Radio / checkbox | 24px boxes, 1.5px navy border, checked = navy fill with an off-white drawn tick/dot; the whole label row is ≥48px tall |
| Help text | charcoal 15/24 |

### 10.6 Focus rings (exact)

| Surface | Ring |
|---|---|
| Paper (off-white) | `2px solid #032C42`, offset 3px |
| Navy | `2px solid #C9A24B`, offset 3px |
| Brand link (holds the gold ribbon) | `2px solid #F6F3EC`, offset 4px |
| Form fields | `2px solid #032C42`, offset 2px |
| `:focus:not(:focus-visible)` | no ring |

### 10.7 Badges

Radius 4px, height 28px, padding 0 10px, 14/20 weight 600.
On paper: **filled** = navy fill + off-white text ("সম্পূর্ণ ফ্রি"); **outline**
= 1px navy border + navy text (formats PDF / hardcopy / audio, the stock note).
On navy: off-white fill + navy text.

### 10.8 Motion summary

| What moves | How | Reduced motion |
|---|---|---|
| Brand ribbon (the one authored moment) | Lengthens 8px (desktop) / 6px (mobile) on brand hover/focus, 180ms | None |
| Buttons | Lift 2px / press .98 | Colour and shadow only |
| Cards | Lift 4px + deeper shelf shadow | Shadow only |
| Menu dialog | Slide 16px + fade, 240ms | Fade 120ms |
| Links | Underline 1→2px, 180ms | Same (not a transform) |
| Page load | **Nothing animates on load.** No scroll reveals, no section entrances | — |

### 10.9 Browser surfaces (themed)

`::selection { background: #032C42; color: #F6F3EC; }` ·
`html { scrollbar-color: #032C42 #F6F3EC; }` · `caret-color: #032C42` ·
`text-underline-offset: .25em` on body links · `font-variant-numeric:
tabular-nums` in the order summary and admin tables.

### 10.10 Tokens for `css/design-system-v3.css`

```css
:root {
  --v3-navy: #032C42; --v3-paper: #F6F3EC; --v3-gold: #C9A24B; --v3-charcoal: #1C1C1E;
  --v3-font-ui: "Synonym", system-ui, -apple-system, "Segoe UI", sans-serif;
  --v3-font-display: "Domaine Display", Georgia, "Times New Roman", serif;
  --v3-radius: 4px;
  --v3-shadow: 0 1px 1px rgba(3,44,66,.16), 0 14px 20px -12px rgba(3,44,66,.45);
  --v3-shadow-lift: 0 2px 2px rgba(3,44,66,.14), 0 22px 28px -14px rgba(3,44,66,.50);
  --v3-ease: cubic-bezier(.2,.8,.2,1); --v3-motion: 180ms;
  --v3-container: 1200px; --v3-gutter: 24px;  /* 16px under 768px */
  --v3-bar: 96px;  /* 64px under 768px */
}
```

The `@font-face` blocks are copied unchanged from `design-system-v2.css`
(same files, same weights 400/500/600/700, plus `font-display: swap`). The only
change is the Domaine fallback (Georgia, a serif, instead of system sans), so
the wordmark keeps its shape while the font loads.

---

## 11. Fonts and type scale

- **Domaine Display** (supplied `fonts/127532bae53efa808330288dd41e2316.woff2`,
  33 KB, one weight 400) = main, for headlines and the brand. **Synonym** (supplied
  woff2: Regular/Medium/Semibold/Bold) = secondary, for body and UI. No Google
  Fonts, no other webfont, files used as-is.
- **Bangla = the device system font.** Verified: **both fonts have 0 glyphs in
  U+0980–U+09FF** (fontTools cmap). So Bangla text in any element falls back
  per glyph to the device's Bengali font.
- **Domaine only where Latin text appears:** the wordmark, Voice / Body /
  Mind / Purpose, "Sayful Alvi", "Human Assessment", "Personal Project Plan",
  "Atmar Rosayon", "Trust · Training · Loyalty", and every heading on
  `en/index.html`. Bangla headings use the system font at weight 700.
- Preload: Domaine woff2 + `Synonym-Regular.woff2` (as v2).

| Role | Desktop (≥768) size / line-height | Mobile (<768) | Face / weight |
|---|---|---|---|
| H1 (Bangla) | 48 / 62 | 34 / 46 | system, 700 |
| H1 (Latin, en) | 56 / 62 | 38 / 44 | Domaine 400 |
| H2 (Bangla) | 34 / 46 | 26 / 36 | system, 700 |
| H2 (Latin) | 40 / 46 | 30 / 36 | Domaine 400 |
| H3 (Bangla) | 22 / 32 | 20 / 30 | system, 700 |
| H3 (Latin) | 26 / 32 | 22 / 28 | Domaine 400 |
| Body | 18 / 30 | 17 / 28 | Synonym 400 / system |
| Small, captions, breadcrumb | 15 / 24 | 15 / 24 | Synonym 400 / system |
| Nav, buttons | 16 / 24 | 16 / 24 (menu rows 20 / 28) | 500 / 600 |
| Wordmark (header) | 26 / 28 ×2 lines | 18 / 20 (≤359: 16 / 18) | Domaine 400 |
| Wordmark (footer) | 32 / 36, one line | 22 / 24 ×2 lines | Domaine 400 |
| Energy names on cards | 36 / 40 | 26 / 30 | Domaine 400 |
| Founder quote | 26 / 40 | 21 / 34 | system 500 |

Measure: body text `max-inline-size: 40rem` (640px); headings use
`text-wrap: balance`. Bangla line-heights are ≥1.29× for H1 (rather than the
usual 1.1–1.2 for Latin display), because Bengali conjuncts and vowel signs
need room above and below.

---

## 12. Re-chrome map

### 12.1 New files

| File | What |
|---|---|
| `css/design-system-v3.css` | Tokens §10.10, surfaces, chrome §6–§7, components §10, type §11. Must contain only the 4 hexes (plus navy-alpha in shadows and backdrop) |
| `assets/logo-placeholder.svg` | Exactly §5.1 |
| `docs/chrome-v3-snippets.html` | The single source of the header + menu dialog + footer markup that the page runners copy (as v2 had `chrome-v2-snippets.html`). Built and verified by the chrome round before any page round starts |

### 12.2 The 27 pages, grouped (each group = one runner; groups never overlap)

| Group | Files | Count |
|---|---|---|
| Home | `index.html`, `en/index.html` | 2 |
| Courses | `courses.html`, `courses/voice.html`, `courses/body.html`, `courses/mind.html`, `courses/purpose.html` | 5 |
| Books / cart | `books.html`, `books/atmar-rosayon.html`, `cart.html`, `order-confirmation.html` | 4 |
| Assessment | `self-test.html`, `self-test-take.html`, `self-test-result.html`, `human-assessment.html` | 4 |
| Content | `teachers.html`, `about.html`, `help.html`, `legal.html`, `personal-project-plan.html`, `components.html` | 6 |
| Account / admin | `login.html`, `signup.html`, `my-courses.html`, `my-orders.html`, `my-results.html`, `admin.html` | 6 |
| **Total** | | **27** |

### 12.3 What every page runner touches

1. `<link rel="stylesheet">`: `design-system-v2.css` → `design-system-v3.css`
   (`../css/…` in subfolders). Add the favicon link (§5.4).
2. Replace the whole v2 chrome: both `.v2-header--a/--c` headers, both
   dialogs, the `.v2-tabbar`, the hybrid inline `<style>`, and the
   `v2c-dialog-open` script. Paste the v3 header, menu dialog and footer from
   `docs/chrome-v3-snippets.html`, fixing relative paths and the
   `aria-current` item per §6.1.
3. Make sure the first band in `<main>` is a navy title band (§6.6) (the home
   uses the hero).
4. Inside `<main>`: map `v2-*` classes to `v3-*` (buttons, cards, badges,
   surfaces, forms). Course and book products become navy cover cards on
   paper (§10.2). **Copy, form behaviour, ids used by JS, and test hooks stay
   untouched.**
5. Remove page-level overrides that hid the tab bar (cart, order-confirmation,
   self-test-take): there is no tab bar any more.
6. Run the page's existing self-test (`courses.test.cjs`,
   `js/cart.test.cjs`, `assessment.test.cjs`, `js/main.test.cjs`) and the
   checks in §14.5.
7. **Never** run repo-wide scripts, and never `git checkout/restore/reset`
   (the v2 incident, DESIGN-PLAN §10). Edit only your own group's files.

Home group extra: rebuild `index.html` + `en/index.html` to §8.
Content group extra: `components.html` becomes the v3 component sheet
(buttons ×4, the three card types, badges, form states, focus rings on each
surface).

### 12.4 Untouched

`variants/` (all 4 files: the v2 reference), `css/design-system-v2.css`,
`css/design-system.css` (v1), `docs/chrome-v2-snippets.html`,
`docs/redesign-v2-design.md`, `docs/design-system.md`, `docs/research-*.md`,
`fonts/`, `assets/cover-*.svg` (all 5 are reused as-is; their navy grounds are
why covers sit on paper or inside a paper card, never directly on navy),
`js/cart.js`, all `*.test.cjs`, `README.md`.

---

## 13. Open questions (not asked; each has the coordinator's decision rule)

| # | Question | Decision rule (coordinator applies it; the owner can redirect on seeing v3) |
|---|---|---|
| Q1 | **"Max 3 colours": per component or per page?** (carried from v2 §6) | **Per component (R1) stays adopted** (§9.4). Reason: a page cannot follow the guideline's 4-colour proportion with only 3 colours. If the owner says "per page", drop charcoal: body text on paper becomes navy (13.13:1 still passes), and every page uses navy + off-white + gold |
| Q2 | The real logo's colours are unknown | One-colour navy or a logo with its own background → drop in as-is. Gold-only or gold-heavy without a background → the coordinator asks the logo designer for a navy version; until then it goes in on its own 64×64 navy square inside the ribbon (navy+gold on gold, 6.07:1) |
| Q3 | The real logo may be a horizontal lockup (symbol + name) | Use the **symbol only** in the slot; the live wordmark stays. If no separable symbol exists, keep the placeholder and record a follow-up. Never squeeze a lockup into the square |
| Q4 | Static header: will the owner miss a sticky one? | Keep static. If sticky is requested later: stick only the bar, and while stuck set the ribbon height = bar height (no hang) |
| Q5 | Is the 1240px full-nav breakpoint right? | It is an estimate from measured Latin widths + estimated Bangla widths. The build measures at 1240 and 1440. If the nav wraps or overlaps, raise the breakpoint to 1320, never shrink the type |
| Q6 | `command`/`commandfor` invoker buttons (used by v2's menu) are recent; older Android browsers common in Bangladesh may not support them | Add a ≤5-line fallback in the chrome snippet: if `!('commandForElement' in HTMLButtonElement.prototype)`, the menu button calls `dialog.showModal()` on click and the close button calls `dialog.close()`. Check current support with Context7/MDN during the chrome round (not verified here) |
| Q7 | Read pages fall below 60% navy (§9.6) | Accept ≥35% on Read and ≥40% on Operate pages; ≥55% is required on Persuade pages. Readability outranks area ratio, and the guideline itself gives off-white to learning |
| Q8 | English exists only for the home | Unchanged from v2: EN on the 26 Bangla-only pages points to `en/index.html` with the note "ইংরেজি সংস্করণ এখন শুধু হোম পাতায়" |
| Q9 | The `→` in the tagline is missing from both supplied fonts | Keep the tagline verbatim; the arrow renders in the device fallback font. Do not replace it and do not add another webfont |
| Q10 | Bold Bangla headings depend on the device's Bengali font (weights vary: Android Noto Sans Bengali, iOS Kohinoor Bangla, Windows Nirmala UI) | Specify `font-weight: 700`; accept the device's rendering; check on one Android Chromium in Playwright |
| Q11 | The placeholder could be mistaken for the final logo | It stays `data-placeholder="true"` (SVG root + `<img>`), and the file name says placeholder. No visible "placeholder" label: the owner asked for a deliberate-looking mark |

---

## 14. Verification log

### 14.1 Contrast recomputation

Computed with Python from the 4 hexes (sRGB → relative luminance → (L1+.05)/(L2+.05)):
navy/off-white **13.13**, navy/gold **6.07**, navy/charcoal **1.17**,
off-white/gold **2.16**, off-white/charcoal **15.35**, gold/charcoal **7.09**.
All guideline figures confirmed (~13, ~6, ~13, ~15, ~2).

### 14.2 Font inspection (fontTools 4.46)

- Domaine Display: UPM 1000, 375 mapped glyphs, cap-height 700, x-height 486,
  **0 Bengali glyphs**, has `·` and `©`, **no `→`**.
- Synonym Regular/Medium: 381 glyphs, **0 Bengali**, has `·` `©`, **no `→`**.
- Measured advance widths used in §4 and §7: "Energy Mining Academy" at
  Domaine 26px = 286px, 32px = 351px; "Energy Mining" at 26px = 171px, 22px =
  145px, 18px = 118px, 16px = 105px; "Academy" at 26/18/16px = 109/76/67px;
  "Purpose" at 26px = 98px.

### 14.3 Href and copy checks

- **Hrefs:** all 27 pages + 5 cover SVGs referenced in §6–§8 exist (a file-test
  loop: **32 OK, 0 missing**). `assets/logo-placeholder.svg` does not exist
  yet (expected; NEW in §12.1).
- **Copy:** 37 strings quoted in §4–§8 were each checked with a fixed-string
  search of the repo's HTML: **37/37 found verbatim**. Hero H1 + lead, founder
  quote, plan line and all section strings are in the live `index.html`. The
  footer purpose line "নিজেকে জানার ও শেখার পথে চার এনার্জির কোর্স, বই এবং
  ফ্রি অ্যাসেসমেন্ট।" is **not** in the live home; it exists verbatim in
  `docs/chrome-v2-snippets.html` and `variants/variant-b.html` (and in the v1
  home at commit `78b268f`), and the brief lists it as verified real copy.
- No price, duration, stock figure, teacher name, rating, testimonial, counter,
  phone, email or hours appear anywhere in this spec.

### 14.4 Rendering done (outside the repo)

- The emblem was rendered in Playwright Chromium (`/tmp/v3mark/`) at
  16/32/48/64/96/192px, on paper and on navy, alongside 4 rejected candidates
  (§5.5). The vein–gem join was checked at 192px, with no gap.
- A rough masthead mock (desktop and 390px) confirmed that the ribbon reads as
  a hanging bookmark over a navy band and that the off-white current-page
  plate reads clearly. It used Georgia as a stand-in for Domaine, so it is not
  a fidelity check.

### 14.5 Could NOT be verified (the build round must)

- **No v3 page exists yet.** Every height marked "≈" (hero, bands, footer) and
  the 1240px nav breakpoint are estimates. Required Playwright pass: 360, 390,
  768, 1024, 1240, 1440px. Check there: no horizontal overflow; the ribbon is
  not clipped; the ribbon never overlaps the H1; nav on one row at ≥1240.
- **Colour balance**: measure with a Playwright script that sums
  `getBoundingClientRect()` areas of navy vs paper surfaces per page at 390px,
  and compare with §9.6.
- Bangla label widths in real system fonts; bold Bangla rendering per device.
- Browser support for invoker commands (§13 Q6). It needs a Context7/MDN
  lookup in the chrome round.
- `web-design-guidelines`: the live Vercel rules fetch + `file:line` review, to
  run on the built chrome round.
- `impeccable detect --json` on the built files, and
  `impeccable-finish-reviewer`, both after the build (not applicable to a
  spec).
- The owner's judgement. This spec commits to one direction, as he delegated
  ("tomar moto kore"); he sees it only once it is built.

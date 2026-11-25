# Energy Mining Academy — Redesign v2 Design Spec

**Status:** design spec only — no code changed, nothing committed, pushed or
deployed. The build round (variants + rebuild) works from this document.
**Date:** 2026-11-25 · **Author:** redesign-v2 design-concepts runner
**Source:** Claude Opus 5.5 design pass (prompt:
`~/workspace/energymining-academy-uiux-draft/redesign-v2-claude-prompt.md`,
full log: `~/workspace/energymining-academy-uiux-draft/redesign-v2-claude.log`),
synthesised and verified by the runner against the files listed in §0.
**Live v1 (rejected):** https://mrbahar666.github.io/energymining-academy-ui-ux/

## 0. What this spec is built on (verified, not assumed)

- **The rejection** (DESIGN-PLAN.md §10, owner 2026-11-25 ~10:47): "design to
  ekdom i hoyni"; "ami to tomake 1 page website banaite bolini, multi page
  hobe"; "header footer theke shuru kore kono design i pochondo hoyni".
  Parent-verified diagnosis: the home READS as a 1-page site — nav is mostly
  `#` anchors to 13 sections on one long page (verified by grep on
  `index.html`: 10× `#bookshop`, 5× `#journey`, 5× `#courses`,
  5× `#assessment`, 4× `#faq`). Rejected visual language: border-only cards,
  zero shadows, varied radii; header = utility strip + centred brand row +
  centred nav row; footer = 3 bands (navy brand / light links / navy bottom).
- **Files read:** the brand-guideline extraction
  (`Sayful_Alvi_Brand_Colors__2.txt`, 47 lines), `index.html` (full),
  `css/design-system.css` (full), `components.html` (header/footer markup),
  `DESIGN-PLAN.md` §2/§6/§10, `docs/research-bd.md`,
  `docs/research-international.md`.
- **Skills read and applied:** `frontend-design`, `brand-guidelines`,
  `theme-factory`, `web-design-guidelines`, `impeccable` (all
  `~/workspace/custom-skills/*/SKILL.md`). Honest skill notes:
  - `brand-guidelines` is **Anthropic's** brand, not the client's — none of
    its colours/fonts are used here. The client's guideline (§1) wins.
  - `theme-factory`'s 10 preset themes do **not** apply — the client
    guideline IS the theme. Only its discipline is used: one coherent theme,
    applied consistently, contrast checked per surface.
  - `web-design-guidelines` wants the live Vercel rules fetched before a
    review; Claude ran read-only with no fetch tool, so that fetch was not
    done. Accessibility checks in this spec are applied from standard WCAG
    practice and the contrast figures computed in §1.2.
  - `impeccable`'s `context` launcher was not run (read-only design pass).
    Its rules that ARE applied: the brief wins over taste; redesign
    **replaces** the discarded look (no polish on v1 chrome); Persuade mode
    for home, Operate mode for shop/account flows.
  - `frontend-design` applied: distinct point of view grounded in THIS
    subject (self-knowledge academy, Bangladesh, mobile-first, trust);
    boldness spent in ONE place per concept; no generic tells (no all-caps
    eyebrow labels, no 01/02/03 markers unless the content is a real
    sequence, no SaaS-card kit, no single-word accent in headlines, no `→`
    on links — it stays only inside the brand's own tagline).
- **Claude run history (honest):** attempt 1 was killed by SIGTERM when the
  runner's turn ended while the command was backgrounded (no output);
  attempt 2 failed fast with `API Error: 529 Overloaded` (transient server
  overload, NOT a limit error — Claude's limit was never exhausted); attempt 3,
  after a 90-second wait, exited 0 with a 32,218-byte design pass. No blind
  retries, no waiting on the limit.
- **Verification done by the runner:** every contrast figure in §1.2 was
  recomputed from the hex values with Python (all match the guideline's own
  figures); every href in §3–§4 was checked against the repo (all 24 exist,
  see §6); `en/` contains only `index.html`; `about.html` holds the six-stage
  journey (line 148) and the founder's note (line 190); the anchor problem
  also lives on inner pages (`about.html` lines 50–55, 73–79, 246–263 link
  `index.html#…`); the repo has 27 HTML files.

## 1. Colour-combination spec (per the guideline, done well)

### 1.1 The law, quoted from the guideline extraction

| Colour | Hex / RGB | Guideline placement ("Kothay") |
|---|---|---|
| Deep Navy (main) | `#032C42` · RGB 3, 44, 66 | "Main background, logo, headline, button, book cover" |
| Antique Gold (accent) | `#C9A24B` · RGB 201, 162, 75 | "Ekta key word, underline, icon, border" |
| Off-white (light background) | `#F6F3EC` · RGB 246, 243, 236 | "Light background, card, navy er upor text" |
| Charcoal (text) | `#1C1C1E` · RGB 28, 28, 30 | "Light background e body text, caption" |

- **Proportions:** "Navy 60% | Off-white 25% | Gold 10% |" + "Charcoal ~5%:
  body text ar chhoto detail e."
- **Rules (verbatim):** "Navy background: Off-white text, Gold highlight."
  "Light background: Navy headline, Charcoal body text." "Gold text: light
  background e dio na, pora jay na. Gold sudhu line, icon ba shape e." "Ekta
  design e: maximum 3 ta color. Pure white ar pure black use korba na."
- **Purpose (verbatim):** "Navy bishwash dey, Gold result dey, Off-white
  shikkha dey, Charcoal gombhirota dey." Trust · Training · Loyalty.

### 1.2 Contrasts — guideline figures + recomputed verification

| Pair | Guideline says | Recomputed (WCAG) | Verdict |
|---|---|---|---|
| Off-white on Navy | ~13:1 | 13.13:1 | ✓ use |
| Gold on Navy | ~6:1 | 6.07:1 | ✓ use (text + non-text) |
| Navy on Off-white | ~13:1 | 13.13:1 | ✓ use |
| Charcoal on Off-white | ~15:1 | 15.35:1 | ✓ use |
| Gold on Off-white | "Use korba na (~2:1)" | 2.16:1 | ✗ FORBIDDEN as text |
| Off-white on Charcoal | — (runner calc.) | 15.35:1 | readable, but see §1.4 |
| Gold on Charcoal | — (runner calc.) | 7.09:1 | readable, but see §1.4 |
| Navy on Charcoal | — (runner calc.) | 1.17:1 | ✗ NEVER use |

### 1.3 Five interpretation rules (make the spec checkable)

- **R1 — "One design" means one component.** One band, card, button, header
  or footer uses at most 3 of the 4 colours. A light card nested inside a
  navy band is its own component (navy band = navy + off-white + gold; the
  light card inside it = off-white + navy + charcoal).
- **R2 — Light components never contain gold.** A light card already uses
  off-white, navy and charcoal, so gold would be a fourth colour. Gold
  appears on light surfaces in one place only: as a decorative line at the
  edge of a band, and only where charcoal is not used.
- **R3 — Gold on off-white is decoration only.** At ~2:1 it is below the
  WCAG 3:1 minimum for meaningful lines. It never marks state (current page,
  focus, error, selection). On light surfaces, state is always navy.
- **R4 — Charcoal only on off-white.** Never on navy, never as a band
  background (see §1.4).
- **R5 — No tints, no alpha fills, no gradients.** Text and fills use the 4
  solid hexes only. Shadows are the one exception, and they are navy at
  opacity, never black. (v1's "zero shadows" look was rejected; off-white
  cards on an off-white page need separation.)

### 1.4 Charcoal footer band — tested and REJECTED (deliberate deviation)

The brief suggested a charcoal footer band as an example combination. It was
tested and rejected: the guideline puts charcoal at "body text ar chhoto
detail e" (body text and small details), never as a background band — and
navy text on charcoal computes to **1.17:1**, unreadable. A charcoal band
would force off-white text (15.35:1, readable) but would spend the
guideline's ~5% text colour as a large background, breaking the 60/25/10/5
balance. **No charcoal background bands anywhere in v2.** Charcoal stays a
text colour on off-white only.

### 1.5 Surface assignments (the checkable table)

| Surface | Fill | Text / marks | Contrast | Why it matches the guideline |
|---|---|---|---|---|
| Page background | Off-white `#F6F3EC` | — | — | "Light background" = off-white; no pure white |
| Light band headline | Off-white | Navy `#032C42`, Domaine (Latin) / system font (Bangla) | 13.13:1 | "Light background: Navy headline" |
| Light band body / caption | Off-white | Charcoal `#1C1C1E`, Synonym/system | 15.35:1 | "Charcoal body text" |
| Light band divider | Off-white | Gold 1px (decorative) **or** navy 1px | Gold 2.16:1 decoration only (R3); navy 13.13:1 | "Gold sudhu line" |
| Navy band (hero, Energy doors, assessment, footer) | Navy `#032C42` | Off-white headline + body | 13.13:1 | "Navy background: Off-white text" |
| Navy band highlight | Navy | Gold for rules, icons, the 2px current-page underline, at most one key word in body copy (never in a headline) | 6.07:1 | "Gold highlight"; "Ekta key word, underline, icon, border" |
| Card on light page | Off-white, no border, radius 12px, shadow `0 1px 2px rgba(3,44,66,.08), 0 10px 28px rgba(3,44,66,.12)` | Navy title, charcoal body, **no gold** (R2) | 13.13:1 / 15.35:1 | Off-white = "card" |
| Card on navy band | Off-white, radius 12px, no shadow (invisible on navy) | Navy title, charcoal body | 13.13:1 / 15.35:1 | Nested component (R1) |
| Navy card on light page (book card, Energy door) | Navy, radius 12px, same navy-alpha shadow | Off-white text, gold icon or rule | 13.13:1 / 6.07:1 | Navy = "book cover" |
| Primary button on light | Navy | Off-white label, Synonym 600 | 13.13:1 | Navy = "button" |
| Secondary button on light | Off-white, 1.5px navy border | Navy label | 13.13:1 | Light background + navy |
| Primary button on navy | Off-white | Navy label | 13.13:1 | Off-white = "navy er upor"; DESIGN-PLAN §2 rule ("Buttons on navy: Off-white background + Navy text") |
| Secondary button on navy | Navy, 1.5px gold border | Off-white label | Text 13.13:1; gold border 6.07:1 (≥3:1 non-text ✓) | Gold = "border" |
| Gold-filled button | **Never** | — | — | Gold is "line, icon, shape", not an action surface |
| Link on light | — | Navy, 1px underline → 2px on hover | 13.13:1 | Navy on light |
| Link on navy | — | Off-white, underline; gold underline on hover | 13.13:1 | Off-white text, gold highlight |
| Focus ring on light | — | 2px **navy** outline, 3px offset | 13.13:1 | R3: gold fails here |
| Focus ring on navy | — | 2px **gold** outline, 3px offset | 6.07:1 | Gold highlight on navy |
| Badge "সম্পূর্ণ ফ্রি" on navy | Off-white pill | Navy text | 13.13:1 | Same logic as the button |
| Form input | Off-white, 1.5px navy border | Charcoal value, navy label | 15.35:1 / 13.13:1 | Light rules |
| Text selection | Navy | Off-white | 13.13:1 | Replaces v1's gold-on-navy `::selection` |

### 1.6 Keeping 60 / 25 / 10 / 5 across a full page

Measured on the proposed home (§3) at 390px mobile, by band height:

| Share | Carried by | Approx. share |
|---|---|---|
| **Navy ~60%** | Hero, Four Energy doors, the one assessment band, footer. On inner pages: navy page-title band + footer. | ≈ 60–62% |
| **Off-white ~25%** | Header (Concepts A/C), book shelf, teachers/founder, plan teaser, help strip | ≈ 30% of height, minus the share text and gold marks take up |
| **Gold ~10%** | Never area — it is *presence*: header/footer rules, current-page underline, Energy-door glyphs (existing `assets/cover-*.svg` geometry in gold on navy), icons, secondary-button border on navy | Visual weight, not pixels |
| **Charcoal ~5%** | Body text and captions on the light bands only | Text only |

**Inner-page rule:** every inner page opens with a **navy title band** (H1 +
one line + breadcrumb links) and closes with the navy footer (A/C) or the
colophon footer (B). Light content sits between them. That keeps the 60%
navy even on text-heavy pages like `legal.html` without making the reading
area dark.

## 2. Three header/footer concepts

**Shared by all three:** one radius system — 12px cards/panels, 10px buttons/
inputs, pill for chips and the language toggle only. Navy-alpha shadows on
light surfaces (§1.5). Motion: 180ms, translateY(−2px) + deeper shadow on
hover for buttons and cards, scale(.98) on press; under
`prefers-reduced-motion`, no transforms — colour/shadow change only. Every
tap target ≥48px. No utility strip in any concept (that kills v1's first row;
login/cart/language move into the header row or icon buttons, helpline moves
to the footer).

### Concept A — "Bookplate" (off-white header, navy footer)

*The header is the bookplate in the front of a book: paper, navy ink, one
gold rule. The footer is the back cover (navy).*

**Header** (one row, sticky, 72px desktop / 60px mobile):
- Off-white fill.
- Wordmark "Energy Mining Academy" at left, Domaine Display 400, navy, 26px.
  Mobile: stacks into two lines ("Energy Mining" / "Academy") at 19/21px.
- Nav follows the wordmark, left-aligned: Synonym/system 500, 16px, navy.
  Current page gets a 2px **navy** underline (R3) + `aria-current`.
- Right cluster: `cart.html` (icon + label "কার্ট"), "লগ ইন" as a secondary
  button on light, BN | EN pill toggle (navy border; active half filled navy
  with off-white text).
- Under the whole header: a **2px gold rule** (decorative). Colours:
  off-white + navy + gold = 3 ✓.

**Footer** (one navy band, not three):
- Top: 1px gold rule.
- Row 1: wordmark at 40px Domaine, off-white, next to the tagline
  "নিজেকে জানা → নিজেকে বদলানো".
- Row 2: 5 link columns (§4.3). Column headings off-white Synonym 600; links
  off-white 400, 48px rows.
- Last line, separated by a gold hairline: "© Energy Mining Academy",
  "হেল্পলাইন: শীঘ্রই জানানো হবে" (TBA), `legal.html`.
- Colours: navy + off-white + gold = 3 ✓.

**Mobile:** a "মেনু" button (48px, navy border) opens a `<dialog>` sheet from
the inline-end, filled off-white. Top of the sheet: the BN | EN toggle, full
width, 64px tall (first thing seen). Then nav items as 56px rows with gold
hairline separators. Then an account block (লগ ইন / সাইন আপ / কার্ট). Close
button at top right.

```
DESKTOP ≥1100
┌──────────────────────────────────────────────────────────────────┐ off-white
│ Energy Mining Academy   কোর্স  বই  ফ্রি অ্যাসেসমেন্ট  শিক্ষক  পরিকল্পনা │
│                                              [কার্ট] [লগ ইন] (BN|EN)│
╞════════════════════════ 2px gold rule ═══════════════════════════╡
FOOTER (navy)
│──────────── gold hairline ────────────                            │
│ Energy Mining Academy        নিজেকে জানা → নিজেকে বদলানো        │
│ শিখুন      বই        নিজেকে জানা   অ্যাকাউন্ট    একাডেমি         │
│ ...        ...       ...         ...          ...                │
│ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─         │
│ © Energy Mining Academy · হেল্পলাইন: TBA · আইনি তথ্য             │
MOBILE 390
┌──────────────────────────────┐   ┌─ sheet (off-white) ──┐
│ Energy Mining        [মেনু]  │   │ (  BN  |  EN  ) 64px │
│ Academy                      │   │ কোর্স ─────────────── │
╞══════ gold rule ═════════════╡   │ বই ────────────────── │
                                    │ ফ্রি অ্যাসেসমেন্ট ...   │
                                    │ [লগ ইন] [সাইন আপ]     │
```

- **Noticed first:** a quiet paper-coloured bar with the navy serif
  wordmark, then the navy hero right below it. The brand appears as ink on
  paper.
- **Why it is not v1:** v1 was a navy header with three stacked rows
  (utility strip, centred brand, centred nav). A is a light header in one
  row, left-aligned. v1's footer had three bands; A's has one.
- **Risk:** the owner may read a light header as "less premium" / "not navy
  enough". **Mitigation:** the navy hero touches the header directly, so the
  first screen is still mostly navy; the gold rule is the seam between them.

### Concept B — "Navy spine" (navy header, off-white colophon footer)

*The header is a book's spine: one thin, confident navy bar carrying the
name. The footer is the colophon, the printed last page.*

**Header** (one row, sticky, 64px desktop / 56px mobile, compact):
- Navy fill. Wordmark at left in Domaine, off-white, 24px.
- Nav on the right, off-white Synonym/system 500. Current page gets a
  **2px gold underline** plus gold label text (gold on navy 6.07:1 ✓).
- Far right: a cart icon button and a BN | EN toggle (off-white border;
  active half filled off-white with navy text). "লগ ইন" moves out of the bar
  into an account icon button. Colours: navy + off-white + gold = 3 ✓.
- No utility strip at all. The helpline goes to the footer (TBA anyway).

**Footer** (one off-white band):
- Top: a 4px **navy** rule, then a 1px gold rule 4px below it — a book's
  double rule. Decorative.
- Left column (4/12): wordmark in navy Domaine at 32px, and one sentence of
  purpose in charcoal — the existing footer-purpose line from `index.html`,
  verbatim: "নিজেকে জানার ও শেখার পথে চার এনার্জির কোর্স, বই এবং ফ্রি
  অ্যাসেসমেন্ট।"
- Right (8/12): link columns with navy headings and navy links.
- Bottom line in charcoal small text: © and legal.
- Colours: off-white + navy + charcoal = 3 ✓, plus decorative gold. That
  would be 4 colours against R1 — so the gold rule moves *up* into the navy
  header's bottom edge, and the footer stays at exactly 3 colours.

**Mobile:** the bar keeps only the wordmark (one line, 18px; at ≤360px it
switches to the "EMA" initials — a judgement call; "EMA" is already the
repo's own order-number prefix, `EMA-YYYYMMDD-XXXX`, so it is grounded, not
invented) and a 48px menu button.
- The menu is a **full-screen navy dialog** that fades in.
- Nav items big, 24px, off-white, each with a gold underline when current.
- BN | EN as two big 64px buttons at the **bottom** of the sheet, within
  thumb reach.

```
DESKTOP
┌──────────────────────────────────────────────────────────────────┐ navy 64px
│ Energy Mining Academy      কোর্স  বই  ফ্রি অ্যাসেসমেন্ট  শিক্ষক  পরিকল্পনা  🛒 👤 (BN|EN)│
│                            ‾‾‾‾ (gold underline = current)        │
└──────────────────────────── gold 1px ────────────────────────────┘
FOOTER (off-white)
════════════ navy 4px ════════════
──────────── (no gold here) ──────
│ Energy Mining Academy   │ শিখুন     বই      নিজেকে জানা  অ্যাকাউন্ট  একাডেমি │
│ নিজেকে জানার ও শেখার...  │ ...                                       │
│ © Energy Mining Academy · আইনি তথ্য · হেল্পলাইন: TBA                 │
MOBILE
┌──────────────────────────────┐   ┌─ full-screen navy ─────┐
│ Energy Mining Academy [≡ মেনু]│   │ কোর্স                  │
└──────────── gold ────────────┘   │ বই                     │
                                    │ ফ্রি অ্যাসেসমেন্ট        │
                                    │ ...                    │
                                    │ [  BN  ] [  EN  ] 64px │
```

- **Noticed first:** a slim, dark, confident bar, and the gold underline
  showing where you are.
- **Why it is not v1:** one 64px row instead of three rows (~170px). Nav on
  the right instead of centred. No utility strip. A light footer instead of
  navy-light-navy.
- **Risk:** it is the closest to v1 in colour (a navy header), and the owner
  rejected v1's header. **Mitigation:** B is the "keep navy" option the brief
  allows. It differs in structure, height and alignment. If the owner
  rejects navy headers outright, A and C cover that.

### Concept C — "Shelf and tabs" (split header, mobile bottom tab bar, navy wordmark footer)

*The audience is mostly on phones. Give them an app-like bottom tab bar on
the mobile web (no app install, per the research), and spend the one bold
moment on a huge Domaine wordmark in the footer.*

**Header, desktop** (80px, split):
- Left: a **navy block** ~300px wide, edge to edge from the page's left side,
  holding the wordmark in off-white Domaine at 22px. Reads like a book spine
  on a shelf.
- Right: an off-white bar with navy nav (current page = 2px navy underline)
  and, at the far right, a navy primary button "লগ ইন", a cart link and the
  BN | EN toggle.
- No rule lines; the two-tone split is the design.
- Colours: navy block (navy + off-white) and off-white bar (off-white +
  navy) = 2 ✓.

**Header, mobile** (56px): the same split in miniature. A navy square at
left holding "EMA" in Domaine, the full wordmark in navy on off-white next to
it, and BN | EN at top right (always visible, 48px).

**Bottom tab bar, mobile only:**
- Fixed, 64px plus `env(safe-area-inset-bottom)`, off-white with a navy 1px
  top line.
- 5 tabs, icon + label at 13px, navy: হোম `index.html` · কোর্স
  `courses.html` · বই `books.html` · অ্যাসেসমেন্ট `human-assessment.html` ·
  আরও (opens a bottom sheet with শিক্ষক, পরিকল্পনা, আমাদের কথা, সাহায্য,
  account links, and the language toggle repeated).
- Active tab gets a filled navy pill behind its icon, icon in off-white.
  State is navy, so no gold (R3).
- Colours: off-white + navy = 2 ✓.

**Footer:**
- One **navy** band. A 3-door row: three off-white cards linking to
  `courses.html`, `books.html`, `human-assessment.html`.
- Then link columns in off-white.
- Then the **bold moment**: "Energy Mining Academy" set in Domaine at
  `clamp(3rem, 11vw, 9rem)`, off-white, full width, with a gold 2px rule
  under it.
- Last line: © and legal, off-white small text on navy.
- Colours: navy + off-white + gold = 3 ✓; the cards are nested components
  (R1).

```
DESKTOP
┌──────────────┬───────────────────────────────────────────────────┐
│██ navy ██████│ off-white: কোর্স  বই  ফ্রি অ্যাসেসমেন্ট  শিক্ষক  পরিকল্পনা │
│ Energy Mining│                          [কার্ট] [লগ ইন■] (BN|EN)    │
│ Academy      │                                                   │
└──────────────┴───────────────────────────────────────────────────┘
FOOTER (navy)
│ ┌ কোর্স দেখুন ┐ ┌ বইয়ের তাক ┐ ┌ ফ্রি অ্যাসেসমেন্ট ┐   (off-white cards) │
│ শিখুন  বই  নিজেকে জানা  অ্যাকাউন্ট  একাডেমি                        │
│ Energy Mining Academy        ← Domaine ~9rem, off-white          │
│ ══════════ gold 2px ══════════                                   │
│ © Energy Mining Academy · আইনি তথ্য · হেল্পলাইন: TBA              │
MOBILE
┌────┬───────────────────┬──────┐
│EMA │ Energy Mining Ac… │BN|EN │ 56px
└────┴───────────────────┴──────┘
           … page …
┌──────────────────────────────┐ fixed, off-white
│ ⌂    ▣     ▤     ◎      ⋯   │
│হোম  কোর্স   বই  অ্যাসেসমেন্ট আরও │ 64px + safe area
└──────────────────────────────┘
```

- **Noticed first:** on a phone, the tab bar — which makes it obvious there
  are separate sections to visit. That is the strongest possible cure for
  "it reads as one page". On desktop, the navy spine block.
- **Why it is not v1:** a two-tone split header, bottom-tab navigation, and
  a giant typographic footer. None of v1's structure survives.
- **Risk:** a fixed bar takes 64px of a small phone screen, and the owner
  may find it "app-like". **Mitigations:** pages get bottom padding equal to
  the bar's height, so nothing is ever covered; the bar hides inside
  checkout and test-taking flows (`cart.html`, `self-test-take.html`), so it
  never competes with the primary action; falls back to Concept A's menu if
  rejected.

**Claude's recommendation (recorded, not decided):** C on mobile (where most
of the audience is) combined with A's header on desktop. If the owner wants
three pure options, ship A, B and C as they are. The owner judges; this spec
does not pick for him.

### Concepts at a glance

| | A "Bookplate" | B "Navy spine" | C "Shelf and tabs" |
|---|---|---|---|
| Header | Off-white, one row, gold rule | Navy, one slim row, gold underline | Split: navy spine block + off-white bar |
| Footer | One navy band | One off-white colophon band | One navy band, giant Domaine wordmark |
| Mobile nav | Off-white slide sheet, toggle on top | Full-screen navy dialog, toggle at bottom | Fixed bottom tab bar + "আরও" sheet |
| Bold moment | Ink-on-paper wordmark + navy hero | Gold current-page underline | Giant footer wordmark; tab bar on mobile |
| Guideline risk | "Not navy enough" | Closest to rejected v1 header | "App-like" fixed bar |

## 3. Short multi-page home concept (6 sections)

Persuade mode. The one bold moment is section 2. Every link below was
checked with Glob — all are real files (see §6). **No `#` anchor navigation
anywhere on the home.**

| # | Section | Surface | Content (existing copy only) | Links out |
|---|---|---|---|---|
| 1 | **Hero** | Navy | H1 "নিজেকে জানা, নিজেকে বদলানো" (from `<title>`), plus the lead line from `index.html` ("চারটি এনার্জির কোর্স, বই ও নিজের সম্পর্কে জানার পথ। আপনার লক্ষ্য থেকে শুরু করুন।"). Three goal doors as 64px links. | "নিজেকে জানতে চাই" → `self-test.html` · "একটি এনার্জি গড়তে চাই" → `courses.html` · "জীবনের পরিকল্পনা করতে চাই" → `personal-project-plan.html` |
| 2 | **Four Energy doors (the bold moment)** | Navy, continuing from the hero, separated by a gold rule | Four tall navy cards. The English word set huge in Domaine (Voice / Body / Mind / Purpose, ~4rem), the Bangla name below, the existing cover geometry in gold, "১টি কোর্স". | `courses/voice.html` · `courses/body.html` · `courses/mind.html` · `courses/purpose.html` · "সব কোর্স দেখুন" → `courses.html` |
| 3 | **Book shelf** | Off-white | Heading "বইয়ের তাক". One navy book card: আত্মার রসায়ন, Sayful Alvi, format pills, "স্টকের তথ্য: নিশ্চিত করা বাকি". No price (TBA). | `books/atmar-rosayon.html` · "বইয়ের তাক দেখুন" → `books.html` |
| 4 | **Free assessment (the only one)** | Navy | "সম্পূর্ণ ফ্রি" badge; Human Assessment: ২১০টি প্রশ্ন, ৭টি স্তর, ২৬টি সেলফ-টেস্ট; "নিজের প্রোফাইল, কোনো র‍্যাঙ্কিং বা মোট স্কোর নয়।" No price, no "unlock". | Primary on navy → `human-assessment.html` · secondary on navy → `self-test.html` |
| 5 | **Teachers and founder** | Off-white | The founder quote from `index.html`, verbatim, with attribution ("আমার লক্ষ্য — মানুষ যেন আমার ওপর ভরসা রাখে, আমার কাছ থেকে শেখে, আর দীর্ঘদিন আমার সঙ্গে থাকে। — Sayful Alvi") and a "শিক্ষক হতে চান?" card. | `teachers.html` · "আমাদের কথা ও ছয় ধাপের যাত্রা" → `about.html` |
| 6 | **Plan + help strip** | Off-white | Two side-by-side cards: Personal Project Plan (the line from `index.html`: "ভিশন ও বর্তমান অবস্থা থেকে নিজের পরিকল্পনা — কোন দিক নিয়ে, কীভাবে এগোবেন, তার লিখিত পথ।") and "শুরু করার আগে প্রশ্ন?" | `personal-project-plan.html` · `help.html` |

**Removed from the home (and where each lives now):**
- Need chips — duplicated the goal doors; removed.
- The second journey grid and "how it works" — live on `about.html`
  (verified: `about.html` line 148, "ছয় ধাপের যাত্রা").
- The Why list — moves to `about.html`.
- The notice board — its rows were design notes, not real announcements
  (`index.html` says so itself: "ডিজাইন কাজের তারিখসহ নমুনা সারি; এগুলো
  একাডেমির ঘোষণা নয়।"). Removed until real announcements exist.
- The FAQ accordion — lives on `help.html`.
- The "spiritual" goal door — no page exists for it; removed, not invented.

That takes the home from 15 sections to 6. Only two things appear twice:
courses and books, each once as a teaser card and once as a "view all" link.

## 4. Chrome rules for all 27 pages

### 4.1 The rule that kills the one-page reading (checkable)

No `href` in the header, nav, mobile menu, tab bar, footer or home teasers
may contain `#`. Cross-page anchors like `index.html#journey` are banned too
— they are the same defect with a longer address (verified present on inner
pages today, e.g. `about.html` lines 50–55, 73–79, 246–263). The only allowed
fragment is the skip-link `href="#main"`. Section `id`s may stay for
skip-links, `aria-labelledby` and FAQ toggles (which are `<button>`s), never
as nav targets. Check with:

```
grep -o 'href="[^"]*#[^"]*"' *.html */*.html | grep -v 'href="#main"'
```

→ must print nothing. (Today it prints 672 lines across the repo — the
rebuild must drive that to zero outside `#main`.)

### 4.2 Primary nav, in this order

Paths are relative; pages in `courses/` and `books/` prefix them with `../`.

| Label | href | Marked current on |
|---|---|---|
| কোর্স | `courses.html` | `courses.html`, `courses/*.html` |
| বই | `books.html` | `books.html`, `books/*.html`, `cart.html`, `order-confirmation.html` |
| ফ্রি অ্যাসেসমেন্ট | `human-assessment.html` | `human-assessment.html`, `self-test*.html` |
| শিক্ষক | `teachers.html` | `teachers.html` |
| পরিকল্পনা | `personal-project-plan.html` | that page |
| *(menu/footer only)* আমাদের কথা | `about.html` | |
| *(menu/footer only)* সাহায্য | `help.html` | |

`aria-current="page"` goes on the exact page; `aria-current="true"` on the
parent section for sub-pages. The full 5-item row shows from 1100px wide
(estimate — needs a Playwright pass at 360/390/1024/1440px, see §6). Below
that, the menu (A/B) or the tab bar (C) takes over, because five Bangla
labels plus the wordmark and the right-hand cluster do not fit at 1024px.

### 4.3 Footer link groups (all real files)

- **শিখুন:** `courses.html`, `courses/voice.html`, `courses/body.html`,
  `courses/mind.html`, `courses/purpose.html`, `teachers.html`,
  `personal-project-plan.html`
- **বই:** `books.html`, `books/atmar-rosayon.html`, `cart.html`
- **নিজেকে জানা (free):** `human-assessment.html`, `self-test.html`. The plan
  stays out of this group so nothing priced sits next to the free assessment.
- **অ্যাকাউন্ট:** `login.html`, `signup.html`, `my-courses.html`,
  `my-orders.html`, `my-results.html`
- **একাডেমি:** `about.html`, `help.html`, `legal.html`
- **Never in public chrome:** `admin.html`, `components.html`,
  `self-test-take.html`, `self-test-result.html`, `order-confirmation.html`
  (flow or internal pages).
- **Contact line:** helpline and hours TBA (keep `data-helpline`). No social
  links until real ones are supplied.

### 4.4 Utility strip

There isn't one. That kills the first v1 row. Login, cart and language move
into the header row (A/C) or icon buttons (B). The helpline moves to the
footer.

### 4.5 Mobile menu and EN/BN toggle

- The menu is a native `<dialog>`, as in `js/main.js`. Opening it moves
  focus inside; Esc and the close button both close it; background scroll is
  locked.
- Order inside the menu: language toggle, then the 7 nav items, then account
  links.
- The toggle is a pair of **links**, not buttons. BN points to the Bangla
  page; EN points to the `en/` counterpart if one exists.
- **Today only `en/index.html` exists** (verified: `en/` holds one file). On
  the other 26 pages, EN links to `en/index.html` and the menu note says
  "ইংরেজি সংস্করণ এখন শুধু হোম পাতায়". That is honest, not a dead toggle.
- In Concept C the toggle sits in the mobile header itself (always visible)
  and again in the "আরও" sheet.

### 4.6 Inner-page template

Header, then a navy title band (H1 + one line + breadcrumb links, e.g.
`courses.html` › কণ্ঠস্বর), then light content, then the footer (navy for
A/C, colophon for B). That keeps the navy-led balance on every page (§1.6).

## 5. What stays (constraints — do not violate in the build)

- **Fonts:** Domaine Display (main) and Synonym (secondary), from the
  supplied woff2 files only, as-is. Bangla uses the device system font.
  **Domaine has no Bengali glyphs** (per DESIGN-PLAN; the font file itself
  was not inspected — see §6), so Domaine's personality can only live where
  Latin text appears: the wordmark "Energy Mining Academy", "Voice / Body /
  Mind / Purpose", "Sayful Alvi", "Human Assessment", and the en pages. The
  concepts place the font exactly there.
- **Assessment:** completely free. "সম্পূর্ণ ফ্রি" badge only; no price, no
  "unlock", no blurred result. Its own menu item + exactly ONE home section
  (§3, #4).
- **Shops:** the book shop (Rokomari-style shelf, `books.html` → detail →
  `cart.html`) and the four-course, multi-teacher catalogue are designed in.
  Teacher names, durations, prices and stock stay "শীঘ্রই জানানো হবে" / TBA.
- **No invented material:** no testimonials, counters, timers, ratings,
  rankings, total scores, diagnosis or discount theatre. The plan's blurred
  preview stays on its own page, labelled as a sample.
- **Motion and accessibility:** motion on buttons and cards only (180ms lift
  and press), none under reduced motion. Visible focus on every surface
  (navy on light, gold on navy). Targets ≥48px. No gradients, no `#fff` or
  `#000`, light mode only.
- **Avoided generic patterns:** no all-caps eyebrow labels, no 01/02/03
  markers (the six-step journey on `about.html` is a real sequence, so
  numbering it is legitimate), no `→` on links (it stays only inside the
  brand's own tagline), no single gold word in a headline, one radius family
  (12px cards/panels, 10px buttons/inputs, pill for chips/toggle only).
- **Research borrows kept:** goal picker routing, Four Energy category cards
  with counts, "what you get" per course, free first lesson, free assessment
  as the trust bridge, Rokomari book-detail template, founder's note,
  plain-language FAQ, "Become a teacher" entry point, notice board only when
  real announcements exist. Research rejections kept: no rankings, no
  testimonial walls, no job-placement promises, no discount theatre, no
  points/gamification, no therapy/medical framing, no app dependency.

## 6. Verification log + what could not be verified

**Verified by the runner (2026-11-25):**
- All 8 contrast figures in §1.2 recomputed from the hex values (Python
  WCAG) — all match the guideline's own figures; the three extra pairs
  (off-white/gold on charcoal, navy on charcoal) are new calculations.
- All 24 hrefs used in §3–§4 exist in the repo (mechanical check, 0 missing).
- `en/` contains only `index.html`; repo holds 27 HTML files.
- `about.html` holds the journey (line 148) and founder's note (line 190);
  cross-page `index.html#…` anchors confirmed on inner pages.
- Quoted copy in §3 (hero lead, plan line, founder quote, footer purpose)
  verified verbatim in `index.html`.

**Could not be verified / open items for the build round:**
- **Biggest open question — what "max 3 colours" means.** R1 treats it as
  one component, because the guideline's own 4-colour proportion implies a
  page uses all four. The owner may mean something stricter (3 colours per
  page). If he means per page, Concepts A/B/C all fail as specified and the
  spec must be re-cut. Ask him this one question before building — it is the
  only question this spec needs from him.
- **Widths are estimates.** The 1100px nav breakpoint, the two-line mobile
  wordmark, the ~300px navy spine block in Concept C: none was rendered.
  Needs a Playwright pass at 360, 390, 1024 and 1440px before the owner
  judges the variants.
- **Domaine's Bengali coverage** was taken from DESIGN-PLAN, not from
  inspecting the font file.
- **Claude's skill steps not run:** live Vercel web-interface-guidelines
  fetch, impeccable `context` launcher (both skipped to stay read-only).
- **Still TBA (never invented):** helpline number and hours, teacher names,
  course durations, all prices, stock, social links, English versions of the
  26 inner pages.
- **26 pages still carry v1 chrome with `#` links** — the anchor grep in
  §4.1 must pass on every file before v2 is called done.

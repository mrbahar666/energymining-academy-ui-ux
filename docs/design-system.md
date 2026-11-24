# Energy Mining Academy design system

## Design plan and review

**Custom theme: Navy Trust.** Navy carries trust and the main surfaces; off-white gives reading space; gold marks a considered detail; charcoal is reserved for body copy on light surfaces. The brand’s composition target is navy 60%, off-white 25%, gold 10%, charcoal approximately 5%, applied with a maximum of three colours per component surface. Cover art is a separate navy/off-white/gold surface from its light card body. These proportions are a composition target, not a measured viewport-area result; that requires the later browser review.

Domaine Display carries the brand and headlines. Synonym Regular, Medium, Semibold and Bold carry body copy and controls. Neither supplied family includes Bengali: the explicit local fallback stacks do that work. Body is 16px, small text 14px; mobile h1 starts at 32px. Latin body leading is 1.65; Bangla is 1.8.

The layout uses a 1160px content width, 20px mobile gutters and a 4/8/12/16/24/32/48/64/96px spacing scale. Align text to the start edge. Keep the header compact and left aligned, with one gold divider between the brand and navigation. Use space to separate sections, rather than repeated decorative rules.

```text
Desktop
[navy: utility                                      login]
[brand                                          tagline]
[one gold divider / navigation             BN | EN]
[goal question           four plain route choices]
[need chips                                             ]
[four shallow energy categories                         ]
[navy course shelf: four portrait covers + light bodies  ]
[book: cover                         title / formats     ]
[free assessment: explanation                    action ]
[login form                         signup form          ]
[dated design notices                                   ]
[FAQ title                          question / answer    ]
[footer brand] [grouped light links] [navy bottom bar]

Mobile
[utility / brand / navigation with menu button]
[goal question / four stacked routes]
[wrapping chips / energy categories / portrait courses]
[book cover / book details / free assessment]
[login / signup / notices / FAQ / three footer bands]
```

**Review before building:** an initial icon-tile goal picker and repeated gold heading rules would repeat generic component-kit and rejected reference habits. Replace them with plain, spacious routing links and unadorned headings. Spend the visual boldness in five composed cover artworks; keep controls quiet. Course cards have 12px corners, the horizontal book and assessment panels 10px, forms 14px, buttons 7px, and pills fully rounded. Use borders without a shadow kit. No numbered catalogue cards, accent-word headlines, uppercase eyebrows or arrow suffixes.

**Cover philosophy — Quiet Energy.** Each portrait studies a different kind of movement: sound radiates, the body settles, the mind gathers, purpose rises, and the book opens a threshold. Carefully balanced negative space makes the subject legible without a label. Navy is the ground, off-white gives the composition weight, and a restrained gold gesture supplies direction. The family shares proportion and precision rather than a repeated frame. These are explicitly labelled placeholder artworks, not final course or book covers.

The explicit brief wins over conflicting skill defaults and older plan/research aspirations: no preset or Anthropic theme, additional fonts, raster deliverables, invented facts, extra pages or approval workflow.

## Tokens

| Token | Exact value | Role | Contrast note |
|---|---|---|---|
| `--navy` | `#032C42` | Main surfaces, headings, primary actions, borders | Off-white pairing ≈13.1:1 |
| `--off-white` | `#F6F3EC` | Page, reading surfaces, text on navy | Navy pairing ≈13.1:1 |
| `--gold` | `#C9A24B` | Divider and cover shapes; highlights on navy | Navy pairing ≈6.1:1; forbidden text on light |
| `--charcoal` | `#1C1C1E` | Body text and small details on light | Off-white pairing ≈15.3:1 |

Semantic colour aliases resolve only to those four tokens. `--bg` and `--surface` use off-white; `--ink`, `--line` and `--focus` use navy; `--body` uses charcoal; `--accent-line` uses gold. A `.navy-surface` resets foreground, headings, links and focus to off-white. `.light-surface` restores the light defaults inside it.

`--font-display` ends in `Georgia, "Noto Serif Bengali", serif`. `--font-body` ends in `system-ui, -apple-system, "Segoe UI", "Noto Sans Bengali", "Hind Siliguri", sans-serif`. All five font-face sources are the supplied, unchanged WOFF2 files in `fonts/`, referenced relative to the CSS. Font credits and licences remain in [Domaine licence](../fonts/DOMAINE-LICENSE.txt) and [Synonym licence](../fonts/SYNONYM-LICENSE.txt).

## Components

| Component | Usage |
|---|---|
| Header | Utility strip, Domaine brand, exact tagline, one gold divider and primary navigation on navy. |
| Mobile menu | Native modal dialog slides in; close button, Escape and link taps dismiss it; native focus containment and return. |
| Language toggle | Large BN/EN buttons share pressed state; changes the document language only until translation is implemented. |
| Goal picker | Four navigation choices route to self-knowledge, one energy, life planning or optional spiritual learning. |
| Need chips | Wrapping links route to a self-test, course, book or lesson without requiring an account. |
| Energy category | A shallow navy link shows the real energy and its one programme; counts are catalogue facts. |
| Primary button | Navy background and off-white text on a light surface; at least 48px high. |
| Secondary button | Off-white background and navy text on navy surfaces; at least 48px high. |
| Ghost button | Transparent background, navy text and border on a light surface. |
| Course card | Portrait placeholder, real energy name, teacher status, plain focus/outcome, unknown-duration note and free-first-lesson note. |
| Book card | One wider cover-led card for আত্মার রসায়ন / Atmar Rosayon by Sayful Alvi, format pills and plain stock status. |
| Free assessment | Exactly one supporting section, one action, complete-free badge and unhurried time promise without an invented duration. |
| Login form | Labelled email/phone and visible-by-default password; OTP is only a secondary text link. |
| Signup form | Phone first, then email and visible-by-default password; includes an explicitly labelled error-state specimen. |
| Free badge | Off-white text on navy, or navy text on off-white; never gold text on light. |
| Format pill | Noninteractive PDF / hardcopy / audio metadata, not a format selector. |
| Stock badge | Plain availability wording; the demo says confirmation is pending rather than asserting unverified stock. |
| New badge | Used on the dated design specimen notice, never on an unconfirmed academy announcement. |
| Notice board | Two dated design-work specimen rows, explicitly separated in copy from academy announcements. |
| FAQ | One consistent button/hidden-panel pattern; synchronised `aria-expanded`, readable answers and a short reveal. |
| Footer | Navy brand/purpose band, off-white grouped links band, navy copyright/free-assessment bottom band. |

## Usage rules

- Open `components.html` directly; it loads only local CSS, JS, SVG covers and supplied fonts. No installation or build is needed.
- Use the semantic HTML patterns documented beside component rules in `css/design-system.css`. Every navigation action is an anchor; every state change is a button.
- Keep Bangla first (`html lang="bn"`), mark English names with `lang="en"`, and retain explicit Bengali fallbacks. The language switch is visual only; it does not promise translated page copy. `body lang="bn"` preserves the actual copy’s pronunciation and leading when the document toggle changes to English.
- Keep the three-colour surface limit: light bodies use off-white/navy/charcoal; navy surfaces and artwork use navy/off-white/gold. Gold decoration stays out of light card bodies.
- Keep 44px minimum interactive targets, 48px buttons, 52px inputs, 2px visible focus rings and linked labels/error descriptions. Error borders are navy, never an added colour.
- Use the shared 180ms easing for transform and background/border transitions. Buttons and cards respond to hover, press and keyboard focus. Disabled specimen submits stay still. Reduced motion removes transitions and reveal animations.
- Keep login/signup as clearly labelled design specimens with disabled submits: there is no authentication endpoint or data submission. Passwords are intentionally visible in the markup; this must be reconsidered when implementing real authentication.
- Use only the four real programmes and the one real book. Sayful Alvi is the founder; course teacher assignments and durations remain to be announced. Book stock is not verified, so the stock specimen states that it is awaiting confirmation.
- Placeholder cover images need both `data-placeholder="true"` and a nearby visible “placeholder” caption. Replace them only with confirmed real covers.
- Use an existing section anchor where a route exists in this demo. An unavailable page uses `href="#"` with a neighbouring comment naming its intended target; these are intentionally unfinished routes.
- The assessment and its complete result are free. Explain that it supports reflection, with no ranking or total score, and is neither therapy nor diagnosis. Spiritual learning is optional.
- Adopt only the requested patterns from the research’s Adopted tables. Unconfirmed prices, lesson times, delivery promises, popularity and testimonials remain absent even where research describes them elsewhere.

Accessibility review also follows the applicable [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md), with the explicit brief taking precedence.

## Never do this

- Gold text on light; colours beyond the four brand hexes; pure white or pure black.
- Gradients, dark mode, decorative button underlines, repeated hairline dividers or identical shadowed cards.
- Invented content, prices, ratings, testimonials, teacher names, course durations or contact details.
- Fake counters, timers, discounts, struck-through prices or low-stock pressure.
- Ranking, leaderboards or a single total score on assessments.
- Therapy or diagnosis framing, disease labels, assessment pricing, paywalls, locks or “unlock” language.
- QR codes or payment UI.
- External assets, fonts, dependencies, frameworks, build tooling or extra pages in this round.

Visual verification in a browser has NOT been done yet — local Chrome is unavailable; visual check happens later via GitHub Pages in the owner's browser.

## Verification

Completed 2026-11-24 using shell, Node and Python’s standard-library HTML/XML parsers:

- `grep -ci gradient css/design-system.css components.html assets/*.svg`: **0 in all seven files**.
- Case-insensitive `grep -E '#fff|#ffffff|#000|#000000' css/design-system.css`: **0 matches**. Palette extraction across CSS, HTML and SVG found only the exact brand hexes.
- `color:.*gold` review: **0 matches**; no gold foreground declaration applies to light text. Gold is used for the header divider, navy-context control borders, cover shapes and selection background.
- `node --check js/main.js`: **PASS**; main script is **46 lines**.
- `node js/main.test.cjs`: **PASS** for menu open/close, native-close event synchronisation, link taps, desktop resize, repeated language controls, FAQ open/close and missing elements. This simulates the DOM; it does not verify native browser focus or Escape behavior.
- All **5 font-face URLs** resolve to existing unchanged files in `fonts/` (also checked with `ls fonts/*.woff2`).
- All **5 SVG files** parse as standalone SVG, have `400×500` dimensions/viewBoxes and title/description metadata, and contain no external assets. All are referenced with `data-placeholder="true"` and visible placeholder captions.
- Structural check: **PASS** for Bangla document/body language; utility/brand/nav rows; mobile menu and both language toggles; goal picker; need chips; **4 energy cards, 4 course cards, 1 book card, 1 assessment card**; labelled login/signup forms; two dated design-work notice rows; four FAQ toggles; and all **3 footer bands**, in the requested order.
- Semantics/local references: **PASS** for balanced HTML tags, unique IDs, labelled inputs, existing ARIA/hash targets, local CSS/JS/images/preloads and comments identifying every unfinished `href="#"` target. Content checks found no prices, numeric course/assessment durations or promotional claims.
- Calculated contrast: off-white/navy **13.13:1**, gold/navy **6.07:1**, charcoal/off-white **15.35:1**.
- Impeccable detector ran once. Its nav-inset warning was corrected. Four remaining inset flags describe full-width bands whose inner `.container` supplies the actual gutter. Its type advisory misses the fluid heading tokens (body 16px, h3 ≥22px, h2 ≥26px); its cream warning conflicts with the required off-white. These are structurally reviewed exceptions, not browser evidence.
- Independent source/implementation review: **no material findings** after the Bangla body-language fix. `git diff --check`: **PASS**. All work remains uncommitted; nothing was pushed or deployed.

Visual verification in a browser has NOT been done yet — local Chrome is unavailable; visual check happens later via GitHub Pages in the owner's browser.

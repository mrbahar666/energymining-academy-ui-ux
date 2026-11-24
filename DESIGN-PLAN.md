# Energy Mining Academy — UI/UX Design Plan (plain HTML)

**Repo:** https://github.com/mrbahar666/energymining-academy-ui-ux (PUBLIC — owner order, explicit exception to the private-repo rule)
**Live design (GitHub Pages):** https://mrbahar666.github.io/energymining-academy-ui-ux/ (main branch, root)
**Main app (separate, NOT this repo):** https://github.com/mrbahar666/energymining-academy (Next.js, live at energymining.academy)
**Owner order:** 2026-11-25 ~00:18 — "listen first, then design". UI/UX in this NEW public repo in plain HTML, NOT on the main site.
**Standing approval:** owner said do not stop work for any permission ("amar theke permission nio na", repeated in this order). If a system approval card appears for a push, note it and keep designing; retry the push when the user is watching. Never let a card stall the design work.

## 0. Model / effort (owner order, verified)

- Ordered: Codex **GPT-6.2 Sol (latest), effort ULTRA**. Claude Opus may also be used for design passes.
- **VERIFIED 2026-11-25:** `gpt-6.2-sol` and `gpt-6.2` are NOT available on this ChatGPT account — Codex returns `400 model_not_found: "The 'gpt-6.2-sol' model is not supported when using Codex with a ChatGPT account."` (both names probed). **Fallback in use: `gpt-6.1-sol` + `model_reasoning_effort="ultra"`** (codex exec `-m gpt-6.1-sol -c model_reasoning_effort="ultra" --sandbox workspace-write`, stdin closed `< /dev/null`). Never stop work over the model name; record any change here.
- Skills ACTIVE for real: design skills (frontend-design, canvas-design, brand-guidelines, theme-factory, web-design-guidelines, impeccable), Ponytail discipline for code, Graphify to map codebases, Context7 for library docs.
- Method: design system first, then pages. Serial rounds per tree (never two rounds editing the same files at once); parallelise across separate pages/components via runner subagents. Runners must NOT commit/push/deploy or launch follow-ups — the coordinator verifies and ships.

## 1. Inputs — all read before designing

| Input | Location / status |
|---|---|
| Brand guideline | `~/workspace/user/files/Sayful_Alvi_Brand_Colors__2.docx` — READ fully (46 lines, extracted to `~/workspace/energymining-academy-uiux-draft/Sayful_Alvi_Brand_Colors__2.txt`). See §2 — match it EXACTLY. Owner has rejected colour combinations 3× for not matching it. |
| Main font — Domaine Display | `domain_name_font_for_web_main_font.zip` → `Domaine Display/Web Fonts/127532bae53efa808330288dd41e2316.woff2` (33 KB, single weight) + `.ttf`. Copied as-is into `fonts/`. Licence: OnlineWebFonts CC BY 4.0 (credit required — see README + `fonts/DOMAINE-LICENSE.txt`). |
| Secondary font — Synonym | `Synonym_Complete__1.zip` → `Synonym_Complete/Fonts/WEB/fonts/*.woff2` (Regular/Medium/Semibold/Bold/Light/Extralight/Variable). Copied as-is into `fonts/`. Licence: ITF Free Font License (`fonts/SYNONYM-LICENSE.txt`). |
| Website plan | `Energy_Mining_School___Website_Developer_Guide.docx` — READ (934 lines extracted). Brand name is **Energy Mining Academy** (never "School"). Journey, sections, pricing, ethics in §4. |
| Assessments | `EMA-Self-Assessment-Demo.zip` (26 self-tests; 18 licence-ok, 5 lock, 3 draft) + owner GitHub repo `mrbahar666/human-assessment-v2` (210 questions, 7 layers × 30). **Assessment is a COMPLETELY FREE service — design it that way** (owner order 2026-11-25; supersedes the guide's "নামমাত্র দাম" for Human Assessment). Free-first, no paywall cues, no price on assessment. |
| Main repo reference (read-only, DO NOT edit) | `~/workspace/energymining-academy` + `plan.md` there — the current design system/chrome/page structure the owner has seen/rejected. This HTML design must be VISIBLY different and better, per the guideline. |
| Live site (reference) | energymining.academy — current live design (home re-skin + R4-auth era). |

## 2. Brand guideline — the exact rules (from Sayful Alvi's doc)

- Purpose: Navy = trust, Gold = result, Off-white = learning, Charcoal = depth. Trust · Training · Loyalty.
- **Proportions: Navy 60% | Off-white 25% | Gold 10% | Charcoal ~5%.**
- Navy background: Off-white text, Gold highlight. Buttons on navy: Off-white background + Navy text.
- Light background: Navy headline, Charcoal body text.
- **Gold text on a light background is FORBIDDEN** (contrast ~2:1, unreadable). Gold only for line, icon, shape — never body/headline text on light.
- Max **3 colours per design**. NO pure white, NO pure black.
- Contrasts: Off-white on Navy ~13:1 · Gold on Navy ~6:1 · Navy on Off-white ~13:1 · Charcoal on Off-white ~15:1.
- Same colours on book, course, social post — everywhere, so people recognise the brand before reading.

## 3. Design rules (standing)

- Brand colours only (Navy `#032C42`, Off-white `#F6F3EC`, Gold `#C9A24B`, Charcoal `#1C1C1E`). No gradients. Light mode ONLY (dark mode fully removed — owner order).
- Fonts: ONLY the supplied files, as-is (no subset/convert/rename, NO Google Fonts, no other webfont). Domaine Display = main (headlines, brand), Synonym = secondary (body/UI). Neither has Bengali glyphs — Bangla renders in the device system font.
- Motion on every button and card, everywhere. Mobile-first (audience mostly mobile, slow internet — keep pages light, no heavy assets; placeholder cover art in brand colours, marked placeholder).
- Bilingual bn/en — site opens directly in Bangla, big EN/BN toggle in the mobile menu.
- Course-selling + book-selling LED. Assessment = its own menu section + exactly ONE homepage section with order-bump-style buttons (never assessment-led hero).
- Books: full e-commerce section modelled on Rokomari (many books, search/filter/sort, format choices PDF/hardcopy/audio, cart → order confirmation flow). Courses: multi-teacher platform (4 Energy courses: Voice/Body/Mind/Purpose; multiple teachers, each with own dashboard; teacher-set pricing and enrolment).
- No fake testimonials/counters/timers. No ranking, no single total score on assessments, no diagnosis/disease labels. No invented content (4 real programmes, 1 real book so far, unknown prices — never invent titles/prices/ratings; mark placeholders as placeholder). No QR anywhere.
- Header/footer per guideline. Guide's homepage structure (8 sections) is a reference, not a cage — research (§5) decides the final section list.

## 4. What the site is (from the guide)

Journey of self-knowledge → self-change. Centre: Human Assessment; around it self-tests, Four Energy courses, books, Personal Project Plan, spiritual lessons. Audience: Bangladesh, all levels, Muslim + non-Muslim, adults, teens 13–17, children 10–12; mostly mobile, slow internet. 6-stage journey: 1) Amar gothon (Life Timeline) 2) Nijeke jana o bojha (self-test, 360° Mirror, Human Types, Strengths, Four Energy Map) 3) Vision o Present 4) Development (Four Energy courses) 5) Cleansing 6) Adhyatmik path (optional). Free: self-tests, Life Timeline, check-in, content. Paid: Personal Project Plan, courses, books (PDF/hard copy/audio). **NO payment for now** (owner order) — design the flows, no payment UI. Account: phone-focus + email, login by PASSWORD (email/phone + password, OTP only secondary).

## 5. Research (DONE 2026-11-25 — read live, nothing invented)

- **Bangladeshi academy sites** → [`docs/research-bd.md`](docs/research-bd.md) — 7 sites read live (10 Minute School, Shikho, Ostad, Interactive Cares, Ghoori Learning, Rokomari, Islamic Online Madrasah IOM). Bohubrihi attempted, homepage unreadable (JS-heavy) — honestly excluded. Top borrows: "Where do you start?" picker + free diagnostic front door; Four Energy category cards with counts; "What you get" benefit grid + Ostad course-detail anatomy; journey as a staged path; Rokomari-style bookshop browse (category/author/format, pre-order first-class, COD-simple ordering); numbered "Why us" reasons; duration on every card; notice board; "Become a teacher" entry point.
- **International sites** → [`docs/research-international.md`](docs/research-international.md) — 8 sites read live (Mindvalley, 16Personalities, MasterClass, Coursera, Headspace, Udemy, Truity, Rokomari). Black Friday promotions dominated several homepages that day — recorded, not smoothed over. Top borrows: Four Energy category catalogue; goal picker ("What brings you here today?"); need chips ("What are you looking for right now?"); guided pathway (courses in sequence → My Life Plan); free first lesson; one hero/one action/one time promise for the free assessment (one section only, never the hero); result as a profile (per-layer, no total score); teach-the-model-before-the-test + sample report; Rokomari book-detail template; founder's personal note; plain-language FAQ.
- **Deliberately NOT adopted (both docs):** rankings/leaderboards/scores, testimonial walls/star ratings, job-placement promises, discount theatre (struck-through prices, % off, countdowns, "seats left"), paywalled results / "unlock full report", all-access subscriptions, live counters/accuracy/outcome stats, celebrity/career framing, therapy/medical framing, points/gamification, app dependency, non-book sprawl.

## 6. Section decisions (from research + guide)

Homepage (bn-first, shopfront-led, mobile long-scroll — courses + books lead, assessment exactly ONE section):
1. Header — utility strip (log in, helpline), brand row + tagline, nav row; big EN/BN toggle in the mobile slide menu.
2. Hero — shopfront: goal picker "Where do you start?" (Know myself / Grow one energy / Plan my life / Learn spiritually) routing into the 6-stage journey.
3. Need chips — "What are you looking for right now?" routing to a self-test, course, book or lesson, no account needed.
4. Four Energy category cards — Voice / Body / Mind / Purpose, with course counts.
5. Courses — course cards (teacher name + one plain outcome line + duration + free first lesson note).
6. Bookshop — book cards (cover, author, format pills PDF/hardcopy/audio, stock); browse by theme/author/format; pre-order first-class.
7. Journey — 6-stage path (assessment → self-knowledge → Vision → Development → Cleansing → spiritual path) + 4-step "how it works" strip.
8. Teachers — teacher profiles as the trust anchor (Sayful Alvi + each course teacher); "Become a teacher" entry point.
9. **Free assessment — EXACTLY ONE section** — Human Assessment (210 questions, 7 layers) + 26 self-tests; teach-the-model first, one time promise, one button, full result free, no paywall cues, no price.
10. Personal Project Plan (My Life Plan) — what it is, sample (blurred) report preview.
11. Founder's note — short personal note from Sayful Alvi.
12. Why Energy Mining Academy — numbered, concrete, verifiable reasons only.
13. Notice board — dated announcements strip.
14. FAQ — plain language, incl. what the assessment is and is NOT (not therapy, not diagnosis).
15. Footer — 3-band (brand / links / bottom bar), helpline + hours, real contact only.

Other pages follow the same system: course list + detail (Ostad anatomy: demo → curriculum by module with teacher → teacher bio → requirements → what you get → FAQ), book list + detail (Rokomari template: cover/author/format/price/Buy Now/stock/delivery/summary/spec table/related), cart → order confirmation (name/phone/address, no payment), self-test flow + result (profile, no score), Human Assessment flow (teach model → 210 questions → full free result), teachers + teacher dashboard, my-courses/my-orders/my-results, login (password-led), signup (phone-focus + email), admin (advanced), about/help/legal.

## 7. Design system (to be built)

Tokens: colours (§2), type scale (Domaine Display headlines + Synonym body/UI, Bangla system-font fallback), spacing, motion (buttons + cards everywhere), components: header, footer, buttons, cards (course / book / assessment), forms, nav, badges, cart, order confirmation.

## 8. Page list (plain HTML, bn-first, en alongside)

- [ ] `index.html` (bn home) + `en/index.html` — shopfront-led: courses + books lead, assessment one section
- [ ] `courses.html` + `courses/voice.html` etc. (course list + detail, 4 Energy courses)
- [ ] `books.html` + `books/atmar-rosayon.html` (book list + detail, format choices)
- [ ] `cart.html` → `order-confirmation.html` (cart → order confirmation, no payment)
- [ ] `self-test.html` + test flow + result (free)
- [ ] `human-assessment.html` (free, 210-question flow design)
- [ ] `teachers.html` (+ teacher dashboard design)
- [ ] `about.html`, `help.html` / contact, `legal.html` / FAQ
- [ ] `login.html` (password-led, OTP secondary), `signup.html` (phone-focus + email)
- [ ] `my-courses.html`, `my-orders.html`, `my-results.html`
- [ ] `admin.html` (advanced-level design)
- [ ] `css/design-system.css`, `css/pages.css`, `js/main.js`, `assets/` (placeholder covers in brand colours)

## 9. Progress log

- 2026-11-25 ~00:19 — Repo created (public `mrbahar666/energymining-academy-ui-ux`), cloned to `~/workspace/energymining-academy-ui-ux`. Fonts copied as-is into `fonts/` (Domaine Display woff2 + Synonym woff2 ×7 + licences). Brand guideline + developer guide extracted and read. Codex 6.2 NOT available on this ChatGPT account → fallback `gpt-6.1-sol` + effort ULTRA (recorded §0).
- 2026-11-25 — Research runners launched (BD + international). Design system next, then pages.
- 2026-11-25 — Research DONE: both docs verified by coordinator (read in full — grounded in live reads, partial reads honestly flagged, no invented contents). BD: 7 sites (10MS, Shikho, Ostad, Interactive Cares, Ghoori, Rokomari, IOM). International: 8 sites (Mindvalley, 16Personalities, MasterClass, Coursera, Headspace, Udemy, Truity, Rokomari). Section decisions recorded in §6. Research docs committed. Design-system runner next (Codex GPT-6.1-sol ULTRA, design skills active).
- 2026-11-25 — Design system DONE (Codex GPT-6.1-sol ULTRA, exit 0, ~13.4 min): `css/design-system.css` (300 lines, exact 4 tokens, Domaine + Synonym, motion), `components.html` demo (401 lines, bn), 5 placeholder cover SVGs (brand colours, `data-placeholder="true"` — coordinator added the marker to the SVG roots; the `<img>` tags already carried it), `js/main.js` (46 lines: native dialog menu, EN/BN toggle visual-only, FAQ accordion) + `js/main.test.cjs` self-check (Codex-added, kept), `docs/design-system.md`. Coordinator-verified: 0 gradients, 0 #fff/#000, only the 4 hexes, JS OK, all @font-face URLs resolve, no invented content (no prices, no durations, no invented teachers — "শীঘ্রই জানানো হবে", no phone/email/ratings/testimonials/counters/timers, no payment UI, no dark mode). Committed. Visual check still pending — local Chrome dead; verify via GitHub Pages in the owner's browser.
- 2026-11-25 — Home page builder running (index.html + en/index.html, shopfront-led per §6).
- 2026-11-25 — Home page DONE (direct build, no Codex): `index.html` (36,571 B, bn) + `en/index.html` (27,437 B), all 15 sections in order, design system reused as-is + small marked HOME-ONLY style blocks. Coordinator-verified: 0 gradients, 0 #fff/#000, 0 prices, exactly 1 assessment section per file, 0 unclosed tags, all src/href resolve. Known: 11 `href="#"` placeholders per file (login, course details, book detail, human-assessment, teachers, personal-project-plan — recorded in home-log.md, to be wired as those pages land). NOTE: the home runner's first probe triggered a system execution-risk notice on this repo, so it built directly per the fallback and ran no Codex/git commands — a future Codex round should review/refine, not rebuild. No user go-ahead was sought (standing order: no permission asks). Committed. Courses pages next.
- 2026-11-25 — Courses DONE (Codex GPT-6.1-sol ULTRA, exit 0, ~7.2 min — no execution-risk notice this round): `courses.html` catalogue (Four Energy cards 1 each, filter chips, guided pathway, FAQ) + 4 detail pages (Ostad anatomy, placeholder curriculum rows, teacher TBA, no payment UI) + `courses.test.cjs` filter self-check (PASS). Home course links wired (4 per file; 7 non-course `href="#"` remain). Coordinator-verified: 0 gradients, 0 #fff/#000, 0 prices, 0 unclosed tags, filter test PASS. Committed. Books pages next (books.html + book detail + cart → order confirmation).
- 2026-11-25 — Books DONE (Codex GPT-6.1-sol ULTRA, exit 0, ~8.8 min): `books.html` (Rokomari-style browse, 1 real book + 2 marked coming-book slots, pre-order first-class) + `books/atmar-rosayon.html` (detail template: format cards, stock/delivery TBA, spec table, cross-recommendations) + `cart.html` (localStorage demo, COD-style name/phone/address, no payment UI) + `order-confirmation.html` (demo order number `EMA-YYYYMMDD-XXXX`, labelled design demo) + `js/cart.js` + `js/cart.test.cjs` (PASS). Home book links wired (1 per file; 6 `href="#"` remain per file). Coordinator-verified: 0 gradients, 0 #fff/#000, 0 prices, 0 unclosed tags, cart test PASS. Committed. Assessment pages next (self-test list + take + result; Human Assessment intro + flow design).
- 2026-11-25 — Assessment DONE (Codex GPT-6.1-sol ULTRA, exit 0, ~10.7 min): `self-test.html` (all 26 real tests, 18 ok / 5 lock / 3 draft, real names + creators; Voice honestly has no self-test yet), `self-test-take.html` (real Mini-IPIP 20 items verbatim, pages of 10, progress as question numbers only, honest save rule), `self-test-result.html` (profile: 5 dimensions, strengths + growth areas, no total score/rank/diagnosis, WHO-5 safety rule stated), `human-assessment.html` (teach-first: 7 real layers + 70 dimensions, Four Energy Map, 5 levels with thresholds 721/601/461/331 as a map, first 3 real HA questions, full result free). `assessment.test.cjs` PASS. Home assessment links wired (1 per file; 5 `href="#"` remain per file). Coordinator-verified: 0 gradients, 0 #fff/#000, 0 unlock/paywall/leaderboard, 0 unclosed tags, exactly 1 assessment section per home page. Committed. Final pages next (teachers/about/help/legal/plan + auth/my-*/admin, two parallel runners; coordinator wires the remaining home links after).
- 2026-11-25 — Final pages DONE (two parallel runners, both Codex GPT-6.1-sol ULTRA): content pages — `teachers.html`, `about.html`, `help.html` (8-question FAQ, contact/helpline TBA honestly), `legal.html` (draft-specimen notice + ethics coverage), `personal-project-plan.html` (Vision/Mission, 90-day→50-year roadmap, blurred sample, price TBA); account/admin — `login.html` (password-led, OTP secondary, honest demo note, never a fake success), `signup.html` (phone-focus + email, birth year only, segment rules, consents), `my-courses.html`, `my-orders.html`, `my-results.html` (all honest empty state + labelled specimens, no score/rank), `admin.html` (tabler-style, no invented numbers, all 26 tests with matching statuses). Coordinator verified both rounds (0 gradients, 0 #fff/#000, 0 prices, 0 unclosed tags) and wired ALL remaining home links itself (login ×3, teachers, plan per file; my-orders in order-confirmation.html) — 0 `href="#"` left in the home files. Full-repo link audit: 27 HTML files, 1,256 refs, 0 broken (2 hits were `cart.html?add=…` query strings — file exists, cart.js reads the param). Committed. Full page set DONE per §8 — remaining: Codex review/refine of the home pages (built directly, no Codex), owner browser visual check via Pages.

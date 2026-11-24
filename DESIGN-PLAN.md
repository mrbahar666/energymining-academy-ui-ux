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

## 5. Research (BEFORE design — in progress)

- **Bangladeshi academy sites** → `docs/research-bd.md` — site name, URL, sections worth borrowing, what to avoid. (Runner: BD research.)
- **International sites** → `docs/research-international.md` — same structure. (Runner: international research.)
- Section decisions after research: which BD + international sections are adopted and why — recorded in §6 and the research docs.

## 6. Section decisions (after research — TBD)

_To be filled from the research notes. Candidate sections: shopfront hero (courses + books), Four Energy courses, bookshop (Rokomari-style), teachers, free assessment (one section only), journey/6 stages, Personal Project Plan, spiritual lessons, about Sayful Alvi, FAQ, help/contact, legal._

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

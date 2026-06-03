# 🚛 Waste Removal Website — Claude Project Guide

> **How to use this file:**
> Load this into a [Claude Project](https://claude.ai/projects) as your project instructions.
> Claude will read it and walk you through each phase step-by-step, asking you questions and producing real outputs you can use.
> You won't need to figure out what to do next — just answer Claude's questions and commit the files.

---

## What This Project Is

You're building a professional website for your waste removal business.
Your dad has already created a research-backed proposal with platform recommendations, pricing, legal flags, and a 3-week launch timeline.
This guide is the **interactive build companion** — Claude's job is to run you through each phase, ask you the right questions, and generate real deliverables (copy, code, SEO tags, checklists) that go straight into your project folder.

**The output of this project:**
- A live website with a custom domain
- A Google Business Profile that drives calls
- A Git repository holding every asset, every word of copy, and a full audit trail
- A business you can run from your phone

**Ground rule on legal:** Every account you create (domain, hosting, payment, Google) must be registered under a parent or guardian's name. You manage everything day-to-day — but all Terms of Service require an adult as the legal account holder. This isn't optional.

---

## How Claude Will Run Each Phase

At the start of every session, tell Claude which phase you're on:

```
"I'm working on Phase 2: Domain and Hosting. Let's go."
```

Claude will:
1. Confirm what should already be done (dependency check)
2. Ask you a series of questions
3. Produce the deliverable(s) for that phase
4. Tell you exactly what to save and commit

If you get stuck, say: `"I don't know — give me options and recommend one."`
Claude will pick the best path and explain why.

---

## Phase 0 — Project Spine: Folder Structure + Git

**Goal:** Create your project folder, connect it to GitHub, and have a clean structure that holds everything for the entire build.

**Before you start:**
- You need a GitHub account (github.com — free, sign up takes 5 minutes)
- Git installed on your computer (git-scm.com — download for your OS)
- A code editor (VS Code is free and what most developers use)

---

### Step 0A — Install + Verify Git

When you start this phase, Claude will ask you:
1. What operating system are you on? (Mac / Windows / Linux)
2. Do you already have Git installed?
3. Do you already have a GitHub account?

Based on your answers, Claude will give you the exact terminal commands to install Git, configure your name and email, and generate an SSH key so your computer can push to GitHub without a password every time.

**What Claude produces:**
- Step-by-step terminal commands for your OS
- SSH key setup instructions
- Git config commands

---

### Step 0B — Create the Project Folder

Run these commands in your terminal (Claude will customize them for your business name):

```bash
mkdir waste-removal-website
cd waste-removal-website
git init
```

Your project will use this exact folder structure.
Claude will generate each file as you complete the phases — don't create them manually yet, just create the folders:

```
waste-removal-website/
│
├── README.md                   ← Project status board (auto-generated)
├── .gitignore                  ← Tells Git what NOT to track
│
├── brand/
│   ├── brand-brief.md          ← Your business identity (Phase 1 output)
│   ├── style-guide.md          ← Colors, fonts, tone (Phase 3 output)
│   └── logo/                   ← Drop logo files here (Phase 3)
│
├── copy/
│   ├── home.md                 ← Homepage copy (Phase 4)
│   ├── services.md             ← Services page copy (Phase 4)
│   ├── about.md                ← About page copy (Phase 4)
│   ├── pricing.md              ← Pricing page copy (Phase 4)
│   ├── service-area.md         ← Service area + town list (Phase 4)
│   └── contact.md              ← Contact page copy (Phase 4)
│
├── seo/
│   ├── keywords.md             ← Target keyword list (Phase 8)
│   ├── meta-tags.md            ← Meta titles + descriptions (Phase 8)
│   └── gbp-description.md      ← Google Business Profile text (Phase 7)
│
├── assets/
│   ├── photos/                 ← Real job photos — before/after (Phase 5)
│   └── optimized/              ← Compressed versions for web (Phase 9)
│
├── legal/
│   ├── service-agreement.md    ← Customer service contract template (Phase 6)
│   ├── terms-of-service.md     ← Website T&C (Phase 6)
│   └── privacy-policy.md       ← Privacy policy (Phase 6)
│
├── docs/
│   ├── proposal.html           ← Dad's original proposal (copy it here now)
│   ├── accounts.md             ← TEMPLATE: where accounts live (NO passwords)
│   └── launch-checklist.md     ← Pre-launch verification list (Phase 9)
│
└── site/                       ← Only used if building with HTML/CSS code
    └── (empty for now)
```

**Create the folder structure now:**

```bash
mkdir -p brand/logo copy seo assets/photos assets/optimized legal docs site
touch README.md .gitignore docs/accounts.md
```

---

### Step 0C — Create .gitignore

Claude will generate your `.gitignore` file. It will block:
- Password files, `.env` files, secret keys
- OS junk (`DS_Store`, `Thumbs.db`)
- Large raw photo files if you choose
- Node modules if you ever use any JS tools

**Never commit passwords, API keys, or login credentials to Git — ever.**

---

### Step 0D — Create Your README

Claude will generate a `README.md` that serves as your project dashboard. It will include:
- Business name and elevator pitch
- Current phase you're on
- Launch date target
- Links to key accounts (no passwords)
- Quick command reference

---

### Step 0E — Push to GitHub

Claude will walk you through:
1. Creating a new **private** repository on GitHub (private = only you can see it)
2. Connecting your local folder to GitHub
3. Your first commit and push

```bash
git add .
git commit -m "Phase 0: Project spine initialized"
git push -u origin main
```

✅ **Phase 0 complete when:** You can see your folder structure in your GitHub repo.

---

## Phase 1 — Business Foundation

**Goal:** Lock in every foundational business decision before building anything. Everything downstream depends on this.

**Dependency:** Phase 0 complete + parent/guardian has agreed to be legal account holder.

**Claude will ask you:**

1. What is your business name? (or do you need help brainstorming?)
2. What city/state/region do you serve?
3. What services do you offer? (junk removal, appliance hauling, yard waste, commercial cleanout, estate cleanout, construction debris — check all that apply)
4. What makes you different from other junk removal companies in your area? (eco-friendly? same-day? cheapest? most professional? veteran-owned? local family?)
5. What's your phone number that goes on the website?
6. Do you have a business email yet, or do we set that up with the hosting?
7. Do you have a physical address to display, or is this a service-area-only business?
8. What are your business hours?
9. Are you licensed and insured? (even if you're getting insurance — do you have it?)
10. Rough pricing you want to display: do you want to show starting prices, ranges, or just "free quote"?

**What Claude produces:**
- `brand/brand-brief.md` — your complete business identity document
- A business tagline (3 options, you pick)
- An elevator pitch (2–3 sentences for use everywhere)
- Your full service list with short descriptions
- Your differentiators formatted for web use

**Commit:**
```bash
git add brand/brand-brief.md
git commit -m "Phase 1: Business foundation locked"
```

---

## Phase 2 — Domain + Hosting

**Goal:** Register your domain name and set up your hosting platform.

**Dependency:** Business name confirmed in Phase 1.

**Claude will ask you:**

1. Is [businessname].com available? (Claude will help you check and suggest variations)
2. Budget preference: Budget path (Hostinger ~$3/mo) or Standard path (Wix ~$17/mo)?
3. Are you comfortable using an AI drag-and-drop builder, or do you want Claude to write the actual HTML/CSS code?
4. Does your parent/guardian have a credit card ready to complete the purchase?
5. What email address should the accounts be registered under? (parent/guardian's email)

**What Claude produces:**
- Domain name recommendations (3–5 options with pros/cons)
- Step-by-step purchase instructions for Namecheap (screenshots described)
- Step-by-step hosting signup instructions for your chosen platform
- DNS connection guide (how to point your Namecheap domain to your hosting)
- `docs/accounts.md` updated with platform names and login URLs (no passwords)

**Important — DNS propagation:** After you connect your domain to hosting, it takes 24–48 hours to go live across the internet. This is normal. You can keep building in the meantime.

**Commit:**
```bash
git add docs/accounts.md
git commit -m "Phase 2: Domain registered, hosting configured"
```

---

## Phase 3 — Brand + Logo

**Goal:** Create a logo, finalize your color palette, and define your visual identity.

**Dependency:** Business name + brand brief from Phase 1.

**Claude will ask you:**

1. What feeling do you want customers to get from your brand? (pick 2: professional, friendly, tough, eco-friendly, fast, local, affordable, premium)
2. Do you have any color preferences, or should Claude recommend a palette?
3. Do you have any logo ideas already, or starting from scratch?
4. What's the tone of voice for your brand? (casual and approachable, confident and direct, clean and corporate)

**What Claude produces:**
- `brand/style-guide.md` with:
  - Primary + secondary color hex codes
  - Font recommendations (Google Fonts, free)
  - Tone of voice guide with example phrases
  - Logo brief you can paste directly into Canva's AI generator
- Canva setup walkthrough for creating your logo
- Brand brief formatted for Canva's Magic Design tool

**Canva setup:**
1. Go to canva.com — sign up free (you can sign up yourself, this doesn't require a contract)
2. Use the AI Magic Design feature or search "junk removal logo"
3. Apply your colors from the style guide
4. Export as: SVG (best quality) and PNG (transparent background)
5. Save both to `brand/logo/`

**Commit:**
```bash
git add brand/style-guide.md brand/logo/
git commit -m "Phase 3: Brand identity + logo complete"
```

---

## Phase 4 — Build All Pages

**Goal:** Write and publish all 6 pages of your website with Claude-generated, SEO-optimized copy.

**Dependency:** Platform set up (Phase 2), brand brief (Phase 1), style guide (Phase 3).

**How this phase works:** You'll do one page at a time. For each page, tell Claude:
```
"Write the [PAGE NAME] page copy for my waste removal business."
```
Claude will pull from your brand brief automatically and write complete, ready-to-paste copy.

---

### Page 1 — Home

**Claude will ask you:**
1. What's your most important service or your #1 selling point?
2. Do you have a photo of your truck for the hero image?
3. Do you have any customer reviews yet? (if yes, share them)
4. Do you want a "click to call" button on mobile? (yes — always yes)

**What Claude produces:**
- `copy/home.md` — complete homepage copy including:
  - Hero headline + subheadline
  - CTA button text
  - Services summary section (3–4 services)
  - Why choose us section (3 bullet points using your differentiators)
  - Reviews section placeholder (or real reviews if you have them)
  - Service area callout
  - Bottom CTA section

**Platform build:** Paste the copy from `copy/home.md` into your Wix/Hostinger editor, section by section. Claude will tell you which type of layout block to use for each section.

---

### Page 2 — Services

**Claude will ask you:**
1. Final list of all your services (you already have this from Phase 1)
2. Do you want one combined services page, or individual pages per service?
3. Are there any services you want to highlight as specialties?

**Recommendation:** Create individual pages for your top 3–4 services (e.g., `/residential-junk-removal`, `/appliance-removal`, `/yard-waste-removal`). Each page targets its own Google keyword. Claude will build each one.

**What Claude produces:**
- `copy/services.md` — copy for each service page, formatted and keyword-targeted

---

### Page 3 — Pricing / Get a Quote

**Claude will ask you:**
1. Do you want to display price ranges, starting prices, or just a "free quote" form?
2. Are there any services where you won't display pricing at all?

**What Claude produces:**
- `copy/pricing.md` — pricing page copy with suggested ranges based on national benchmarks
- Quote request form field list (ready to configure in your platform's form builder)

---

### Page 4 — Service Area

**Claude will ask you:**
1. List every city, town, and neighborhood you serve (be specific — this is critical for local SEO)
2. Do you have a Google Maps embed code, or should Claude explain how to get one?

**What Claude produces:**
- `copy/service-area.md` — full service area page with town list formatted for SEO
- Instructions for embedding Google Maps on this page

---

### Page 5 — About

**Claude will ask you:**
1. How did the business start? (quick story — 2–3 sentences)
2. What do you personally care about doing right? (quality, eco-responsibility, honesty on pricing)
3. Do you have a photo of yourself or your team you're comfortable putting on the site?

**What Claude produces:**
- `copy/about.md` — personal, trust-building About page that makes customers feel good about calling you

---

### Page 6 — Contact

**Claude will ask you:**
1. Phone number (click-to-call)
2. Business email
3. Business hours
4. Address (if displaying one) or service-area-only message

**What Claude produces:**
- `copy/contact.md` — contact page copy
- Embedded form configuration guide (exactly which fields to include)

**Commit after all pages:**
```bash
git add copy/
git commit -m "Phase 4: All page copy complete"
```

---

## Phase 5 — Photography

**Goal:** Get 10–20 real photos that make your site look trustworthy and local.

**Dependency:** You know what pages need what images (Phase 4 complete).

**Claude will ask you:**
1. What phone do you have?
2. Do you have jobs scheduled, or do you need to stage some shots?

**Photo shot list Claude will give you:**
- Hero image: truck clean, well-lit, your logo visible
- Before shots: cluttered space (garage, yard, basement)
- After shots: same space, totally clear
- Action shots: you loading items, team at work
- Detail shots: sorted recyclables, donation items, disposal facility
- Portrait: you in your work gear, approachable expression

**Technical tips Claude will provide:**
- Shooting in landscape (horizontal) vs. portrait
- Best time of day for outdoor shots (golden hour)
- How to avoid harsh shadows
- Free editing apps for color correction

**Image optimization (before uploading):**
Use TinyPNG (tinypng.com — free) to compress every image before uploading. Target: under 300KB per image. Claude will explain why this matters (page speed = SEO ranking).

**Commit:**
```bash
git add assets/photos/ assets/optimized/
git commit -m "Phase 5: Photography complete and optimized"
```

---

## Phase 6 — Forms, Email + Legal Documents

**Goal:** Set up your quote request form, business email, and the three legal documents every service business needs on its website.

**Dependency:** Pages built (Phase 4), hosting account active (Phase 2).

---

### Email Setup

**Claude will ask you:**
1. What platform are you hosting on? (determines email setup path)
2. What email address do you want? (e.g., hello@yourbusiness.com, quotes@yourbusiness.com)

**Claude produces:** Step-by-step email setup guide for your specific platform.

---

### Quote Request Form

**Claude will ask you:**
1. What information do you need from a customer to give them a quote?
2. Do you want them to be able to upload a photo?
3. Where should form submissions go? (email address)

**What Claude produces:**
- Complete form field list with types (text, dropdown, file upload)
- Platform-specific instructions for building the form
- Auto-reply email template for when someone submits a quote request

---

### Legal Documents

These are serious. Claude will generate starter templates, but if your business starts making real money, have a local attorney review them.

**Claude produces:**

- `legal/service-agreement.md` — a simple 1-page agreement that covers:
  - Scope of work (what you're hauling)
  - Pricing and payment terms
  - Customer responsibility for hazardous materials
  - Damage limitation clause
  - Parent/guardian signature line (required — see legal risk flags in the proposal)

- `legal/terms-of-service.md` — website Terms of Service page

- `legal/privacy-policy.md` — Privacy Policy page (required by law if you collect contact info via your form)

**These last two go on your website as linked pages in the footer.**

**Commit:**
```bash
git add legal/ copy/contact.md
git commit -m "Phase 6: Forms, email, and legal docs complete"
```

---

## Phase 7 — Google Business Profile

**Goal:** Set up and fully optimize your Google Business Profile (GBP). This is the single highest-ROI action in this entire plan — most calls in the junk removal industry come directly from Google Maps, not from your website.

**Dependency:** Business name final, website URL live or close to live, parent/guardian's Google account ready.

**This must be done under a parent/guardian's Google account.** They can add you as a manager after the profile is verified.

**Claude will ask you:**
1. Parent/guardian's Google account email?
2. Full legal business name?
3. Primary service category? (Claude recommends: "Junk Removal Service")
4. All cities/towns/zip codes in your service area?
5. Business phone number?
6. Website URL?
7. Business hours?
8. Do you have 10+ photos ready to upload?

**What Claude produces:**
- `seo/gbp-description.md` — your complete GBP business description (750 characters, keyword-optimized)
- Step-by-step GBP setup walkthrough
- Secondary category recommendations (add 3–5 in addition to primary)
- Photo upload checklist (what types of photos Google prioritizes)
- First-week post template (GBP lets you post updates like social media)
- Review request text message template (send to your first 5 customers)

**Verification note:** Google will verify your business by postcard (5–7 business days), phone call, or video. Claude will walk you through whichever method Google offers you.

**Commit:**
```bash
git add seo/gbp-description.md
git commit -m "Phase 7: Google Business Profile content complete"
```

---

## Phase 8 — SEO Basics

**Goal:** Make sure Google can find and rank your site for local waste removal searches.

**Dependency:** All pages published, GBP set up.

**Claude will ask you:**
1. What's your primary city/town?
2. What are the top 3 services you want to rank for on Google?
3. Do you already have Google Search Console and Analytics set up?

**What Claude produces:**
- `seo/keywords.md` — your 15–20 target keywords ranked by priority
- `seo/meta-tags.md` — meta title and meta description for every page (ready to paste into your platform)
- Instructions for connecting Google Search Console (free)
- Instructions for installing Google Analytics (free)
- Sitemap submission guide
- NAP consistency checklist (your business Name, Address, Phone must be identical everywhere it appears online)

**NAP consistency matters more than most people realize.** Claude will generate a checklist of every place to verify:
- Your website (header, footer, contact page)
- Google Business Profile
- Yelp listing
- Facebook Business page
- Any directory listings

**Commit:**
```bash
git add seo/
git commit -m "Phase 8: SEO meta tags and keyword strategy complete"
```

---

## Phase 9 — Testing + Launch Checklist

**Goal:** Verify that everything works before you hit publish.

**Dependency:** All phases above complete.

**Claude will generate `docs/launch-checklist.md` — go through every item:**

```
TECHNICAL
[ ] Custom domain resolves (no "not secure" warnings)
[ ] SSL padlock shows in browser bar
[ ] Site loads on mobile — test on an actual phone, not just desktop
[ ] All pages load without errors
[ ] No broken links (click every menu item)
[ ] Quote form submits and you receive the email
[ ] Auto-reply email sends when form is submitted
[ ] Click-to-call works on mobile
[ ] Page speed score 85+ on mobile (test at pagespeed.web.dev)
[ ] All images are compressed (none over 300KB)

CONTENT
[ ] Business name spelled correctly everywhere
[ ] Phone number correct on every page
[ ] Business hours correct
[ ] Service area page has all your towns
[ ] Pricing page is live (even if it's just "Get a Free Quote")
[ ] About page has a real photo of you
[ ] Legal pages (Terms, Privacy Policy) linked in footer
[ ] No placeholder text ("Lorem ipsum") anywhere

SEO
[ ] Meta title set for every page (not just the homepage)
[ ] Meta description set for every page
[ ] Google Analytics installed and tracking a visit
[ ] Google Search Console connected
[ ] Sitemap submitted to Google
[ ] GBP links to your website URL

LEGAL (critical for minor business owners)
[ ] All platform accounts under parent/guardian's name
[ ] Payment processor under parent/guardian's name
[ ] Service agreement reviewed and signed copy on file before first job
[ ] Privacy policy live on website
[ ] Terms of service live on website
```

**When checklist is 100% complete — launch.**

**Day of launch actions:**
1. Post on Facebook, Instagram, and Nextdoor
2. Text your first 5 customers and ask for a Google review
3. Submit your sitemap in Google Search Console
4. Tell your friends and family — word of mouth is your first growth engine

**Commit:**
```bash
git add docs/launch-checklist.md
git commit -m "Phase 9: Launch checklist complete — site is LIVE"
git tag v1.0-launch
```

---

## Phase 10 — Maintenance Routine

**Goal:** Keep your site healthy and your rankings growing without spending hours every week.

**Claude will ask you:**
- What day of the week can you do 15 minutes of maintenance?

**Monthly (15 minutes):**
- Log into Google Search Console — check for crawl errors
- Check Google Analytics — how many visitors? Where did they come from?
- Respond to any new Google reviews (within 48 hours ideally)
- Post one update to Google Business Profile (a job photo, a special, a tip)

**Quarterly (30–60 minutes):**
- Add 5 new photos to your website and GBP
- Ask Claude to write one blog post (500–700 words on a local topic, e.g., "How to clean out a garage in [your city]") — this builds SEO over time
- Verify NAP consistency is still correct everywhere
- Check if any services or prices need updating

**Annually:**
- Renew domain (Namecheap sends an email — don't let it lapse)
- Renew hosting (same)
- Review pricing — adjust if costs have changed
- Review the proposal — what's next? Paid ads? Expanded service area? A second truck?

**Claude can write every piece of content for you on demand.** Just say:
```
"Write a 600-word blog post for my waste removal site in [city]
targeting the keyword 'garage cleanout [city]'."
```

---

## Quick Reference — Claude Prompts to Bookmark

Use these exact prompts when you start each phase:

```
Phase 0: "I'm setting up my waste removal website project on GitHub. Walk me through Phase 0."
Phase 1: "I'm ready to lock in my business foundation. Start Phase 1 and ask me your questions."
Phase 2: "I'm registering my domain and setting up hosting. Run me through Phase 2."
Phase 3: "I need to create my logo and brand identity. Let's do Phase 3."
Phase 4 (Home): "Write my homepage copy. Pull from my brand brief."
Phase 4 (Services): "Write my services pages. I need individual pages for each service."
Phase 4 (Pricing): "Write my pricing page copy and quote form."
Phase 4 (Area): "Write my service area page for [your towns list]."
Phase 4 (About): "Write my about page. I'll tell you my story."
Phase 5: "Give me my photography shot list and compression guide."
Phase 6: "Set up my forms, business email, and generate my legal documents."
Phase 7: "Write my Google Business Profile description and setup guide."
Phase 8: "Generate my SEO meta tags and keyword strategy."
Phase 9: "Generate my launch checklist and walk me through it."
Phase 10: "Write me a blog post for [keyword] for my [city] waste removal site."
```

---

## Status Tracker

Update this table as you complete phases. Commit the update each time.

| Phase | Name                        | Status      | Commit |
|-------|-----------------------------|-------------|--------|
| 0     | Project Spine + Git         | ⬜ Not started |        |
| 1     | Business Foundation         | ⬜ Not started |        |
| 2     | Domain + Hosting            | ⬜ Not started |        |
| 3     | Brand + Logo                | ⬜ Not started |        |
| 4     | Build All Pages             | ⬜ Not started |        |
| 5     | Photography                 | ⬜ Not started |        |
| 6     | Forms + Email + Legal       | ⬜ Not started |        |
| 7     | Google Business Profile     | ⬜ Not started |        |
| 8     | SEO Basics                  | ⬜ Not started |        |
| 9     | Testing + Launch            | ⬜ Not started |        |
| 10    | Maintenance Routine         | ⬜ Not started |        |

Replace ⬜ with ✅ as you complete each phase.

---

## Important Reminders

> **Legal:** Every platform account must be registered under your parent or guardian's name. You can manage the day-to-day, but they are the legal account holder. This protects you and the business.

> **Money:** Any income over $400 requires filing a tax return. Track every dollar in and every expense out from Day 1. A simple spreadsheet works fine.

> **Git:** Commit after every phase. If something breaks, you can always go back. The commit message should say what you did, not just "update."

> **Passwords:** Never commit passwords to Git. Ever. Use `docs/accounts.md` for a list of *where* your accounts are — not the credentials.

> **Ask Claude anything:** If you get stuck on any step, don't spin for more than 5 minutes. Just ask. That's what this project is for.

---

*This guide was built to accompany the formal Website Launch Proposal. Both documents should be kept in your `/docs/` folder.*

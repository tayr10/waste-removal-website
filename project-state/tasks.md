# Tasks

> Add to this file. Never erase what's here.
> Mark tasks ✅ the moment they're done and commit the change.

---

## Phase A — Clean up & commit all existing files ✅ DONE

- [x] Commit all existing project files to Git
- [x] Rename `ironclad.html` → `site/index.html`
- [x] Remove the duplicate `outputs/` folder
- [x] Update README and .gitignore
- [x] Confirm `site/index.html` opens correctly in Live Server

---

## Phase B — Split the HTML file ✅ DONE

- [x] Extract CSS → `site/style.css` (277 lines)
- [x] Extract JS → `site/main.js` (12 lines)
- [x] `index.html` now links to both files — down from 771 lines to 480
- [x] Commit: `Phase B: Extract CSS to style.css and JS to main.js`

---

## Phase C — Real photos + content verified ✅ DONE (2026-09-12 — client sent 3 photos)

- [ ] Confirm all services offered and exact service area
- [ ] Confirm phone number and email are correct everywhere
- [ ] Confirm business hours and address (or service-area-only)
- [x] Client provided 3 real job photos (2026-09-10) — more can be added the same way
- [x] Compressed with a small Swift/ImageIO tool (bakes iPhone orientation) → `assets/optimized/`
- [x] Copied into `site/images/` — 490 KB total, from 11.7 MB
- [x] Owner photo in hero; two work photos in new `#work` section below the quote form
- [x] No placeholder text (grepped in Phase G)
- [ ] Commit: `Phase C: Real photos added, content verified`

---

## Phase D — Legal pages ✅ DONE

- [x] Generate privacy policy → saved as `site/privacy-policy.html`
- [x] Generate terms of service → saved as `site/terms-of-service.html`
- [x] Footer links in `site/index.html` point to both pages
- [x] Both pages use site fonts and CSS variables from `style.css`
- [x] Committed in Phase B+D commit (008ead3)

---

## Phase E — Domain + Hosting ✅ DONE (2026-09-12)

- [x] Create Netlify account (taygans netify)
- [x] Connect repo to Netlify → publish directory `site`
- [x] Site live at `ironclad-recycling.netlify.app` — auto-deploys on every git push
- [x] Registered `ironcladrecyclingllc.com` at Namecheap 2026-09-12 — $11.48 first year, renews ~$15, auto-renew ON, Domain Privacy ON. Account in Taygan's mother's name (registrar requires 18+); client paid cash.
- [x] Connected: ALIAS `@` → `apex-loadbalancer.netlify.com`, CNAME `www` → Netlify. `www` redirects to bare domain.
- [x] SSL active — Let's Encrypt via Netlify, provisioned ~90s after DNS verified
- [ ] Log all accounts in `docs/accounts.md` (no passwords)

---

## Phase F — SEO & Analytics ✅ DONE (one item to revisit after custom domain)

- [x] `<title>` and `<meta name="description">` verified — accurate and keyword-rich
- [x] Open Graph tags added — links preview correctly on Facebook, iMessage, etc.
- [x] JSON-LD LocalBusiness structured data added — helps Google understand the business
- [x] `site/sitemap.xml` created (uses placeholder domain `ironcladrecyclingllc.com` — update after Phase E)
- [x] `site/robots.txt` created
- [x] NAP verified — Name and Phone consistent across all pages (no physical address, service-area only)
- [x] Create Google Analytics 4 property → Measurement ID `G-ZHTPZCSDN9` → script added to all three pages
- [x] Set up Google Search Console → verified via GA4 → sitemap submitted
- [x] `sitemap.xml`, `robots.txt`, OG tags already pointed at the real domain — zero code changes needed
- [ ] GA4 stream URL → `https://ironcladrecyclingllc.com`
- [x] Search Console → `https://ironcladrecyclingllc.com/` property added (verified via GA4), sitemap submitted 2026-09-12

---

## Phase G — Pre-launch testing ⬜ IN PROGRESS (tested against Netlify staging)

- [x] Site loads at live domain without errors — loads clean at `ironclad-recycling.netlify.app`
- [x] `https://` padlock shows — no warnings (URL confirmed `https://`; Netlify auto-SSL)
- [x] Click-to-call works on a real phone — link fires the dialer
- [x] Contact form submits and email is received — **verified end to end 2026-09-09**
      against a scratch Web3Forms key: submission reached the API (1/250 on the
      dashboard) and the notification email was delivered. The form mechanism works.
      Whether the *client's* key delivers to *his* inbox is still his to confirm.
- [x] Every nav link works — nothing 404s
- [x] PageSpeed Insights score ≥ 80 on mobile — **80** after compressing the logo
      346K → 56K (was 68 before). SEO 100, Best Practices 100, Accessibility 73.
      Right on the threshold — scores vary a few points run to run, so treat it as
      the floor, not headroom.
- [x] No Lorem ipsum anywhere — grepped, clean
- [x] Privacy Policy and Terms footer links work
- [x] Logo loads on all pages

### Phase G follow-ups
- [x] Confirm contact-form email actually arrives — form mechanism verified 2026-09-09
- [ ] Ask client: did a test quote request ever reach his inbox? (check spam)
- [ ] Ask client for access to the Web3Forms account — key `c89941c0…` lives under
      HIS account, not Taygan's. Cannot see submissions, cannot verify leads arrive,
      cannot fix it when it breaks. Being paid monthly to maintain an unopenable part.
- [x] Fixed silent form failure (commit 3f2925d) — a failed submission used to look
      identical to a successful one, so lost leads were invisible
- [ ] Accessibility scored 73 — worth a look, not a launch blocker
- [ ] Re-run this whole checklist against the custom domain once Phase E completes
- [ ] Compress every client photo before it enters `site/images/` — PageSpeed is at 80
      exactly, so uncompressed photos will push it back under

---

## Phase H — Launch ⬜ IN PROGRESS — site is live; remaining items are marketing

- [x] All Phase G boxes checked
- [x] Live domain resolves with SSL — 2026-09-12
- [x] Sitemap submitted for the real domain — 2026-09-12
- [ ] Announce on Facebook, Instagram, Nextdoor
- [ ] Text/call first 5 customers — ask for Google review
- [ ] Set up Google Business Profile
- [x] Tagged `v1.0-launch` — 2026-09-12

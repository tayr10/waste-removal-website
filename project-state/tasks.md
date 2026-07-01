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

## Phase C — Real photos + content verified ⬜ DECISION NEEDED (client will not send photos)

- [ ] Confirm all services offered and exact service area
- [ ] Confirm phone number and email are correct everywhere
- [ ] Confirm business hours and address (or service-area-only)
- [ ] Client provides 10–20 real job photos
- [ ] Compress photos at tinypng.com → save to `assets/optimized/`
- [ ] Copy optimized photos into `site/images/`
- [ ] Add `<img>` tags in index.html where photos go
- [ ] Search for and remove any Lorem ipsum or placeholder text
- [ ] Commit: `Phase C: Real photos added, content verified`

---

## Phase D — Legal pages ✅ DONE

- [x] Generate privacy policy → saved as `site/privacy-policy.html`
- [x] Generate terms of service → saved as `site/terms-of-service.html`
- [x] Footer links in `site/index.html` point to both pages
- [x] Both pages use site fonts and CSS variables from `style.css`
- [x] Committed in Phase B+D commit (008ead3)

---

## Phase E — Domain + Hosting ⬜ NOT STARTED

- [ ] Register domain at Namecheap (likely `ironcladrecyclingllc.com`, ~$9/yr)
- [ ] Create Netlify account (sign up with GitHub, free)
- [ ] Connect repo to Netlify → set publish directory to `site`
- [ ] Deploy — confirm site goes live on a `.netlify.app` URL
- [ ] Connect custom domain from Namecheap to Netlify
- [ ] Confirm SSL (`https://`) is active — padlock shows in browser
- [ ] Log all accounts in `docs/accounts.md` (no passwords)

---

## Phase F — SEO & Analytics ⬜ NOT STARTED

- [ ] Verify `<title>` and `<meta name="description">` in index.html are accurate and keyword-rich
- [ ] Set up Google Analytics 4 — copy tracking script into `<head>`
- [ ] Set up Google Search Console — verify ownership
- [ ] Generate `site/sitemap.xml` and submit to Search Console
- [ ] Verify NAP (Name, Address, Phone) is identical on site and all listings
- [ ] Commit: `Phase F: Analytics script added, sitemap created`

---

## Phase G — Pre-launch testing ⬜ NOT STARTED

- [ ] Site loads at live domain without errors
- [ ] `https://` padlock shows — no warnings
- [ ] Click-to-call works on a real phone
- [ ] Contact form submits and email is received
- [ ] Every nav link works — nothing 404s
- [ ] PageSpeed Insights score ≥ 80 on mobile
- [ ] No Lorem ipsum anywhere
- [ ] Privacy Policy and Terms footer links work
- [ ] Logo loads on all pages

---

## Phase H — Launch ⬜ NOT STARTED

- [ ] All Phase G boxes checked
- [ ] Confirm live domain resolves correctly
- [ ] Submit sitemap in Search Console
- [ ] Announce on Facebook, Instagram, Nextdoor
- [ ] Text/call first 5 customers — ask for Google review
- [ ] Set up Google Business Profile
- [ ] Tag the release: `git tag v1.0-launch && git push --tags`

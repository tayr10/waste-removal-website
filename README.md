# Ironclad Recycling LLC — Website Project

> Industrial cleanouts · Demolition · Machinery rigging · Northeast US
> Stack: plain HTML + CSS + JS. No frameworks. No build tools.

---

## Status

Update the emoji as you finish each phase. Commit the update.

| Phase | Task | Status |
|-------|------|--------|
| A | Clean up & commit all existing files | ⬜ Not started |
| B | Split the 1.8MB HTML into HTML + CSS + JS | ⬜ Not started |
| C | Real photos + content verified | ⬜ Not started |
| D | Legal pages (Privacy Policy + Terms) | ⬜ Not started |
| E | Domain registered + hosting live | ⬜ Not started |
| F | SEO meta tags + Google Analytics + Search Console | ⬜ Not started |
| G | Pre-launch testing (mobile + PageSpeed + forms) | ⬜ Not started |
| H | Launch + Google Business Profile | ⬜ Not started |

**Replace ⬜ with ✅ when done. Commit the change.**

---

## What "Ready to Deliver" Looks Like

The site is customer-ready when every one of these is true:

- [ ] Custom domain is live (e.g. `ironcladrecyclingllc.com`)
- [ ] `https://` — SSL padlock shows in the browser
- [ ] Site loads correctly on a real phone, not just desktop
- [ ] Click-to-call works (tap the number on mobile — it dials)
- [ ] Quote form submits and the client receives the email
- [ ] Google PageSpeed score ≥ 80 on mobile (test at pagespeed.web.dev)
- [ ] Google Analytics and Search Console are connected
- [ ] Privacy Policy and Terms of Service linked in the footer
- [ ] Google Business Profile is live and points to the site
- [ ] All photos are real — no placeholders

---

## Folder Map

```
waste-removal-website/
├── README.md               ← You are here. Read this every session.
├── .gitignore
│
├── site/                   ← THE WEBSITE. This folder is what gets uploaded to hosting.
│   ├── index.html          ← Main page
│   ├── style.css           ← All styles (Phase B: move out of HTML)
│   ├── main.js             ← All JavaScript (Phase B: move out of HTML)
│   └── ironclad-logo.JPG   ← Logo referenced by index.html
│
├── assets/
│   ├── photos/             ← Raw photos from phone (not web-ready yet)
│   └── optimized/          ← Compressed versions — these go into site/
│
├── brand/
│   └── logo/               ← Master logo files (keep originals here)
│
├── legal/
│   ├── privacy-policy.html ← Linked from footer
│   └── terms-of-service.html
│
└── docs/                   ← Reference only. Not part of the website.
    ├── accounts.md         ← Where accounts live (NO passwords here — ever)
    ├── waste-removal-website-proposal.html
    └── claude-project-guide.md
```

**The rule:** `site/` is the only folder that gets uploaded to your web host.
Everything else is supporting material that stays in the repo.

---

## Working on This in VS Code

### Open the project
1. Open VS Code
2. **File → Open Folder** → select `waste-removal-website/`
3. The folder tree appears in the left sidebar

### Preview the site locally (no internet needed)
1. Install the **Live Server** extension:
   - Click the Extensions icon in the VS Code sidebar (looks like 4 squares)
   - Search: `Live Server`
   - Install the one by Ritwick Dey
2. In the sidebar, right-click `site/index.html`
3. Select **Open with Live Server**
4. The site opens in your browser at `http://127.0.0.1:5500/site/index.html`
5. Every time you save a file, the browser refreshes automatically

### Terminal inside VS Code
- `View → Terminal` (or press `Ctrl + \`` ` on Windows/Linux, `Cmd + \`` ` on Mac)
- All git commands go here
- You don't need to leave VS Code

### Git workflow (do this after every meaningful change)
```bash
git status                         # see what changed
git add site/index.html            # stage specific files — be intentional
git commit -m "Fix: phone number in header"   # short, present tense, why not what
git push                           # send to GitHub
```

> **Git is your safety net.** Commit often. If something breaks, you can always go back.
> Small commits with clear messages. "Fix mobile nav" beats "update stuff".

---

## Phase A — Clean Up & Commit Everything

**Goal:** Get everything tracked in Git so nothing can be lost.

```bash
# See what's not tracked
git status

# Stage all existing files
git add brand/ site/ docs/

# Commit
git commit -m "Phase A: Commit all existing project files"

# Push to GitHub
git push
```

Then do these in VS Code:

- [ ] **Rename** `site/ironclad.html` → `site/index.html`
  - Right-click the file in the VS Code sidebar → Rename
  - Browsers look for `index.html` by default — this matters for hosting

- [ ] **Delete the `outputs/` folder**
  - It's a duplicate of `site/`. Having two sources of truth causes confusion.
  - `site/` is the one true source. Delete `outputs/`.

- [ ] **Check the logo path** — open `site/index.html`, search for `ironclad-logo`
  - Confirm the `<img src="...">` path matches where the file actually is
  - The logo file should live in `site/` (since that folder gets uploaded to hosting)
  - Keep a master copy in `brand/logo/` too

```bash
git add -A
git commit -m "Phase A: Rename to index.html, remove outputs/ duplicate"
```

**Phase A is done when:** `git status` shows nothing untracked, and `site/index.html` opens correctly in Live Server.

---

## Phase B — Split the HTML File

**Goal:** Move CSS and JavaScript out of `index.html` into their own files.

**Why this matters:** The current file is ~1.8MB — that's enormous for a webpage.
Normal pages should be under 200KB. Browsers can cache separate CSS and JS files,
so returning visitors load instantly. When everything is in one HTML file, it
re-downloads every single visit. This directly tanks your PageSpeed score.

**Steps:**

1. Open `site/index.html` in VS Code
2. Find the `<style>` block — it starts with `<style>` and ends with `</style>`
3. **Select everything between the tags** (not the tags themselves — just the CSS rules inside)
4. Cut it (`Ctrl+X`)
5. Create a new file: `site/style.css`
6. Paste the CSS there — it's just raw CSS rules, no `<style>` tags needed
7. Back in `index.html`, replace the entire `<style>...</style>` block with this one line:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
8. Find the `<script>` block near the bottom of `index.html`
9. Cut the JavaScript (everything between `<script>` and `</script>`)
10. Create: `site/main.js`
11. Paste the JS there
12. In `index.html`, replace the entire `<script>...</script>` block with:
    ```html
    <script src="main.js"></script>
    ```
13. Save all files. Open with Live Server. **The site should look and work exactly the same.**

If anything looks broken: undo (`Ctrl+Z`), compare the paths, make sure the filenames match.

```bash
git add site/
git commit -m "Phase B: Extract CSS to style.css and JS to main.js"
```

**Phase B is done when:** The site looks identical in Live Server, and `index.html` is much smaller.

---

## Phase C — Photos & Content

**Goal:** Replace placeholders with real information and real photos.

### Content checklist
- [ ] Phone number is correct on every page — search for it in VS Code: `Ctrl+Shift+F`
- [ ] Email address is correct
- [ ] Service area list is complete (all states/regions served)
- [ ] Services list matches what the business actually offers
- [ ] No placeholder text — search `Ctrl+Shift+F` for "Lorem ipsum"

### Photos
1. Take 10–20 real photos: truck, crew, before/after cleanouts, equipment at work
2. Go to [tinypng.com](https://tinypng.com) — upload each photo, download compressed version
   - Target: under 300KB per image (under 150KB is even better)
3. Save compressed photos to `assets/optimized/`
4. Copy the ones you want on the site into `site/` (or a subfolder like `site/images/`)
5. In `index.html`, add `<img src="images/your-photo.jpg" alt="Ironclad crew removing machinery">` where you want them

> **Photography tip:** Shoot landscape (horizontal). Good natural light. Get the truck and logo in frame.
> Real photos of your actual work convert far better than stock images.

```bash
git add assets/ site/
git commit -m "Phase C: Real photos added, content verified"
```

**Waiting on client before Phase C can be complete:**
- [ ] Confirm all services offered and exact service area
- [ ] Provide 10–20 real job photos
- [ ] Confirm business hours and address (or service-area-only)

---

## Phase D — Legal Pages

**Goal:** Two required pages linked from the footer.
These are legally required when you collect contact info through a form.

### Privacy Policy
Ask Claude:
> "Write a privacy policy for Ironclad Recycling LLC. We collect name, phone, and email
> through a contact form. We don't sell data. Business is in [state]. Plain English."

Save the output as `legal/privacy-policy.html`.

### Terms of Service
Ask Claude:
> "Write a terms of service page for Ironclad Recycling LLC. We provide industrial
> cleanout, demolition, and machinery rigging in the Northeast United States."

Save as `legal/terms-of-service.html`.

### Add links to the footer
Open `site/index.html`, find the footer, add:
```html
<a href="../legal/privacy-policy.html">Privacy Policy</a>
<a href="../legal/terms-of-service.html">Terms of Service</a>
```

> **Note on paths:** Once hosted, the path may need adjustment depending on how you
> structure the files on the server. Double-check these links after Phase E.

```bash
git add legal/ site/
git commit -m "Phase D: Privacy policy and terms of service added"
```

---

## Phase E — Domain + Hosting

**Goal:** Put the site on the internet with a real domain.

**All accounts must be registered under a parent/guardian's name and payment method.**
Fill in `docs/accounts.md` as you create each account (platform name + login URL, no passwords).

---

### Option 1 — Netlify + Namecheap (Recommended — free hosting)

**Best if:** You want the simplest deployment. Every `git push` auto-deploys.

1. **Buy domain** at [namecheap.com](https://namecheap.com)
   - Search for `ironcladrecyclingllc.com` (or a shorter variation)
   - Enable WhoisGuard (free privacy protection)
   - Cost: ~$9/year first year

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com) → Sign up with GitHub (free)
   - Click **Add new site → Import an existing project → GitHub**
   - Select your repo
   - Set **Publish directory** to `site`
   - Click Deploy — your site goes live on a netlify.app URL in about 30 seconds

3. **Connect your custom domain**
   - In Netlify: Site configuration → Domain management → Add custom domain
   - Enter your Namecheap domain
   - Netlify shows you DNS records to add
   - In Namecheap: go to Advanced DNS and add the records Netlify gave you
   - Wait 10–30 minutes for DNS to propagate
   - SSL (https) is automatic and free

---

### Option 2 — Hostinger (~$36/year)

**Best if:** You want email hosting included.

1. Sign up at [hostinger.com](https://hostinger.com) — Premium plan (~$3/month on a 1-year plan)
2. Buy domain at Namecheap (or use Hostinger's free domain with the plan)
3. In Hostinger's File Manager: upload everything in your `site/` folder to the `public_html/` folder
4. Connect your domain via DNS settings (Hostinger has a guide)
5. Enable SSL: Hostinger dashboard → SSL → Install (free, 1-click)

---

## Phase F — SEO & Analytics

**Goal:** Make sure Google can find, index, and rank the site.

- [ ] Verify `<title>` and `<meta name="description">` are set correctly in `index.html` — they exist, double check they're accurate and keyword-rich
- [ ] Set up [Google Analytics 4](https://analytics.google.com) — free
  - Create a property for your domain
  - Copy the tracking script snippet
  - Paste it before `</head>` in `index.html`
- [ ] Set up [Google Search Console](https://search.google.com/search-console) — free
  - Verify ownership (Netlify/Hostinger makes this easy via a meta tag)
  - Submit your sitemap once it exists
- [ ] Create a sitemap — ask Claude:
  > "Write a sitemap.xml for ironcladrecyclingllc.com. The site has one main page: the homepage."
  - Save as `site/sitemap.xml`
  - Submit the URL (`https://ironcladrecyclingllc.com/sitemap.xml`) in Search Console
- [ ] NAP consistency — Name, Address, Phone must be **identical** everywhere:
  - Website footer
  - Google Business Profile
  - Yelp
  - Any directories or listings

```bash
git add site/
git commit -m "Phase F: Analytics script added, sitemap created"
```

---

## Phase G — Pre-Launch Testing

**Test on an actual phone, not just desktop.**

### Technical
- [ ] Site loads at your live domain without errors
- [ ] `https://` shows with a padlock — no security warnings
- [ ] Tap the phone number on mobile → it should open the dialer
- [ ] Submit the contact/quote form → you receive the email within a few minutes
- [ ] Click every nav link — nothing should 404
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) → target 80+ on mobile
  - If below 80: compress images more (aim under 150KB each), check for unused scripts

### Content
- [ ] Business name spelled correctly everywhere
- [ ] Phone number and email correct on every section
- [ ] No Lorem ipsum or placeholder text
- [ ] Service area page lists all locations
- [ ] Privacy Policy and Terms links in footer work
- [ ] Logo loads

### If PageSpeed is low
- Images are the #1 culprit — compress harder at tinypng.com
- Check if you're loading any fonts you're not using (remove them from `<head>`)

---

## Phase H — Launch Day

When every Phase G box is checked:

**1. Go live**
- Confirm your custom domain resolves (visit it in a browser)
- Confirm `https://` is active
- Submit sitemap in Search Console

**2. Announce it**
- Post on Facebook, Instagram, and Nextdoor with the URL
- Text/call your first 5 customers and ask for a Google review

**3. Google Business Profile**
- Go to [business.google.com](https://business.google.com) — must use parent/guardian's account
- Business category: **"Demolition Contractor"** (primary) — also add "Industrial Equipment Supplier"
- Add phone, website URL, service area states, hours, and 10+ photos
- Verification: Google sends a postcard (5–7 days) or may offer phone/video verification

**4. Tag the release in Git**
```bash
git tag v1.0-launch
git push --tags
```

---

## After Launch

### Monthly (~15 minutes)
- Log into Google Search Console — scan for crawl errors
- Check Analytics — how many visitors, where from
- Respond to any new Google reviews within 48 hours
- Post one update to Google Business Profile (job photo, availability note, service tip)

### Quarterly (~30–60 minutes)
- Add 5 new photos to the site and GBP
- Ask Claude to write a 600-word blog post targeting a local search term:
  > "Write a 600-word blog post for a junk removal and demolition company
  > in [city] targeting the keyword 'industrial cleanout [city]'."
- Verify NAP is still consistent everywhere
- Update services or pricing if anything changed

### Annually
- Renew domain at Namecheap (don't let it lapse — you lose the domain)
- Renew hosting if not on Netlify free tier
- Review the site — what needs updating after a year of business?

---

*Stack: Plain HTML · CSS · JS — no build tools, no npm, no frameworks.*
*Host: Netlify (free) or Hostinger (~$36/yr) · Domain: Namecheap (~$9/yr)*
*Ask Claude anything — if you're stuck for more than 5 minutes, just ask.*

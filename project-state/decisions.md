# Decisions

> Append-only. Never delete entries. Write down *why*, not just *what*.

---

## Plain HTML/CSS/JS — no frameworks

**Date:** Project start
**Decision:** Build with raw HTML, CSS, and JS. No React, no Vue, no build tools, no npm.
**Why:** This is a simple marketing site with one page. Frameworks add complexity and
maintenance overhead that isn't justified here. Plain files are easier to hand off, easier
to host, and faster to load. The client doesn't need an app — they need a brochure.

---

## Netlify + Namecheap for hosting

**Date:** Project start
**Decision:** Use Netlify (free) for hosting and Namecheap for the domain (~$9/yr).
**Why:** Netlify auto-deploys on every `git push` — no manual FTP uploads. It provides
free SSL automatically. Namecheap has competitive domain pricing and straightforward DNS
management. Together they cost under $10/year to run.
**Alternative considered:** Hostinger (~$36/yr) — better if the client needs email hosting.
Keep it in mind if they ask for a business email address.

---

## `site/` is the only deployable folder

**Date:** Phase A
**Decision:** Everything that goes to the web host lives in `site/`. All other folders
(`assets/`, `brand/`, `docs/`, `legal/`, `project-state/`) are repo-only.
**Why:** Keeps deployment simple and intentional. You only upload one folder. There's no
risk of accidentally publishing internal docs or raw uncompressed photos.

---

## `legal/` lives outside `site/`

**Date:** Phase A (planned for Phase D)
**Decision:** Privacy Policy and Terms of Service are authored in `legal/` but linked
from `site/index.html` with relative paths (`../legal/...`).
**Why:** Keeps legal documents separate from the site source. Note: paths may need
adjustment once hosted depending on server folder structure — verify in Phase E.

---

## No `outputs/` folder

**Date:** Phase A
**Decision:** Deleted the `outputs/` folder, which was a duplicate of `site/`.
**Why:** Two folders with the same content creates confusion about which is the
"real" version. Having a single source of truth (`site/`) prevents edits from
being made in the wrong place.

---

## All URLs stay on the real domain until the domain is live

**Date:** Phase G (2026-08-13)
**Decision:** `sitemap.xml`, `robots.txt`, OG tags, and JSON-LD all point at
`ironcladrecyclingllc.com` — the not-yet-registered custom domain. Reverted an earlier
commit (`75f03d7`) that switched *only* `sitemap.xml` to the Netlify staging URL.
**Why:** Changing one file left the others disagreeing — `robots.txt` advertised a sitemap
at the custom domain while the sitemap itself claimed the pages lived on Netlify. Search
engines follow those cross-references, so a partial switch is worse than no switch.
These URLs are a set: change all of them together or none of them.
**When to revisit:** Phase E — once the custom domain resolves, update all four in one commit.

---

## Compress images before they ship

**Date:** Phase G (2026-08-13)
**Decision:** Compressed `ironclad-logo.JPG` from 346 KB to 56 KB using macOS `sips`
(resized 1122px → 560px wide, JPEG quality 50).
**Why:** PageSpeed mobile scored 68 (target ≥80) with Largest Contentful Paint at 5.1s.
The logo renders four times on the page, so its weight was paid repeatedly. Source images
come out of cameras and design tools at print quality; screens need a fraction of that.
**Rule going forward:** any image added to `site/` gets compressed first. Photos from the
client (Phase C) go through the same treatment before they land in `site/images/`.

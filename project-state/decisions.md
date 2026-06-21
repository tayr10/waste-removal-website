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

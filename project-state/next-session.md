# Next Session

> This is a bookmark, not a task list. Tasks live in tasks.md.
> Update this at the end of every session.

---

## Pick up here

**First thing:** re-run PageSpeed Insights on `https://ironclad-recycling.netlify.app`
(mobile). Last score was **68**; the logo was compressed 346K → 56K and pushed on
2026-08-13, so the new score should be higher. Click "Analyze" fresh — don't reload
a cached result page. Target is ≥ 80.

If it's still under 80, the next things to look at are render-blocking CSS and the
Google Fonts load — both show up in the PageSpeed "Opportunities" section.

**Then, waiting on client:**
1. Register domain at Namecheap → connect to Netlify (Phase E)
2. Update `sitemap.xml`, `robots.txt`, OG tags, and GA4 stream URL to real domain
   — **all four together**, see decisions.md
3. Add real photos to `site/images/` — compress each one first (Phase C)
4. Ask client to confirm the contact-form test email arrived

## Context

- Phase A ✅ complete
- Phase B ✅ complete — CSS in `site/style.css`, JS in `site/main.js`, HTML down to 480 lines
- Phase C ⬜ blocked — waiting on client for real photos and confirmed service details
- Phase D ✅ complete — `site/privacy-policy.html` + `site/terms-of-service.html` live, footer linked
- Phase E ⬜ partial — live at `ironclad-recycling.netlify.app`; still need custom domain (client approval + ~$9)
- Phase F ✅ complete — GA4 (`G-ZHTPZCSDN9`), Search Console, sitemap, robots.txt, OG tags, structured data all live
- Phase G ⬜ in progress — 7 of 9 checks pass; PageSpeed pending re-test, form email unconfirmed

## Heads up

A Copilot session committed `75f03d7`, which pointed **only** `sitemap.xml` at the Netlify
staging URL while `robots.txt` and `index.html` still pointed at the custom domain. That was
reverted in `bdc3421`. If a tool suggests changing one URL, check whether the others need to
move with it.

# Next Session

> This is a bookmark, not a task list. Tasks live in tasks.md.
> Update this at the end of every session.

---

## Pick up here

**Phase G is effectively done** — PageSpeed hit 80 on mobile after the logo compression
(2026-08-13). Only open item is confirming the contact-form email actually arrives, which
needs the client's inbox.

**Waiting on client:**
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
- Phase G ✅ 8 of 9 checks pass — only the contact-form email delivery is unconfirmed
- Phase H ⬜ not started — launch, announce, Google Business Profile

## Heads up

A Copilot session committed `75f03d7`, which pointed **only** `sitemap.xml` at the Netlify
staging URL while `robots.txt` and `index.html` still pointed at the custom domain. That was
reverted in `bdc3421`. If a tool suggests changing one URL, check whether the others need to
move with it.

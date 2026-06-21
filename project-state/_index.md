# Ironclad Recycling LLC — Website Project

**What is this?**
A marketing website for Ironclad Recycling LLC, a small business offering industrial
cleanouts, demolition, and machinery rigging in the Northeast US.

The goal is a live, customer-ready website at a real domain (likely `ironcladrecyclingllc.com`)
that loads fast, works on mobile, collects quote requests via a contact form, and ranks
on Google for local searches.

**Stack:** Plain HTML + CSS + JS. No frameworks. No build tools. No npm.
**Hosting target:** Netlify (free) + Namecheap domain (~$9/yr)

---

## Read these files first, in this order

1. `_index.md` — you're here
2. `tasks.md` — what's done and what's next
3. `next-session.md` — where to pick up right now
4. `decisions.md` — why things were built the way they were

---

## Folder map

```
waste-removal-website/
├── README.md               ← Full phase-by-phase build guide
├── project-state/          ← You are here
│
├── site/                   ← THE WEBSITE — this folder gets uploaded to hosting
│   ├── index.html          ← Main page (currently ~1.8MB — Phase B will fix this)
│   └── ironclad-logo.JPG   ← Logo
│
├── assets/
│   ├── photos/             ← Raw phone photos (not web-ready)
│   └── optimized/          ← Compressed versions — copy these into site/
│
├── brand/
│   └── logo/               ← Master logo files
│
├── legal/                  ← Privacy Policy + Terms (empty — Phase D)
│
└── docs/                   ← Reference only, not part of the website
    ├── accounts.md         ← Platform logins (NO passwords)
    └── claude-project-guide.md
```

**The rule:** `site/` is the only folder that gets uploaded to the web host.

# Optimus Industries LLC — Website

**Optimus Industries LLC**  
Shams Free Zone, Sharjah, UAE  
Sourcing · Manufacturing · Consultancy

## Stack
- Vanilla React 18 (UMD, no build step required)
- Babel Standalone (JSX transpilation in-browser)
- Custom CSS with CSS variables (navy/gold brand system)
- No dependencies to install — open index.html and it works

## Structure
```
index.html          — Entry point
app.jsx             — App shell, Nav, ScrollProgress
heroes.jsx          — Three hero variants (editorial, cinematic, ledger)
sections.jsx        — All content sections (About, Services, Capabilities, etc.)
styles.css          — Full design system
tweaks-panel.jsx    — Dev tweaks panel (hero variant / typography switcher)
assets/             — Logo, icon, brand marks
uploads/            — Photography assets
```

## Deployment
Deployed on Vercel. Auto-deploys on push to `main`.

## Local Preview
Open `index.html` directly in browser — no build step, no server needed.

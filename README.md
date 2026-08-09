# My Digital Crib — Pixel-Art Portfolio

An interactive pixel-art bedroom. Turn on the computer to enter the main
portfolio (a full Windows XP desktop experience), pick up the Nokia phone
for the mobile version, and let the tuxedo cat guide you — tutorial in
English y en Español.

**Live site:** https://mydigitalcrib.com/

**Static origin:** https://michellesalcedovallenilla-ai.github.io/myportfolio/

## Español

Un cuarto interactivo en pixel art. Enciende la computadora para entrar al
portafolio principal (una experiencia completa de escritorio Windows XP),
toma el teléfono Nokia para la versión móvil y deja que el gato esmoquin te
guíe — tutorial en English y en Español.

## Inside / Dentro

- `index.html` — the bedroom scene (vanilla HTML/CSS/JS, single file)
- `pantalla-app/` — Windows XP desktop portfolio (React + Vite build)
- `mobile-app/` — Mangophone portfolio for mobile and tablet
- `nokia-app/` — Nokia phone portfolio
- `assets/` — pixel-art sprites and sounds
- `worker.js` — Cloudflare reverse proxy for the custom domain

## Local verification

This repository is served as committed static files and has no root build step or
package installation.

```powershell
node scripts/verify-static.mjs
node scripts/test-worker.mjs
node scripts/serve.mjs
```

Then open http://127.0.0.1:4173/.

## Handoff notes

- [Architecture](docs/ARCHITECTURE.md)
- [Security review](docs/SECURITY-REVIEW.md)
- [Agent and contributor guide](AGENTS.md)

The editable React/Vite source and dependency lockfile for `pantalla-app` are not
present in this repository. Recover them before substantial desktop changes.

## Related source repos / Repos fuente

- Nokia phone: https://github.com/michellesalcedovallenilla-ai/nokia-project

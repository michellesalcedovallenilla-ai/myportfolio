# Repository Guide

## Project shape

- This is a static portfolio. There is no application server, database, login,
  payment flow, or package-managed build in this repository.
- `index.html` is the entry point and desktop bedroom scene.
- `mobile-app/index.html` is the self-contained Mangophone experience.
- `nokia-app/index.html` is the self-contained Nokia experience.
- `pantalla-app/` contains a prebuilt React/Vite desktop plus a small editable
  wrapper in `pantalla-app/index.html`.
- `worker.js` proxies `mydigitalcrib.com` to the GitHub Pages copy.
- See `docs/ARCHITECTURE.md` and `docs/SECURITY-REVIEW.md` before structural or
  deployment changes.

## Working rules

- Preserve the pixel-art composition, interactions, English/Spanish behavior,
  iframe paths, and responsive breakpoints unless the task says otherwise.
- Prefer focused edits to the owning HTML or JS file. Do not split the large
  single-file apps merely for style.
- Do not hand-edit `pantalla-app/assets/index-Csh_iLlX.js` or its compiled CSS
  unless no source build is available and the user explicitly accepts that risk.
- Keep all embedded apps same-origin. If cross-frame messages change, validate
  both `event.source` and `event.origin`.
- Never commit credentials, `.dev.vars`, `.env*`, Cloudflare state, or logs.
- Do not add dependencies or claim a build exists without restoring and pinning
  the missing source package for `pantalla-app`.

## Local commands

```powershell
node scripts/verify-static.mjs
node scripts/test-worker.mjs
node scripts/serve.mjs
```

Open `http://127.0.0.1:4173/`. If that port is busy, run
`node scripts/serve.mjs 4174` and use the printed URL.

There is no repository build, lint, typecheck, or package test command. Do not
invent one. The static verifier checks inline JavaScript and local HTML asset
references without installing packages.

## Validation checklist

- Test desktop above 820 px and mobile/tablet at or below 820 px.
- Test both language choices from a clean storage state.
- Confirm the desktop monitor, Nokia overlay, Mangophone apps, persistent talking
  boxes, icon dragging, downloads, and external links still work.
- Camera, microphone, and geolocation need explicit browser permission and should
  receive an HTTPS smoke test before release.
- Re-run `node scripts/verify-static.mjs` after changing paths or inline scripts.

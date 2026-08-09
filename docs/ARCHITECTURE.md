# Architecture

## Runtime overview

```text
Visitor
  |
  v
mydigitalcrib.com
  |
  v
Cloudflare Worker (worker.js)
  |
  v
GitHub Pages /myportfolio
  |
  v
index.html
  |-- desktop scene -> pantalla-app/ iframe and nokia-app/ overlay
  `-- <= 820 px     -> mobile-app/ iframe
```

The custom domain is a reverse proxy. GitHub Pages remains the static origin and
can also be reached directly, but requests made directly to GitHub Pages do not
receive the security headers added by `worker.js`.

## Main areas

| Area | Ownership | Notes |
| --- | --- | --- |
| `index.html` | Entry point, boot flow, desktop room, tutorial overlays | Vanilla HTML, CSS, and JavaScript in one file |
| `i18n.js` | Runtime English/Spanish translation | Shared by the entry point and embedded apps |
| `mobile-app/` | Mangophone interface | Static single-file app with local images, audio, video, and PDF assets |
| `nokia-app/` | Nokia interface | Static single-file app; includes external links, fonts, radio streams, and remote images |
| `pantalla-app/` | Windows XP interface | Prebuilt React/Vite output plus an editable HTML wrapper |
| `worker.js` | Custom-domain proxy | Allows GET/HEAD only, strips private request headers, rewrites same-origin redirects, and adds response security headers |

## Data and state

- Browser `localStorage` stores language, sound, tutorial state, icon positions,
  notes, and other experience preferences.
- User-entered messages and notes stay in the browser. There is no repository
  backend or database receiving them.
- Camera and microphone features use `getUserMedia`; weather uses geolocation.
- The site exposes public portfolio contact details and downloadable resumes by
  design.

## External services

- GitHub Pages: static origin.
- Cloudflare Workers: custom-domain reverse proxy.
- Google Fonts: VT323 font.
- YouTube: video embeds, thumbnails, and Music app playback through an IFrame
  Player hidden behind the local album artwork.
- Open-Meteo and Nominatim: desktop weather and location labels.
- SomaFM: Nokia radio streams.
- Pinterest image CDN: Nokia mood-board images.
- Calendar, LinkedIn, Instagram, Readymag, Canva, and client sites: outbound links.
- Supabase client code exists inside the compiled desktop bundle, but it points to
  placeholder values. The related web-proxy feature is not production-configured.

## Build and deployment reality

- The repository root and the two phone apps are served directly as committed
  static files. No root build step exists.
- `pantalla-app` is committed build output. Its original React/Vite source,
  package manifest, and lockfile are absent, so the desktop cannot currently be
  rebuilt or dependency-audited reproducibly from this repository.
- `wrangler.jsonc` describes the Cloudflare Worker, but the Wrangler toolchain is
  not pinned in a package manifest. Production deployment therefore depends on a
  separately installed and authenticated Wrangler environment.

## Safe change boundaries

- Visual and interaction work should stay in the relevant HTML owner.
- Shared translation behavior belongs in `i18n.js`.
- Domain routing and HTTP hardening belong in `worker.js`.
- Restore the original `pantalla-app` source before substantial desktop feature
  work. Rebuild into the existing directory only after dependencies are pinned
  and reviewed.

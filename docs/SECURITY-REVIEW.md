# Security Review

Review date: 2026-08-09

## Scope and limits

The review covered the current tracked static site, embedded applications,
Cloudflare Worker, browser permissions, cross-frame messaging, external services,
user-input rendering, and deployment shape. It did not inspect untracked log
contents, secret files, private Cloudflare settings, GitHub settings, third-party
accounts, or the complete Git history. No live penetration test was performed.

No verified secret signature was found in the tracked text files reviewed. The
Supabase URL and key in the compiled desktop are explicit placeholder values, not
production credentials.

## Maintainability issues

### Desktop source and dependency chain cannot be reproduced

- Affected area: `pantalla-app/`
- Issue: only compiled React/Vite output is present. Source files, package
  manifest, lockfile, and build instructions are missing.
- Impact: a new owner cannot reliably rebuild, patch, or audit the bundled
  dependencies. Supply-chain findings cannot be traced to source declarations.
- Exploitability: this is not a direct remote exploit, but it materially weakens
  maintenance and security assurance after handoff.
- Recommended fix: recover the exact source repository and lockfile, document the
  build, run a dependency audit there, and verify that a clean build reproduces
  the committed output.
- Confidence: high.

## Legal/content issues

### Rights for remaining third-party media are unverified

- Affected area: other audio files, YouTube content, and remote Pinterest images.
- Status: the 28 commercial MP3 files previously bundled with the Music app were
  removed. Music playback now uses YouTube embeds hidden behind the local album
  artwork and selected by the user.
- Issue: the remaining third-party media still has no complete license inventory
  or usage documentation. YouTube availability also depends on each rights holder
  continuing to permit embedding.
- Impact: production launch or client handoff may create copyright, takedown, or
  contractual exposure.
- Exploitability: operational/legal risk, not a software vulnerability.
- Recommended fix: obtain written rights, replace remaining assets with licensed
  material, or remove them before client handoff. Record source and license for
  every retained third-party asset and periodically verify YouTube embeds.
- Confidence: high that documentation is absent; ownership status is unknown.

## Cybersecurity findings

### MEDIUM: Third-party runtime dependencies lack a complete policy

- Affected area: Google Fonts, YouTube, Open-Meteo, Nominatim, SomaFM, Pinterest,
  and outbound portfolio links.
- Issue: the site relies on third parties without a maintained allowlist, outage
  plan, privacy disclosure, or comprehensive tested CSP.
- Impact: vendor outages can degrade features; external requests reveal visitor
  metadata; compromised remote content can affect trust in the experience.
- Exploitability: depends on a third-party compromise or policy change.
- Recommended fix: approve an explicit vendor list, self-host critical assets when
  practical, add privacy copy appropriate to the launch region, and introduce a
  full CSP in report-only mode before enforcing it.
- Confidence: high.

### MEDIUM: Placeholder Supabase browser feature is shipped but cannot work

- Affected area: `pantalla-app/assets/index-Csh_iLlX.js`
- Issue: a bundled Supabase client calls a `web-proxy` function using placeholder
  project values.
- Impact: the browser-like desktop feature can fail and the unused SDK increases
  bundle size and review surface.
- Exploitability: no real account is exposed by the placeholders. The risk is
  reliability and unnecessary code surface.
- Recommended fix: remove the integration in the recovered desktop source, or
  configure a deliberately scoped backend with URL validation, abuse controls,
  logging, and no privileged key in the browser.
- Confidence: high.

### MEDIUM, REMEDIATED: The domain proxy forwarded sensitive headers

- Affected file: `worker.js`
- Issue: the original Worker cloned every incoming request and accepted every HTTP
  method, allowing cookies or authorization headers to reach the GitHub origin.
- Impact: future authentication or cookies on the custom domain could have been
  disclosed upstream; non-static methods expanded the proxy surface.
- Exploitability: low today because the site has no authentication, but the
  behavior was unsafe for future additions.
- Fix applied: allow GET/HEAD only, strip private routing and credential headers,
  remove upstream `Set-Cookie`, and add defensive response headers.
- Confidence: high.

### LOW, REMEDIATED: Cross-frame messages trusted wildcard origins

- Affected files: `index.html`, `i18n.js`, `mobile-app/index.html`, and
  `pantalla-app/index.html`.
- Issue: language, cursor, and ready-state messages used wildcard target origins
  or accepted messages without an origin check.
- Impact: a page embedded in an unexpected context could spoof non-sensitive UI
  state.
- Exploitability: limited because the messages do not carry credentials or
  privileged data.
- Fix applied: production messages target the current origin and receivers verify
  source and origin, while retaining a file-protocol fallback for local previews.
- Confidence: high.

### LOW, REMEDIATED: Local logs and secret files were not ignored

- Affected area: repository root.
- Issue: no `.gitignore` prevented accidental commits of logs, local Cloudflare
  state, or common environment files.
- Impact: future debug output or credentials could be committed accidentally.
- Fix applied: added focused ignore rules without deleting or reading existing
  untracked content.
- Confidence: high.

### INFORMATIONAL: Common server-side attack classes are not present

No active backend, authentication, authorization, database, payment flow, file
upload, webhook, or form submission endpoint was found. SQL injection, broken
access control, server-side request forgery, payment abuse, and database leakage
are therefore not applicable to the current architecture. Reassess this if a
backend is introduced.

## Required manual actions

1. Recover and verify the editable `pantalla-app` source and lockfile.
2. Review and license every third-party audio, image, font, video, and stream.
3. Review the untracked local log without committing it; remove sensitive local
   artifacts through an owner-approved process.
4. Audit repository history with an approved secret-scanning tool and rotate any
   credential that has appeared in chat, logs, screenshots, commits, or terminals.
5. Verify Cloudflare route, TLS mode, Worker deployment, and DNS in the account.
6. Perform an HTTPS browser smoke test for camera, microphone, geolocation,
   downloads, embeds, external links, and both language paths.
7. Add a privacy notice if analytics, lead capture, or new data collection is
   introduced.

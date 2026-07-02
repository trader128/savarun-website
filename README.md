# SAWARUN TECH PRIVATE LIMITED — Corporate Website

Official corporate website for **SAWARUN TECH PRIVATE LIMITED** — parent company behind **SAVARUN** and **LOCK & KEY SKIN CARE**.

**Live domain:** [https://www.savarun.in](https://www.savarun.in)

## Scope (Option B — Lean Info-Corner)

- Home
- About
- Products (SAVARUN + LOCK & KEY SKIN CARE — both Coming Soon)
- Contact
- Privacy Policy
- Terms & Conditions
- Disclaimer

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- next-themes

Static export configured for GitHub Pages deployment.

## Before Going Live

Company details are configured in `lib/constants.ts`. **GSTIN is not yet set** — share it when available and it will appear in the footer and legal pages automatically.

**Recommended:** Export `public/images/og/default-og.svg` to PNG (1200×630) for better social platform compatibility and update `lib/metadata.ts`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is written to `out/`.

## Deployment (GitHub Pages)

1. Push this repository to GitHub
2. Enable **GitHub Pages** → Source: **GitHub Actions**
3. Ensure DNS for `www.savarun.in` points to GitHub Pages
4. `public/CNAME` is included for custom domain

The workflow in `.github/workflows/deploy.yml` builds and deploys automatically on push to `main`.

### Manual deploy

```bash
npm run build
# Upload contents of out/ to your static host
```

## Project Structure

```
app/              # Pages (App Router)
components/       # UI, layout, home, contact, legal, SEO
lib/              # Constants, metadata, structured data, utils
public/           # Static assets, robots.txt, sitemap, manifest
.github/          # CI/CD workflows
```

## Media Folders

```
public/images/
├── company/
├── products/
├── illustrations/
├── screenshots/
├── icons/
├── logos/
├── backgrounds/
├── og/
└── social/
```

Replace branded placeholders with real assets at product launch without changing layouts.

## QA Checklist

- [ ] All placeholders replaced with real legal/contact data
- [ ] Build passes: `npm run build`
- [ ] Lint passes: `npm run lint`
- [ ] Mobile and desktop responsive
- [ ] Dark/light theme toggle works
- [ ] All nav links and legal pages load
- [ ] Products clearly marked "Coming Soon"
- [ ] LOCK & KEY described as dermatologist platform (not AI product)
- [ ] Footer shows correct legal entity and product attribution
- [ ] Custom domain DNS configured
- [ ] OG image exported to PNG for social sharing (recommended)

## License

MIT — see [LICENSE](LICENSE).

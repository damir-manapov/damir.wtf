# damir.wtf

Personal site for Damir Manapov.

## Features

- MDX content rendering with next-mdx-remote
- Markdown-based home page (`app/content/home.md`)
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- Dynamic OG images
- Tailwind v4
- Vercel Speed Insights / Web Analytics
- Geist font
- TypeScript with strict mode
- ESLint with strict rules
- Prettier formatting

## Development

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Run quality checks:

```bash
bash check.sh        # format, lint, type-check
bash health.sh       # check outdated deps and vulnerabilities
bash all-checks.sh   # run all checks
```

## Tech Stack

- Next.js 16.0.7
- React 19.2.1
- TypeScript 5.9.3
- Tailwind CSS 4.1.17
- pnpm package manager

## Content Management

The home page content is managed in `app/content/home.md` and rendered using next-mdx-remote.

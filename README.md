# Caldrik landing page

Next.js (App Router) site for caldrik.co, deployed to Cloudflare Workers with
[OpenNext](https://opennext.js.org/cloudflare). See `AGENTS.md` before changing Next.js code:
this version has breaking changes, and the docs ship in `node_modules/next/dist/docs/`.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # also regenerates src/lib/posts-data.json from content/posts/*.mdx
npm run start   # serve the production build
```

## Layout

- `src/app` — routes (home, about, partners, insights, legal) and the API routes
- `src/components` — page sections; `ui/` holds shared primitives
- `content/posts` — blog articles (MDX + frontmatter)
- `scripts/generate-posts.mjs` — builds `posts-data.json` (git-ignored, created on build)
- `design-sources/` — design files that are not deployed

## Configuration

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Sends the contact / partner enquiry emails |
| `CONTACT_TO_EMAIL` | Optional. Where enquiries go (defaults to the owner's address in `src/lib/api-guard.ts`) |

`wrangler.jsonc` configures the Worker, static assets and the `IMAGES` binding that resizes `next/image` files.
The www → apex redirect is a Cloudflare redirect rule, not app code.

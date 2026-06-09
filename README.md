# Marlin Artist Portfolio

English-first artist portfolio MVP for Marlin, built with Astro, React, TypeScript,
Tailwind CSS, Sanity Studio, and Cloudflare Pages.

The implementation follows `development_plan.md`: a mobile-first artwork archive, 30
sample works, 4:5 artwork cards, category filtering, detail modal and routes, email
inquiries, Sanity-based admin, SEO metadata, `robots.txt`, `sitemap.xml`, and an
operations guide.

## Stack Decision

Chosen stack:

- Frontend: Astro + React + TypeScript
- Styling: Tailwind CSS through PostCSS, with project CSS components
- CMS/admin: Sanity Studio at `/admin`
- Hosting target: Cloudflare Pages
- Content source: Sanity when configured, bundled sample data as the local fallback

Sanity was chosen because it gives the artist a web-based admin with login, image
uploads, image ordering, document history, draft/published workflows, and no need to
edit GitHub directly. Sanity authentication is handled by Sanity accounts; credentials
and tokens must not be committed to this repository.

## Local Development

```bash
npm install
npm run dev
```

The public site runs at `http://localhost:4321`. The Sanity Studio route is
`http://localhost:4321/admin`.

PowerShell on Windows may block `npm.ps1`; use `npm.cmd` if needed:

```bash
npm.cmd install
npm.cmd run dev
```

## Environment

Copy `.env.example` to `.env` and update values:

```bash
PUBLIC_SITE_URL=https://example.com
PUBLIC_SANITY_PROJECT_ID=replacewithprojectid
PUBLIC_SANITY_DATASET=production
PUBLIC_CONTACT_EMAIL=hello@example.com
```

If `PUBLIC_SANITY_PROJECT_ID` is left as `replacewithprojectid`, the public site uses
the bundled 30 sample artworks. A real Sanity project ID is required for `/admin` to
act as a usable CMS.

## Content Model

Artwork fields include:

- title, slug, category, sale status, description
- year, materials, size, collection
- cover image, multiple detail images, per-image alt text, fallback alt text
- published, featured, order, internal notes
- hidden future price and process image fields
- future artwork links for Instagram, Patreon, and shop

Categories are `Temari`, `Macramé`, `Tatting`, `Knitting`, and `Painting`.
Sale statuses are `Available`, `Sold`, `Reserved`, `Not for Sale`, and `Archive`.

Site settings include artist name, site description, contact email, hero image, about
image, and future external links. Future links remain hidden in the MVP UI.

## Admin

Sanity Studio is embedded at `/admin`. With a configured Sanity project, use Sanity
Manage to invite the artist or owner account, then sign in through the Studio route.
The public navigation intentionally does not expose `/admin`, and the admin page is
marked `noindex,nofollow`.

The Studio structure contains:

- `Artworks`: create, edit, delete, publish/unpublish, order, and upload artwork images
- `Site Settings`: one singleton document for artist copy, email, hero/about images,
  and future links

Detailed admin procedures are in [OPERATIONS.md](./OPERATIONS.md).

## Images

The repo includes generated SVG sample placeholders under `public/images/samples`.
Real artwork images should be uploaded in Sanity.

Recommended production images:

- Cover image: 800px x 1000px WebP, 4:5 crop
- Detail image: long edge 1600px to 2000px WebP
- Keep original high-resolution files outside the deployed site
- Add image alt text in Sanity for every uploaded image

To regenerate local placeholders:

```bash
node scripts/generate-placeholders.mjs
```

## Email Inquiries

The MVP uses `mailto:` links only. Artwork detail pages generate a subject and body
with the artwork title and canonical page URL. General inquiry links use the site
contact email.

To change the email:

- local fallback: update `PUBLIC_CONTACT_EMAIL`
- Sanity-connected site: update `Site Settings -> Contact Email`

## SEO

Implemented:

- page title and meta description
- canonical URL
- Open Graph metadata
- Twitter card metadata
- artwork detail metadata
- `robots.txt`, with `/admin` disallowed
- `sitemap.xml`, generated from the current public artwork list

## Build and Deploy

```bash
npm run check
npm run build
```

Cloudflare Pages settings:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: set the same `PUBLIC_*` values used locally
- Add `NODE_VERSION=22.12.0` or newer in Cloudflare Pages environment variables
- Production branch: `main`
- Preview deployments: enable branch or pull request previews

`wrangler.toml` includes `pages_build_output_dir = "dist"` for Cloudflare Pages
compatibility.

## Related Docs

- [OPERATIONS.md](./OPERATIONS.md): admin, deployment, domain, and troubleshooting guide
- [implementation_gap_report.md](./implementation_gap_report.md): gap analysis against
  `development_plan.md`

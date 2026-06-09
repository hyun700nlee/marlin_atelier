# Marlin Portfolio Operations Guide

This guide covers the routine work required to operate the Marlin artist portfolio.
Do not store passwords, Sanity tokens, Cloudflare tokens, or OAuth secrets in this
repository.

## 1. Local Server

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Windows PowerShell fallback:

```bash
npm.cmd run dev
```

Open:

- Public site: `http://localhost:4321`
- Admin Studio: `http://localhost:4321/admin`

## 2. Sanity Project Setup

1. Create a Sanity project in Sanity Manage.
2. Create or choose the production dataset.
3. Add the project ID and dataset to local `.env` and Cloudflare Pages variables.
4. Invite the artist or owner account in Sanity Manage.
5. Assign a role that can create, edit, publish, and delete documents.
6. Sign in at `/admin` with the invited Sanity account.

Required environment variables:

```bash
PUBLIC_SITE_URL=https://your-production-domain.example
PUBLIC_SANITY_PROJECT_ID=yourprojectid
PUBLIC_SANITY_DATASET=production
PUBLIC_CONTACT_EMAIL=hello@example.com
```

When `PUBLIC_SANITY_PROJECT_ID=replacewithprojectid`, the public site falls back to
sample data and the Studio is not ready for real content management.

## 3. Admin Login

1. Visit `/admin`.
2. Sign in with a Sanity account that has access to the configured project.
3. Open `Artworks` for portfolio content or `Site Settings` for global copy and email.

The repository does not contain admin passwords. Sanity handles login and account
security.

## 4. Add Artwork

1. Open `/admin`.
2. Select `Artworks`.
3. Create a new artwork document.
4. Fill required fields:
   - Title
   - Slug
   - Category
   - Sale Status
   - Description
   - Cover Image
   - Detail Images
   - Alt Text
5. Fill optional fields when available:
   - Year
   - Materials
   - Size
   - Collection
   - Featured
   - Order
   - Internal Notes
6. Set `Published` to `true` when ready.
7. Publish the document.

Slug is generated from the title but can be edited before publishing.

## 5. Edit Artwork

1. Open `/admin -> Artworks`.
2. Select the artwork.
3. Change text, category, sale status, images, published state, or order.
4. Publish the changes.
5. Confirm the public site after the next build or content refresh.

The site sorts works by `Featured`, then `Order`, then latest creation date.

## 6. Delete or Unpublish Artwork

Prefer unpublishing when a work may return later:

1. Open the artwork.
2. Set `Published` to `false`.
3. Publish.

Use delete only when the record should be removed from Sanity:

1. Open the artwork.
2. Use Sanity's delete action.
3. Confirm the delete prompt.

Sanity document history and backups depend on the project plan and retention behavior.
For normal operations, unpublish is safer than delete.

## 7. Upload and Reorder Images

Cover image:

1. Upload one vertical image under `Cover Image`.
2. Use a 4:5 crop where possible.
3. Add image alt text.

Detail images:

1. Upload one or more images under `Detail Images`.
2. Drag images in the array to change display order.
3. Add alt text to each image.
4. Remove images from the array when they should no longer appear.

Recommended production files:

- Cover: 800px x 1000px WebP
- Detail: long edge 1600px to 2000px WebP
- Avoid uploading uncompressed originals directly to the public site workflow

## 8. Change Sale Status

Open an artwork and change `Sale Status`:

- `Available`: public badge is `Available`; button says `Inquire about this work`
- `Reserved`: public badge is `Reserved`; button says `Inquire about this work`
- `Sold`: public badge is `Sold`; button says `Ask about similar works`
- `Not for Sale`: public badge is `Not for Sale`; button says `Contact Marlin`
- `Archive`: public badge is `Archive`; button says `Ask about this archive work`

Prices are not displayed in the MVP.

## 9. Change Category

Open an artwork and choose one category:

- Temari
- Macramé
- Tatting
- Knitting
- Painting

The public filter updates from the published artwork category values.

## 10. Change Contact Email

Sanity-connected site:

1. Open `/admin -> Site Settings`.
2. Change `Contact Email`.
3. Publish.
4. Rebuild or refresh the site according to the deployment workflow.

Local fallback:

1. Change `PUBLIC_CONTACT_EMAIL` in `.env`.
2. Restart the dev server.

## 11. Future Links

Future links are modeled but hidden in the MVP public UI.

To prepare links:

1. Open `/admin -> Site Settings`.
2. Add URLs for Instagram, Patreon, shop, Etsy, newsletter, or commission.
3. Keep `Visible` off until future UI support is intentionally enabled.

To expose them publicly later, add UI rendering that checks both `url` and `visible`.

## 12. Cloudflare Pages Deploy

Set Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`
- Environment variables: `NODE_VERSION=22.12.0` or newer, `PUBLIC_SITE_URL`,
  `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`, `PUBLIC_CONTACT_EMAIL`

Deployment behavior:

- Push to `main` for production deploys.
- Enable preview deployments for pull requests or branches.
- If Sanity content should trigger rebuilds automatically, configure a Sanity webhook
  to call the Cloudflare Pages deploy hook.

## 13. Custom Domain

1. Add the custom domain in Cloudflare Pages.
2. Follow Cloudflare's DNS instructions for CNAME or apex records.
3. Update `PUBLIC_SITE_URL` to the final `https://` domain.
4. Redeploy the site.
5. Confirm canonical URLs, artwork inquiry links, sitemap, and robots output.

Domain purchase and DNS account ownership remain outside this repository.

## 14. Build and QA

Run:

```bash
npm run check
npm run build
```

Public QA checklist:

- Home renders with artist name and English introduction.
- 30 sample or Sanity artworks are visible.
- Cards stay 4:5.
- Filters work without page reload.
- Detail modal opens and closes with button, backdrop, and Escape.
- Slider arrows, keyboard navigation, and touch swipe work.
- Detail routes exist under `/artworks/[slug]`.
- Email links open with subject and body.
- `/404`, `/robots.txt`, and `/sitemap.xml` exist.
- Monetization links are not visible.

Admin QA checklist:

- `/admin` loads with a configured Sanity project.
- Authorized user can sign in.
- Artwork create, edit, delete, publish/unpublish, image upload, image preview, image
  order, category, status, and order fields are available.
- Site Settings can update contact email and global copy.

## 15. Troubleshooting

Build fails:

- Run `npm run check` locally.
- Confirm required environment variables exist in Cloudflare Pages.
- Confirm Sanity project ID and dataset are correct.
- If Sanity is unavailable, the public site should fall back to sample data.

Admin cannot log in:

- Confirm `PUBLIC_SANITY_PROJECT_ID` is not `replacewithprojectid`.
- Confirm the user is invited to the Sanity project.
- Confirm the dataset exists.
- Try a modern Chrome or Safari browser.

Images do not appear:

- Confirm cover image is uploaded.
- Confirm the artwork is published.
- Confirm Sanity asset permissions and dataset are correct.
- Check whether the image field has been removed from a draft.

Public content did not update:

- Confirm the Sanity document was published, not only saved as draft.
- Trigger a Cloudflare Pages rebuild if the site is using static build output.
- Confirm `PUBLIC_SITE_URL` points to the current production domain.

Unexpected public links:

- Check `Site Settings -> Future External Links`.
- Keep `Visible` disabled for all monetization links during MVP.

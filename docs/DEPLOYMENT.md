# Deployment

## GitHub Pages
1. Create a repository and copy the contents of this folder into the repository root.
2. Commit and push the files.
3. In GitHub, open Settings → Pages and publish from the main branch/root.
4. Confirm the Pages URL serves `index.html`.
5. Keep `404.html` at the repository root for GitHub Pages fallback handling.

## Netlify / Cloudflare Pages
Create a new site, choose the repository, set the publish directory to the repository root and leave the build command empty. The project has no npm dependencies and no build step.

## Custom domain
Use a professional company domain once acquired. Configure DNS according to the hosting provider and enable HTTPS.

## Forms
The contact form is intentionally lightweight and should not be represented as production mail delivery until connected to a real form service or backend. Before launch, configure spam protection, privacy wording and a monitored company mailbox.

## Tender submission hygiene
Use the deployed site only as supporting evidence. Keep the formal tender submission, declarations, pricing, certificates, insurance evidence and other controlled documents in the buyer's procurement portal.

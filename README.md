# SellMineralRightsFast.com

Marketing site for **Dynasty Mineral Partners**, a DBA of Dynasty Land & Minerals, LLC (Weatherford, Texas). It is a static site: HTML, CSS, and a small script in the repository root.

Phone: (817) 818-1034  
Email: riley@dynastylm.com

## How this deploys

The live site is **Cloudflare Pages**, connected to this GitHub repository. GitHub Pages is not turned on. Cloudflare is already serving clean URLs (`/how-it-works` from `how-it-works.html`) and using `404.html`.

Leave the Pages project on that setup:

- **Framework preset:** None
- **Build command:** empty. Do not add a build command. The HTML in the repository root is what gets published.
- **Build output directory:** `/` (the repository root)
- **Production branch:** `main`

`functions/api/lead.js` is a Cloudflare Pages Function. Pages picks it up automatically and routes `POST /api/lead` to it. It is not a separate Worker you have to create.

Files that start with an underscore (`_headers`) are Cloudflare config, not public pages. `.nojekyll` is only there so GitHub Pages would not run Jekyll if it is ever enabled.

To preview locally, with the same extensionless URLs:

```bash
node site-src/dev-server.mjs
```

That server **does not email anyone**. It only prints the lead in the terminal and returns success so you can see the thank-you state. `FORM_MODE=down` shows the “call us instead” state.

## Changing copy

Page text lives in `site-src/content.mjs`. Shared layout is `site-src/build.mjs`. After editing either file:

```bash
node site-src/build.mjs
```

Commit the regenerated HTML. If you edit an HTML file by hand, do not run the generator afterward or it will overwrite that file.

## The offer form — you must connect an inbox

The form does not send mail until you add a key. No key is stored in this repo on purpose. Until then, a person who submits sees a message to call or email, instead of a fake “we received it.”

Pick **one** option. The Cloudflare environment variable is the better one, because the key stays off the public site.

### Option A — Web3Forms (recommended)

1. Go to [web3forms.com](https://web3forms.com) and create a free access key for `riley@dynastylm.com`. Confirm the email they send you.
2. In the Cloudflare Pages project: **Settings → Environment variables → Production**.
3. Add `WEB3FORMS_ACCESS_KEY` with that key. Do not commit the key.
4. Redeploy (Deployments → Retry deployment, or push a commit).

### Option B — Formspree

1. Create a form at [formspree.io](https://formspree.io).
2. Set the Pages environment variable `FORMSPREE_ENDPOINT` to the full URL, like `https://formspree.io/f/xxxxxxxx`.
3. Redeploy.

### Option C — Any webhook

Set `LEAD_WEBHOOK_URL` to an HTTPS endpoint that accepts a JSON POST. The body includes `name`, `phone`, `email`, `state`, `county`, `receiving`, `page`, and `submittedAt`. Redeploy.

### Option D — Resend

Set all three:

- `RESEND_API_KEY`
- `LEAD_TO_EMAIL` (for example `riley@dynastylm.com`)
- `LEAD_FROM_EMAIL` (a from-address on a domain you have verified in Resend)

Redeploy. Resend’s shared onboarding address will not deliver to an arbitrary inbox.

### Static host without the Pages Function

If the site is ever moved off Cloudflare Pages, paste a key into `form-config.js`:

- `web3formsKey`, or
- `formspreeEndpoint` (the full `https://formspree.io/f/…` URL)

That file is public. Prefer the environment variables above while the site stays on Cloudflare Pages.

The form fields are name, phone, email, state, county, and whether the owner is receiving royalty checks, plus the TCPA consent checkbox. The state list is all 50 states, plus Other.

## Where we buy

The company buys mineral and royalty interests in U.S. oil and gas fields. A large share of acquisitions are in:

- Permian Basin in Texas and New Mexico (Midland and Delaware)
- Red Fork and Cherokee in the Oklahoma Anadarko
- DJ Basin, Weld County, Colorado
- Powder River Basin, Converse County, Wyoming
- Bakken in Montana and North Dakota

The Louisiana page covers the Haynesville and South Louisiana. Do not put a city on the site.

Colors on the site are only `#ffedca`, `#171717`, `#1d2a42`, and `#ffffff`. Headings use Montserrat, the closest open-license match to the "MINERAL PARTNERS" line in the logo. Body text uses Source Sans 3 at 18px. The script in the "Dynasty" wordmark is closest to Great Vibes. That face stays in the logo image. It is not used for headings, because a script is hard to read in a full headline.

## Analytics

Google Analytics `G-SCQXCMMNTG` and Meta Pixel `894157343546096` are still installed. They load after the first tap or keypress, or four seconds after load, so they are not in the critical path.

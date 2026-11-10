# SellMineralRightsFast.com

Marketing site for **Dynasty Mineral Partners**, a DBA of Dynasty Land & Minerals, LLC. It is a static site: HTML, CSS, and a small script in the repository root.

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

## The offer form — you must connect a destination

The form does not send anything until you add a key. No key is stored in this repo. Until then, a person who submits sees a message to call or email, instead of a fake “we received it.”

A text and an email can both be turned on. The visitor sees success if either one is delivered.

### Text Riley through Quo

Quo (formerly OpenPhone) sends the text. Current API docs use `POST https://api.quo.com/v1/messages` with the raw API key in the `Authorization` header (no `Bearer` prefix) and a JSON body of `content`, `from`, and `to`. Confirm the shape at [Send a text message](https://www.quo.com/docs/api-reference/messages/send-a-text-message) if Quo changes it.

To create the key, you need to be an owner or admin of the Quo workspace:

1. Log in to Quo.
2. Open workspace settings and choose the **API** tab. Quo documents this under [Authentication](https://www.quo.com/docs/api-reference/authentication).
3. Generate a key and give it a name with no spaces, such as `website-leads`.
4. In the Cloudflare Pages project, open **Settings → Environment variables → Production**.
5. Add `QUO_API_KEY` and mark it **Encrypt** (a secret). Paste the key. Do not commit it.
6. Optional: `QUO_FROM` (defaults to `+18178181034`; a phone-number id such as `PNnNVNsXOj` also works) and `LEAD_SMS_TO` (defaults to `+12146499538`).
7. Redeploy (Deployments → Retry deployment, or push a commit).

Quo also requires US carrier registration before the API can text a US number. Their authentication page links to that requirement.

### Email

Pick one email option. These stay independent of the text.

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

The page is warm paper with copper used for buttons and small labels. Headlines use Fraunces. Body text is Source Sans 3 at 18px. The script in the logo stays in the logo image.

## Analytics

Google Analytics `G-SCQXCMMNTG` and Meta Pixel `894157343546096` are still installed. They load after the first tap or keypress, or four seconds after load, so they are not in the critical path.

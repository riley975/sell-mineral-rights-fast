# Deploying SellMineralRightsFast.com on Cloudflare

This folder is a static one-page site plus one Cloudflare Pages Function
(`functions/api/lead.js`) that handles the lead form. No build step, no
framework, no separate backend to host.

Three things need to happen once: (A) set up email sending via Resend,
(B) deploy the site and point the domain at it, (C) optionally turn on
SMS alerts later.

---

## A. One-time email setup (via Resend)

Cloudflare's own native email-sending feature ("Email Service"/`send_email`
binding) turned out to be Workers-only — it's not usable in a Pages
project's config (Pages' build rejects it outright). So the Function sends
lead emails through [Resend](https://resend.com) instead — a free
transactional email API, a plain `fetch()` call, no special Cloudflare
binding needed.

1. Sign up for a free account at [resend.com](https://resend.com).
2. In Resend, go to **Domains → Add Domain** and enter
   `sellmineralrightsfast.com`. Resend gives you 2–3 DNS records (TXT/DKIM,
   sometimes MX) to add.
3. Add those exact records in the Cloudflare dashboard under
   **sellmineralrightsfast.com → DNS → Records**. Since the domain's
   already on Cloudflare this is just pasting in a couple of rows — no
   registrar-hopping needed.
4. Back in Resend, click verify. This can take a few minutes to propagate;
   Resend's dashboard will show the domain as "Verified" once it's live.
5. In Resend, go to **API Keys → Create API Key**. Copy it — you'll paste
   it into Cloudflare in step B.

---

## B. Deploy the site

IMPORTANT: Cloudflare's plain drag-and-drop upload in the dashboard does
**not** deploy the `functions/` folder — the lead form would look fine but
silently never email/text you. Use one of these two methods instead, both
of which do support Functions.

### Option 1 — GitHub + Cloudflare Git integration (recommended, no command line)

1. If you don't already have one, create a free account at
   [github.com](https://github.com).
2. Create a new repository (e.g. `sell-mineral-rights-fast`) — public or
   private, doesn't matter.
3. On the new repo's page, click **"uploading an existing file"** and drag
   in everything from the unzipped folder: `index.html`, `wrangler.toml`,
   `DEPLOYMENT.md`, `robots.txt`, `sitemap.xml`, and the whole `functions/`
   and `assets/` folders (dragging the folders themselves preserves the
   structure). Commit. The `robots.txt` and `sitemap.xml` files need to sit
   at the very root of the deployed site (same level as `index.html`) for
   search engines to find them at sellmineralrightsfast.com/robots.txt.
4. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git** → authorize GitHub → select this repo.
5. Build settings: Framework preset **None**, build command **blank**,
   build output directory `/`. Save and Deploy.
6. You'll get a working `<project>.pages.dev` URL within about a minute —
   test the form there before moving on (email won't work yet until step
   7 below).
7. Project → **Settings → Environment variables**, add:
   - `FROM_EMAIL` = `leads@sellmineralrightsfast.com` (plain variable)
   - `NOTIFY_EMAIL` = `riley@dynastylm.com` (plain variable)
   - `RESEND_API_KEY` = *(the key from Resend, step A5)* — add this one as
     an **encrypted/secret** value, not plain text.
8. Redeploy (Cloudflare usually prompts you after saving env vars, or
   trigger one manually from the Deployments tab).
9. In the Pages project → **Custom domains** → add
   `sellmineralrightsfast.com` (and `www.sellmineralrightsfast.com` if you
   want that too).

### Option 2 — Wrangler CLI (if you're comfortable with a terminal)

```bash
npm install -g wrangler
wrangler login
cd sell-mineral-rights-fast
wrangler pages project create sell-mineral-rights-fast
wrangler pages deploy . --project-name sell-mineral-rights-fast
wrangler pages secret put RESEND_API_KEY --project-name sell-mineral-rights-fast
```

The included `wrangler.toml` already sets `FROM_EMAIL` and `NOTIFY_EMAIL`.
`RESEND_API_KEY` goes in as a secret (the command above prompts you to
paste it in — never put real API keys in `wrangler.toml`). Then add the
custom domain the same way as step B9 above (dashboard → Pages project →
Custom domains).

---

## C. Turn on SMS alerts later (optional, no code changes needed)

The form and email notification work with zero SMS setup — this is purely
additive whenever you're ready:

1. Sign up at [twilio.com](https://www.twilio.com), buy a phone number
   (~$1/month + about a penny per text).
2. From the Twilio console, copy your **Account SID** and **Auth Token**.
3. In the Cloudflare Pages project → **Settings → Environment
   variables**, add these four as **encrypted/secret** values (or via CLI:
   `wrangler pages secret put TWILIO_ACCOUNT_SID`, etc.):
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_FROM_NUMBER` — your new Twilio number, e.g. `+18175551234`
   - `TWILIO_TO_NUMBER` — your cell, `+18178181034`
4. Redeploy (or trigger a new deployment) so the Function picks them up.

The Function checks for all four before attempting SMS — leave them unset
and it just skips that step silently.

---

## D. Test it

1. Visit the live site and submit the form with your own info.
2. Check `riley@dynastylm.com` (and spam folder, the first time) for the
   notification email.
3. If you set up Twilio, confirm the text lands too.

If the email doesn't arrive, check the Pages project's **Functions** logs
(or Real-time Logs) for the `/api/lead` request — the Function returns a
descriptive `emailError` in its response if Resend rejects the request
(usually an unverified domain or a bad API key).

---

## E. Post-launch SEO checklist

The site itself now scores 100/100 on Lighthouse for Performance,
Accessibility, Best Practices, and SEO (structured data, meta tags, sitemap,
proper heading order, image sizing, and color contrast are all handled).
Two things only you can do, once it's live on the real domain:

1. **Google Search Console** — go to
   [search.google.com/search-console](https://search.google.com/search-console),
   add sellmineralrightsfast.com as a property (Cloudflare will show you the
   TXT record to add for verification, same DNS records page as everything
   else), then submit `sitemap.xml` under **Sitemaps**. This is what gets
   the page actually crawled and indexed quickly instead of waiting for
   Google to stumble onto it.
2. **Bing Webmaster Tools** — same idea, at
   [bing.com/webmasters](https://www.bing.com/webmasters). Bing also feeds
   results into several AI assistants' web search, so it's a quick win
   worth not skipping.

Neither of these affects your paid search (Google Ads) traffic — they're
purely about being findable organically over time.

---

## One legal note

The form includes a consent checkbox ("...agree to be contacted by phone,
text, or email... including by automated means") because you'll be
calling and texting numbers people submit — that kind of express consent
is standard practice before outbound calls/texts. I'm not a lawyer and
TCPA/consent requirements can be state- and channel-specific, so it's
worth having your own counsel glance at the exact wording before this
goes live at scale.

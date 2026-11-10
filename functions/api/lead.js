/**
 * Cloudflare Pages Function: POST /api/lead
 *
 * Configure ONE of these environment variables on the Pages project
 * (Settings → Environment variables), then redeploy:
 *
 *   WEB3FORMS_ACCESS_KEY   key from https://web3forms.com (recommended)
 *   FORMSPREE_ENDPOINT     full URL, https://formspree.io/f/xxxxxxxx
 *   LEAD_WEBHOOK_URL       any HTTPS endpoint that accepts a JSON lead
 *   RESEND_API_KEY         plus LEAD_TO_EMAIL and LEAD_FROM_EMAIL
 *                          (from-address must be on a verified domain)
 *
 * No secrets belong in the repository.
 */

const STATES = new Set([
  "Texas",
  "New Mexico",
  "Oklahoma",
  "Colorado",
  "Wyoming",
  "Montana",
  "North Dakota",
  "Other"
]);

function clean(value, max) {
  return String(value == null ? "" : value)
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .trim()
    .slice(0, max);
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function html(title, message, status) {
  const page = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${title}</title>
<link rel="stylesheet" href="/styles.css"></head>
<body>
<main class="wrap prose" style="padding:4rem 0">
<h1>${title}</h1>
<p>${message}</p>
<p><a href="/">Back to the homepage</a> · <a href="tel:+18178181034">(817) 818-1034</a> · <a href="mailto:riley@dynastylm.com">riley@dynastylm.com</a></p>
</main></body></html>`;
  return new Response(page, {
    status,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" }
  });
}

function wantsJson(request, contentType) {
  const accept = request.headers.get("accept") || "";
  return contentType.includes("application/json") || accept.includes("application/json");
}

async function readBody(request) {
  const length = Number(request.headers.get("content-length") || 0);
  if (length > 20000) return { error: "too_large" };
  const contentType = (request.headers.get("content-type") || "").toLowerCase();
  try {
    if (contentType.includes("application/json")) {
      return { contentType, data: await request.json() };
    }
    const form = await request.formData();
    return { contentType, data: Object.fromEntries(form.entries()) };
  } catch (err) {
    return { error: "bad_request", contentType };
  }
}

async function deliver(env, lead) {
  if (env.WEB3FORMS_ACCESS_KEY) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        access_key: env.WEB3FORMS_ACCESS_KEY,
        subject: `Mineral rights offer request — ${lead.name} (${lead.state})`,
        from_name: "Dynasty Mineral Partners website",
        name: lead.name,
        phone: lead.phone,
        email: lead.email || "not provided",
        state: lead.state,
        county: lead.county || "not provided",
        receiving: lead.receiving || "Not sure",
        page: lead.page,
        consent: "Yes"
      })
    });
    return res.ok;
  }

  if (env.FORMSPREE_ENDPOINT) {
    const res = await fetch(env.FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(lead)
    });
    return res.ok;
  }

  if (env.LEAD_WEBHOOK_URL) {
    const res = await fetch(env.LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(lead)
    });
    return res.ok;
  }

  if (env.RESEND_API_KEY && env.LEAD_TO_EMAIL && env.LEAD_FROM_EMAIL) {
    const text = [
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      `Email: ${lead.email || "not provided"}`,
      `State: ${lead.state}`,
      `County: ${lead.county || "not provided"}`,
      `Receiving royalty checks: ${lead.receiving || "Not sure"}`,
      `Consent: Yes`,
      `Page: ${lead.page}`,
      `Submitted: ${lead.submittedAt}`
    ].join("\n");
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        from: env.LEAD_FROM_EMAIL,
        to: [env.LEAD_TO_EMAIL],
        subject: `Mineral rights offer request — ${lead.name} (${lead.state})`,
        text
      })
    });
    return res.ok;
  }

  return null;
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const parsed = await readBody(request);
  const asJson = wantsJson(request, parsed.contentType || "");

  if (parsed.error) {
    return asJson
      ? json({ ok: false, error: parsed.error }, parsed.error === "too_large" ? 413 : 400)
      : html("We couldn’t read that form", "Please call (817) 818-1034 or email riley@dynastylm.com.", 400);
  }

  const data = parsed.data || {};
  if (clean(data.hp_field || data.company_website, 200)) {
    return asJson
      ? json({ ok: true })
      : Response.redirect(new URL("/thanks", request.url), 303);
  }

  const lead = {
    name: clean(data.name, 120),
    phone: clean(data.phone, 40),
    email: clean(data.email, 160),
    state: clean(data.state, 40),
    county: clean(data.county, 80),
    receiving: clean(data.receiving, 40),
    page: clean(data.page, 300),
    consent: data.consent === "Yes" || data.consent === "on" || data.consent === true ? "Yes" : "No",
    submittedAt: new Date().toISOString()
  };

  const digits = lead.phone.replace(/\D/g, "");
  const emailOk = !lead.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  const valid = lead.name.length >= 2 && digits.length >= 10 && digits.length <= 15 && STATES.has(lead.state) && lead.consent === "Yes" && emailOk;

  if (!valid) {
    return asJson
      ? json({ ok: false, error: "validation" }, 400)
      : html("Check the form", "Name, phone, state, and consent are required. Please go back and try again, or call (817) 818-1034.", 400);
  }

  let delivered;
  try {
    delivered = await deliver(env, lead);
  } catch (err) {
    delivered = false;
  }

  if (delivered === null) {
    const message = "This form is not connected to an inbox yet. Call (817) 818-1034 or email riley@dynastylm.com and we will take your information directly.";
    return asJson
      ? json({ ok: false, error: "not_configured" }, 503)
      : html("Call us and we’ll take it from here", message, 503);
  }

  if (!delivered) {
    const message = "We couldn’t send the form. Call (817) 818-1034 or email riley@dynastylm.com.";
    return asJson
      ? json({ ok: false, error: "upstream" }, 502)
      : html("Please call us", message, 502);
  }

  if (asJson) return json({ ok: true });
  return Response.redirect(new URL("/thanks", request.url), 303);
}

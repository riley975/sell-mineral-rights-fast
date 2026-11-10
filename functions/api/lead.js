/**
 * Cloudflare Pages Function: POST /api/lead
 *
 * Text (Quo, formerly OpenPhone). Set QUO_API_KEY as an encrypted
 * Production secret, then redeploy. Optional:
 *   QUO_FROM      defaults to +18178181034 (E.164 or a PN phone-number id)
 *   LEAD_SMS_TO   defaults to +12146499538
 * Current docs: POST https://api.quo.com/v1/messages
 *               Authorization: <api key>   (no Bearer prefix)
 *
 * Email still works, and both can run. The form succeeds if either delivers.
 *   WEB3FORMS_ACCESS_KEY
 *   FORMSPREE_ENDPOINT
 *   LEAD_WEBHOOK_URL
 *   RESEND_API_KEY plus LEAD_TO_EMAIL and LEAD_FROM_EMAIL
 *
 * No secrets belong in the repository.
 */

const STATES = new Set([
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming", "Other"
]);

function clean(value, max) {
  return String(value == null ? "" : value)
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .trim()
    .slice(0, max);
}

function scrub(value, max) {
  return clean(value, max * 4)
    .replace(/<[^>]*>/g, " ")
    .replace(/https?:\/\/\S+/gi, "")
    .replace(/\bwww\.\S+/gi, "")
    .replace(/\b(?:bit\.ly|tinyurl\.com|t\.co)\/\S+/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function pageLabel(value) {
  const raw = clean(value, 300);
  if (!raw) return "unknown";
  try {
    const url = new URL(raw, "https://sellmineralrightsfast.com");
    const host = url.hostname.replace(/^www\./, "");
    if (host !== "sellmineralrightsfast.com") return "other page";
    return (url.pathname || "/").slice(0, 80);
  } catch (err) {
    return "unknown";
  }
}

const recentByIp = new Map();

function memoryLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const recent = (recentByIp.get(ip) || []).filter((time) => now - time < windowMs);
  if (recent.length >= 5) {
    recentByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  recentByIp.set(ip, recent);
  return false;
}

async function tooMany(request) {
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "unknown";
  if (typeof caches === "undefined" || !caches.default) return memoryLimited(ip);
  const key = new Request("https://lead-rate.invalid/" + encodeURIComponent(ip.split(",")[0].trim()));
  const hit = await caches.default.match(key);
  const count = hit ? Number((await hit.json()).count) || 0 : 0;
  if (count >= 5) return true;
  await caches.default.put(
    key,
    new Response(JSON.stringify({ count: count + 1 }), {
      headers: { "cache-control": "public, max-age=600", "content-type": "application/json" }
    })
  );
  return false;
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

function producingLabel(lead) {
  const explicit = lead.producing;
  if (explicit) return explicit;
  if (lead.receiving === "Yes") return "Yes, receiving royalty checks";
  if (lead.receiving === "No") return "No";
  return "Not sure";
}

function smsText(lead) {
  const lines = [
    "New mineral offer request",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "not given"}`,
    `State: ${lead.state}`,
    `County: ${lead.county || "not given"}`,
    `Acres: ${lead.acres || "not given"}`,
    `Producing: ${producingLabel(lead)}`,
    `Message: ${lead.message || "none"}`,
    `Page: ${lead.page}`
  ];
  let text = lines.join("\n");
  if (text.length > 600) text = text.slice(0, 597).trimEnd() + "...";
  return text;
}

async function logUpstream(label, error) {
  if (error instanceof Response) {
    let body = "";
    try {
      body = (await error.text()).replace(/\s+/g, " ").trim().slice(0, 300);
    } catch (err) {
      body = err && err.message ? err.message : "unreadable body";
    }
    console.error(label + " failed: HTTP " + error.status + " " + body);
    return;
  }
  const message = error && error.message ? error.message : String(error);
  console.error(label + " failed: " + message);
}

async function postSms(url, env, lead) {
  const from = env.QUO_FROM || "+18178181034";
  const to = env.LEAD_SMS_TO || "+12146499538";
  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: env.QUO_API_KEY,
      "content-type": "application/json",
      accept: "application/json",
      "user-agent": "DynastyMineralPartners-LeadForm/1.0"
    },
    body: JSON.stringify({
      content: smsText(lead),
      from,
      to: [to]
    })
  });
}

async function deliverSms(env, lead) {
  if (!env.QUO_API_KEY) return null;
  const urls = ["https://api.quo.com/v1/messages", "https://api.openphone.com/v1/messages"];
  for (let i = 0; i < urls.length; i++) {
    try {
      const res = await postSms(urls[i], env, lead);
      if (res.ok) return true;
      await logUpstream("Quo SMS " + urls[i], res);
    } catch (err) {
      await logUpstream("Quo SMS " + urls[i], err);
    }
  }
  return false;
}

async function deliverEmail(env, lead) {
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

  const resendTo = env.LEAD_TO_EMAIL || env.NOTIFY_EMAIL;
  const resendFrom = env.LEAD_FROM_EMAIL || env.FROM_EMAIL;
  if (env.RESEND_API_KEY && resendTo && resendFrom) {
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
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${env.RESEND_API_KEY}`,
          "content-type": "application/json"
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [resendTo],
          subject: `Mineral rights offer request — ${lead.name} (${lead.state})`,
          text
        })
      });
      if (!res.ok) {
        await logUpstream("Resend", res);
        return false;
      }
      return true;
    } catch (err) {
      await logUpstream("Resend", err);
      return false;
    }
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
      : html("We could not read that form", "Please call (817) 818-1034 or email riley@dynastylm.com.", 400);
  }

  const data = parsed.data || {};
  if (clean(data.hp_field || data.company_website, 200)) {
    return asJson
      ? json({ ok: true })
      : Response.redirect(new URL("/thanks", request.url), 303);
  }

  const phoneRaw = clean(data.phone, 40);
  const lead = {
    name: scrub(data.name, 80),
    phone: scrub(data.phone, 40),
    email: scrub(data.email, 80),
    state: clean(data.state, 40),
    county: scrub(data.county, 60),
    receiving: clean(data.receiving, 40),
    acres: scrub(data.acres || data.approximateAcres, 40),
    producing: scrub(data.producing, 40),
    message: scrub(data.message || data.note, 180),
    page: pageLabel(data.page),
    consent: data.consent === "Yes" || data.consent === "on" || data.consent === true ? "Yes" : "No",
    submittedAt: new Date().toISOString()
  };

  const digits = phoneRaw.replace(/\D/g, "");
  const emailOk = !lead.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  const valid = lead.name.length >= 2 && digits.length >= 10 && digits.length <= 15 && STATES.has(lead.state) && lead.consent === "Yes" && emailOk;

  if (!valid) {
    return asJson
      ? json({ ok: false, error: "validation" }, 400)
      : html("Check the form", "Name, phone, state, and consent are required. Please go back and try again, or call (817) 818-1034.", 400);
  }

  if (await tooMany(request)) {
    const message = "Please call (817) 818-1034 or email riley@dynastylm.com.";
    return asJson
      ? json({ ok: false, error: "rate_limited" }, 429)
      : html("Please call us", message, 429);
  }

  let emailResult = null;
  let smsResult = null;
  try {
    emailResult = await deliverEmail(env, lead);
  } catch (err) {
    emailResult = false;
  }
  try {
    smsResult = await deliverSms(env, lead);
  } catch (err) {
    smsResult = false;
  }
  const attempts = [emailResult, smsResult].filter((result) => result !== null);
  const delivered = attempts.length === 0 ? null : attempts.some(Boolean);

  if (delivered === null) {
    const message = "This form is not connected to an inbox yet. Call (817) 818-1034 or email riley@dynastylm.com and we will take your information directly.";
    return asJson
      ? json({ ok: false, error: "not_configured" }, 503)
      : html("Call us and we will take it from here", message, 503);
  }

  if (!delivered) {
    const message = "We could not send the form. Call (817) 818-1034 or email riley@dynastylm.com.";
    return asJson
      ? json({ ok: false, error: "upstream" }, 502)
      : html("Please call us", message, 502);
  }

  if (asJson) return json({ ok: true });
  return Response.redirect(new URL("/thanks", request.url), 303);
}

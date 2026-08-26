// Cloudflare Pages Function
// Handles POST /api/lead — receives the landing page form submission,
// emails it via the Resend API, and (if configured) sends an SMS alert via
// Twilio.
//
// Why Resend instead of Cloudflare's own email binding: Cloudflare's native
// "send_email" binding is a Workers-only feature — declaring it in a Pages
// project's wrangler.toml fails the build outright ("Configuration file for
// Pages projects does not support 'send_email'"). Resend is a plain REST API
// call, so it works from a Pages Function with zero special config.
//
// Required setup (see DEPLOYMENT.md):
//  - RESEND_API_KEY env var (set as a SECRET, not a plain var) — from a free
//    Resend account with FROM_EMAIL's domain verified.
//  - FROM_EMAIL env var: sender address on your verified Resend domain
//    (e.g. leads@sellmineralrightsfast.com).
//  - NOTIFY_EMAIL env var: where the lead notification should be sent
//    (e.g. riley@dynastylm.com).
//
// Optional (SMS alerts) — only fires if ALL four are set:
//  - TWILIO_ACCOUNT_SID
//  - TWILIO_AUTH_TOKEN
//  - TWILIO_FROM_NUMBER   (your Twilio number, e.g. +18175551234)
//  - TWILIO_TO_NUMBER     (your cell, e.g. +18178181034)

function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Honeypot — if the hidden field got filled, it's almost certainly a bot.
  // Return a fake success so the bot doesn't learn its submission was rejected.
  if (data.hp_field) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Basic required-field validation.
  const required = ['name', 'phone', 'state'];
  for (const field of required) {
    if (!data[field] || !String(data[field]).trim()) {
      return new Response(JSON.stringify({ ok: false, error: `Missing field: ${field}` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  const fields = {
    name: data.name,
    phone: data.phone,
    email: data.email || '(not provided)',
    state: data.state,
    county: data.county || '(not provided)',
    receiving: data.receiving || '(not sure)',
    message: data.message || '(none)',
    consent: data.consent || 'No',
    page: data.page || '(unknown)',
    submittedAt: data.submittedAt || new Date().toISOString(),
  };

  const textBody =
    `New lead from SellMineralRightsFast.com\n\n` +
    `Name: ${fields.name}\n` +
    `Phone: ${fields.phone}\n` +
    `Email: ${fields.email}\n` +
    `State: ${fields.state}\n` +
    `County/Parish: ${fields.county}\n` +
    `Receiving royalty checks: ${fields.receiving}\n` +
    `Message: ${fields.message}\n` +
    `Contact consent given: ${fields.consent}\n` +
    `Submitted: ${fields.submittedAt}\n` +
    `Source page: ${fields.page}\n`;

  const htmlBody = `
    <h2>New lead from SellMineralRightsFast.com</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(fields.name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(fields.phone)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(fields.email)}</td></tr>
      <tr><td><strong>State</strong></td><td>${escapeHtml(fields.state)}</td></tr>
      <tr><td><strong>County/Parish</strong></td><td>${escapeHtml(fields.county)}</td></tr>
      <tr><td><strong>Receiving royalty checks</strong></td><td>${escapeHtml(fields.receiving)}</td></tr>
      <tr><td><strong>Message</strong></td><td>${escapeHtml(fields.message)}</td></tr>
      <tr><td><strong>Contact consent given</strong></td><td>${escapeHtml(fields.consent)}</td></tr>
      <tr><td><strong>Submitted</strong></td><td>${escapeHtml(fields.submittedAt)}</td></tr>
      <tr><td><strong>Source page</strong></td><td>${escapeHtml(fields.page)}</td></tr>
    </table>
  `;

  let emailOk = true;
  let emailError = null;

  try {
    if (env.RESEND_API_KEY && env.FROM_EMAIL && env.NOTIFY_EMAIL) {
      const resp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: env.FROM_EMAIL,
          to: [env.NOTIFY_EMAIL],
          subject: `New mineral rights lead: ${fields.name} (${fields.state})`,
          text: textBody,
          html: htmlBody,
        }),
      });
      if (!resp.ok) {
        emailOk = false;
        emailError = `Resend API returned ${resp.status}: ${await resp.text()}`;
      }
    } else {
      emailOk = false;
      emailError = 'RESEND_API_KEY / FROM_EMAIL / NOTIFY_EMAIL not configured';
    }
  } catch (err) {
    emailOk = false;
    emailError = err.message || String(err);
  }

  // Optional SMS alert via Twilio — only attempted if all four env vars are set.
  let smsOk = null;
  if (env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN && env.TWILIO_FROM_NUMBER && env.TWILIO_TO_NUMBER) {
    try {
      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`;
      const body = new URLSearchParams({
        To: env.TWILIO_TO_NUMBER,
        From: env.TWILIO_FROM_NUMBER,
        Body: `New mineral rights lead: ${fields.name}, ${fields.phone}, ${fields.state}${fields.county !== '(not provided)' ? ' (' + fields.county + ')' : ''}. Check email for details.`,
      });
      const resp = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });
      smsOk = resp.ok;
    } catch (err) {
      smsOk = false;
    }
  }

  // We only fail the request to the visitor if BOTH notification paths failed
  // (or email failed and SMS wasn't configured) — the lead data itself is
  // still valid and worth capturing even if a notification hiccups.
  const notifiedSomehow = emailOk || smsOk === true;

  return new Response(
    JSON.stringify({
      ok: notifiedSomehow,
      emailOk,
      emailError: emailOk ? undefined : emailError,
      smsOk,
    }),
    {
      status: notifiedSomehow ? 200 : 500,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

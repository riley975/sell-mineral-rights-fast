import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pages, homeFaqs, steps, basins, buyTypes, reasons } from "./content.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://sellmineralrightsfast.com";
const PHONE = "(817) 818-1034";
const TEL = "+18178181034";
const EMAIL = "riley@dynastylm.com";
const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming", "Other"
];

const NAV = [
  ["/how-it-works", "How It Works"],
  ["/mineral-rights-value", "What It’s Worth"],
  ["/inherited-mineral-rights", "Inherited Minerals"],
  ["/#where-we-buy", "Where We Buy"],
  ["/faq", "FAQ"]
];

const BUY_LINKS = [
  ["/sell-mineral-rights-texas", "Sell mineral rights in Texas"],
  ["/sell-mineral-rights-new-mexico", "Sell mineral rights in New Mexico"],
  ["/sell-mineral-rights-oklahoma", "Sell mineral rights in Oklahoma"],
  ["/sell-mineral-rights-colorado", "Sell mineral rights in Colorado"],
  ["/sell-mineral-rights-wyoming", "Sell mineral rights in Wyoming"],
  ["/sell-mineral-rights-montana", "Sell mineral rights in Montana"],
  ["/sell-mineral-rights-north-dakota", "Sell mineral rights in North Dakota"],
  ["/sell-mineral-rights-permian-basin", "Permian Basin mineral rights"],
  ["/sell-mineral-rights-louisiana", "Sell mineral rights in Louisiana"]
];

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

function icon(name) {
  const paths = {
    check: '<circle cx="12" cy="12" r="8"/><path d="M8.5 12.2 10.8 14.5 15.5 9.5"/>',
    doc: '<path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z"/><path d="M14 3.5V8h4.5M8 12.5h8M8 16h5.5"/>',
    people: '<circle cx="9" cy="9" r="2.4"/><circle cx="16" cy="10" r="2"/><path d="M4.8 18.5c.7-2.4 2.4-3.6 4.2-3.6s3.5 1.2 4.2 3.6M13 14.2c1.3-.5 2.6-.4 3.6.2 1 .7 1.6 1.8 1.9 3.1"/>',
    shield: '<path d="M12 3.5 19 6v5.8c0 4-2.7 6.9-7 8.7-4.3-1.8-7-4.7-7-8.7V6Z"/><path d="m8.8 12.1 2.1 2.1 4.3-4.6"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
}

function logo(eager) {
  const loading = eager ? "" : ' loading="lazy"';
  return `<picture><source type="image/webp" srcset="/logo-dynasty.webp 1x, /logo-dynasty@2x.webp 2x"><img src="/logo-dynasty.png" srcset="/logo-dynasty.png 1x, /logo-dynasty@2x.png 2x" alt="Dynasty Mineral Partners" width="149" height="52"${loading}></picture>`;
}

function header(activePath, offerHref) {
  const links = NAV.map(([href, label]) => {
    const current = href === activePath ? ' aria-current="page"' : "";
    return `<li><a href="${href}"${current}>${label}</a></li>`;
  }).join("");
  const offer = offerHref || "#offer";
  return `<header class="site-header">
  <div class="header-inner">
    <a class="logo" href="/">${logo(true)}</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="Open menu">Menu</button>
    <ul class="nav-links" id="nav-menu">${links}</ul>
    <a class="nav-phone" href="tel:${TEL}">${PHONE}</a>
    <a class="nav-cta" href="${offer}">Request an offer</a>
  </div>
</header>`;
}

function footer(offerHref) {
  const buy = BUY_LINKS.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("");
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      ${logo(false)}
      <p>Dynasty Mineral Partners is a DBA of Dynasty Land &amp; Minerals, LLC. We buy oil and gas mineral interests, royalty interests, and overriding royalties.</p>
    </div>
    <div>
      <p class="footer-title">Where we buy</p>
      <ul>${buy}</ul>
    </div>
    <nav aria-label="Resources">
      <p class="footer-title">Resources</p>
      <ul>
        <li><a href="/how-it-works">How it works</a></li>
        <li><a href="/mineral-rights-value">What it’s worth</a></li>
        <li><a href="/inherited-mineral-rights">Inherited minerals</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/privacy">Privacy policy</a></li>
      </ul>
    </nav>
    <div>
      <p class="footer-title">Contact</p>
      <ul>
        <li><a href="tel:${TEL}">${PHONE}</a></li>
        <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-base">
    <p>Dynasty Mineral Partners is a mineral and royalty interest acquisition company. We are not attorneys or tax advisors, and nothing on this website is legal, tax, or financial advice.</p>
    <p>&copy; 2026 Dynasty Land &amp; Minerals, LLC</p>
  </div>
</footer>
<div class="callbar">
  <a class="call" href="tel:${TEL}">Call ${PHONE}</a>
  <a class="offer" href="${offerHref || "#offer"}">Request an offer</a>
</div>`;
}

function formCard(selected) {
  const options = [
    selected ? "" : '<option value="" selected disabled>Select a state</option>',
    ...STATES.map((state) => `<option${state === selected ? " selected" : ""}>${esc(state)}</option>`)
  ].join("");
  return `<div class="form-card" id="offer">
  <div id="formThanks" class="form-thanks" hidden>
    <h2 tabindex="-1">We have your request.</h2>
    <p>Someone from Dynasty Mineral Partners will contact you about a cash offer. You do not have to accept it. To talk now, call <a href="tel:${TEL}">${PHONE}</a>.</p>
  </div>
  <form id="leadForm" method="post" action="/api/lead" novalidate>
    <p class="kicker">No cost. No obligation.</p>
    <h2>Request a cash offer</h2>
    <p class="takes">About a minute. No fee to request an offer.</p>
    <div id="formAlert" class="form-alert" role="alert"></div>
    <div class="hp" aria-hidden="true">
      <label for="hp_field">Company website</label>
      <input type="text" id="hp_field" name="hp_field" tabindex="-1" autocomplete="off">
    </div>
    <div class="field">
      <label for="name">Full name <span class="req">*</span></label>
      <input type="text" id="name" name="name" required autocomplete="name" aria-describedby="name-error">
      <p class="field-error" id="name-error"></p>
    </div>
    <div class="field">
      <label for="phone">Phone <span class="req">*</span></label>
      <input type="tel" id="phone" name="phone" required autocomplete="tel" inputmode="tel" aria-describedby="phone-error">
      <p class="field-error" id="phone-error"></p>
    </div>
    <div class="field">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" autocomplete="email" aria-describedby="email-error">
      <p class="field-error" id="email-error"></p>
    </div>
    <div class="row-2">
      <div class="field">
        <label for="state">State <span class="req">*</span></label>
        <select id="state" name="state" required aria-describedby="state-error">${options}</select>
        <p class="field-error" id="state-error"></p>
      </div>
      <div class="field">
        <label for="county">County</label>
        <input type="text" id="county" name="county" autocomplete="address-level2">
      </div>
    </div>
    <div class="field">
      <label for="receiving">Receiving royalty checks?</label>
      <select id="receiving" name="receiving">
        <option value="Not sure" selected>Not sure</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    <label class="consent">
      <input type="checkbox" id="consent" name="consent" required aria-describedby="consent-error">
      <span>By submitting, I agree to be contacted by Dynasty Mineral Partners via phone, text, or email about my mineral rights, including by automated means. Message/data rates may apply. Consent is not a condition of any offer. See our <a href="/privacy">Privacy Policy</a>.</span>
    </label>
    <p class="field-error" id="consent-error"></p>
    <button type="submit" class="btn btn-block" id="submitBtn">Request a cash offer</button>
    <p class="form-note">No fee. No obligation to sell.</p>
  </form>
</div>`;
}

function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Dynasty Mineral Partners",
    legalName: "Dynasty Land & Minerals, LLC",
    alternateName: "Dynasty Land & Minerals, LLC",
    url: SITE + "/",
    logo: SITE + "/logo-dynasty.png",
    image: SITE + "/og-image.png",
    telephone: TEL,
    email: EMAIL,
    areaServed: { "@type": "Country", name: "United States" },
    description: "Direct buyer of oil and gas mineral interests, royalty interests, and overriding royalties in producing areas across the United States, including the Permian, Anadarko, DJ Basin, Powder River Basin, and Bakken."
  };
}

function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a.replace(/<[^>]+>/g, "") }
    }))
  };
}

function crumbSchema(crumb, pagePath) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: crumb, item: SITE + pagePath }
    ]
  };
}

function analytics() {
  return `<script>
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-SCQXCMMNTG');
!function(f){if(f.fbq)return;var n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];}(window);
fbq('init', '894157343546096');
fbq('track', 'PageView');
function loadTrackers(){if(window.__trk)return;window.__trk=1;
var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id=G-SCQXCMMNTG';document.head.appendChild(g);
var s=document.createElement('script');s.async=true;s.src='https://connect.facebook.net/en_US/fbevents.js';document.head.appendChild(s);}
addEventListener('pointerdown', loadTrackers, {once:true});
addEventListener('keydown', loadTrackers, {once:true});
addEventListener('load', function(){setTimeout(loadTrackers, 4000);});
</script>
<noscript><img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=894157343546096&ev=PageView&noscript=1"></noscript>`;
}

function head({ title, description, path: pagePath, robots, schemas, noindex }) {
  const canonical = SITE + pagePath;
  const robot = robots || (noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
  const blocks = (schemas || []).map(jsonLd).join("\n");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${robot}">
<meta name="theme-color" content="#171717">
<link rel="canonical" href="${canonical}">
<link rel="preload" href="/fonts/source-sans-3.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/montserrat.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Dynasty Mineral Partners">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${SITE}/og-image.png">
${blocks}
${analytics()}
</head>`;
}

function scripts() {
  return `<script src="/form-config.js" defer></script>
<script src="/site.js" defer></script>`;
}

function faqBlock(items) {
  return `<div class="faq">${items
    .map(
      (item) => `<details>
<summary>${esc(item.q)}</summary>
<p>${esc(item.a)}</p>
</details>`
    )
    .join("")}</div>`;
}

function homePage() {
  const stepHtml = steps
    .map(
      ([title, text], i) => `<li>
<span class="step-num">${i + 1}</span>
<h3>${esc(title)}</h3>
<p>${esc(text)}</p>
</li>`
    )
    .join("");

  const basinHtml = basins
    .map((basin) => {
      const links = basin.links.map(([href, label]) => `<a href="${href}">${label}</a>`).join(" · ");
      return `<article class="basin">
<p class="meta">${esc(basin.meta)}</p>
<h3>${esc(basin.title)}</h3>
<p>${esc(basin.text)}</p>
<p class="more">${links}</p>
</article>`;
    })
    .join("");

  const types = buyTypes
    .map(([title, text]) => `<article><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`)
    .join("");

  const why = reasons
    .map(([title, text]) => `<article><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`)
    .join("");

  const html = `${head({
    title: "Sell Mineral Rights Fast | Dynasty Mineral Partners",
    description: "We buy oil and gas minerals, royalties, and overriding royalties across the United States, including the Permian, Anadarko, DJ, Powder River, and Bakken.",
    path: "/",
    schemas: [orgSchema(), faqSchema(homeFaqs)]
  })}
<body>
<a class="skip" href="#main">Skip to content</a>
${header("/")}
<main id="main">
  <section class="hero">
    <div class="wrap hero-grid">
      <p class="kicker">Mineral and royalty acquisitions</p>
      <h1>Sell your mineral rights.</h1>
      ${formCard("")}
      <div class="hero-rest">
        <p class="lede">Dynasty Mineral Partners purchases oil and gas mineral interests, royalty interests, and overriding royalties directly from the owner. Our acquisitions include the Permian Basin, the Anadarko Basin, the Denver-Julesburg Basin, the Powder River Basin, and the Bakken, along with other producing areas in the United States.</p>
        <p class="lede">There is no fee for a written offer, and no obligation to accept one. Inherited interests and fractional shares are part of what we buy. If you accept, we order title and prepare the closing documents.</p>
        <p class="hero-phone">Call <a href="tel:${TEL}">${PHONE}</a></p>
      </div>
    </div>
  </section>
  <section class="section" id="how-it-works">
    <div class="wrap">
      <div class="section-head">
        <h2>How an offer works</h2>
        <p>The purchase is made with us, not through a listing. <a href="/how-it-works">The full sequence is here</a>.</p>
      </div>
      <ol class="steps">${stepHtml}</ol>
    </div>
  </section>
  <section class="section" id="where-we-buy">
    <div class="wrap">
      <div class="section-head">
        <h2>Where we buy</h2>
        <p>We buy mineral and royalty interests in oil and gas fields across the United States. The basins below are where a large share of our acquisitions are made.</p>
      </div>
      <div class="basins">${basinHtml}</div>
    </div>
  </section>
  <section class="section section-sand" id="what-we-buy">
    <div class="wrap">
      <div class="section-head">
        <h2>What we buy</h2>
        <p>Mineral interests, royalty interests, and overriding royalty interests.</p>
      </div>
      <div class="buy-grid">${types}</div>
    </div>
  </section>
  <section class="section" id="why-dynasty">
    <div class="wrap">
      <div class="section-head">
        <h2>Working with us</h2>
        <p>You are dealing with the company that will own the interest.</p>
      </div>
      <div class="why">${why}</div>
    </div>
  </section>
  <section class="section section-sand" id="faq">
    <div class="wrap">
      <div class="section-head">
        <h2>Common questions</h2>
        <p><a href="/faq">All frequently asked questions</a></p>
      </div>
      ${faqBlock(homeFaqs)}
    </div>
  </section>
  <section class="cta-band">
    <div class="wrap">
      <h2>Request a written offer.</h2>
      <p>The state, the county, and whether you receive royalty checks are enough to begin.</p>
      <div class="cta-actions">
        <a class="btn" href="#offer">Request a cash offer</a>
        <a class="phone" href="tel:${TEL}">or call ${PHONE}</a>
      </div>
    </div>
  </section>
</main>
${footer()}
${scripts()}
</body>
</html>
`;
  return html;
}

function faqsIn(html) {
  const items = [];
  const re = /<summary>([\s\S]*?)<\/summary>\s*<p>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = re.exec(html))) {
    const text = (value) => value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    items.push({ q: text(match[1]), a: text(match[2]) });
  }
  return items;
}

function interior(page) {
  const schemas = [crumbSchema(page.crumb, page.path)];
  const schemaFaqs = page.faqs || faqsIn(page.article);
  if (schemaFaqs.length) schemas.push(faqSchema(schemaFaqs));
  const related = page.related
    ? `<h2>Related</h2><ul class="related">${page.related
        .map(([href, label]) => `<li><a href="${href}">${esc(label)}</a></li>`)
        .join("")}</ul>`
    : "";
  const extraFaq = page.faqs
    ? `<h2>${esc(page.faqHeading || "Common questions")}</h2>${faqBlock(page.faqs)}`
    : "";
  return `${head({
    title: page.title,
    description: page.description,
    path: page.path,
    schemas
  })}
<body>
<a class="skip" href="#main">Skip to content</a>
${header(page.path)}
<main id="main" class="wrap page-layout">
  <header class="page-intro">
    <nav class="crumbs" aria-label="Breadcrumb"><ol>
      <li><a href="/">Home</a></li>
      <li aria-current="page">${esc(page.crumb)}</li>
    </ol></nav>
    <h1>${esc(page.h1)}</h1>
    <p class="lede">${esc(page.lede)}</p>
  </header>
  <aside class="page-form">${formCard(page.state || "")}</aside>
  <article class="prose">
    ${page.article}
    ${extraFaq}
    ${related}
  </article>
</main>
${footer()}
${scripts()}
</body>
</html>
`;
}

function simplePage({ title, description, path: pagePath, h1, body }) {
  return `${head({ title, description, path: pagePath, noindex: true })}
<body>
<a class="skip" href="#main">Skip to content</a>
${header("", "/#offer")}
<main id="main" class="wrap not-found">
  <h1>${h1}</h1>
  ${body}
</main>
${footer("/#offer")}
${scripts()}
</body>
</html>
`;
}

const home = homePage();
fs.writeFileSync(path.join(root, "index.html"), home);
for (const page of pages) {
  fs.writeFileSync(path.join(root, page.file), interior(page));
}

fs.writeFileSync(
  path.join(root, "thanks.html"),
  simplePage({
    title: "Request received | Dynasty Mineral Partners",
    description: "We received your mineral-rights offer request.",
    path: "/thanks",
    h1: "We have your request.",
    body: `<p>Someone from Dynasty Mineral Partners will contact you about a cash offer. You do not have to accept it.</p>
<p>To talk now, call <a href="tel:${TEL}">${PHONE}</a> or email <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
<p><a href="/">Return to the homepage</a></p>`
  })
);

fs.writeFileSync(
  path.join(root, "404.html"),
  simplePage({
    title: "Page not found | Dynasty Mineral Partners",
    description: "That page is not on SellMineralRightsFast.com.",
    path: "/404",
    h1: "That page is not here.",
    body: `<p>The address may have changed. You can go back to the homepage or call us about a mineral interest.</p>
<p><a class="btn" href="/">Back to the homepage</a></p>
<p><a href="tel:${TEL}">${PHONE}</a></p>`
  })
);

const urls = ["/", ...pages.map((page) => page.path)];
const today = "2026-11-10";
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${SITE}${url === "/" ? "/" : url}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
console.log(`Wrote ${urls.length} indexable pages plus thanks and 404.`);

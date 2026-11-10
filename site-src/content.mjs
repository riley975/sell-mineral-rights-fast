/** Page copy. Edit here, then run `node site-src/build.mjs`. */

export const homeFaqs = [
  {
    q: "Is there a fee to request an offer?",
    a: "No. There is no fee to tell us about an interest or to receive a written offer. You do not have to accept it. We are the buyer, so there is no broker fee."
  },
  {
    q: "Do you buy small, fractional, or inherited interests?",
    a: "Yes. Inherited minerals, family shares, and fractional interests are part of what we buy. You do not need a large acreage position to request an offer."
  },
  {
    q: "Do I have to sell all of my mineral rights?",
    a: "No. Many owners sell part of a mineral or royalty interest and keep the rest. The offer will say exactly what would transfer."
  },
  {
    q: "Where do you buy?",
    a: "We buy oil and gas mineral interests, royalties, and overriding royalties in producing areas across the United States. A large share of our acquisitions are in the Permian Basin of Texas and New Mexico, the Red Fork and Cherokee in Oklahoma’s Anadarko Basin, the DJ Basin in Weld County, Colorado, the Powder River Basin in Converse County, Wyoming, and the Bakken in Montana and North Dakota."
  },
  {
    q: "How long does closing take?",
    a: "After you accept a written offer, most closings finish within a few weeks. Title work in the county usually sets the pace. We coordinate the title work and the deed. You decide whether to move ahead."
  }
];

export const steps = [
  ["Tell us about the interest", "Call or use the form. We need the state, the county, and whether royalty checks are being paid. A check stub, division order, or deed lets us identify the wells sooner. None of those are required to start."],
  ["We prepare a written offer", "We review production, the lease, and nearby drilling, then send a written offer, usually within a few business days. You may review it with your family, your attorney, or your tax advisor. Acceptance is your decision."],
  ["Closing", "If you accept, we order title and prepare the deed. Most closings are completed within a few weeks. The county’s title work sets the schedule. Payment is made when closing is finished."]
];

export const basins = [
  {
    meta: "Texas and New Mexico",
    title: "Permian Basin",
    text: "Midland Basin and Delaware Basin. Producing wells, permits, drilled but uncompleted wells, and undeveloped locations.",
    links: [
      ["/sell-mineral-rights-permian-basin", "Permian Basin"],
      ["/sell-mineral-rights-texas", "Texas"],
      ["/sell-mineral-rights-new-mexico", "New Mexico"]
    ]
  },
  {
    meta: "Oklahoma",
    title: "Red Fork and Cherokee",
    text: "Anadarko Basin minerals, royalties, and overrides. Inherited and fractional interests are included.",
    links: [["/sell-mineral-rights-oklahoma", "Oklahoma"]]
  },
  {
    meta: "Colorado",
    title: "DJ Basin",
    text: "Denver-Julesburg Basin, with a focus on Weld County. Producing royalties and undeveloped interests.",
    links: [["/sell-mineral-rights-colorado", "Colorado"]]
  },
  {
    meta: "Wyoming",
    title: "Powder River Basin",
    text: "Converse County is the core of our Powder River work. We also purchase interests in other Powder River counties.",
    links: [["/sell-mineral-rights-wyoming", "Wyoming"]]
  },
  {
    meta: "Montana and North Dakota",
    title: "Bakken",
    text: "Bakken mineral and royalty interests in eastern Montana and western North Dakota.",
    links: [
      ["/sell-mineral-rights-montana", "Montana"],
      ["/sell-mineral-rights-north-dakota", "North Dakota"]
    ]
  },
  {
    meta: "United States",
    title: "Any oil and gas area",
    text: "We also purchase minerals and royalties in other U.S. basins, including the Haynesville, Eagle Ford, Barnett, and San Juan.",
    links: [["/#offer", "Request an offer"]]
  }
];

export const buyTypes = [
  ["Producing interests", "These are proved developed producing properties. The wells are on production, and the owner is often receiving a royalty check. We price them from the income, the decline, and the lease terms."],
  ["Permits and drilled wells", "A permit may be on file, or the well may be drilled and waiting on completion. We underwrite those interests from the expected well, not from a check that has not started."],
  ["Undeveloped locations", "Proved undeveloped locations are not producing yet. Value depends on where the acreage sits and what an operator can still drill there."],
  ["Royalties and overrides", "We buy mineral interests, leasehold royalties, and overriding royalty interests. An override is carved from a lease and generally ends when that lease ends."],
  ["Inherited and fractional shares", "Many of the interests we buy were inherited and are owned in fractions. One heir may sell a share without the other owners selling theirs."]
];

export const reasons = [
  ["A direct purchase", "We buy for our own account. The interest is not placed on a listing, and there is no broker commission in the offer."],
  ["A written offer", "The offer is in writing. There is no charge to receive it, and declining it ends the matter. Tax treatment of a sale is a question for your own advisor."],
  ["Title and the deed", "If you accept, we order title and prepare the conveyance. Your own attorney may review the documents before you sign."],
  ["How to reach us", "Dynasty Mineral Partners is a DBA of Dynasty Land & Minerals, LLC. Call (817) 818-1034 or email riley@dynastylm.com."]
];

const disclaimer = `<p class="legal-note">Dynasty Mineral Partners is a mineral and royalty interest acquisition company. We are not attorneys or tax advisors, and nothing on this website is legal, tax, or financial advice.</p>`;

const anywhere = ``;

export const pages = [
  {
    file: "how-it-works.html",
    path: "/how-it-works",
    title: "How to Sell Mineral Rights | Dynasty Mineral Partners",
    description: "How a mineral-rights sale works with a direct buyer: what we ask, how an offer is prepared, and who handles title and closing. No fee and no obligation.",
    crumb: "How It Works",
    h1: "How selling mineral rights works",
    lede: "You deal directly with the buyer, from the first call through payment.",
    state: "",
    faqs: [
      { q: "Do I need paperwork before I contact you?", a: "No. The state, the county, and what you know about the interest are enough to start. Check stubs, division orders, leases, and deeds make the review faster when you have them." },
      { q: "Can I sell only part of my interest?", a: "Yes. Some owners sell a portion and keep the rest. The offer describes what would transfer." },
      { q: "Who pays for title work?", a: "If you accept an offer, we order the title work and prepare the closing documents as part of the purchase. There is no separate fee for the offer." }
    ],
    article: `
<h2>1. Tell us what you own</h2>
<p>Call <a href="tel:+18178181034">(817) 818-1034</a> or use the form. We will ask where the minerals are, whether you receive royalty checks, and how you came to own the interest. Inherited, small, and fractional shares are included.</p>
<p>A check stub, division order, lease, or deed is useful. You do not need any of them to start.</p>
<h2>2. We review the interest</h2>
<p>There is no single price per acre. We look at the wells, production, the lease, your decimal, and nearby permits or drilling. Producing interests, near-term interests, and undeveloped locations are priced differently because the risk is different.</p>
<p>Much of our work is in the Permian Basin, the Red Fork and Cherokee of the Anadarko Basin, the DJ Basin in Weld County, the Powder River Basin in Converse County, and the Bakken. We also purchase interests in other producing areas of the United States.</p>
<h2>3. You receive a written offer</h2>
<p>We send a written offer, usually within a few business days of having enough information. You can review it with your family, an attorney, or a tax advisor. You do not have to accept it.</p>
<div class="callout"><p>You can sell all of an interest or only part of it.</p></div>
<h2>4. Title and closing</h2>
<p>If you accept, we order title and prepare the closing documents. That is usually a mineral deed or a royalty deed, depending on what you own. Most closings finish within a few weeks. County title work sets the timeline.</p>
<p>We are not your attorney. Have your own lawyer review the deed before you sign if you want that review.</p>
<h2>5. You are paid</h2>
<p>When the deed is signed and closing is complete, you are paid. The operator is notified so later royalties follow the new owner. If you kept a portion, that portion stays in your name.</p>
<h2>What it costs</h2>
<p>Nothing, to find out. There is no fee for an offer and no broker commission. A sale can have tax consequences that depend on your basis and how you acquired the interest. That is a question for your tax advisor.</p>
${disclaimer}`
  },
  {
    file: "mineral-rights-value.html",
    path: "/mineral-rights-value",
    title: "What Are Mineral Rights Worth? | Dynasty Mineral Partners",
    description: "What changes the value of an oil and gas mineral or royalty interest: income, decline, the lease, and nearby drilling. How to request a written offer.",
    crumb: "What It’s Worth",
    h1: "What mineral rights are worth",
    lede: "Price follows the wells, the lease, and your share of them. Two interests in the same county can be far apart.",
    state: "",
    faqs: [
      { q: "Can you quote a price per acre?", a: "Not without looking at the interest. Two owners in the same county can be far apart because of production, lease terms, and what is left to drill." },
      { q: "Does a royalty check show the value?", a: "It is the starting point for a producing interest. Decline, deductions, remaining locations, and the lease also change what a buyer will pay." },
      { q: "Is an offer an appraisal?", a: "No. A cash offer is the price we will pay to buy the interest. It is not an appraisal, a fairness opinion, or tax advice." }
    ],
    article: `
<h2>There is no single price per acre</h2>
<p>A number for a whole state, or for an acre in a county, is not a review of your interest. Value follows the wells, the lease, and your share of them.</p>
<h2>What we look at</h2>
<ul>
<li><strong>Current royalty income.</strong> For a producing interest, recent checks are the starting point. The stub shows your decimal, volumes, price, and deductions.</li>
<li><strong>Decline.</strong> How long the wells have produced, and how fast volumes are falling, changes how much income is left.</li>
<li><strong>Your share.</strong> Net mineral acres, or the decimal on a division order, shows how much of a well you own.</li>
<li><strong>The lease.</strong> Royalty rate, deductions, and whether the minerals are leased, held by production, or open.</li>
<li><strong>What is not drilled yet.</strong> A permit, a drilled but uncompleted well, or an undeveloped location can matter as much as today’s check.</li>
<li><strong>Prices and local activity.</strong> Oil and gas prices, and how actively the county is being drilled, change what buyers will pay.</li>
</ul>
<h2>Producing, near-term, and undeveloped</h2>
<p>Producing interests are usually valued from current income and how that income is expected to decline. Near-term interests, such as a permit or a well that has been drilled but not completed, are valued on what that well is expected to become. Undeveloped locations are valued on the chance and timing of future wells.</p>
<p>Overrides are priced from the lease they come out of. They generally end when that lease ends.</p>
<h2>What a check stub shows</h2>
<p>A useful stub shows the well name, your decimal, the production month, volumes, price, taxes, and deductions. A few recent months are more useful than one. If you do not have stubs, the county and the owner name are enough for us to start.</p>
<div class="callout"><p>An offer from us is a bid to buy. It is not an appraisal. Compare it with advice from your own advisors before you decide.</p></div>
<p>See <a href="/how-it-works">how the process works</a> or <a href="/inherited-mineral-rights">what changes when the interest was inherited</a>.</p>
${disclaimer}`
  },
  {
    file: "inherited-mineral-rights.html",
    path: "/inherited-mineral-rights",
    title: "Sell Inherited Mineral Rights | Dynasty Mineral Partners",
    description: "Inherited oil and gas minerals or royalties? How a sale works with several heirs, unfinished probate, or very little paperwork. No fee and no obligation.",
    crumb: "Inherited Minerals",
    h1: "Selling inherited mineral rights",
    lede: "A large share of the interests we buy were inherited, often as a fraction split among several heirs.",
    state: "",
    faqs: [
      { q: "Can each heir sell separately?", a: "Usually, yes. We can offer on your share without the rest of the family selling. If everyone wants to sell together, we can make an offer to each owner." },
      { q: "What if probate is not finished?", a: "Title has to show that you own the interest before it can be deeded. Depending on the state and the estate, that can mean probate, an affidavit of heirship, or another document. A lawyer licensed where the minerals are located should advise you on the estate." },
      { q: "What if I do not know the county?", a: "Start with the names on any letter, check, or deed. Operator mail and old division orders often name the county. If you have none of that, call and we will tell you whether there is enough to search." }
    ],
    article: `
<h2>Inherited minerals are common</h2>
<p>A check arrives, or a division order, or a letter from an operator. The interest may be a few acres from a parent’s estate, split among several heirs. We buy that kind of interest.</p>
<p>We buy inherited interests in the Permian Basin, the Anadarko Basin, the DJ Basin, the Powder River Basin, the Bakken, and in other U.S. oil and gas fields.</p>
<h2>Selling before probate is finished</h2>
<p>It depends on title. The deed has to come from the person who owns the interest. In some estates that ownership is already of record. In others the estate still needs probate, an affidavit of heirship, or another step. We will tell you what the county records show. Estate questions belong with an attorney licensed in the state where the minerals are.</p>
<h2>Several heirs</h2>
<p>Each heir can usually sell their own share. You do not need the whole family to agree before we can offer on your portion. If the family wants to sell together, we can offer each owner on the share they own.</p>
<h2>When the records are thin</h2>
<p>Start with the county, a well name, an owner name on a stub, a division order, a will, or an old deed. We can search public records from there.</p>
<h2>Why people sell</h2>
<ul>
<li>The checks are small and irregular.</li>
<li>An estate is being settled, and the heirs would rather divide cash.</li>
<li>The minerals are in a county the family no longer has a tie to.</li>
</ul>
<h2>Keeping them is also reasonable</h2>
<p>Some families hold inherited minerals for the income. Others want the cash. An offer shows what the cash option is. It does not require you to take it.</p>
<p>Ask your own tax advisor what a sale would mean. Inherited property often has a different tax basis than property you bought. We cannot tell you what yours is.</p>
${disclaimer}`
  },
  {
    file: "faq.html",
    path: "/faq",
    title: "Mineral Rights FAQ | Dynasty Mineral Partners",
    description: "Fees, fractional and inherited minerals, partial sales, closing, and where Dynasty Mineral Partners buys oil and gas interests.",
    crumb: "FAQ",
    h1: "Frequently asked questions",
    lede: "Short answers about selling a mineral or royalty interest to a direct buyer. Nothing here is legal, tax, or financial advice.",
    state: "",
    article: `
<h2 class="faq-group">Selling</h2>
<div class="faq">
<details><summary>How do you decide what an interest is worth?</summary><p>We look at royalty income, decline, nearby permits and drilling, the lease, and your decimal or net acres. The result is a written offer for your interest, not a price per acre. More is on <a href="/mineral-rights-value">what mineral rights are worth</a>.</p></details>
<details><summary>Is there a fee to request an offer?</summary><p>No. There is no charge to send your information or to receive an offer, and there is no commission. We are the buyer.</p></details>
<details><summary>Do I need a broker?</summary><p>No. You can deal with us directly. Hiring a broker is your choice. We do not charge a broker fee.</p></details>
<details><summary>Do I have to sell all of my mineral rights?</summary><p>No. Many owners sell part of an interest and keep the rest. The offer states what would transfer.</p></details>
<details><summary>What if I decide not to sell?</summary><p>Then you do not sell. An offer is not a contract until you accept it. Declining does not cost you anything.</p></details>
</div>
<h2 class="faq-group">Your interest</h2>
<div class="faq">
<details><summary>Do you buy small or fractional interests?</summary><p>Yes. Small fractions and inherited shares are a regular part of what we buy.</p></details>
<details><summary>Do you buy if I already receive royalty checks?</summary><p>Yes. Producing interests are a core part of what we buy, along with near-term development and undeveloped locations.</p></details>
<details><summary>Do you buy overriding royalty interests?</summary><p>Yes. Tell us if what you own is an override rather than a mineral interest. Overrides come out of a lease and generally last only as long as that lease.</p></details>
<details><summary>Do you buy inherited mineral rights?</summary><p>Yes, including interests split among heirs. See <a href="/inherited-mineral-rights">selling inherited mineral rights</a>. We are not estate attorneys.</p></details>
<details><summary>What if I do not know exactly what I own?</summary><p>Start with the state, the county, a well name, or any letter from an operator. We can research public records from there.</p></details>
</div>
<h2 class="faq-group">Where we buy</h2>
<div class="faq">
<details><summary>Where do you buy?</summary><p>We buy oil and gas mineral interests, royalties, and overriding royalties in producing areas across the United States. A large share of our acquisitions are in the Permian Basin, the Red Fork and Cherokee of the Anadarko Basin, the DJ Basin in Weld County, the Powder River Basin in Converse County, and the Bakken.</p></details>
<details><summary>Do you buy in Louisiana, the Eagle Ford, the Barnett, and other plays?</summary><p>Yes. Those areas are part of what we purchase, along with the Haynesville and other U.S. fields. Choose your state on the form, or call <a href="tel:+18178181034">(817) 818-1034</a>.</p></details>
<details><summary>Are you limited to the counties named on the state pages?</summary><p>No. The counties named on those pages are examples, not a boundary. Give us the county where the minerals are located.</p></details>
</div>
<h2 class="faq-group">Closing</h2>
<div class="faq">
<details><summary>How long does the process take?</summary><p>A written offer usually goes out within a few business days once we can evaluate the interest. After you accept, most closings finish within a few weeks. The full sequence is on <a href="/how-it-works">how it works</a>.</p></details>
<details><summary>What happens after I accept?</summary><p>We order title, prepare the deed, and stay in touch until you are paid. You can have your own attorney review the documents. We are not your lawyer.</p></details>
<details><summary>Which documents help?</summary><p>Recent check stubs, a division order, a lease, a deed, or probate papers. None of them are required to request an offer.</p></details>
<details><summary>Will I owe tax on the sale?</summary><p>We cannot tell you. A mineral sale can have tax consequences that depend on your basis and how you acquired the interest. Talk with your own tax advisor before you accept an offer.</p></details>
</div>
<p>Call <a href="tel:+18178181034">(817) 818-1034</a> or email <a href="mailto:riley@dynastylm.com">riley@dynastylm.com</a>.</p>
${disclaimer}`
  },
  {
    file: "privacy.html",
    path: "/privacy",
    title: "Privacy Policy | Dynasty Mineral Partners",
    description: "Privacy policy for SellMineralRightsFast.com, operated by Dynasty Land & Minerals, LLC, doing business as Dynasty Mineral Partners.",
    crumb: "Privacy Policy",
    h1: "Privacy policy",
    lede: "How Dynasty Land & Minerals, LLC collects and uses information you submit on this site.",
    state: "",
    article: `
<p><em>Last updated: November 10, 2026</em></p>
<h2>Who we are</h2>
<p>This website is operated by Dynasty Land &amp; Minerals, LLC, doing business as Dynasty Mineral Partners (“we,” “us”). Contact: <a href="mailto:riley@dynastylm.com">riley@dynastylm.com</a>, <a href="tel:+18178181034">(817) 818-1034</a>.</p>
<h2>Information we collect</h2>
<p>When you submit the offer form, we collect what you provide: name, phone number, email if you include one, state, county, whether you receive royalty checks, and the page you submitted from. We also collect standard technical data, such as browser type and pages visited, through cookies used by our analytics and advertising tags.</p>
<h2>How we use it</h2>
<p>We use your information to evaluate your mineral interest, contact you about an offer, and operate and measure this website and our advertising.</p>
<h2>Calls and texts</h2>
<p>If you consent on the form, we may contact you by phone, text, or email, including by automated means. Consent is not a condition of any offer. Message and data rates may apply. You can opt out of texts by replying STOP, and you can tell us you no longer want to be contacted.</p>
<h2>How the form is delivered</h2>
<p>Submissions are sent to us by email or through a form service we configure. That provider receives the information you submit so it can deliver the message to us. Until that delivery is configured, the form asks you to call or email instead of showing a confirmation.</p>
<h2>Analytics and advertising</h2>
<p>We use Google Analytics (measurement ID G-SCQXCMMNTG) and the Meta (Facebook) Pixel to understand traffic and measure ads. Those services may use cookies. You can manage ad settings through Google and Meta and through your browser.</p>
<h2>Sharing</h2>
<p>We do not sell your personal information. We share it with service providers who help us operate, with parties involved in a closing you agree to, or when the law requires it.</p>
<h2>Your choices</h2>
<p>To access, correct, or delete your information, email <a href="mailto:riley@dynastylm.com">riley@dynastylm.com</a>.</p>
<h2>Changes</h2>
<p>We may update this policy. The date above is the latest version.</p>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-texas.html",
    path: "/sell-mineral-rights-texas",
    title: "Sell Mineral Rights in Texas | Dynasty Mineral Partners",
    description: "We buy Texas mineral and royalty interests, including the Permian Basin, the Eagle Ford, the Barnett, and East Texas. No fee and no obligation.",
    crumb: "Texas",
    h1: "Sell mineral rights in Texas",
    lede: "We purchase oil and gas mineral interests, royalties, and overriding royalties throughout Texas. The Permian Basin, both the Midland Basin and the Delaware Basin, is the center of that work.",
    faqHeading: "Questions about Texas",
    state: "Texas",
    related: [
      ["/sell-mineral-rights-permian-basin", "Permian Basin"],
      ["/sell-mineral-rights-new-mexico", "New Mexico"]
    ],
    faqs: [
      { q: "Do you buy outside the Permian in Texas?", a: "Yes. We buy Eagle Ford, Barnett, East Texas, and other Texas mineral and royalty interests, as well as the Permian." },
      { q: "Which Texas counties do you see most often?", a: "In the Midland Basin, counties such as Midland, Martin, Howard, Glasscock, Reagan, and Upton. In the Delaware Basin, counties such as Reeves, Loving, Ward, Winkler, Pecos, and Culberson. We also buy in other Texas counties." },
      { q: "Do you buy small or inherited Texas interests?", a: "Yes. Fractional and inherited interests are included. You do not need to own an entire section." }
    ],
    article: `
<h2>Permian Basin</h2>
<p>Texas mineral ownership is often old, split, and inherited. We buy from individual and family owners. In the Permian we buy producing wells, near-term development, and undeveloped locations. Minerals, royalties, and overriding royalties are all included.</p>
<h2>Midland Basin and the Texas Delaware</h2>
<p>The Midland Basin is the eastern Permian. Counties we review often include Midland, Martin, Howard, Glasscock, Reagan, and Upton. The Delaware Basin is the western Permian. On the Texas side that includes counties such as Reeves, Loving, Ward, Winkler, Pecos, and Culberson.</p>
<p>The New Mexico side of the Delaware is on our <a href="/sell-mineral-rights-new-mexico">New Mexico</a> page. Both sides are covered on the <a href="/sell-mineral-rights-permian-basin">Permian Basin</a> page.</p>
<h2>Other Texas areas</h2>
<p>We also purchase interests in the Eagle Ford, the Barnett, East Texas, and other parts of the state. The county is enough for us to start the review.</p>
<h2>Records</h2>
<p>Production and permitting in Texas run through the <a href="https://www.rrc.texas.gov/">Railroad Commission of Texas</a>. Deeds and leases are recorded with the county clerk where the minerals are. A recent royalty stub and a legal description are usually enough for us to find the rest.</p>
<h2>How an offer works</h2>
<p>Tell us the county and what you know. We review the interest and send a written offer, usually within a few business days. If you accept, we handle title and closing. If you do not, there is no fee. <a href="/how-it-works">See the full process</a>.</p>
<div class="callout"><p>No fee. No broker. No obligation to sell. Call <a href="tel:+18178181034">(817) 818-1034</a> or use the form.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-new-mexico.html",
    path: "/sell-mineral-rights-new-mexico",
    title: "Sell Mineral Rights in New Mexico | Dynasty Mineral Partners",
    description: "We buy New Mexico mineral and royalty interests, including the Delaware Basin in Lea and Eddy counties and other producing areas of the state.",
    crumb: "New Mexico",
    h1: "Sell mineral rights in New Mexico",
    lede: "We purchase mineral and royalty interests in New Mexico. Lea County and Eddy County, on the Delaware side of the Permian, are where that work is concentrated. We also buy elsewhere in the state, including the San Juan Basin.",
    faqHeading: "Questions about New Mexico",
    state: "New Mexico",
    related: [
      ["/sell-mineral-rights-permian-basin", "Permian Basin"],
      ["/sell-mineral-rights-texas", "Texas"]
    ],
    faqs: [
      { q: "Do you buy only in Lea and Eddy counties?", a: "No. Lea and Eddy are the center of our New Mexico work. We also buy other New Mexico interests, including the San Juan Basin." },
      { q: "Do you buy producing and non-producing interests?", a: "Yes. Producing royalties, near-term wells, and undeveloped locations are all in range, including small and inherited shares." },
      { q: "Where are New Mexico mineral deeds recorded?", a: "With the county clerk in the county where the minerals are located. Well and production records are kept by the New Mexico Oil Conservation Division." }
    ],
    article: `
<h2>Delaware Basin</h2>
<p>The Permian continues into Lea County and Eddy County. That is the New Mexico interest we review most often: minerals, royalties, and overriding royalties, whether they are producing, permitted, drilled but not completed, or still undeveloped.</p>
<h2>Other New Mexico interests</h2>
<p>Interests outside Lea and Eddy counties are purchased as well. Include the county on the form.</p>
<h2>How these interests are usually owned</h2>
<p>A lot of New Mexico mineral ownership is fractional and inherited, often described by section, township, and range. A division order decimal and a section number are often enough to identify the tract. One heir can request an offer on their own share.</p>
<h2>Records</h2>
<p>The <a href="https://www.emnrd.nm.gov/ocd/">New Mexico Oil Conservation Division</a> holds production and permitting records. Deeds are recorded with the county clerk. We use both when we evaluate an interest.</p>
<p>Reeves, Loving, and the other Texas Delaware counties are the other half of this basin. If you own on both sides of the state line, name both counties. Background is on the <a href="/sell-mineral-rights-permian-basin">Permian page</a>.</p>
<div class="callout"><p>No fee. No broker. No obligation. Call <a href="tel:+18178181034">(817) 818-1034</a>. <a href="/how-it-works">How closing works</a>.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-oklahoma.html",
    path: "/sell-mineral-rights-oklahoma",
    title: "Sell Mineral Rights in Oklahoma | Dynasty Mineral Partners",
    description: "We buy Oklahoma mineral and royalty interests, including Red Fork and Cherokee, SCOOP, STACK, and the Arkoma Basin.",
    crumb: "Oklahoma",
    h1: "Sell mineral rights in Oklahoma",
    lede: "We purchase Oklahoma mineral and royalty interests, with particular attention to the Red Fork and Cherokee sands in the Anadarko Basin. SCOOP, STACK, and Arkoma interests are purchased as well.",
    faqHeading: "Questions about Oklahoma",
    state: "Oklahoma",
    related: [
      ["/sell-mineral-rights-texas", "Texas"],
      ["/inherited-mineral-rights", "Inherited minerals"]
    ],
    faqs: [
      { q: "Do you buy SCOOP, STACK, or Arkoma minerals?", a: "Yes. The Red Fork and Cherokee are the plays we underwrite most often. We also buy SCOOP, STACK, and Arkoma interests." },
      { q: "I received a pooling notice. Can I still ask for an offer?", a: "Yes. Pooling elections have deadlines and legal consequences set out in the order. Read the order and consider talking with an Oklahoma oil and gas attorney before you elect. An offer from us is one option. It is not legal advice about the election." },
      { q: "Do you buy small Oklahoma mineral interests?", a: "Yes. Oklahoma minerals are often split across many owners and many sections. A small net-acre position is still something we will review." }
    ],
    article: `
<h2>Red Fork and Cherokee</h2>
<p>The Red Fork and Cherokee are Pennsylvanian sands across the Anadarko Basin of western Oklahoma. A lot of the ownership is inherited, fractional, and scattered across more than one section. We buy producing royalties, near-term wells, undeveloped locations, and overriding royalties in those plays.</p>
<h2>Other Oklahoma plays</h2>
<p>SCOOP, STACK, and the Arkoma Basin are part of what we buy in Oklahoma. The county, and a section if you have it, is enough to begin.</p>
<h2>Section, township, and range</h2>
<p>Oklahoma descriptions usually run by section, township, and range. Your decimal may be on a division order or a check stub. A pooling notice often names the section. Any of those is a useful start.</p>
<h2>Pooling notices</h2>
<p>Spacing and pooling in Oklahoma run through the <a href="https://oklahoma.gov/occ.html">Oklahoma Corporation Commission</a>. When an operator pools a unit, unleased owners have a limited time to choose among the options in the order. Selling is a separate decision from that election. Deadlines in a pooling order are real. Read the order and talk with an Oklahoma oil and gas attorney if you are unsure. We can still tell you what we would pay.</p>
<h2>Deeds</h2>
<p>Mineral deeds are recorded with the county clerk where the minerals are. We review that record, and the production data, before a written offer. The offer is free to request and free to decline. <a href="/how-it-works">See how closing works</a>.</p>
<div class="callout"><p>Inherited, small, and fractional interests are included. No fee and no obligation to sell.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-colorado.html",
    path: "/sell-mineral-rights-colorado",
    title: "Sell Mineral Rights in Colorado | Dynasty Mineral Partners",
    description: "We buy Colorado mineral and royalty interests, including the DJ Basin in Weld County and other producing areas of the state.",
    crumb: "Colorado",
    h1: "Sell mineral rights in Colorado",
    lede: "We purchase mineral and royalty interests in Colorado’s Denver-Julesburg Basin. Weld County is the center of that work. We also buy interests in other Colorado counties.",
    faqHeading: "Questions about Colorado",
    state: "Colorado",
    related: [
      ["/sell-mineral-rights-wyoming", "Wyoming"],
      ["/mineral-rights-value", "What it’s worth"]
    ],
    faqs: [
      { q: "Do you buy mineral rights outside Weld County?", a: "Yes. Weld County is the center of our Colorado work. We also buy interests in other Colorado counties and basins." },
      { q: "Do you buy small inherited interests in the DJ Basin?", a: "Yes. Fractional and inherited shares are included." },
      { q: "Who regulates oil and gas wells in Colorado?", a: "The Energy and Carbon Management Commission. Deeds are recorded with the clerk and recorder in the county where the minerals are located." }
    ],
    article: `
<h2>Weld County and the DJ Basin</h2>
<p>In the Denver-Julesburg Basin we buy mineral interests, royalty interests, and overriding royalties, including producing wells, permitted locations, drilled but uncompleted wells, and undeveloped acreage. Weld County is where most of those interests sit.</p>
<h2>Other Colorado interests</h2>
<p>Interests in other DJ Basin counties, and in other Colorado basins, are purchased as well.</p>
<h2>What a DJ interest often looks like</h2>
<p>Many Weld County owners inherited a fractional interest. The mail they receive is a royalty statement or a lease offer. A stub with the well name and your decimal is enough to start. You can sell your share without the other owners selling theirs, if title is in your name.</p>
<h2>Records</h2>
<p>Colorado oil and gas operations are regulated by the <a href="https://ecmc.state.co.us/">Energy and Carbon Management Commission</a>. Deeds and leases are recorded with the county clerk and recorder. We use both the well records and the county record when we write an offer.</p>
<p>Offers are in writing, usually within a few business days of a review. <a href="/how-it-works">How the rest of the sale works</a>.</p>
<div class="callout"><p>Call <a href="tel:+18178181034">(817) 818-1034</a> or use the form.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-wyoming.html",
    path: "/sell-mineral-rights-wyoming",
    title: "Sell Mineral Rights in Wyoming | Dynasty Mineral Partners",
    description: "We buy Wyoming mineral and royalty interests, including the Powder River Basin in Converse County and other producing areas of the state.",
    crumb: "Wyoming",
    h1: "Sell mineral rights in Wyoming",
    lede: "We purchase mineral and royalty interests in Wyoming’s Powder River Basin, particularly in Converse County. We also buy interests in other Wyoming counties.",
    faqHeading: "Questions about Wyoming",
    state: "Wyoming",
    related: [
      ["/sell-mineral-rights-colorado", "Colorado"],
      ["/sell-mineral-rights-montana", "Montana"]
    ],
    faqs: [
      { q: "Do you buy only in Converse County?", a: "No. Converse County is the core of our Powder River work. We also buy interests in other Powder River counties and elsewhere in Wyoming." },
      { q: "Do you buy federal or fee minerals?", a: "We buy private mineral and royalty interests, including interests under fee land. If you are not sure what you own, tell us what the document says." },
      { q: "Are fractional Wyoming interests too small?", a: "No. Inherited and fractional shares are included." }
    ],
    article: `
<h2>Converse County and the Powder River Basin</h2>
<p>The Powder River Basin in northeastern Wyoming is where our Wyoming work is aimed, especially Converse County. We buy mineral interests, royalty interests, and overriding royalties there: producing wells, permits, drilled but uncompleted wells, and undeveloped locations.</p>
<h2>Other Wyoming interests</h2>
<p>We also purchase interests in Campbell County, in other Powder River counties, and in other Wyoming basins.</p>
<h2>How these interests are usually owned</h2>
<p>Powder River minerals are often fractional and sometimes inherited. The mineral owner and the surface owner do not have to be the same person. We buy the mineral or royalty side. A check stub, a division order, or a deed is a strong start.</p>
<h2>Records</h2>
<p>The <a href="https://wogcc.wyo.gov/">Wyoming Oil and Gas Conservation Commission</a> holds well and production records. Deeds are recorded with the county clerk where the minerals are. We review both before we send a written offer.</p>
<p>You can sell all of your interest or ask about selling part. There is no fee and no obligation. <a href="/how-it-works">The closing steps</a> are the same as in Texas. Have your own attorney review the deed if you want that review.</p>
<div class="callout"><p>Call <a href="tel:+18178181034">(817) 818-1034</a>.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-montana.html",
    path: "/sell-mineral-rights-montana",
    title: "Sell Mineral Rights in Montana | Dynasty Mineral Partners",
    description: "We buy Montana mineral and royalty interests, including Bakken interests in eastern Montana and other producing areas of the state.",
    crumb: "Montana",
    h1: "Sell mineral rights in Montana",
    lede: "We purchase mineral and royalty interests in Montana, including Bakken interests in Richland County and the counties along the North Dakota line.",
    faqHeading: "Questions about Montana",
    state: "Montana",
    related: [
      ["/sell-mineral-rights-north-dakota", "North Dakota"],
      ["/sell-mineral-rights-wyoming", "Wyoming"]
    ],
    faqs: [
      { q: "Where in Montana do you buy?", a: "The Bakken in eastern Montana, including Richland County, is a regular part of our work. We also buy mineral and royalty interests in other Montana counties." },
      { q: "Do you offer on every Montana interest?", a: "We review the interest and respond with an offer when we can purchase it. There is no fee for that review, and you are not required to accept." },
      { q: "Do you buy inherited Bakken minerals?", a: "Yes. Small and fractional shares are included." }
    ],
    article: `
<h2>Bakken in eastern Montana</h2>
<p>We buy Bakken mineral, royalty, and overriding royalty interests in eastern Montana. That includes producing interests, near-term wells, and undeveloped locations around Richland County and the counties along the North Dakota line.</p>
<h2>Other Montana interests</h2>
<p>Mineral and royalty interests in other parts of Montana are purchased as well. Include the county on the form.</p>
<h2>The other side of the state line</h2>
<p>The same Bakken trend continues into western North Dakota. If you own on both sides, say so. The North Dakota page is <a href="/sell-mineral-rights-north-dakota">here</a>.</p>
<h2>Paperwork and title</h2>
<p>A royalty stub, division order, or deed is enough to start. Deeds are recorded with the clerk and recorder in the county where the minerals are. Oil and gas wells are regulated by the Montana Board of Oil and Gas Conservation. You do not need to pull those records yourself.</p>
<p>There is no fee for an offer and no obligation to take it. <a href="/how-it-works">How an accepted offer gets to closing</a>.</p>
<div class="callout"><p>Call <a href="tel:+18178181034">(817) 818-1034</a> or use the form.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-north-dakota.html",
    path: "/sell-mineral-rights-north-dakota",
    title: "Sell Mineral Rights in North Dakota | Dynasty Mineral Partners",
    description: "We buy North Dakota mineral and royalty interests, including Bakken interests in McKenzie and Williams counties.",
    crumb: "North Dakota",
    h1: "Sell mineral rights in North Dakota",
    lede: "We purchase mineral and royalty interests in North Dakota, including Bakken interests in McKenzie County, Williams County, and the surrounding Bakken counties.",
    faqHeading: "Questions about North Dakota",
    state: "North Dakota",
    related: [
      ["/sell-mineral-rights-montana", "Montana"],
      ["/how-it-works", "How it works"]
    ],
    faqs: [
      { q: "Which North Dakota counties?", a: "McKenzie and Williams counties, and the other Bakken counties of western North Dakota, are a regular part of our work. We also buy interests in other North Dakota counties." },
      { q: "Do you buy only producing Bakken wells?", a: "No. We look at producing interests, near-term wells, and undeveloped locations." },
      { q: "Do you buy small mineral interests in North Dakota?", a: "Yes. Fractional and inherited shares are included." }
    ],
    article: `
<h2>Bakken in western North Dakota</h2>
<p>In western North Dakota we buy mineral interests, royalty interests, and overriding royalties in the Bakken, including producing wells, permitted locations, drilled but uncompleted wells, and undeveloped acreage. McKenzie County and Williams County are the counties we see most often.</p>
<h2>Other North Dakota interests</h2>
<p>Interests outside that fairway are purchased as well. Include the county on the form.</p>
<h2>Montana is the same trend</h2>
<p>Eastern Montana Bakken interests are described on the <a href="/sell-mineral-rights-montana">Montana page</a>. Name both counties if you own on both sides of the line.</p>
<h2>Records</h2>
<p>The <a href="https://www.dmr.nd.gov/oilgas/">North Dakota Department of Mineral Resources, Oil and Gas Division</a>, holds well and production information. Deeds are recorded with the county recorder where the minerals are. A stub or division order helps. You can start without one.</p>
<h2>Inherited shares</h2>
<p>Bakken minerals are often split among heirs who live far from the wells. One heir can sell without the others. There is no fee to ask and no obligation to accept a written offer. Tax treatment of an inherited interest is a question for your tax advisor. <a href="/inherited-mineral-rights">More on inherited minerals</a>.</p>
<div class="callout"><p>No fee. No broker. No obligation.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-permian-basin.html",
    path: "/sell-mineral-rights-permian-basin",
    title: "Sell Permian Basin Mineral Rights | Dynasty Mineral Partners",
    description: "Cash offers for Permian Basin minerals and royalties in the Midland and Delaware basins, across Texas and New Mexico. Producing, near-term, and undeveloped.",
    crumb: "Permian Basin",
    h1: "Sell mineral rights in the Permian Basin",
    lede: "We purchase minerals, royalties, and overriding royalties on both sides of the Permian, in Texas and in New Mexico.",
    faqHeading: "Questions about the Permian",
    state: "",
    related: [
      ["/sell-mineral-rights-texas", "Texas"],
      ["/sell-mineral-rights-new-mexico", "New Mexico"]
    ],
    faqs: [
      { q: "What is the difference between the Midland and Delaware basins?", a: "They are the two halves of the Permian. The Midland Basin is the eastern side, in Texas. The Delaware Basin is the western side, in Texas and in Lea and Eddy counties, New Mexico. We buy in both." },
      { q: "Do you buy only producing Permian wells?", a: "No. We buy producing interests, near-term interests such as permits and drilled but uncompleted wells, and undeveloped locations, along with overriding royalties." },
      { q: "Do you buy outside the Permian?", a: "Yes. The Permian is a large part of our work. We also buy mineral and royalty interests in other U.S. oil and gas areas." }
    ],
    article: `
<h2>One basin, two states</h2>
<p>The Permian Basin produces from West Texas and southeastern New Mexico. We buy mineral interests, royalty interests, and overriding royalties across that basin, producing and not yet producing.</p>
<p>State notes are on the <a href="/sell-mineral-rights-texas">Texas</a> and <a href="/sell-mineral-rights-new-mexico">New Mexico</a> pages. If you own in both states, one conversation can cover both.</p>
<h2>Midland Basin</h2>
<p>The Midland Basin is in Texas. Counties we review often include Midland, Martin, Howard, Glasscock, Reagan, and Upton. We look at the wells that are paying, the ones that are permitted or drilled but not completed, and locations that are still undeveloped.</p>
<h2>Delaware Basin</h2>
<p>The Delaware Basin is the western Permian. In Texas that includes counties such as Reeves, Loving, Ward, Winkler, Pecos, and Culberson. In New Mexico it is principally Lea County and Eddy County.</p>
<h2>What we need from you</h2>
<p>The county, and as much of the legal description as you have. A royalty check stub is the fastest picture of a producing decimal. If you have never received a check, say that. Inherited and fractional shares are common.</p>
<h2>How the offer is made</h2>
<p>We research the interest and send a written offer, usually within a few business days. You can decline it. If you accept, we coordinate title and the deed. Texas deeds are recorded with the county clerk. Railroad Commission records cover the wells. In New Mexico, well records sit with the Oil Conservation Division and deeds with the county clerk. You do not need to order any of that before you call <a href="tel:+18178181034">(817) 818-1034</a>.</p>
<div class="callout"><p>No fee, no broker, and no obligation. Choose the state where the minerals are. If you own in both Texas and New Mexico, pick one and name the other county in the county field.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-louisiana.html",
    path: "/sell-mineral-rights-louisiana",
    title: "Sell Mineral Rights in Louisiana | Dynasty Mineral Partners",
    description: "Cash offers for Louisiana mineral and royalty interests, including the Haynesville and South Louisiana. Direct buyer. No fee and no obligation.",
    crumb: "Louisiana",
    h1: "Sell mineral rights in Louisiana",
    lede: "We purchase oil and gas mineral and royalty interests in Louisiana, including the Haynesville Shale and fields in South Louisiana.",
    faqHeading: "Questions about Louisiana",
    state: "Louisiana",
    related: [
      ["/sell-mineral-rights-texas", "Texas"],
      ["/sell-mineral-rights-oklahoma", "Oklahoma"],
      ["/faq", "FAQ"]
    ],
    faqs: [
      { q: "Do you buy Haynesville mineral rights?", a: "Yes. We buy Haynesville mineral and royalty interests, and interests in other Louisiana parishes." },
      { q: "Do you buy South Louisiana interests?", a: "Yes. South Louisiana is included. Send the parish and what you know about the interest." },
      { q: "Do you buy small or inherited interests in Louisiana?", a: "Yes. Fractional and inherited shares are included. You can use the parish name in the county field." }
    ],
    article: `
<h2>Haynesville and South Louisiana</h2>
<p>We buy producing interests, near-term interests, and undeveloped interests in Louisiana. That includes the Haynesville in the northwest and producing fields in South Louisiana. Minerals, royalties, and overriding royalties are included. Inherited and fractional shares are included.</p>
<p>Louisiana uses parishes rather than counties. Put the parish in the county field on the form. Land records are kept by the clerk of court in the parish. Well data is published through the state’s SONRIS system.</p>
<h2>A note on Louisiana mineral rights</h2>
<p>Louisiana oil and gas rights are not the same as mineral rights in other states. Under the Louisiana Mineral Code, a mineral right created apart from the land is generally a mineral servitude. A servitude can end after ten years without use. Whether that applies to a particular interest depends on the facts. That is a question for a Louisiana attorney. We are not attorneys, and nothing on this page is legal advice.</p>
<h2>How an offer works</h2>
<p>Tell us the parish and what you know. We review the interest and send a written offer, usually within a few business days. If you accept, we handle title and closing. There is no fee to ask, and no obligation to accept. <a href="/how-it-works">See the full process</a>.</p>
<div class="callout"><p>Call <a href="tel:+18178181034">(817) 818-1034</a> or use the form. Choose Louisiana as the state.</p></div>
${disclaimer}`
  }
];

/** Page copy. Edit here, then run `node site-src/build.mjs`. */

export const homeFaqs = [
  {
    q: "Are there any fees to get an offer?",
    a: "No. There is no cost to tell us about your interest or to receive a written cash offer, and you are never obligated to accept it. We are the buyer, so there is no broker commission."
  },
  {
    q: "Do you buy small, fractional, or inherited interests?",
    a: "Yes. Inherited minerals, family shares, and small fractional interests are a normal part of what we buy. You do not need a large acreage position to ask for an offer."
  },
  {
    q: "Do I have to sell all of my mineral rights?",
    a: "No. Many owners sell only part of a mineral or royalty interest and keep the rest. We can talk through what a partial sale would look like for your interest."
  },
  {
    q: "Where do you buy?",
    a: "We buy in the Permian Basin in Texas and New Mexico (Midland and Delaware), the Red Fork and Cherokee plays in the Oklahoma Anadarko Basin, the DJ Basin in Weld County, Colorado, and the Powder River Basin in Converse County, Wyoming. We occasionally buy Bakken interests in Montana and North Dakota. Other areas are outside our current buy box."
  },
  {
    q: "How long does closing take?",
    a: "After you accept a written offer, most closings finish within a few weeks. Title work in the county is usually what sets the pace. We coordinate the curative work and the deed, and you choose whether to move ahead."
  }
];

export const steps = [
  ["Tell us what you own", "Call or use the form. County, whether you receive royalty checks, and anything you already know is enough to start. A check stub or division order helps, and it is not required."],
  ["Get a written cash offer", "We look at your specific interest and send a written offer, usually within a few business days. Take it to your family, your attorney, or your tax advisor. There is no obligation to accept."],
  ["We handle closing", "If you accept, we coordinate title, curative work, and the deed. Most closings are done within a few weeks, depending on the county. You are paid when closing is complete."]
];

export const basins = [
  {
    meta: "Texas and New Mexico",
    title: "Permian Basin",
    text: "Midland Basin and Delaware Basin. Producing wells, permits, drilled-but-uncompleted wells, and undeveloped locations.",
    links: [
      ["/sell-mineral-rights-permian-basin", "Permian overview"],
      ["/sell-mineral-rights-texas", "Texas"],
      ["/sell-mineral-rights-new-mexico", "New Mexico"]
    ]
  },
  {
    meta: "Oklahoma",
    title: "Red Fork and Cherokee",
    text: "Anadarko Basin minerals, royalties, and overrides in the Red Fork and Cherokee. Inherited and fractional shares included.",
    links: [["/sell-mineral-rights-oklahoma", "Oklahoma"]]
  },
  {
    meta: "Colorado",
    title: "DJ Basin",
    text: "Denver-Julesburg Basin, focused on Weld County. Producing royalties and near-term or undeveloped interests.",
    links: [["/sell-mineral-rights-colorado", "Colorado"]]
  },
  {
    meta: "Wyoming",
    title: "Powder River Basin",
    text: "Our Wyoming focus is Converse County in the Powder River Basin.",
    links: [["/sell-mineral-rights-wyoming", "Wyoming"]]
  },
  {
    meta: "Montana and North Dakota",
    title: "Bakken",
    text: "An occasional part of the buy box, not a standing focus the way the Permian is. We will tell you plainly if we can offer.",
    links: [
      ["/sell-mineral-rights-montana", "Montana"],
      ["/sell-mineral-rights-north-dakota", "North Dakota"]
    ]
  },
  {
    meta: "Somewhere else",
    title: "Call first",
    text: "If your minerals are outside these areas, call. We would rather tell you directly than send you through a form that does not fit.",
    links: [["tel:+18178181034", "(817) 818-1034"]]
  }
];

export const buyTypes = [
  ["Producing (PDP)", "Wells already on production. If a royalty check shows up in your mailbox, this is usually the interest behind it. We price it from the income, the decline, and the lease — not from a generic price per acre."],
  ["Near-term: permits and DUCs", "A permit is on file, or the well has been drilled but not completed (a DUC). Value is in what is about to happen, even if you are not being paid yet."],
  ["Undeveloped locations (PUD)", "Proved undeveloped drilling locations. The minerals are not producing, but they sit where an operator can still develop them. Location matters more here than a check stub."],
  ["Minerals, royalties, and overrides", "We buy mineral interests, royalty interests, and overriding royalty interests (ORRI). An override is carved out of a lease and generally lasts only as long as that lease does. Tell us which one you have if you know."],
  ["Inherited, small, and fractional", "A family share, a few net acres, or a decimal that looks tiny on a stub is still worth a look. You do not have to round up every heir before we can offer on your piece."]
];

export const reasons = [
  ["You deal with the buyer", "We buy for our own account. Your interest is not listed for someone else to shop, and there is no broker commission sitting between you and the offer."],
  ["No fee and no obligation", "Asking for an offer costs nothing. If the number is wrong for you, say no. Selling mineral rights can have tax consequences — talk with your own tax advisor before you sign anything."],
  ["We do the title work", "If you accept, we coordinate the title review, curative work, and closing documents. You should still have your own attorney review anything you are asked to sign."],
  ["A person answers this number", "Dynasty Mineral Partners is a DBA of Dynasty Land & Minerals, LLC, in Weatherford, Texas. Call (817) 818-1034 or email riley@dynastylm.com."]
];

const disclaimer = `<p class="legal-note">Dynasty Mineral Partners is a mineral and royalty interest acquisition company. We are not attorneys or tax advisors, and nothing on this website is legal, tax, or financial advice.</p>`;

export const pages = [
  {
    file: "how-it-works.html",
    path: "/how-it-works",
    title: "How to Sell Mineral Rights | Dynasty Mineral Partners",
    description: "How a mineral-rights sale works with a direct buyer: what we ask, how an offer is built, and who handles title and closing. No fees and no obligation.",
    crumb: "How It Works",
    h1: "How selling your mineral rights works",
    lede: "Five steps from a phone call to getting paid. You are talking to the buyer, not a broker listing your interest for someone else.",
    state: "",
    faqs: [
      { q: "Do I need paperwork before I contact you?", a: "No. A county and whatever you know about the interest is enough to start. Check stubs, division orders, leases, and deeds make the evaluation faster when you have them." },
      { q: "Can I sell only part of my interest?", a: "Yes. Some owners sell a portion for cash now and keep the rest. The offer will describe exactly what would transfer." },
      { q: "Who pays for title work?", a: "If you accept an offer, we coordinate and cover the title work and closing documents as part of buying the interest. There is no separate fee to you for the offer itself." }
    ],
    article: `
<h2>Step 1. Tell us what you own</h2>
<p>Call <a href="tel:+18178181034">(817) 818-1034</a> or use the form. We will ask where the minerals are, whether you receive royalty checks, and how you came to own the interest. Inherited, small, and fractional shares are welcome. A check stub, division order, lease, or deed helps us move faster. You do not need any of them to start.</p>
<h2>Step 2. We evaluate the specific interest</h2>
<p>There is no honest flat price per acre. We look at public records and production data for your tract: which wells it is tied to, how those wells have produced, the lease terms, your decimal, and nearby permits or drilling. Producing interests (PDP), near-term interests (a permit or a drilled-but-uncompleted well), and undeveloped locations (PUD) are priced differently because the risk is different.</p>
<p>Our buy box is the Permian Basin in Texas and New Mexico, Red Fork and Cherokee in the Oklahoma Anadarko, the DJ Basin in Weld County, Colorado, the Powder River Basin in Converse County, Wyoming, and occasionally the Bakken in Montana and North Dakota. If your county is outside that, we will say so.</p>
<h2>Step 3. You get a written cash offer</h2>
<p>We send a written offer, usually within a few business days of having enough to evaluate the interest. Read it. Talk it over with family, an attorney, or a tax advisor. Nothing in the offer requires you to accept it.</p>
<div class="callout"><p>You can sell all of an interest or only part of it. Some owners take cash for a portion and keep the rest of the minerals in the family.</p></div>
<h2>Step 4. Title and closing</h2>
<p>If you accept, we order title, work through curative items, and prepare the closing documents — typically a mineral deed or a royalty deed, depending on what you own. Most closings finish within a few weeks. County title is what usually sets the timeline, not a countdown on our side.</p>
<p>We are not your attorney. Have your own lawyer review the deed before you sign if you want that review. We expect you to.</p>
<h2>Step 5. You are paid</h2>
<p>When the deed is signed and closing is complete, you are paid and the operator is notified of the change in ownership so later royalties follow the new owner. If you kept a portion, that portion stays in your name.</p>
<h2>What it costs you</h2>
<p>Nothing, to find out. There is no fee for an offer and no broker commission, because we are the buyer. Selling can have tax consequences that depend on your basis, how you inherited the interest, and the rest of your situation. That is a question for your tax advisor, not for us.</p>
${disclaimer}`
  },
  {
    file: "mineral-rights-value.html",
    path: "/mineral-rights-value",
    title: "What Are Mineral Rights Worth? | Dynasty Mineral Partners",
    description: "What changes the value of an oil and gas mineral or royalty interest: income, decline, lease terms, and nearby drilling. How to get a written offer for yours.",
    crumb: "What It’s Worth",
    h1: "What are your mineral rights worth?",
    lede: "Buyers price an interest, not a county. Here is what actually moves the number — and what a cash offer is not.",
    state: "",
    faqs: [
      { q: "Can you quote a price per acre?", a: "Not honestly, not without looking at the interest. Two owners in the same county can be far apart because of production, lease terms, and what is left to drill." },
      { q: "Does a royalty check tell you the value?", a: "It is the starting point for a producing interest, not the whole answer. Decline, deductions, remaining locations, and the lease all change what a buyer will pay for that income." },
      { q: "Is an offer an appraisal?", a: "No. A cash offer is what we are willing to pay to buy the interest. It is not an appraisal, a fairness opinion, or tax advice." }
    ],
    article: `
<h2>There is no single price per acre</h2>
<p>Anyone quoting one number for “mineral rights in Texas” or “a Weld County acre” has not looked at your interest. Value follows the wells, the lease, and your share of them. Be wary of a per-acre figure that arrives before those details do.</p>
<h2>What we look at</h2>
<ul>
<li><strong>Current royalty income.</strong> For a producing interest, recent checks are the starting point. The stub shows your decimal, volumes, price, and deductions.</li>
<li><strong>Decline.</strong> How long the wells have produced, and how fast the volumes are falling, changes how much future income is left.</li>
<li><strong>Your share.</strong> Net mineral acres or the decimal interest on a division order determines how much of a well you actually own.</li>
<li><strong>The lease.</strong> Royalty rate, whether costs are deducted, and whether the minerals are leased, held by production, or open.</li>
<li><strong>What is not drilled yet.</strong> A permit, a drilled-but-uncompleted well, or an undeveloped location can be worth more than today’s check — or nothing, if the rock and the operator’s plans do not support it.</li>
<li><strong>Commodity prices and the local market.</strong> Oil and gas prices move what buyers will pay. So does how actively that county is being drilled right now.</li>
</ul>
<h2>Producing, near-term, and undeveloped</h2>
<p><strong>Producing interests (PDP)</strong> are usually valued from the income they generate and how that income is expected to decline. <strong>Near-term interests</strong> — a permit, or a well that has been drilled but not completed — are valued on what that well is expected to become. <strong>Undeveloped locations (PUD)</strong> are valued on the chance and the timing of future wells, which is why the same “open” minerals in two townships can be priced nothing alike.</p>
<p>Overrides (ORRI) are priced off the lease they come out of. They generally end when that lease ends, so the remaining life of the lease is part of the value.</p>
<h2>What to pull off a check stub</h2>
<p>A useful stub shows the well name, your decimal interest, production month, volumes, price, taxes, and any deductions. Three recent months tell a clearer story than one. If you do not have stubs, the county and the owner name on the last division order or deed are enough for us to start looking.</p>
<div class="callout"><p>An offer from us is a bid to buy. It is not an appraisal and it is not a prediction of what someone else might pay. Compare it with advice from your own advisors before you decide.</p></div>
<h2>Get a number for your interest</h2>
<p>The way to get a real figure is to have the interest evaluated. Our offers are in writing, free, and easy to decline. See <a href="/how-it-works">how the process works</a> or <a href="/inherited-mineral-rights">what changes when the interest was inherited</a>.</p>
${disclaimer}`
  },
  {
    file: "inherited-mineral-rights.html",
    path: "/inherited-mineral-rights",
    title: "Sell Inherited Mineral Rights | Dynasty Mineral Partners",
    description: "Inherited oil and gas minerals or royalties? How a sale works with several heirs, unfinished probate, or very little paperwork. No fees and no obligation.",
    crumb: "Inherited Minerals",
    h1: "Selling inherited mineral rights",
    lede: "A lot of mineral owners never bought anything. They inherited a share from a parent or grandparent, sometimes a small decimal split across several people.",
    state: "",
    faqs: [
      { q: "Can each heir sell separately?", a: "Usually, yes. We can offer on your share without the rest of the family selling. If everyone wants to sell together, we can make an offer to each owner." },
      { q: "What if probate is not finished?", a: "Title has to show that you own the interest before it can be deeded. Depending on the state and the estate, that can mean probate, an affidavit of heirship, or another document. We will tell you what title shows. A lawyer licensed where the minerals are located should advise you on the estate." },
      { q: "What if I do not know the county?", a: "Start with the names on any letter, check, or deed you have. Operator mail and old division orders often name the county. If you truly have none of that, call and we will tell you whether there is enough to search." }
    ],
    article: `
<h2>Inherited minerals are a normal part of this business</h2>
<p>Checks start arriving, or a division order shows up, or a sibling forwards a letter from an operator. The interest may be a few acres out of a parent’s estate, split four or five ways. That is a common way mineral ownership looks, and it is something we buy — when it sits in our buy box.</p>
<p>We buy inherited interests in the Permian Basin (Texas and New Mexico), the Red Fork and Cherokee in Oklahoma’s Anadarko Basin, the DJ Basin in Weld County, Colorado, the Powder River Basin in Converse County, Wyoming, and occasionally the Bakken in Montana and North Dakota.</p>
<h2>Can you sell before probate is finished?</h2>
<p>It depends on title. The deed we take has to come from the person who actually owns the interest. In some estates that ownership is already of record. In others the estate still needs probate, an affidavit of heirship, or another step the state requires. We review what the county records show and tell you what is in the way. We do not practice law, and estate questions belong with an attorney licensed in the state where the minerals are.</p>
<h2>Several heirs</h2>
<p>Each heir can usually sell their own share. You do not need the whole family to agree before we can offer on your portion. If the family would rather sell together, we can offer each owner on the share they own. A partial sale — keeping some of your own share — is also something we can structure when title allows it.</p>
<h2>When you do not know what you inherited</h2>
<p>That is common. Useful starting points are the county, a well name, an owner name on a stub, a division order, a will, or an old deed. We can search public records from there. You do not need a complete file to ask the question.</p>
<h2>Why people sell inherited minerals</h2>
<ul>
<li>The checks are small, irregular, and more paperwork than income.</li>
<li>The estate is being settled and the heirs would rather divide cash than a decimal interest.</li>
<li>The minerals are in a county the family no longer has any tie to.</li>
</ul>
<h2>Keeping them is also reasonable</h2>
<p>Some families hold inherited minerals for the income and for whatever gets drilled later. Others would rather have the cash. An offer tells you what the cash option is. It does not require you to take it. Read <a href="/mineral-rights-value">what drives the value</a> before you decide, and ask your own tax advisor what a sale would mean for you. Inherited property often has a different tax basis than property you bought. We cannot tell you what yours is.</p>
${disclaimer}`
  },
  {
    file: "faq.html",
    path: "/faq",
    title: "Mineral Rights FAQ | Dynasty Mineral Partners",
    description: "Straight answers on fees, fractional and inherited minerals, partial sales, closing, and where Dynasty Mineral Partners actually buys oil and gas interests.",
    crumb: "FAQ",
    h1: "Frequently asked questions",
    lede: "Short answers about selling a mineral or royalty interest to a direct buyer. Nothing here is legal, tax, or financial advice.",
    state: "",
    article: `
<h2 class="faq-group">Selling</h2>
<div class="faq">
<details><summary>How do you decide what an interest is worth?</summary><p>We look at current royalty income, how production is declining, nearby permits and drilling, lease terms, your decimal or net acres, and what similar interests in that area are trading for. The result is a written offer for your interest, not a generic per-acre quote. More on this is on <a href="/mineral-rights-value">what mineral rights are worth</a>.</p></details>
<details><summary>Are there any fees to get an offer?</summary><p>No. There is never a charge to submit your information or to receive a cash offer, and you do not owe a commission. We are the buyer.</p></details>
<details><summary>Do I need a broker?</summary><p>No. You can deal with us directly. Hiring a broker is your choice, not a requirement, and we do not charge a broker’s fee either way.</p></details>
<details><summary>Do I have to sell all of my mineral rights?</summary><p>No. Many owners sell part of a mineral or royalty interest and keep the rest. The offer spells out what would transfer.</p></details>
<details><summary>What if I decide not to sell?</summary><p>Then you don’t. An offer is not a contract until you accept it, and declining does not cost you anything.</p></details>
</div>
<h2 class="faq-group">Your interest</h2>
<div class="faq">
<details><summary>Do you buy small or fractional interests?</summary><p>Yes. Small fractions and inherited shares are a regular part of what we buy, including interests that are awkward to sell through a listing process.</p></details>
<details><summary>Do you buy if I am already receiving royalty checks?</summary><p>Yes. Producing interests — PDP, proved developed producing — are a core part of the buy box, along with near-term development and undeveloped locations.</p></details>
<details><summary>Do you buy overriding royalty interests?</summary><p>Yes. Tell us if what you own is an override (ORRI) rather than a mineral interest. Overrides are carved out of a lease and generally last only as long as that lease.</p></details>
<details><summary>Do you buy inherited mineral rights?</summary><p>Yes, including interests split among heirs. See <a href="/inherited-mineral-rights">selling inherited mineral rights</a> for how probate and multiple owners usually work. We are not estate attorneys.</p></details>
<details><summary>What if I don’t know exactly what I own?</summary><p>Start with the county, a well name, or any letter from an operator. We can research public records from there. Paperwork is helpful and not required to start.</p></details>
</div>
<h2 class="faq-group">Where we buy</h2>
<div class="faq">
<details><summary>Which states and basins do you buy in?</summary><p>The Permian Basin in Texas and New Mexico, both the Midland Basin and the Delaware Basin. Red Fork and Cherokee in the Anadarko Basin of Oklahoma. The DJ Basin in Weld County, Colorado. The Powder River Basin in Converse County, Wyoming. Occasionally the Bakken in Montana and North Dakota.</p></details>
<details><summary>Do you buy in Louisiana, the Haynesville, the Barnett, or the Eagle Ford?</summary><p>No. Those areas are outside our current buy box, including Haynesville and South Louisiana. The old Louisiana page is still online so the address does not disappear, and it explains that directly. If you own minerals there and want a yes-or-no, call <a href="tel:+18178181034">(817) 818-1034</a>.</p></details>
<details><summary>Do you buy SCOOP, STACK, or Arkoma interests in Oklahoma?</summary><p>Our Oklahoma focus is the Red Fork and Cherokee plays in the Anadarko Basin. If your interest is in another Oklahoma play, call and we will tell you whether it fits. We would rather say no quickly than imply that every Oklahoma basin is in the buy box.</p></details>
<details><summary>What if my state is not on the list?</summary><p>Choose “Other” on the form or call. We will tell you if we can evaluate it. Most interests outside the basins above are not a fit.</p></details>
</div>
<h2 class="faq-group">Closing</h2>
<div class="faq">
<details><summary>How long does the process take?</summary><p>A written offer usually goes out within a few business days once we have enough to evaluate the interest. After you accept, most closings are completed within a few weeks. County title work is the part that varies. The full sequence is on <a href="/how-it-works">how it works</a>.</p></details>
<details><summary>What happens after I accept?</summary><p>We order title, clear what can be cleared, prepare the deed, and stay in touch until you are paid. You can have your own attorney review the documents. We are not your lawyer.</p></details>
<details><summary>Which documents help?</summary><p>Recent royalty check stubs, a division order, an oil and gas lease, a deed, or probate papers. Bring whatever you have. None of it is required to ask for an offer.</p></details>
<details><summary>Will I owe tax on the sale?</summary><p>We can’t tell you. A mineral sale can have income-tax consequences that depend on your basis and how you acquired the interest. Talk with your own tax advisor before you accept an offer.</p></details>
</div>
<p>Still stuck? Call <a href="tel:+18178181034">(817) 818-1034</a> or email <a href="mailto:riley@dynastylm.com">riley@dynastylm.com</a>.</p>
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
<p>This website is operated by Dynasty Land &amp; Minerals, LLC, doing business as Dynasty Mineral Partners (“we,” “us”), based in Weatherford, Texas. Contact: <a href="mailto:riley@dynastylm.com">riley@dynastylm.com</a>, <a href="tel:+18178181034">(817) 818-1034</a>.</p>
<h2>Information we collect</h2>
<p>When you submit the offer form, we collect what you provide: name, phone number, email (if you include one), state, county, whether you receive royalty checks, and the page you submitted from. We also collect standard technical data, such as browser type and pages visited, through cookies and similar tools used by our analytics and advertising tags.</p>
<h2>How we use it</h2>
<p>We use your information to evaluate your mineral interest, contact you about an offer, and operate and measure this website and our advertising.</p>
<h2>Calls and texts</h2>
<p>If you consent on the form, we may contact you by phone, text, or email, including by automated means. Consent is not a condition of any offer. Message and data rates may apply. You can opt out of texts by replying STOP, and you can tell us you no longer want to be contacted.</p>
<h2>How the form is delivered</h2>
<p>Submissions are sent to us by email or through a form-processing service we configure (for example a form endpoint or an email provider). That provider receives the information you submit so it can deliver the message to us. Until that delivery is configured, the form will ask you to call or email instead of pretending the message was sent.</p>
<h2>Analytics and advertising</h2>
<p>We use Google Analytics (measurement ID G-SCQXCMMNTG) and the Meta (Facebook) Pixel to understand traffic and measure ads. Those services may use cookies. You can manage ad settings through Google and Meta and through your browser.</p>
<h2>Sharing</h2>
<p>We do not sell your personal information. We share it with service providers who help us operate (hosting, email or form delivery, and analytics), with parties involved in a closing you agree to, or when the law requires it.</p>
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
    description: "Cash offers for Permian Basin mineral and royalty interests in Texas, including the Midland Basin and the Texas Delaware Basin. Direct buyer. No fees.",
    crumb: "Texas",
    h1: "Sell mineral rights in the Texas Permian",
    lede: "Dynasty Mineral Partners buys oil and gas minerals, royalties, and overrides in the Texas Permian — the Midland Basin and the Texas side of the Delaware Basin.",
    faqHeading: "Questions about Texas",
    state: "Texas",
    related: [
      ["/sell-mineral-rights-permian-basin", "Permian Basin"],
      ["/sell-mineral-rights-new-mexico", "New Mexico Delaware Basin"]
    ],
    faqs: [
      { q: "Do you buy Eagle Ford, Barnett, or East Texas minerals?", a: "Those plays are outside our current Texas buy box. Our Texas focus is the Permian. Call and we will tell you directly if an interest elsewhere in Texas is something we can look at." },
      { q: "Which Texas counties do you focus on?", a: "Midland Basin counties such as Midland, Martin, Howard, Glasscock, Reagan, and Upton, and Delaware Basin counties such as Reeves, Loving, Ward, Winkler, Pecos, and Culberson. Other Permian counties are worth a call." },
      { q: "Do you buy small or inherited Texas interests?", a: "Yes. Fractional and inherited interests are welcome. You do not need to own an entire section." }
    ],
    article: `
<h2>Our Texas buy box is the Permian</h2>
<p>Texas mineral ownership is often old, split, and inherited. We buy from individual and family owners, not only from companies with a full leasehold. The interests we want in Texas are in the Permian Basin: producing wells (PDP), near-term development (permits and drilled-but-uncompleted wells), and proved undeveloped locations (PUD). Minerals, royalties, and overriding royalties all fit.</p>
<h2>Midland Basin and the Texas Delaware</h2>
<p>The Midland Basin is the eastern Permian. Counties we look at regularly include Midland, Martin, Howard, Glasscock, Reagan, and Upton. The Delaware Basin is the western Permian. On the Texas side that includes counties such as Reeves, Loving, Ward, Winkler, Pecos, and Culberson. The New Mexico side of the Delaware is Lea and Eddy counties, covered on our <a href="/sell-mineral-rights-new-mexico">New Mexico</a> page. A longer look at both sides is on the <a href="/sell-mineral-rights-permian-basin">Permian Basin</a> page.</p>
<p>If your tract is Permian but the county is not named here, call anyway. If it is Eagle Ford, Barnett, Haynesville, or elsewhere in East or South Texas, it is outside the current buy box. We will say that plainly.</p>
<h2>Records that describe a Texas interest</h2>
<p>Oil and gas production and permitting in Texas run through the <a href="https://www.rrc.texas.gov/">Railroad Commission of Texas</a>. Deeds and leases are recorded with the county clerk in the county where the minerals are. A recent royalty stub plus the legal description — abstract, survey, or section — is usually enough for us to find the rest.</p>
<h2>How an offer works</h2>
<p>Tell us the county and what you know. We evaluate the interest and send a written cash offer, usually within a few business days. If you accept, we handle title and closing. If you do not, there is no fee. <a href="/how-it-works">See the full process</a>.</p>
<div class="callout"><p>No fees. No broker. No obligation to sell. Call <a href="tel:+18178181034">(817) 818-1034</a> or use the form. Inherited and fractional interests are welcome.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-new-mexico.html",
    path: "/sell-mineral-rights-new-mexico",
    title: "Sell Mineral Rights in New Mexico | Dynasty Mineral Partners",
    description: "Cash offers for Delaware Basin mineral and royalty interests in New Mexico, including Lea and Eddy counties. Direct buyer. No fees, no obligation.",
    crumb: "New Mexico",
    h1: "Sell mineral rights in New Mexico",
    lede: "In New Mexico we buy Delaware Basin minerals, royalties, and overrides — principally Lea County and Eddy County, where the Permian crosses the state line.",
    faqHeading: "Questions about New Mexico",
    state: "New Mexico",
    related: [
      ["/sell-mineral-rights-permian-basin", "Permian Basin"],
      ["/sell-mineral-rights-texas", "Texas Permian"]
    ],
    faqs: [
      { q: "Is the New Mexico buy box the whole state?", a: "No. Our New Mexico focus is the Delaware Basin, especially Lea and Eddy counties. The San Juan Basin and the rest of the state are outside the current buy box." },
      { q: "Do you buy producing and non-producing interests?", a: "Yes. Producing royalties, near-term wells (permits and DUCs), and undeveloped Permian locations are all in range, including small and inherited shares." },
      { q: "Where are New Mexico mineral deeds recorded?", a: "With the county clerk in the county where the minerals are located. Well and production records are kept by the New Mexico Oil Conservation Division." }
    ],
    article: `
<h2>Delaware Basin, not the whole state</h2>
<p>The Permian does not stop at the Texas line. The Delaware Basin runs through Lea County and Eddy County, New Mexico, and that is the New Mexico interest we buy: minerals, royalties, and overriding royalties, whether they are producing, permitted, drilled but uncompleted, or still undeveloped locations.</p>
<p>The San Juan Basin and other New Mexico plays are not part of the current buy box. If that is where your minerals are, call and we will tell you rather than collect a lead we cannot use.</p>
<h2>What owners in Lea and Eddy usually have</h2>
<p>A lot of New Mexico mineral ownership is fractional and inherited, sometimes described by section, township, and range under the federal survey. A division order decimal and a section number are often enough to identify the tract. Small shares are welcome. You do not need to own the whole section, and you do not need every cousin to sell before we can offer on your piece.</p>
<h2>Where the records are</h2>
<p>The <a href="https://www.emnrd.nm.gov/ocd/">New Mexico Oil Conservation Division</a> regulates oil and gas wells and holds production and permitting records. Deeds are recorded with the county clerk in Lea County or Eddy County, depending on where the minerals sit. We use both when we evaluate an interest.</p>
<h2>The Texas side of the same basin</h2>
<p>Reeves, Loving, and the other Texas Delaware counties are the other half of this basin. If you own on both sides of the line, mention both counties. Background on the whole basin is on the <a href="/sell-mineral-rights-permian-basin">Permian page</a>, and the Texas counties are on the <a href="/sell-mineral-rights-texas">Texas page</a>.</p>
<div class="callout"><p>No fees. No broker. No obligation. Call <a href="tel:+18178181034">(817) 818-1034</a>. The written offer usually follows within a few business days of an evaluation. <a href="/how-it-works">How closing works</a>.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-oklahoma.html",
    path: "/sell-mineral-rights-oklahoma",
    title: "Sell Mineral Rights in Oklahoma | Dynasty Mineral Partners",
    description: "Cash offers for Red Fork and Cherokee mineral and royalty interests in Oklahoma’s Anadarko Basin. Direct buyer. Inherited and fractional interests welcome.",
    crumb: "Oklahoma",
    h1: "Sell mineral rights in Oklahoma",
    lede: "Our Oklahoma buy box is the Red Fork and Cherokee plays in the Anadarko Basin — minerals, royalties, and overrides, including inherited and fractional shares.",
    faqHeading: "Questions about Oklahoma",
    state: "Oklahoma",
    related: [
      ["/sell-mineral-rights-texas", "Texas Permian"],
      ["/inherited-mineral-rights", "Inherited minerals"]
    ],
    faqs: [
      { q: "Do you buy SCOOP, STACK, or Arkoma minerals?", a: "Those are not our focus. We buy Red Fork and Cherokee in the Anadarko Basin. If your interest is in another Oklahoma play, call and we will tell you whether we can look at it." },
      { q: "I received a pooling notice. Can I still ask for an offer?", a: "Yes, you can ask. Pooling elections have deadlines and legal consequences set out in the order. Read the order and consider talking with an Oklahoma oil and gas attorney before you elect. An offer from us is one option to weigh. It is not legal advice about the election." },
      { q: "Do you buy small Oklahoma mineral interests?", a: "Yes. Oklahoma minerals are often split across many owners and many sections. A small net-acre position is still something we will evaluate." }
    ],
    article: `
<h2>Red Fork and Cherokee, in the Anadarko</h2>
<p>The Red Fork and Cherokee are Pennsylvanian sands across the Anadarko Basin of western Oklahoma. They have been drilled for a long time, and a lot of the ownership is inherited, fractional, and scattered across more than one section. That is the Oklahoma interest we buy: producing royalties, near-term wells, and undeveloped locations in those plays, plus overriding royalties where the lease supports them.</p>
<p>SCOOP, STACK, and the Arkoma Basin are not the buy box. If your minerals are there, call <a href="tel:+18178181034">(817) 818-1034</a> and we will tell you whether this is a fit. We will not dress up a statewide “we buy Oklahoma” claim.</p>
<h2>Section, township, and range</h2>
<p>Oklahoma descriptions usually run by section, township, and range. Your decimal may be on a division order or a check stub from the operator. If you have a pooling notice, it often names the section. Any of those is a useful place to start, and none of them is required before you call.</p>
<h2>Pooling notices</h2>
<p>Oil and gas spacing and pooling in Oklahoma run through the <a href="https://oklahoma.gov/occ.html">Oklahoma Corporation Commission</a>. When an operator pools a unit, unleased owners get a limited time to choose among the options in the order. Selling is a separate decision from that election. Deadlines in a pooling order are real, and the consequences of an election are legal questions. Read the order and talk with an Oklahoma oil and gas attorney if you are unsure. We can still tell you what we would pay for the interest so you know that number while you decide.</p>
<h2>Deeds</h2>
<p>Mineral deeds are recorded with the county clerk in the county where the minerals are. We review that record, and the production data, before a written offer. The offer is free to request and free to decline. <a href="/how-it-works">See how closing works</a>.</p>
<div class="callout"><p>Inherited, small, and fractional interests are welcome. No fees and no obligation to sell.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-colorado.html",
    path: "/sell-mineral-rights-colorado",
    title: "Sell Mineral Rights in Colorado | Dynasty Mineral Partners",
    description: "Cash offers for DJ Basin mineral and royalty interests in Weld County, Colorado. A direct buyer. No fees and no obligation to sell.",
    crumb: "Colorado",
    h1: "Sell mineral rights in Colorado",
    lede: "In Colorado we buy DJ Basin minerals, royalties, and overrides, focused on Weld County — producing, near-term, and undeveloped.",
    faqHeading: "Questions about Colorado",
    state: "Colorado",
    related: [
      ["/sell-mineral-rights-wyoming", "Wyoming Powder River"],
      ["/mineral-rights-value", "What it’s worth"]
    ],
    faqs: [
      { q: "Do you buy mineral rights outside Weld County?", a: "Weld County is the focus. The DJ Basin also touches other Front Range counties. Call with the county and we will tell you if it fits. Western Colorado and other basins are outside the current buy box." },
      { q: "Do you buy small inherited interests in the DJ?", a: "Yes. Fractional and inherited shares are welcome, whether or not you have ever seen the property." },
      { q: "Who regulates oil and gas wells in Colorado?", a: "The Energy and Carbon Management Commission. Deeds are recorded with the clerk and recorder in the county where the minerals are located." }
    ],
    article: `
<h2>Weld County and the DJ Basin</h2>
<p>The Denver-Julesburg Basin is where we buy in Colorado, and Weld County is the center of that for us. We buy mineral interests, royalty interests, and overriding royalties: wells that are already producing, permits and drilled-but-uncompleted wells, and undeveloped locations in the basin.</p>
<p>If your minerals are in another Colorado county, call before you spend time gathering records. Parts of the DJ sit outside Weld County, and those are a conversation. The Piceance and other western Colorado basins are not our current focus.</p>
<h2>What a DJ interest often looks like</h2>
<p>Many Weld County owners inherited a fractional interest under land they have never farmed, and the mail they receive is a royalty statement or a lease offer. A stub with the well name and your decimal is enough for us to start. Small denominators are fine. You can sell your share without the other owners selling theirs, assuming title is in your name.</p>
<h2>Records</h2>
<p>Colorado oil and gas operations are regulated by the <a href="https://ecmc.state.co.us/">Energy and Carbon Management Commission</a>. Deeds and leases are recorded with the county clerk and recorder — in this buy box, usually Weld County. We use both the well records and the county record when we write an offer.</p>
<h2>A direct offer, not a listing</h2>
<p>We buy for our own account. There is no fee to ask and no obligation to take the number. Offers are in writing, usually within a few business days of an evaluation. <a href="/how-it-works">How the rest of the sale works</a>.</p>
<div class="callout"><p>Call <a href="tel:+18178181034">(817) 818-1034</a> or send the form. We are based in Weatherford, Texas, and we buy in Weld County from here.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-wyoming.html",
    path: "/sell-mineral-rights-wyoming",
    title: "Sell Mineral Rights in Wyoming | Dynasty Mineral Partners",
    description: "Cash offers for Powder River Basin mineral and royalty interests, focused on Converse County, Wyoming. Direct buyer. No fees, no obligation.",
    crumb: "Wyoming",
    h1: "Sell mineral rights in Wyoming",
    lede: "Our Wyoming buy box is the Powder River Basin, and Converse County in particular. Minerals, royalties, and overrides — producing, near-term, and undeveloped.",
    faqHeading: "Questions about Wyoming",
    state: "Wyoming",
    related: [
      ["/sell-mineral-rights-colorado", "Colorado DJ Basin"],
      ["/sell-mineral-rights-montana", "Montana Bakken"]
    ],
    faqs: [
      { q: "Do you buy across the Powder River Basin or only Converse County?", a: "Converse County is the focus. If your interest is in another Powder River county, call and we will tell you if we can evaluate it. The rest of Wyoming is outside the current buy box." },
      { q: "Do you buy federal or fee minerals?", a: "We buy private mineral and royalty interests, including interests under fee land. If you are not sure whether yours is fee, federal, or a leasehold override, tell us what the document says and we will sort out whether it is something we can buy." },
      { q: "Are fractional Wyoming interests too small?", a: "No. Inherited and fractional shares are welcome." }
    ],
    article: `
<h2>Converse County, Powder River Basin</h2>
<p>The Powder River Basin in northeastern Wyoming is an active oil basin, and Converse County is where our Wyoming buying is aimed. We buy mineral interests, royalty interests, and overriding royalties there: PDP, permits and DUCs, and undeveloped locations.</p>
<p>Campbell County and other Powder River counties are not automatically in or out. Call with the county. If the interest is in a different Wyoming basin, it is outside what we are buying now, and we will tell you that.</p>
<h2>How these interests are usually owned</h2>
<p>Powder River minerals are often fractional, sometimes inherited, and sometimes described alongside a surface estate the family sold years ago. The mineral owner and the surface owner do not have to be the same person. We buy the mineral or royalty side. A check stub, a division order, or a deed that names Converse County is a strong start.</p>
<h2>Records</h2>
<p>The <a href="https://wogcc.wyo.gov/">Wyoming Oil and Gas Conservation Commission</a> holds well and production records. Deeds are recorded with the county clerk in the county where the minerals are — for this buy box, the Converse County clerk. We review both before we send a written offer.</p>
<h2>What happens next</h2>
<p>You get a written number, usually within a few business days of an evaluation. You can sell all of your interest or ask about selling part. There is no fee and no obligation. <a href="/how-it-works">The closing steps</a> are the same here as in Texas: we coordinate title, you decide whether to sign, and you should have your own attorney if you want the deed reviewed.</p>
<div class="callout"><p>Call <a href="tel:+18178181034">(817) 818-1034</a>. Inherited, small, and fractional Converse County interests are welcome.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-montana.html",
    path: "/sell-mineral-rights-montana",
    title: "Sell Mineral Rights in Montana | Dynasty Mineral Partners",
    description: "Occasional cash offers for Bakken mineral and royalty interests in eastern Montana. Dynasty will tell you plainly if we can make an offer.",
    crumb: "Montana",
    h1: "Sell mineral rights in Montana",
    lede: "The Bakken in eastern Montana is an occasional part of our buy box. It is not a standing focus the way the Permian is. If your minerals are there, ask — we will tell you if we can offer.",
    faqHeading: "Questions about Montana",
    state: "Montana",
    related: [
      ["/sell-mineral-rights-north-dakota", "North Dakota Bakken"],
      ["/sell-mineral-rights-wyoming", "Wyoming"]
    ],
    faqs: [
      { q: "Will you always make an offer on Montana minerals?", a: "No. Bakken purchases are occasional. Sending the details lets us say yes or no instead of you guessing." },
      { q: "Which part of Montana?", a: "The Bakken along the North Dakota line in eastern Montana, including areas such as Richland County. Other Montana basins are outside the current buy box." },
      { q: "Do you buy inherited Bakken minerals?", a: "Yes, when the interest is one we are buying. Small and fractional shares are fine to submit." }
    ],
    article: `
<h2>Occasional Bakken purchases</h2>
<p>Montana is in our buy box in a narrower way than Texas or New Mexico. We occasionally buy Bakken mineral, royalty, and overriding-royalty interests in eastern Montana, including the producing fairway around Richland County and the counties along the North Dakota line. Producing interests, near-term wells, and undeveloped Bakken locations are the ones worth sending.</p>
<p>If your minerals are in another part of Montana, they are outside what we are buying. Call <a href="tel:+18178181034">(817) 818-1034</a> and we will say so. We would rather turn it down in one conversation than imply every Montana county is a fit.</p>
<h2>The other side of the state line</h2>
<p>The same Bakken trend continues into western North Dakota. If you own on both sides, or you are not sure which side a well is on, say that. The North Dakota page is <a href="/sell-mineral-rights-north-dakota">here</a>. The same “occasional” rule applies there.</p>
<h2>Paperwork and title</h2>
<p>A royalty stub, division order, or deed is enough to start. Deeds are recorded with the clerk and recorder in the county where the minerals are. Oil and gas wells are regulated by the Montana Board of Oil and Gas Conservation, within the Department of Natural Resources and Conservation. You do not need to pull those records yourself.</p>
<p>Inherited and fractional interests are welcome when the location fits. You can ask about selling part of your share. There is no fee for an offer and no obligation to take it. <a href="/how-it-works">How an accepted offer gets to closing</a>.</p>
<div class="callout"><p>Because Bakken buying is occasional, the honest first step is a phone call. We will tell you if we can evaluate it.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-north-dakota.html",
    path: "/sell-mineral-rights-north-dakota",
    title: "Sell Mineral Rights in North Dakota | Dynasty Mineral Partners",
    description: "Occasional cash offers for Bakken mineral and royalty interests in western North Dakota. Direct buyer. Small and inherited interests welcome.",
    crumb: "North Dakota",
    h1: "Sell mineral rights in North Dakota",
    lede: "We occasionally buy Bakken minerals, royalties, and overrides in western North Dakota. It is not a basin we pursue the way we pursue the Permian. Ask, and we will tell you if we can offer.",
    faqHeading: "Questions about North Dakota",
    state: "North Dakota",
    related: [
      ["/sell-mineral-rights-montana", "Montana Bakken"],
      ["/how-it-works", "How it works"]
    ],
    faqs: [
      { q: "Which North Dakota counties?", a: "The Bakken in western North Dakota, including counties such as McKenzie and Williams where Bakken wells are concentrated. The rest of the state is outside the current buy box." },
      { q: "Is every Bakken interest a fit?", a: "No. These purchases are occasional. We look at producing interests, near-term wells, and undeveloped locations, then tell you whether we can make an offer." },
      { q: "Do you buy small mineral interests in North Dakota?", a: "Yes, when we are buying in that area. Fractional and inherited shares are welcome to submit." }
    ],
    article: `
<h2>Western North Dakota, occasionally</h2>
<p>The Bakken in western North Dakota — counties such as McKenzie and Williams, where Bakken development has been concentrated — is an occasional part of the Dynasty buy box. We look at mineral interests, royalty interests, and overriding royalties: PDP, permits and DUCs, and undeveloped locations. We do not treat the whole state as in-bounds, and we do not treat every Bakken decimal as one we will buy.</p>
<p>If you want a straight answer, call <a href="tel:+18178181034">(817) 818-1034</a> or send the form with the county. You will get a yes or a no, not a vague “we buy nationwide.”</p>
<h2>Montana is the same trend</h2>
<p>Eastern Montana Bakken interests follow the same rule and are described on the <a href="/sell-mineral-rights-montana">Montana page</a>. Ownership that straddles the line can be submitted once. Name both counties if you know them.</p>
<h2>Records</h2>
<p>The <a href="https://www.dmr.nd.gov/oilgas/">North Dakota Department of Mineral Resources, Oil and Gas Division</a>, holds well and production information. Deeds are recorded with the county recorder where the minerals are located. A stub or division order skips a lot of searching, and you can start without one.</p>
<h2>Inherited shares</h2>
<p>Bakken minerals are often split among heirs who live far from the wells. We buy those shares when the interest itself fits, and one heir can sell without the others. There is no fee to ask and no obligation to accept a written offer. Tax treatment of an inherited interest is a question for your tax advisor. <a href="/inherited-mineral-rights">More on inherited minerals</a>.</p>
<div class="callout"><p>No fees. No broker. No obligation. If it is not a fit, we will say so.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-permian-basin.html",
    path: "/sell-mineral-rights-permian-basin",
    title: "Sell Permian Basin Mineral Rights | Dynasty Mineral Partners",
    description: "Cash offers for Permian Basin minerals and royalties in the Midland and Delaware basins, across Texas and New Mexico. PDP, near-term, and PUD.",
    crumb: "Permian Basin",
    h1: "Sell mineral rights in the Permian Basin",
    lede: "The Permian is the center of our buy box. We buy minerals, royalties, and overrides on both sides of the basin and both sides of the Texas–New Mexico line.",
    faqHeading: "Questions about the Permian",
    state: "",
    related: [
      ["/sell-mineral-rights-texas", "Texas"],
      ["/sell-mineral-rights-new-mexico", "New Mexico"]
    ],
    faqs: [
      { q: "What is the difference between the Midland and Delaware basins?", a: "They are the two halves of the Permian. The Midland Basin is the eastern side, in Texas. The Delaware Basin is the western side, in Texas and in Lea and Eddy counties, New Mexico. We buy in both." },
      { q: "Do you buy only producing Permian wells?", a: "No. Producing interests (PDP), near-term interests (permits and DUCs), and undeveloped locations (PUD) are all in the buy box, along with overriding royalties." },
      { q: "Do you buy Permian interests outside Texas and New Mexico?", a: "The Permian Basin we buy in is in Texas and New Mexico. Other basins are covered on their own pages." }
    ],
    article: `
<h2>One basin, two states</h2>
<p>The Permian Basin produces from West Texas and southeastern New Mexico. Dynasty Mineral Partners buys mineral interests, royalty interests, and overriding royalties across that basin: the Midland Basin and the Delaware Basin, producing and not yet producing.</p>
<p>State-specific notes are on the <a href="/sell-mineral-rights-texas">Texas</a> and <a href="/sell-mineral-rights-new-mexico">New Mexico</a> pages. If you own in both states, one conversation can cover both.</p>
<h2>Midland Basin</h2>
<p>The Midland Basin sits in Texas. Counties we evaluate regularly include Midland, Martin, Howard, Glasscock, Reagan, and Upton. Ownership here is often a family decimal under a lease that has been held for years, sometimes with new wells permitted on the same tract. We look at the wells that are paying, the ones that are permitted or drilled but not completed, and locations that are still undeveloped.</p>
<h2>Delaware Basin</h2>
<p>The Delaware Basin is the western Permian. In Texas that includes counties such as Reeves, Loving, Ward, Winkler, Pecos, and Culberson. In New Mexico it is principally Lea County and Eddy County. The same interest types apply: PDP, near-term development, and PUD, plus overrides tied to leases in the basin.</p>
<h2>What we need from you</h2>
<p>The county, and as much of the legal description as you have. A royalty check stub is the fastest picture of a producing decimal. If you have never received a check, say that — non-producing and near-term interests are still in range when the location is right. Inherited and fractional shares are a normal Permian fact pattern, not a special case.</p>
<h2>How the offer is made</h2>
<p>We research the interest and send a written cash offer, usually within a few business days. You can refuse it. If you accept, we coordinate title and the deed. Texas deeds are recorded with the county clerk; Railroad Commission records cover the wells. In New Mexico, well records sit with the Oil Conservation Division and deeds with the county clerk. You do not need to order any of that before you call <a href="tel:+18178181034">(817) 818-1034</a>.</p>
<div class="callout"><p>No fees, no broker, and no obligation. Choose Texas or New Mexico on the form, whichever county the minerals are in. If you own in both, pick one and name the other county in the county field or on the phone.</p></div>
${disclaimer}`
  },
  {
    file: "sell-mineral-rights-louisiana.html",
    path: "/sell-mineral-rights-louisiana",
    title: "Louisiana Mineral Rights | Dynasty Mineral Partners",
    description: "Haynesville and South Louisiana are outside Dynasty Mineral Partners’ current buy box. See where we do buy, or call (817) 818-1034.",
    crumb: "Louisiana",
    h1: "Louisiana mineral rights are outside our buy box",
    lede: "We do not currently buy Haynesville, South Louisiana, or other Louisiana mineral and royalty interests. This page stays up so the old address still answers honestly.",
    faqHeading: "Questions about Louisiana",
    state: "Other",
    related: [
      ["/sell-mineral-rights-texas", "Texas Permian"],
      ["/sell-mineral-rights-oklahoma", "Oklahoma"],
      ["/faq", "FAQ"]
    ],
    faqs: [
      { q: "Will you make an offer on Louisiana minerals?", a: "Louisiana is not in our current buy box. Call if you want us to confirm that for your parish. We would rather say no than imply we are a Haynesville or South Louisiana buyer." },
      { q: "Where do you buy instead?", a: "The Permian Basin in Texas and New Mexico, Red Fork and Cherokee in the Oklahoma Anadarko, the DJ Basin in Weld County, Colorado, the Powder River Basin in Converse County, Wyoming, and occasionally the Bakken in Montana and North Dakota." }
    ],
    article: `
<h2>What changed</h2>
<p>An earlier version of this site listed Louisiana, including the Haynesville and South Louisiana, among the places we buy. That is no longer accurate. Dynasty Mineral Partners’ buy box is the Permian Basin (Texas and New Mexico), Red Fork and Cherokee in Oklahoma, the DJ Basin in Weld County, Colorado, the Powder River Basin in Converse County, Wyoming, and occasionally the Bakken. Louisiana is not on that list.</p>
<p>If you own minerals in a Louisiana parish and want a direct answer, call <a href="tel:+18178181034">(817) 818-1034</a>. Please do not expect a Haynesville offer from this form.</p>
<h2>A note owners ask about anyway</h2>
<p>Louisiana oil and gas rights are not the same as Texas minerals. Under the Louisiana Mineral Code, a mineral right created apart from the land is generally a mineral servitude, and a servitude can be extinguished by prescription after ten years of nonuse. Whether a particular servitude is still alive depends on the facts of production and use. That is a legal question for a Louisiana attorney, not something this website can answer for your tract.</p>
<p>Parishes, not counties, are the local unit. Land records are kept by the clerk of court in the parish, and well data is published through the state’s SONRIS system. We are not your lawyer, and nothing on this page is legal advice.</p>
<h2>Where to go from here</h2>
<p>If your minerals are actually in one of the basins we do buy, start there:</p>
<ul>
<li><a href="/sell-mineral-rights-permian-basin">Permian Basin</a> — Texas and New Mexico</li>
<li><a href="/sell-mineral-rights-oklahoma">Oklahoma</a> — Red Fork and Cherokee</li>
<li><a href="/sell-mineral-rights-colorado">Colorado</a> — DJ Basin, Weld County</li>
<li><a href="/sell-mineral-rights-wyoming">Wyoming</a> — Powder River Basin, Converse County</li>
<li><a href="/sell-mineral-rights-montana">Montana</a> and <a href="/sell-mineral-rights-north-dakota">North Dakota</a> — Bakken, occasionally</li>
</ul>
${disclaimer}`
  }
];

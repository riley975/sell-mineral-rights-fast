(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && header && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
        var next = !open;
        toggle.setAttribute("aria-expanded", next ? "true" : "false");
        toggle.setAttribute("aria-label", next ? "Close menu" : "Open menu");
        toggle.textContent = next ? "Close" : "Menu";
        header.classList.toggle("is-open", next);
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        toggle.textContent = "Menu";
        header.classList.remove("is-open");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        toggle.textContent = "Menu";
        header.classList.remove("is-open");
        toggle.focus();
      }
    });
  }

  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (!link) return;
    if (typeof gtag === "function") gtag("event", "phone_click", { page_path: location.pathname });
    if (typeof fbq === "function") fbq("track", "Contact");
  });

  var form = document.getElementById("leadForm");
  if (!form) return;

  var alertBox = document.getElementById("formAlert");
  var thanks = document.getElementById("formThanks");
  var button = document.getElementById("submitBtn");
  var cfg = window.DYNASTY_FORM || {};
  var STATES = ["Texas", "New Mexico", "Oklahoma", "Colorado", "Wyoming", "Montana", "North Dakota", "Other"];

  function digits(value) { return String(value || "").replace(/\D/g, ""); }
  function emailOk(value) {
    if (!value) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  function setError(id, message) {
    var input = document.getElementById(id);
    var slot = document.getElementById(id + "-error");
    if (!input || !slot) return;
    if (message) {
      input.setAttribute("aria-invalid", "true");
      slot.textContent = message;
      slot.classList.add("is-on");
    } else {
      input.removeAttribute("aria-invalid");
      slot.textContent = "";
      slot.classList.remove("is-on");
    }
  }

  function validate() {
    var name = form.name.value.trim();
    var phone = form.phone.value.trim();
    var email = form.email.value.trim();
    var state = form.state.value;
    var first = null;
    function fail(id, message) {
      setError(id, message);
      if (!first) first = document.getElementById(id);
    }
    setError("name", "");
    setError("phone", "");
    setError("email", "");
    setError("state", "");
    setError("consent", "");
    if (name.length < 2) fail("name", "Enter your name.");
    if (digits(phone).length < 10) fail("phone", "Enter a phone number with at least 10 digits.");
    if (!emailOk(email)) fail("email", "Enter a valid email, or leave it blank.");
    if (STATES.indexOf(state) === -1) fail("state", "Choose a state.");
    if (!form.consent.checked) fail("consent", "Consent is required so we can contact you about an offer.");
    if (first) {
      alertBox.textContent = "Please fix the highlighted fields.";
      alertBox.classList.add("is-on");
      first.focus();
      return false;
    }
    alertBox.textContent = "";
    alertBox.classList.remove("is-on");
    return true;
  }

  function showFail() {
    alertBox.innerHTML = 'We couldn’t send this from the form. Call <a href="tel:+18178181034">(817) 818-1034</a> or email <a href="mailto:riley@dynastylm.com">riley@dynastylm.com</a> and we’ll take it from there.';
    alertBox.classList.add("is-on");
  }

  function showThanks() {
    form.hidden = true;
    thanks.hidden = false;
    var heading = thanks.querySelector("h2");
    var card = document.getElementById("offer");
    if (heading) heading.focus({ preventScroll: true });
    if (card && card.scrollIntoView) card.scrollIntoView({ block: "center" });
    if (typeof gtag === "function") gtag("event", "generate_lead", { page_path: location.pathname });
    if (typeof fbq === "function") fbq("track", "Lead");
  }

  function endpoint() {
    if (cfg.web3formsKey) return { type: "web3forms", url: "https://api.web3forms.com/submit" };
    if (cfg.formspreeEndpoint) return { type: "formspree", url: cfg.formspreeEndpoint };
    return { type: "api", url: "/api/lead" };
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    if (!validate()) return;
    if (form.hp_field && form.hp_field.value) {
      showThanks();
      return;
    }
    var payload = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      state: form.state.value,
      county: form.county.value.trim(),
      receiving: form.receiving.value,
      consent: "Yes",
      page: location.href
    };
    var ep = endpoint();
    var body = payload;
    if (ep.type === "web3forms") {
      body = {
        access_key: cfg.web3formsKey,
        subject: "Mineral rights offer request — " + payload.name + " (" + payload.state + ")",
        from_name: "Dynasty Mineral Partners website",
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        state: payload.state,
        county: payload.county,
        receiving: payload.receiving,
        page: payload.page
      };
    }
    button.disabled = true;
    var original = button.textContent;
    button.textContent = "Sending…";
    try {
      var res = await fetch(ep.url, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify(body)
      });
      var data = null;
      try { data = await res.json(); } catch (err) { data = null; }
      var bad = !res.ok || (data && (data.ok === false || data.success === false));
      if (bad) showFail();
      else showThanks();
    } catch (err) {
      showFail();
    } finally {
      button.disabled = false;
      button.textContent = original;
    }
  });
})();

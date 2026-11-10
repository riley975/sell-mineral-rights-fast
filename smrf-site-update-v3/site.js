// Shared script for every page: lead form + scroll reveal.
(function () {
  var form = document.getElementById('leadForm');
  if (form) {
    var msg = document.getElementById('formMsg');
    var btn = document.getElementById('submitBtn');
    var label = btn.textContent;
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      msg.className = 'form-msg';
      btn.disabled = true;
      btn.textContent = 'Sending...';
      var data = Object.fromEntries(new FormData(form).entries());
      data.consent = form.consent.checked ? 'Yes' : 'No';
      data.page = window.location.href;
      data.submittedAt = new Date().toISOString();
      try {
        var res = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('Request failed');
        msg.textContent = "Thanks! We've received your information and will reach out shortly.";
        msg.className = 'form-msg success';
        form.reset();
        if (typeof fbq === 'function') fbq('track', 'Lead');
        if (typeof gtag === 'function') gtag('event', 'generate_lead', { page_path: location.pathname });
      } catch (err) {
        msg.textContent = 'Something went wrong. Please call us directly at (817) 818-1034.';
        msg.className = 'form-msg error';
      } finally {
        btn.disabled = false;
        btn.textContent = label;
        msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // Track phone taps as a conversion signal too.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (!a) return;
    if (typeof fbq === 'function') fbq('track', 'Contact');
    if (typeof gtag === 'function') gtag('event', 'phone_click', { page_path: location.pathname });
  });

  // Scroll reveal (position check, so nothing gets stuck hidden on fast scrolls).
  var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (!els.length) return;
  var ticking = false;
  function pass() {
    ticking = false;
    var line = window.innerHeight * 0.92;
    els = els.filter(function (el) {
      if (el.getBoundingClientRect().top < line) { el.classList.add('is-visible'); return false; }
      return true;
    });
    if (!els.length) { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(pass); } }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  pass();
})();

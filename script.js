/* ============================================================
   MAGNIFY — RENDER + BEHAVIOUR
   You shouldn't need to edit this file. To change site text,
   edit content.js instead.
   ============================================================ */

(function () {
  const C = SITE_CONTENT;

  document.title = `${C.business.name} — Kajang`;

  /* ---------- NAV ---------- */
  const navLinks = document.getElementById('navLinks');
  C.nav.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  const navToggle = document.getElementById('navToggle');
  const siteHeader = document.getElementById('siteHeader');
  navToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      siteHeader.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------- HERO ---------- */
  document.getElementById('heroEyebrow').textContent = C.hero.eyebrow;
  document.getElementById('heroHeadline').textContent = C.hero.headline;
  document.getElementById('heroSub').textContent = C.hero.subheadline;
  document.getElementById('heroCtaPrimary').textContent = C.hero.ctaPrimary;
  document.getElementById('heroCtaSecondary').textContent = C.hero.ctaSecondary;
  document.getElementById('heroCtaSecondary').setAttribute('href', '#courses');

  /* ---------- STAFF LINE GRAPHICS (signature motif) ---------- */
  function buildStaffSVG(el, opts) {
    if (!el) return;
    const lines = 5;
    const gap = opts.gap || 5;
    const height = (lines - 1) * gap + 2;
    el.setAttribute('viewBox', `0 0 100 ${height}`);
    let svgLines = '';
    for (let i = 0; i < lines; i++) {
      const y = 1 + i * gap;
      svgLines += `<line x1="0" y1="${y}" x2="100" y2="${y}" vector-effect="non-scaling-stroke"></line>`;
    }
    el.innerHTML = svgLines;
  }

  ['divider1', 'divider2', 'divider3', 'footerDivider', 'aboutStaff'].forEach(id => {
    buildStaffSVG(document.getElementById(id), { gap: 5 });
  });

  /* Decorative wide staff behind the hero, with a soft treble-clef-like swirl */
  (function heroStaff() {
    const el = document.getElementById('heroStaffBg');
    const w = 1200, h = 500;
    el.setAttribute('viewBox', `0 0 ${w} ${h}`);
    let lines = '';
    const gap = 34;
    const startY = 260;
    for (let i = 0; i < 5; i++) {
      const y = startY + i * gap;
      lines += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="var(--line)" stroke-width="1.5"></line>`;
    }
    // soft decorative arc suggesting a clef, very subtle
    const arc = `<path d="M 90 ${startY - 40} C 40 ${startY - 10}, 60 ${startY + 70}, 120 ${startY + 90} C 170 ${startY + 105}, 190 ${startY + 40}, 150 ${startY + 20}"
      fill="none" stroke="var(--brass)" stroke-width="2.5" stroke-linecap="round" opacity="0.55"></path>`;
    el.innerHTML = lines + arc;
  })();

  /* ---------- COURSES ---------- */
  const courseGrid = document.getElementById('courseGrid');
  C.courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <div class="note-dot"></div>
      <h3>${course.name}</h3>
      <p>${course.description}</p>
    `;
    courseGrid.appendChild(card);
  });

  /* ---------- SERVICES ---------- */
  const serviceGrid = document.getElementById('serviceGrid');
  C.services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
    serviceGrid.appendChild(card);
  });

  /* ---------- ABOUT ---------- */
  document.getElementById('aboutHeading').textContent = C.about.heading;
  const aboutBody = document.getElementById('aboutBody');
  C.about.paragraphs.forEach(p => {
    const para = document.createElement('p');
    para.textContent = p;
    aboutBody.appendChild(para);
  });
  document.getElementById('footerNoteInAbout').textContent = C.footer.note;

  /* ---------- CONTACT ---------- */
  document.getElementById('contactHeading').textContent = C.contact.heading;
  document.getElementById('contactSub').textContent = C.contact.subheading;

  const phoneEl = document.getElementById('contactPhone');
  phoneEl.textContent = C.business.phone;
  phoneEl.href = C.business.phoneLink;

  const emailEl = document.getElementById('contactEmail');
  emailEl.textContent = C.business.email;
  emailEl.href = `mailto:${C.business.email}`;

  document.getElementById('contactAddress').textContent = C.business.address;

  const socialRow = document.getElementById('socialRow');
  socialRow.innerHTML = `
    <a href="${C.business.facebook}" target="_blank" rel="noopener">Facebook</a>
    <a href="${C.business.instagram}" target="_blank" rel="noopener">Instagram</a>
  `;

  document.getElementById('mapFrame').src =
    `https://www.google.com/maps?q=${encodeURIComponent(C.business.mapEmbedQuery)}&output=embed`;

  document.getElementById('formSubjectField').value = C.contact.formSubjectDefault;

  /* ---------- FOOTER ---------- */
  document.getElementById('footerNote').textContent = C.footer.note;
  document.getElementById('footerCopyright').textContent =
    `© ${new Date().getFullYear()} ${C.business.name}. All rights reserved.`;

  /* ---------- CONTACT FORM SUBMISSION (Web3Forms) ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const key = form.querySelector('[name="access_key"]').value;

    if (key === 'REPLACE_WITH_YOUR_WEB3FORMS_KEY') {
      status.textContent = 'Form is not activated yet — see SETUP-INSTRUCTIONS.md to finish this one-time step.';
      status.className = 'form-status error';
      return;
    }

    status.textContent = 'Sending...';
    status.className = 'form-status';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });
      const data = await res.json();
      if (data.success) {
        status.textContent = 'Message sent — we\'ll get back to you soon.';
        status.className = 'form-status success';
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Please try emailing us directly.';
        status.className = 'form-status error';
      }
    } catch (err) {
      status.textContent = 'Something went wrong. Please try emailing us directly.';
      status.className = 'form-status error';
    }
  });
})();

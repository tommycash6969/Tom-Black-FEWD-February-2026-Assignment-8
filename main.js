/**
 * Tom Black Design — main.js
 * Shared JavaScript for all pages.
 * Features:
 *   1. Mobile navigation toggle
 *   2. Journey spotlight toggle (Home page)
 *   3. Project card detail expansion (Projects page)
 *   4. Contact form validation & submit handler
 *   5. Scroll reveal animations (Intersection Observer)
 */

(function () {
  'use strict';

  /* ============================================================
     1. MOBILE NAVIGATION TOGGLE
     ============================================================ */
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav   = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link inside it is clicked (mobile UX)
    siteNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav when focus moves completely outside the header
    document.addEventListener('focusin', function (e) {
      if (!siteNav.contains(e.target) && e.target !== navToggle) {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ============================================================
     2. JOURNEY SPOTLIGHT TOGGLE (Home page)
     ============================================================ */
  const toggleButtons = document.querySelectorAll('.toggle-btn[data-target]');

  if (toggleButtons.length > 0) {
    toggleButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetId = btn.getAttribute('data-target');

        // Update button states
        toggleButtons.forEach(function (b) {
          b.setAttribute('aria-pressed', 'false');
        });
        btn.setAttribute('aria-pressed', 'true');

        // Show the matching panel, hide the rest
        document.querySelectorAll('.journey-panel').forEach(function (panel) {
          if (panel.id === targetId) {
            panel.classList.add('is-visible');
          } else {
            panel.classList.remove('is-visible');
          }
        });
      });
    });
  }

  /* ============================================================
     3. PROJECT CARD DETAIL EXPANSION (Projects page)
     ============================================================ */
  const projectCards   = document.querySelectorAll('.project-card[data-project]');
  const detailPanels   = document.querySelectorAll('.project-detail');
  const closeButtons   = document.querySelectorAll('.detail-close');

  /**
   * Open the detail panel that matches the given project slug.
   * Scrolls the panel into view smoothly.
   * @param {string} slug - The data-project value
   */
  function openDetail(slug) {
    // Close any currently open panel
    detailPanels.forEach(function (panel) {
      panel.classList.remove('is-open');
    });

    // Reset card expanded states
    projectCards.forEach(function (card) {
      card.setAttribute('aria-expanded', 'false');
    });

    const targetPanel = document.getElementById('detail-' + slug);
    if (!targetPanel) return;

    targetPanel.classList.add('is-open');
    // Slight delay so CSS display change registers before scrolling
    requestAnimationFrame(function () {
      targetPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /** Close all detail panels. */
  function closeAllDetails() {
    detailPanels.forEach(function (panel) {
      panel.classList.remove('is-open');
    });
    projectCards.forEach(function (card) {
      card.setAttribute('aria-expanded', 'false');
    });
  }

  projectCards.forEach(function (card) {
    // Click handler
    card.addEventListener('click', function () {
      const slug = card.getAttribute('data-project');
      const isExpanded = card.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        closeAllDetails();
      } else {
        card.setAttribute('aria-expanded', 'true');
        openDetail(slug);
      }
    });

    // Keyboard: Enter / Space activate the card (it has role="button")
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  closeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Find which card belongs to this close button's panel
      const panel = btn.closest('.project-detail');
      const slug  = panel ? panel.id.replace('detail-', '') : null;
      const originCard = slug
        ? document.querySelector('.project-card[data-project="' + slug + '"]')
        : null;

      closeAllDetails();

      // Scroll back to and focus the card that was open
      if (originCard) {
        requestAnimationFrame(function () {
          originCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          originCard.focus({ preventScroll: true });
        });
      }
    });
  });

  /* ============================================================
     4. CONTACT FORM VALIDATION & SUBMIT HANDLER
     ============================================================ */
  const contactForm   = document.getElementById('contact-form');
  const formSuccess   = document.getElementById('form-success');
  const formError     = document.getElementById('form-error');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name    = contactForm.querySelector('#name');
      const email   = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');

      // Basic validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid =
        name.value.trim().length > 0 &&
        emailPattern.test(email.value.trim()) &&
        message.value.trim().length > 0;

      // Hide both messages first
      if (formSuccess) formSuccess.classList.remove('is-visible');
      if (formError)   formError.style.display = 'none';

      if (!isValid) {
        if (formError) formError.style.display = 'block';
        return;
      }

      /*
       * In a live deployment this is where you would POST to a backend
       * or a service like Formspree / Netlify Forms.
       * For the portfolio demo, we simulate a successful send.
       */
      if (formSuccess) {
        formSuccess.classList.add('is-visible');
      }

      contactForm.reset();
    });
  }

  /* ============================================================
     5. SCROLL REVEAL (Intersection Observer)
     Adds .revealed to elements marked [data-reveal] when they
     enter the viewport.
     ============================================================ */
  const revealTargets = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && revealTargets.length > 0) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Stop observing once revealed — no need to watch further
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,       // trigger when 12% of element is visible
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: just show everything if IntersectionObserver isn't supported
    revealTargets.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

})();

export default {
  template: `
    <section class="route-card contact-theme">
      <div class="contact-hero-shell">
        <div class="home-hero-overlay"></div>
        <p class="route-chip">Contact</p>
        <div class="home-hero-copy">
          <p class="home-kicker">To Start Us Off</p>
          <h2>Let's Build Something That Not Only Works, But Performs</h2>
          <p class="home-lead">If you are ready for a modern website that reflects your brand and drives results, I would love to hear about your project and goals and get on board.</p>
          <div class="home-cta-row">
            <a class="jump-link contact-open-btn" href="./contact/contact.html" @click.prevent="openContactForm">Open Contact form</a>
          </div>
          <p class="home-kicker" style="margin-top:16px;">Before commitment, check out our process below.</p>
        </div>
      </div>

      <article class="content-box">
        <h3 style="text-align:center;">What To Expect</h3>
        <ul>
          <li>Typical response time: within 24 business hours.</li>
          <li>Project types: portfolio sites, service websites, WooCommerce builds.</li>
          <li>First step: a short project brief and direction call.</li>
        </ul>
      </article>

      <article class="content-box contact-cta-box">
        <p>Get in contact with me to discuss your ideas, projects and my ability to help you build your dream web application.</p>
        <p><strong>Tom Black:</strong> <a href="tel:+27842079325">+27842079325</a></p>
        <p class="email-line"><strong>Email:</strong> <a class="email-link" href="mailto:freelivingdesigns@gmail.com">freelivingdesigns@gmail.com</a></p>
      </article>
    </section>
  `,
  methods: {
    openContactForm() {
      // Preserve the current scroll level so returning from contact form restores position.
      sessionStorage.setItem('routerContactScrollY', String(window.scrollY));
      window.location.href = './contact/contact.html';
    }
  }
};

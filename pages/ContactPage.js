export default {
  template: `
    <section class="route-card contact-theme">
      <p class="route-chip">Contact</p>
      <h2>Let's Build Something That Not Only Works, But Performs</h2>
      <p>If you are ready for a modern website that reflects your brand and drives results, I would love to hear about your project and goals and get on board.</p>
      <p class="contact-note">Before commitment, check out our process.</p>

      <article class="content-box">
        <h3>What To Expect</h3>
        <ul>
          <li>Typical response time: within 24 business hours.</li>
          <li>Project types: portfolio sites, service websites, WooCommerce builds.</li>
          <li>First step: a short project brief and direction call.</li>
        </ul>
      </article>

      <div class="project-links">
        <a class="jump-link" href="./contact/contact.html" @click.prevent="openContactForm">Open Contact form</a>
      </div>

      <article class="content-box contact-cta-box">
        <h3>Step 1</h3>
        <p>Start your project today!</p>
        <p><strong>Tom Black:</strong> <a href="tel:+27842079325">+27842079325</a></p>
        <p><strong>Email:</strong> <a href="mailto:freelivingdesigns@gmail.com">freelivingdesigns@gmail.com</a></p>
        <img class="route-image" src="images/contact-banner-desktop.jpg" alt="Contact banner visual" />
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

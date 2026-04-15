export default {
  template: `
    <section class="route-card about-theme">
      <p class="route-chip">About</p>
      <h2>About FreeLivingDesigns</h2>
      <h3>Built with Precision. Delivered with Integrity.</h3>
      <p>I'm a dedicated front-end web developer focused on building clean, responsive, and high-performing websites that do not just look good - they convert.</p>
      <p class="helper">While I currently operate independently, I thrive in collaborative environments and integrate seamlessly into teams, agencies, or client workflows when needed.</p>

      <nav class="sub-nav" aria-label="About sub-navigation">
        <router-link to="/about/team" class="sub-link">Team</router-link>
        <router-link to="/about/values" class="sub-link">Values</router-link>
      </nav>

      <div class="nested-view">
        <router-view />
      </div>

      <article class="content-box">
        <h3>About / Team</h3>
        <p>Whether it's working alongside designers, back-end developers, or business owners, I bring clear communication, reliability, and a solutions-driven mindset to every project.</p>
      </article>
    </section>
  `
};

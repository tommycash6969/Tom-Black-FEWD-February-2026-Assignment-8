export default {
  template: `
    <section class="route-card about-theme">
      <div class="about-hero-shell">
        <div class="home-hero-overlay"></div>
        <p class="route-chip">About</p>
        <div class="home-hero-copy">
          <h2>About FreeLivingDesigns</h2>
          <h3>Built with Precision. Delivered with Integrity.</h3>
          <p class="about-intro">I build clean, responsive, high-performing websites that look strong and drive results — working independently while collaborating smoothly with teams, agencies, and client workflows when needed.</p>

          <nav class="sub-nav" aria-label="About sub-navigation">
            <router-link to="/about/team" class="sub-link">About Me</router-link>
            <router-link to="/about/values" class="sub-link">My Values</router-link>
          </nav>
        </div>
      </div>

      <div class="nested-view">
        <router-view />
      </div>
    </section>
  `
};

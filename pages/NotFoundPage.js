export default {
  template: `
    <section class="route-card notfound-theme">
      <p class="route-chip">404 Page</p>
      <h2>Oops, This Page Cannot Be Found</h2>
      <p>The page you are looking for may have moved or the link may be incorrect.</p>
      <p>Use one of the links below to continue your demo.</p>
      <div class="project-links">
        <router-link to="/" class="jump-link">Return Home</router-link>
        <router-link to="/about" class="jump-link">Go To About</router-link>
        <router-link to="/projects/reskin" class="jump-link">Open Dynamic Route</router-link>
      </div>
    </section>
  `
};

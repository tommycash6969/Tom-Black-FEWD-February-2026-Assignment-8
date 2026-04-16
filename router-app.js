import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import router from './router/index.js';

const CONTACT_SCROLL_KEY = 'routerContactScrollY';

function restoreContactScrollIfPresent(route) {
  if (!route || route.path !== '/contact') {
    return;
  }

  const saved = sessionStorage.getItem(CONTACT_SCROLL_KEY);
  if (!saved) {
    return;
  }

  const y = Number(saved);
  sessionStorage.removeItem(CONTACT_SCROLL_KEY);

  if (Number.isFinite(y) && y >= 0) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: y, left: 0, behavior: 'auto' });
    });
  }
}

router.afterEach((to) => {
  restoreContactScrollIfPresent(to);
});

router.isReady().then(() => {
  restoreContactScrollIfPresent(router.currentRoute.value);
});

const AppRoot = {
  template: `
    <div class="router-app-shell">
      <header class="app-header">
        <p class="eyebrow">End to End: Front End</p>
        <img class="header-logo" src="images/freelivinglogo.png" alt="FreeLiving Designs logo">
        <h1 id="site-brand-heading">FreeLivingDesigns</h1>
        <p class="subtitle">Clean, responsive, and purpose-built front-end experiences.</p>
      </header>

      <nav class="top-nav" aria-label="Assignment navigation">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <router-link to="/faq" class="nav-link">FAQ</router-link>
        <router-link
          to="/projects/reskin"
          class="nav-link"
          :class="{ 'is-active-section': $route.path.startsWith('/projects/') }">
          Previous Works
        </router-link>
      </nav>

      <main class="view-wrapper">
        <router-view />
      </main>
    </div>
  `
};

createApp(AppRoot).use(router).mount('#app');

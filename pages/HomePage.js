export default {
  data() {
    return {
      activeJourney: 'build',
      journeyOptions: [
        { key: 'build', label: 'Build' },
        { key: 'polish', label: 'Polish' },
        { key: 'launch', label: 'Launch' }
      ],
      journeys: {
        build: {
          chip: 'Build Mode',
          title: 'Structured front-end foundations',
          body: 'I start with clear layout systems, semantic structure, and responsive decisions that keep the site flexible from the first section to the last.',
          points: [
            'Mobile-first planning with clean content flow',
            'Readable component structure and practical CSS systems',
            'Interactions that support the message instead of distracting from it'
          ]
        },
        polish: {
          chip: 'Polish Pass',
          title: 'Visual rhythm with personality',
          body: 'Once the structure is strong, I shape the experience with motion, hierarchy, and detail so the page feels intentional, modern, and memorable.',
          points: [
            'Typography and spacing tuned for clarity',
            'Motion used to guide attention and add energy',
            'Brand cues worked into the interface without clutter'
          ]
        },
        launch: {
          chip: 'Launch Ready',
          title: 'Reliable delivery with business focus',
          body: 'The final layer is about confidence: fast-loading pages, user-friendly experiences, and practical decisions that support trust and conversion.',
          points: [
            'Performance-minded assets and page flow',
            'Clear calls to action that support user intent',
            'Dependable delivery shaped around real business goals'
          ]
        }
      }
    };
  },

  computed: {
    currentJourney() {
      return this.journeys[this.activeJourney];
    }
  },

  methods: {
    goToTopRoute(path) {
      this.$router.push(path).finally(() => {
        requestAnimationFrame(() => {
          const brandHeading = document.getElementById('site-brand-heading');

          if (brandHeading) {
            const top = Math.max(0, brandHeading.getBoundingClientRect().top + window.scrollY - 8);
            window.scrollTo({ top, left: 0, behavior: 'auto' });
            return;
          }

          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        });
      });
    }
  },

  template: `
    <section class="route-card home-theme home-adventure">
      <section class="home-hero-shell">
        <div class="home-hero-overlay"></div>

        <p class="route-chip">Home</p>

        <div class="home-hero-copy">
          <p class="home-kicker">Front-end design with movement, clarity, and intent</p>
          <h2>Built to feel alive, not just look finished.</h2>
          <p class="home-lead">From concept to launch, I create modern, high-performing websites built to engage your audience and drive real results.</p>

          <div class="home-cta-row">
            <button type="button" class="jump-link" @click="goToTopRoute('/about')">Explore About</button>
            <button type="button" class="jump-link" @click="goToTopRoute('/projects/reskin')">See Previous Works</button>
            <button type="button" class="jump-link" @click="goToTopRoute('/contact')">Start a Conversation</button>
          </div>
        </div>
      </section>

      <section class="home-intro-layout">
        <div class="home-photo-frame">
          <img class="home-intro-photo" src="images/tommy 2.png" alt="Tom Black portrait" />
        </div>

        <article class="home-intro-card">
          <h3>The designer behind the build</h3>
          <p>Hi, I am Tom Black, a front-end web developer focused on building modern, responsive websites. With years of WordPress experience and a strong eye for clean presentation, I enjoy turning structured HTML, purposeful CSS, and practical JavaScript into digital experiences that feel easy to use and strong in delivery.</p>
          <div class="home-intro-points">
            <span>Responsive layouts</span>
            <span>Clean code systems</span>
            <span>Brand-led design</span>
            <span>Conversion-minded UX</span>
          </div>
        </article>
      </section>

      <section class="home-spotlight-box">
        <div class="home-section-heading">
          <p class="home-section-kicker">Interactive Spotlight</p>
          <h3>Choose the journey</h3>
          <p>Tap through the stages below to see how I shape a project from first structure to final launch.</p>
        </div>

        <div class="home-toggle-row" role="tablist" aria-label="Project journey stages">
          <button
            v-for="option in journeyOptions"
            :key="option.key"
            type="button"
            class="home-toggle"
            :class="{ 'is-active': activeJourney === option.key }"
            :aria-pressed="activeJourney === option.key"
            @click="activeJourney = option.key">
            {{ option.label }}
          </button>
        </div>

        <article class="home-journey-panel">
          <p class="home-panel-chip">{{ currentJourney.chip }}</p>
          <h4>{{ currentJourney.title }}</h4>
          <p>{{ currentJourney.body }}</p>
          <ul>
            <li v-for="point in currentJourney.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </section>

      <section class="home-mini-grid">
        <article class="content-box home-feature-card">
          <p class="home-card-tag" style="text-align:center;">Previous Works</p>
          <h3>Project Highlights</h3>
          <p>From treatment-led storytelling to B2B commerce and service-focused catalogs, each build is shaped around clarity, trust, and practical browsing.</p>
        </article>

        <article class="content-box home-feature-card">
          <p class="home-card-tag" style="text-align:center;">The Build</p>
          <h3>What the experience should do</h3>
          <p>The page should move with purpose: animated where it helps, calm where it matters, and always clear about what comes next.</p>
        </article>

        <article class="content-box home-feature-card">
          <p class="home-card-tag" style="text-align:center;">The Outcome</p>
          <h3>Why this home page feels different</h3>
          <p>Floating elements, layered backgrounds, and interactive states give the landing page more energy while keeping the message professional and easy to follow.</p>
        </article>
      </section>
    </section>
  `
};

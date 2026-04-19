const projectContent = {
  reskin: {
    title: 'Reskin Aesthetics Website',
    summary: 'A premium service-led website focused on trust, treatment visibility, and bookings.',
    stack: 'WordPress, Custom Theme Styling, UX Content Structure, Local SEO',
    outcome: 'Improved service-page engagement through clearer treatment pathways.',
    challenge: 'The previous layout felt cluttered and did not guide users toward enquiries.',
    solution: 'Rebuilt page structure around service intent, simplified navigation, and stronger CTAs.'
  },
  sunglide: {
    title: 'Sunglide Online B2B Store',
    summary: 'A WooCommerce storefront built for wholesale clients with tiered pricing logic.',
    stack: 'WordPress, WooCommerce, Product Variations, Tiered Pricing Rules',
    outcome: 'Reduced confusion between product tiers with clearer pricing presentation.',
    challenge: 'Mixed customer types needed different pricing without a complicated user flow.',
    solution: 'Implemented structured category logic and tier-aware product visibility.'
  },
  blackstudio: {
    title: 'BlackStudio Paarl Price Catalogue',
    summary: 'A clean, non-checkout catalogue site designed for quick service and pricing discovery.',
    stack: 'WordPress, Catalog UI Architecture, Responsive Layout, Content Structuring',
    outcome: 'Faster customer decision-making through consolidated pricing sections.',
    challenge: 'Customers struggled to compare service options quickly.',
    solution: 'Reorganized offerings into scannable blocks with clear labels and grouped prices.'
  }
};

const projectImages = {
  reskin: 'images/reskin-cover.png',
  sunglide: 'images/sunglide-cover.png',
  blackstudio: 'images/Blackstudiopaarl-cover.png'
};

export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    selectedProject() {
      return projectContent[this.slug] || null;
    },
    selectedImage() {
      return projectImages[this.slug] || '';
    }
  },
  template: `
    <section class="route-card project-theme">
      <div class="project-hero-shell">
        <div class="home-hero-overlay"></div>
        <p class="route-chip">Project View</p>
        <div class="home-hero-copy">
          <h2>Project Details</h2>

          <div class="project-links">
            <router-link to="/projects/reskin" class="sub-link">Reskin</router-link>
            <router-link to="/projects/sunglide" class="sub-link">Sunglide</router-link>
            <router-link to="/projects/blackstudio" class="sub-link">BlackStudio</router-link>
          </div>
        </div>
      </div>

      <div v-if="selectedProject">
        <h3>{{ selectedProject.title }}</h3>
        <p>{{ selectedProject.summary }}</p>
        <p><strong>Stack:</strong> {{ selectedProject.stack }}</p>
        <p><strong>Outcome:</strong> {{ selectedProject.outcome }}</p>
        <p><strong>Challenge:</strong> {{ selectedProject.challenge }}</p>
        <p><strong>Solution:</strong> {{ selectedProject.solution }}</p>
        <img v-if="selectedImage" class="route-image" :src="selectedImage" :alt="selectedProject.title + ' project screenshot'" />
      </div>

      <div v-else>
        <h3>Unknown Project</h3>
        <p>No project found for slug: <strong>{{ slug }}</strong></p>
      </div>
    </section>
  `
};

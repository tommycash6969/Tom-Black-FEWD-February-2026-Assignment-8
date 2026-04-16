export default {
  template: `
    <article class="nested-card">
      <h3 class="section-heading">Introduction and Skills</h3>
      <div class="content-grid">
        <div class="content-box">
          <h4 class="role-title">The Role I Can Play</h4>
          <p>FreeLivingDesigns is led by me, Tom Black, with a strong focus on front-end quality, responsive implementation, and polished customer-facing design.</p>
          <p>Every project moves through a clear workflow: discovery, wireframing, visual direction, build, QA, and launch support. This keeps delivery predictable and aligned to your goals.</p>
          <p><strong>Tools I use:</strong> WordPress, WooCommerce, HTML5, CSS3, JavaScript.</p>
          <h4 class="role-title skills-title">My Skills and Specialities</h4>

          <details class="skill-accordion">
            <summary>Front-End Development</summary>
            <ul>
              <li>HTML5 (semantic, SEO-friendly structure)</li>
              <li>CSS3 (Flexbox, Grid, responsive design)</li>
              <li>JavaScript (ES6+, interactive UI functionality)</li>
            </ul>
          </details>

          <details class="skill-accordion">
            <summary>Frameworks & Tools</summary>
            <ul>
              <li>Git & GitHub (version control & collaboration)</li>
              <li>Basic React (component-based UI understanding)</li>
              <li>WordPress & WooCommerce (custom builds, theme customization)</li>
            </ul>
          </details>

          <details class="skill-accordion">
            <summary>Design & UX</summary>
            <ul>
              <li>Mobile-first design principles</li>
              <li>User experience (UX) optimization</li>
              <li>Conversion-focused layouts</li>
              <li>Canva & visual content creation</li>
            </ul>
          </details>

          <details class="skill-accordion">
            <summary>Performance & Optimization</summary>
            <ul>
              <li>Website speed optimization</li>
              <li>SEO best practices (on-page fundamentals)</li>
              <li>Cross-browser compatibility</li>
            </ul>
          </details>
        </div>
        <div class="content-box">
          <div class="home-photo-frame">
            <img class="home-intro-photo" src="images/tom.jpg" alt="Tom Black portrait" />
          </div>
          <h4 class="role-title skills-title">My Personal Endeavors</h4>
          <p>Outside of development, I enjoy an active and adventurous lifestyle - from hiking and skiing to surfing whenever I get the chance. These experiences keep me energized, focused, and adaptable. No matter where I am, I stay committed to delivering quality work, while also making time for what matters most: meaningful moments with family.</p>
        </div>
      </div>
    </article>
  `
};

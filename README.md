# Tom Black Design — Portfolio Website

## Theme & Purpose

**Professional/Business Portfolio** — a client-facing portfolio site for Tom Black Design (FreeLivingDesigns), a front-end web development business. The site is designed to attract potential clients by showcasing skills, previous projects, and providing a clear path to get in touch.

---

## Site Structure

```
index.html          — Home: hero, intro, interactive journey spotlight, services
about.html          — About: who I am, skills accordions, values grid
projects.html       — Projects: clickable project cards with detail panels
faq.html            — FAQ: accordion questions about process & services
contact.html        — Contact: contact details + validated enquiry form
style.css           — Shared stylesheet for all pages
main.js             — Shared JavaScript (nav toggle, journey toggle, project details, form, scroll reveal)
images/             — All site imagery (logos, project screenshots, hero photos)
README.md           — This file
```

---

## JavaScript Features

The following interactive features are implemented in `main.js`:

1. **Mobile navigation toggle** — hamburger button shows/hides the nav on small screens, with `aria-expanded` state managed for accessibility.
2. **Journey spotlight toggle** (Home page) — three toggle buttons swap between Build / Polish / Launch panels using `aria-pressed` states.
3. **Project card detail expansion** (Projects page) — clicking a project card reveals a full detail panel below with summary, stack, outcome, challenge, and solution. Keyboard (Enter / Space) also works; a close button returns focus to the grid.
4. **Contact form validation & submit handler** — client-side validation checks required fields and email format before showing a success or error message. No page reload.
5. **Scroll reveal animation** — `IntersectionObserver` watches `[data-reveal]` elements and applies a fade-up transition when they enter the viewport. Falls back gracefully if the API is unavailable.

---

## Accessibility & Semantic HTML

- All pages use semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Headings follow a logical hierarchy (`h1` → `h2` → `h3` / `h4`) on every page.
- A **skip-to-main-content** link is the first focusable element on every page.
- All images have meaningful `alt` text; decorative images use `alt=""`.
- Navigation uses `aria-label="Main navigation"` and the active page is marked with `.is-active`.
- Interactive elements (project cards acting as buttons) have `role="button"`, `tabindex="0"`, and `aria-expanded`.
- `<details>` / `<summary>` elements are used natively for FAQ and skill accordions — no JS required for core behaviour.
- Form inputs have associated `<label>` elements, `autocomplete` attributes, and `aria-required`.
- Colour contrast targets WCAG AA for body text and interactive elements.
- The layout is fully responsive across mobile (≤540 px), tablet (≤760 px), and desktop.

---

## Challenges & Solutions

| Challenge | Solution |
|---|---|
| Converting a Vue SPA to a multi-page site | Extracted content from each Vue component template and rewrote it as static HTML. Router links became standard `<a>` href links. |
| Keeping the interactive journey spotlight without Vue reactivity | Replaced `v-for` / `v-if` / `:class` with vanilla JS button listeners that toggle `aria-pressed` and `is-visible` classes. |
| Making project detail panels keyboard-accessible | Added `role="button"`, `tabindex="0"`, and `keydown` listeners (Enter / Space) to project cards, plus a close button that returns focus. |
| Image filenames with spaces in CSS `url()` | URL-encoded spaces in CSS background-image values (e.g. `about%20us%20image.jpg`) while keeping normal `src` paths in `<img>` tags. |
| Scroll reveal without a library | Used the native `IntersectionObserver` API with a graceful fallback for unsupported browsers. |

---

## How to View Locally

A local HTTP server is required because browsers block some resources when opening HTML files directly via `file://`. A PowerShell script is included:

```powershell
.\start-server.ps1
```

Then open `http://localhost:3000` in your browser.

---

## Live Site & Repository

- **Live site:** *(GitHub Pages URL — add after deploying)*
- **GitHub repository:** *(Repository URL — add after pushing)*

---

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/) — Oswald & Open Sans
- All project content, photography, and branding belong to Tom Black / FreeLivingDesigns
- Built as the Summative Showcase for the Red & Yellow FEWD programme, February 2026 intake

---

## Previous Assignment Reference

The Vue Router multi-page SPA (Assignment 8) lives in the following files and remains unchanged:

- `router-assignment.html` / `router-app.js` / `router-app.css`
- `router/index.js` and all `pages/*.js` components
- `pages/FaqPage.js`
- `pages/ProjectDetailPage.js`
- `pages/NotFoundPage.js`

Configured routes:

- `/` -> Home page
- `/about` -> About parent route
- `/about/team` -> Nested team page
- `/about/values` -> Nested values page
- `/contact` -> Contact page
- `/faq` -> FAQ page
- `/projects/:slug` -> Dynamic project detail page
- `/:pathMatch(.*)*` -> 404 fallback page

This structure keeps shared layout concerns in the app shell while each route is responsible for its own content. The About section uses nested routing because it represents one section with multiple related subviews. The project detail page uses a dynamic slug so one reusable component can display different project content without creating a separate file for every project.

### Navigation and User Experience

Navigation is handled with `router-link`, which allows users to move between views without full page reloads. The top navigation makes the route changes clear, and the app styling changes visibly across sections so users can tell they have moved to a different page. Active link styles are also used to improve orientation while browsing the app.

### Reflection and Insights

One of the main routing decisions was to use both a nested route and a dynamic route so the app demonstrates more than just basic page switching. Nested routes were useful for grouping the About content logically, while the dynamic route made the project section more scalable.

An important insight from this process was that routing is not only about changing URLs. It also affects app structure, component reuse, and the overall user experience. Planning the route hierarchy first made it easier to decide where shared navigation belonged and which content should be broken into separate components.

### Why Routing Matters in SPAs

Routing is essential in a single-page application because it gives the user the feeling of moving through separate pages while the app stays fast and responsive. It helps organize views cleanly, supports bookmarking and direct linking to sections of the app, and makes larger applications easier to maintain as they grow.

### Validation and Code Quality

The project was checked to ensure the router loads correctly, route components are imported properly, and the editor reports no code errors. The application is structured into focused files, route names are clear, and the routing logic is easy to follow. Styling and route-specific layout were also kept separate from router configuration to keep the codebase readable.

### Files Included For Submission

- `router-assignment.html`
- `router-app.js`
- `router-app.css`
- `router/index.js`
- `pages/HomePage.js`
- `pages/AboutPage.js`
- `pages/AboutTeamPage.js`
- `pages/AboutValuesPage.js`
- `pages/ContactPage.js`
- `pages/FaqPage.js`
- `pages/ProjectDetailPage.js`
- `pages/NotFoundPage.js`
- `contact/contact.html`
- `contact/contact.css`
- `contact/contactscript.js`
- `start-server.ps1`

### How To Run

1. Start a local server from the repository root.
2. Open `router-assignment.html` in the browser through that server.
3. Use the main navigation, nested About links, and project links to test the route changes.
4. Visit an unknown hash route to confirm the 404 page appears.

### Requirement Check

- Vue Router configured in `router/index.js`
- At least three distinct pages implemented
- Navigation links implemented with `router-link`
- Route changes clearly visible with route-specific content and styling
- Nested route included under `/about`
- Dynamic route included at `/projects/:slug`
- Fallback 404 route included

Thank you for taking the time to mark my project,
I hope this fits the standards.
Regards
Tom Black
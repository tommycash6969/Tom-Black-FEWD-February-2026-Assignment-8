## Final Assignment - Vue Router Multi-Page Navigation
Tom Black - FEWD - February - Assignment 8
This project contains a dedicated Vue Router application built for the final assignment. The app demonstrates multi-page navigation inside a Vue single-page application, including nested routes, a dynamic route, styled navigation states, and a 404 fallback view.

### How Vue Router Was Implemented

Vue Router is configured in `router/index.js` using `createRouter()` and `createWebHashHistory()`. Hash history was the best fit for this assignment because the project is served from a simple static server and does not rely on server-side route rewrites.

The main application shell lives in `router-app.js`. It mounts the router, renders the shared header and navigation, and uses `router-link` for route changes and `router-view` for displaying the active page component.

### Pages and Structure

The app includes the following page components:

- `pages/HomePage.js`
- `pages/AboutPage.js`
- `pages/AboutTeamPage.js`
- `pages/AboutValuesPage.js`
- `pages/ContactPage.js`
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


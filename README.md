## Final Assignment - Vue Router Multi-Page Navigation (April 2026)

This repository now includes a dedicated Vue Router assignment app that demonstrates route configuration, multi-page navigation, nested routing, dynamic routing, and a 404 fallback route.

### Files Added

- `router-assignment.html`: Entry point for the Vue Router app
- `router-app.js`: Root Vue app shell with `router-link` navigation and `router-view`
- `router/index.js`: Router configuration and route table
- `router-app.css`: Route-specific styling
- `pages/HomePage.js`
- `pages/AboutPage.js`
- `pages/AboutTeamPage.js`
- `pages/AboutValuesPage.js`
- `pages/ContactPage.js`
- `pages/ProjectDetailPage.js`
- `pages/NotFoundPage.js`

### Route Architecture

The router is configured in `router/index.js` using `createWebHashHistory()` so that the app works on static hosting without server-side route rewrite rules.

Implemented routes:

- `/` -> Home page
- `/about` -> About page (parent route)
- `/about/team` -> Nested child route
- `/about/values` -> Nested child route
- `/contact` -> Contact page
- `/projects/:slug` -> Dynamic route (examples: `reskin`, `sunglide`, `blackstudio`)
- `/:pathMatch(.*)*` -> 404 fallback page

### Reflection On Routing Choices

1. Hash history was chosen to ensure navigation works when opened from a simple local/static server.
2. Nested routes were placed under `/about` to model real app structure where parent sections have subviews.
3. Dynamic project route (`/projects/:slug`) demonstrates reusable page logic using route params instead of hardcoded pages.
4. A fallback route was added to make unknown URLs graceful and user-friendly.
5. Navigation is built with `router-link` so route changes happen without full page reloads.

### How To Run

1. Start a local server from the repository root.
2. Open `router-assignment.html`.
3. Use the top navigation and sub-navigation to verify route changes.

### Requirement Checklist

- Vue Router configured in `router/index.js`.
- At least three distinct pages implemented.
- Navigation links implemented with `router-link`.
- Route changes clearly visible with page-specific content/styling.
- Nested route included (`/about/team`, `/about/values`).
- Dynamic route included (`/projects/:slug`).
- Fallback 404 route included (`/:pathMatch(.*)*`).


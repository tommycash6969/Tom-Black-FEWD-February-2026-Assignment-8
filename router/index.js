import { createRouter, createWebHashHistory } from 'https://unpkg.com/vue-router@4/dist/vue-router.esm-browser.js';
import HomePage from '../pages/HomePage.js';
import AboutPage from '../pages/AboutPage.js';
import AboutTeamPage from '../pages/AboutTeamPage.js';
import AboutValuesPage from '../pages/AboutValuesPage.js';
import ContactPage from '../pages/ContactPage.js';
import ProjectDetailPage from '../pages/ProjectDetailPage.js';
import NotFoundPage from '../pages/NotFoundPage.js';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    children: [
      {
        path: '',
        redirect: '/about/team'
      },
      {
        path: 'team',
        name: 'about-team',
        component: AboutTeamPage
      },
      {
        path: 'values',
        name: 'about-values',
        component: AboutValuesPage
      }
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/projects/:slug',
    name: 'project-detail',
    component: ProjectDetailPage,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.path.startsWith('/projects/') && from.path.startsWith('/projects/')) {
      return false;
    }

    return { top: 0 };
  }
});

export default router;

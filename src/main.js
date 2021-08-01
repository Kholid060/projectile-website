import { ViteSSG } from 'vite-ssg/single-page';
import compsUi from './lib/comps-ui';
import vueMdijs from './lib/vue-mdijs';
import App from './App.vue';
import './assets/css/tailwind.css';
import './assets/css/style.css';

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(compsUi).use(vueMdijs);
});

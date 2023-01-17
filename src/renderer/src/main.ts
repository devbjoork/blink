import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './router';
import App from './App.vue';

import './assets/reset.scss';

const pinia = createPinia();
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');

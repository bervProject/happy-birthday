import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import Memories from './views/Memories.vue';
import Words from './views/Words.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path: '/memories',
      name: 'memories',
      component: Memories,
    },
    {
      path: '/words',
      name: 'words',
      component: Words,
    },
  ],
});

import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthHandler from '../components/AuthHandler';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/oauth2/callback/', component: AuthHandler }]
});

export default router;

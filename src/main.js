import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamMembers from './components/teams/TeamMembers.vue';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList }, // our-domain.com/teams => ...
    { path: '/users', component: UsersList }, // our-domain.com/teams => ...
    { path: '/teams/:teamId', component: TeamMembers }, // our-domain.com/teams => ...
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);
app.use(router);
app.mount('#app');

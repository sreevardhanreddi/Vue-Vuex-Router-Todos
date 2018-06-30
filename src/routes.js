import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import About from './components/About.vue';
import List from './components/List.vue';

export const routes = [
  { path: '', component: About },
  { path: '/signup', component: SignUp },
  { path: '/signin', component: SignIn },
  { path: '/list', component: List },
  // {
  //   path: '/list',
  //   component: List,
  //   // beforeEnter: (to, from, next) => {
  //   //   next();
  //   // }
  // },
  { path: '*', redirect: '' }
];

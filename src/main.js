import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import * as firebase from 'firebase'
import { routes } from './routes.js';
import { store } from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyAhh4bZ-C9Vm5sInTFIPFcfHJtphAKqP_o",
    authDomain: "fir-bc6d2.firebaseapp.com",
    databaseURL: "https://fir-bc6d2.firebaseio.com",
    projectId: "fir-bc6d2",
    storageBucket: "fir-bc6d2.appspot.com",
    messagingSenderId: "977461336982"
    })

  }
});

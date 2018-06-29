import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    List: [],
    user: null,
    isSignedIn: false,
    hasLoggedOut: false
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getUserSignedIn(state) {
      return state.isSignedIn;
    },
    getUserLogOut(state) {
      return state.hasLoggedOut;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    signInUser(state, payload) {
      console.log(state.isSignedIn, ' before');
      state.isSignedIn = true;
      console.log(state.isSignedIn, ' after');
    },
    LogOut(state) {
      state.isSignedIn = false;
    }
  },
  actions: {
    getTodos({ commit }) {
      // firebase.
    },
    signup({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: firebase.auth().currentUser.uid
          };
          commit('setUser', newUser); //mutations in single quotes
          console.log('signed up', newUser.id);
        })
        .catch(err => {
          console.log(err);
          // throw err;
        });
    },
    signin({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          const newUser = {
            id: firebase.auth().currentUser.uid
          };
          commit('signInUser', newUser);
          console.log('successfully signed in ');
        })
        .catch(err => {
          console.log(err);
        });
    },
    logOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('logged out');
          commit('LogOut');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});

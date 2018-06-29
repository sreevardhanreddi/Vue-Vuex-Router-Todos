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
    isSignedIn: null
  },
  getters: {
    user(state) {
      return state.user;
    },
    userSignedIn(state) {
      return state.isSignedIn;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    signInUser(state, payload) {
      state.isSignedIn = payload;
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
    }
  }
});

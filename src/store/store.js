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
    },
    getTodoList(state) {
      console.log('list in state ', state.List);
      return state.List;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    signInUser(state, payload) {
      console.log(state.isSignedIn, ' before');
      state.isSignedIn = true;
      state.userId = payload;
      console.log('user id after sign in ', state.userId);
      console.log(state.isSignedIn, ' after');
    },
    LogOut(state) {
      state.isSignedIn = false;
    },
    AddOne(state, payload) {
      console.log('before list mutation ', payload, state.List);
      state.List.push(payload);
      console.log('after list mutation ', payload, state.List);
    },
    //mutations names should be in title case, usually a practice
    DeleteOne(state, payload) {
      // console.log('before list mutation ', payload, state.List);
      state.List.splice(state.List.indexOf(payload), 1);
      // console.log('after list mutation ', payload, state.List);
    },
    ListTodos(state, payload) {
      state.List = payload;
    }
  },
  actions: {
    getTodos({ commit }) {
      // firebase.
      // firebase.database().ref('todos'+state.userId)
      firebase
        .database()
        .ref('/todos/' + userId)
        .once('value')
        .then(function(snapshot) {
          //Do something with your user data located in snapshot
          console.log(snapshot);
          commit('ListTodos', snapshot);
        });
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
          commit('signInUser', newUser.id);

          console.log('successfully signed in ', newUser.id);
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
    },
    AddTodo({ commit }, payload) {
      // console.log('action commited');
      firebase
        .database()
        .ref('/todos/' + this.state.userId)
        .push(payload.todo)
        .then(() => {
          commit('AddOne', payload.todo);
        })
        .catch(err => {
          console.log(err);
        });
    },
    DeleteTodo({ commit }, payload) {
      commit('DeleteOne', payload.todoIndex);
    }
    // addTodosToFirebase({commit}){
    //   firebase.database().ref('/todos/'+userId).push({
    //     List:
    //   })
    // }
  }
});

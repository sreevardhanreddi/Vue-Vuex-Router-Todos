<template>

  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
</div>


</template>

<script>
import Navbar from './components/Navbar.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import About from './components/About.vue';
import List from './components/List.vue';
export default {
  components: {
    appNavbar: Navbar,
    appSignUp: SignUp,
    appSignIn: SignIn,
    appAbout: About,
    appList: List
  }
};
</script>

<style>
</style>

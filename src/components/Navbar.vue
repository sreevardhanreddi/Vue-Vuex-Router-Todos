<template>
<div>
  <nav class="navbar navbar-expand-sm navbar-dark primary-color">
    <!-- <a class="navbar-brand" href="#">Vue-Todos</a> -->
    <router-link to="/" tag="a" active-class="navbar-brand" >Vue-Todos</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">

            <router-link to="/signup" tag="li" active-class="active" class="nav-item"><a class="nav-link">Sign Up</a></router-link>

            <router-link to="/signin" tag="li" active-class="active" class="nav-item"><a class="nav-link">Sign In</a></router-link>

            <router-link to="/list" tag="li" active-class="active" class="nav-item" v-if="false"><a class="nav-link">List</a></router-link>




            <li class="nav-item" v-if="false">
                <a class="nav-link" href="#">Log Out</a>
            </li>
        </ul>
    </div>
</nav>
<div style="margin-bottom:70px;"></div>
</div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      user: null
    };
  },

  methods: {},
  computed: {
    // in() is a function which needs to be set up for routing
    show() {
      return this.$store.getters.user;
    }
  },
  watch: {
    show(value) {
      if (value !== null) {
        this.$router.push('/');
      }
    }
  }
};
</script>
<style scoped>
* {
  font-weight: 400;
}
</style>

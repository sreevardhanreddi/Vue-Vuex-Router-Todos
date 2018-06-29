<template>
<div class="container jumbotron">
  <div class="col-xs-12 col-sm-8 col-md-6 col-lg-6 mx-auto">
  <!-- Material form login -->
<div class="container">
    <h3 class="text-center mb-4">Sign Up</h3>

    <!-- Material input email -->
    <div class="form-group">
        <label for="materialFormLoginEmailEx">Your email</label>
        <i class="fa fa-envelope prefix grey-text"></i>
        <input type="email" id="materialFormLoginEmailEx" class="form-control" v-model="email" required>
    </div>

    <!-- Material input password -->
    <div class="form-group">
        <label for="materialFormLoginPasswordEx">Your password</label>
        <i class="fa fa-lock prefix grey-text"></i>
        <input type="password" id="materialFormLoginPasswordEx" class="form-control" v-model="password" required>
    </div>

    <div class="text-center mt-4">
        <button class="btn btn-default" @click="onSignUp">Sign Up</button>
    </div>
</div>
<!-- Material form login -->
</div>
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

  methods: {
    onSignUp() {
      console.log({ email: this.email, password: this.password });
      this.$store.dispatch('signup', {
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    // in() is a function which needs to be set up for routing
    in() {
      return this.$store.getters.getUser;
    }
  },
  watch: {
    in(value) {
      if (value !== null) {
        this.$router.push('/signin');
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

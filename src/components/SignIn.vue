<template>
<div class="container jumbotron">
  <div class="col-xs-12 col-sm-8 col-md-6 col-lg-6 mx-auto">
  <!-- Material form login -->
<div class="container">
    <h3 class="text-center mb-4">Sign in</h3>

    <!-- Material input email -->
    <div class="form-group">
        <label for="materialFormLoginEmailEx">Your email</label>
        <i class="fa fa-envelope prefix grey-text"></i>
        <input type="email" id="materialFormLoginEmailEx" class="form-control">
    </div>

    <!-- Material input password -->
    <div class="form-group">
        <label for="materialFormLoginPasswordEx">Your password</label>
        <i class="fa fa-lock prefix grey-text"></i>
        <input type="password" id="materialFormLoginPasswordEx" class="form-control">
    </div>

    <div class="text-center mt-4">
        <button class="btn btn-default" type="">Login</button>
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
    onSignIn() {
      console.log({ email: this.email, password: this.password });
      this.$store.dispatch('signin', {
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    // in() is a function which needs to be set up for routing
    in() {
      return this.$store.getters.isSignedIn;
    }
  },
  watch: {
    //isSignedIn goes to this function
    in(value) {
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

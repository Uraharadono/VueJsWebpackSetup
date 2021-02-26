<template>
  <div class="layout auth">
    <div class="log-in-page card">
      <div
        class="text-center custom-bg-color"
        style="overflow: visible; background: rgba(255, 255, 255, 0.2)"
      >
        <h3 class="card-header star-inserted">
          <span>Sign in with your app id to continue</span>
        </h3>

        <div class="card-body" style="padding: 0px; overflow: visible">
          <form
            class="login-form mb-0 untouched pristine valid"
            @submit.prevent="handleSubmit"
          >
            <div class="form-group">
              <div class="form-control">
                <input
                  class="input-control pristine valid touched"
                  type="text"
                  placeholder="Login"
                  v-model="username"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="form-control">
                <input
                  class="input-control pristine valid touched"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="tc-checkbox" style="width: 100%">
                <div class="tc-checkbox-wrap">
                  <div class="tc-checkbox-handle">
                    <input
                      type="checkbox"
                      class="checkbox-input"
                      value="false"
                      checked="false"
                    />
                    <span class="check-detector icofont-check"></span>
                  </div>
                  <div class="tc-checkbox-label">Keep me signed in</div>
                </div>
              </div>
            </div>
            <div class="d-grid gap-2">
              <button tabindex="0" class="btn btn-primary blue-gradient">
                <span class="btn-text">Login</span>

                <span class="btn-loader">
                  <i class="icon icofont-spinner"></i>
                </span>
              </button>
            </div>
          </form>
          <div class="forgot-box">
            <a href="#/extra/sign-up">Sign Up</a>
            <span class="divider"></span>
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ajax from "../../common/ajax";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
  computed: {
    loggingIn() {
      // return this.$store.state.authentication.status.loggingIn;
    },
  },
  created() {
    // reset login status
    // this.$store.dispatch('authentication/logout');
  },
  mounted() {},
  methods: {
    handleSubmit(e) {
      console.log(e);

      const data = {
        userName: this.username,
        email: this.username,
        password: this.password,
      };
      ajax
        .post(`/api/Auth/Login`, data)
        .then((response) => console.log(response))
        .catch((e) => console.log(e));

      // this.submitted = true;
      // const { username, password } = this;
      // const { dispatch } = this.$store;
      // if (username && password) {
      //     dispatch('authentication/login', { username, password });
      // }
    },
  },
};
</script>
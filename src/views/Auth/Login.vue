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
          <form class="login-form mb-0" @submit.prevent="handleSubmit">
            <div class="form-group">
              <!-- <div class="form-control" :class="{ 'is-invalid': !$v.username.$error }"> -->
              <!-- <div class="form-control" :class="status($v.username)"> -->

              <div
                class="form-control"
                v-bind:class="[$v.username.$error ? 'is-invalid' : '', '']"
              >
                <input
                  class="input-control"
                  type="text"
                  placeholder="Login"
                  v-model="$v.username.$model"
                />
              </div>
              <div
                class="text-danger"
                v-if="!$v.username.required && $v.username.$dirty"
              >
                Field is required
              </div>
              <div
                class="text-danger"
                v-if="!$v.username.email && $v.username.$dirty"
              >
                Field has to be email
              </div>
            </div>

            <div class="form-group">
              <div
                class="form-control"
                v-bind:class="[$v.password.$error ? 'is-invalid' : '', '']"
              >
                <input
                  class="input-control"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <div v-if="$v.password.$dirty">
                <div class="text-danger" v-if="!$v.password.required">
                  Field is required
                </div>
                <div class="text-danger" v-if="!$v.password.minLength">
                  Passwords in our system are a bit longer than that
                </div>
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
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
  validations: {
    username: {
      required,
      email,
      minLength: minLength(6),
    },
    password: {
      required,
      minLength: minLength(8),
    },
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
      this.$v.$touch();
      if (this.$v.$invalid) return;

      console.log(e);

      const data = {
        userName: this.username,
        email: this.username,
        password: this.password,
      };
      ajax
        .post(`/api/Auth/Login`, data)
        .then((response) => {
          console.log(response);
          // router.push('home');
          this.$router.push('home');
        })
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
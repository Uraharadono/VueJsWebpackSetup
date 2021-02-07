<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import config from "config";
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
  mounted() {
    console.log(API_URL);
    // console.log(config);
    // console.log(config.apiUrl);
  },
  methods: {
    handleSubmit(e) {
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
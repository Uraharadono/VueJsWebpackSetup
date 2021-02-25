<template>
  <div>
    <AppLoader v-show="loading"></AppLoader>
    <h1>This is the about page</h1>
  </div>
</template>



<script>
import ajax from "../common/ajax";
import AppLoader from "./Shared/AppLoader.vue";

export default {
  data() {
    return {
      loading: false,
    };
  },
  components: { AppLoader },
  created() {
    // console.log("created");
  },
  mounted() {
    // console.log("evo ga");
    this.loading = true;
    setTimeout(() => {
      ajax
        .get(`/posts`)
        .then((response) => {
          // this.loading = false;
          console.log(response);
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    }, 1500);
  },
};
</script>
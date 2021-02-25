<template>
  <div class="vertical layout" id="app">
    <!-- Loader -->
    <AppLoader></AppLoader>

    <div class="layout-wrap">
      <HorizontalNavbar></HorizontalNavbar>
      <VerticalNavbar v-if="showMenu"></VerticalNavbar>

      <main class="main">
        <div class="content-container">
          <div class="content">
            <router-view />
          </div>
        </div>

        <Footer></Footer>
      </main>
    </div>
  </div>
</template>

// <style lang="scss">
// @import "./styles/bootstrap-bundle.scss";
// @import "./styles/dashboard.scss";
//
</style>
<style lang="scss" src="./styles/bootstrap-bundle.scss"></style>
<style lang="scss" src="./styles/dashboard.scss"></style>

<script>
import { menuBehaviour } from "./common/menu-behaviour";
import HorizontalNavbar from "./views/Menu/HorizontalNavbar.vue";
import VerticalNavbar from "./views/Menu/VerticalNavbar.vue";
import Footer from "./views/Menu/Footer.vue";
import AppLoader from "./views/Menu/AppLoader.vue";

export default {
  components: { HorizontalNavbar, VerticalNavbar, Footer, AppLoader },
  created() {},
  mounted() {
    menuBehaviour();
  },
  methods: {
    handleSubmit(e) {},
  },
  computed: {
    showMenu() {
      const publicPages = ["Login", "Register"];
      const authRequired = !publicPages.includes(this.$route.name + "");
      return authRequired;
    },
  },
};
</script>
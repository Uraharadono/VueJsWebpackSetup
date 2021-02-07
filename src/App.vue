<template>
  <div id="app">
    <header
      class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
    >
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Deron</a>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </header>

    <!-- SIDE MENU -->
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" id="sideMenu">
          <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">
                  About
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Login" class="nav-link">
                  Sign in
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Register" class="nav-link">
                  Register
                </router-link>
              </li>
            </ul>

            <h6
              class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
            >
              <span>Saved reports</span>
              <a class="link-secondary" href="#" aria-label="Add a new report">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-plus-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Last quarter
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main class="col-md-9 ms-sm-auto col-lg-10 p-md-4">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/bootstrap-bundle.scss";
@import "./styles/dashboard.scss";
</style>

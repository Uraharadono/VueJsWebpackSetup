<template>
  <div class="vertical layout" id="app">
    <!-- Loader -->
    <!-- <div class="overlay"></div>
    <div class="loader loader-4">
      <span></span> <span></span> <span></span> <span></span> <span></span>
    </div> -->
    <!-- end Loader -->
    <div class="layout-wrap">
      <!-- Horizontal navbar -->
      <div class="nav-bar dark">
        <div class="nav-bar-wrap">
          <div class="nav-content">
            <div class="row">
              <div class="col col-auto toggle-button-col">
                <div id="toggle-menu" class="toggle-sidebar">
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                </div>
              </div>
              <div class="col title-col">
                <form id="page-search" class="search">
                  <div class="input-container">
                    <span class="search-icon icofont icofont-search"></span>
                    <input
                      placeholder="Type page title to search"
                      class="search-input"
                    />
                  </div>
                </form>
                <h1 id="page-title" class="page-title">Dashboard</h1>
              </div>
              <div class="col col-auto actions-col">
                <div class="nav-actions">
                  <div class="item toggle-search-btn">
                    <a
                      class="nav-link d-none d-md-block"
                      id="toggle-search"
                      href="#"
                      ><i class="icon icofont icofont-search"></i
                    ></a>
                  </div>
                  <div class="item">
                    <a class="nav-link" data-toggle="dropdown" href="#"
                      ><i class="icon icofont icofont-user"></i
                    ></a>
                    <div
                      class="dropdown-menu dropdown-menu-right mini-menu profile"
                    >
                      <div class="avatar-block">
                        <img
                          alt="user-avatar"
                          src="assets/content/avatar-55-2.jpg"
                        />
                        <span class="name">Anna Hamens</span>
                      </div>
                      <ul class="menu-list">
                        <li>
                          <a href="#" class="profile-link"
                            ><i class="icofont icofont-id-card"></i> Profile</a
                          >
                        </li>
                        <li>
                          <a href="#" class="profile-link"
                            ><i class="icofont icofont-calendar"></i> Inbox</a
                          >
                        </li>
                        <li>
                          <a href="#" class="profile-link"
                            ><i class="icofont icofont-calendar"></i>
                            Calendar</a
                          >
                        </li>
                        <li>
                          <a href="#" class="profile-link"
                            ><i class="icofont icofont-settings"></i>
                            Settings</a
                          >
                        </li>
                        <li>
                          <a href="#" class="profile-link"
                            ><i class="icofont icofont-sign-out"></i> Log Out</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="items-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end Horizontal navbar -->
      <!-- Sidebar -->
      <div id="sideMenu" class="side-bar dark">
        <div class="side-bar-wrap">
          <div class="logo">
            <div class="logo-wrap">
              <img
                alt="logo"
                class="logo-img"
                height="40"
                src="assets/images/logo.svg"
              />
            </div>
          </div>
          <div class="menu-wrap vertical">
            <div class="app-menu">
              <ul class="menu-ul">
                <li class="menu-item"><span class="group-title">Main</span></li>
                <li class="menu-item has-sub">
                  <a class="item-link" href="#"
                    ><span class="link-icon icofont-ui-home"></span>
                    <span class="link-text">Dashboards</span>
                    <span class="link-badge badge-sm badge badge-info">4</span>
                    <i class="link-caret icofont icofont-double-right"></i
                  ></a>
                  <ul class="sub">
                    <li class="menu-item">
                      <a class="item-link" href="index.html"
                        ><span class="link-text">Default</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="analytical.html"
                        ><span class="link-text">Analytical</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="financial.html"
                        ><span class="link-text">Financial</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="travel.html"
                        ><span class="link-text">Travel</span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="menu-item has-sub">
                  <a class="item-link" href="#"
                    ><span class="link-icon icofont-database"></span>
                    <span class="link-text">Apps</span>
                    <i class="link-caret icofont icofont-double-right"></i
                  ></a>
                  <ul class="sub">
                    <li class="menu-item">
                      <a class="item-link" href="chat.html"
                        ><span class="link-text">Chat</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="contacts.html"
                        ><span class="link-text">Contacts</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="taskboard.html"
                        ><span class="link-text">Taskboard</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="todo.html"
                        ><span class="link-text">Todo List</span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="menu-item has-sub">
                  <a class="item-link" href="#"
                    ><span class="link-icon icofont-layers"></span>
                    <span class="link-text">Widgets</span>
                    <span class="link-badge badge-sm badge badge-success"
                      >50+</span
                    >
                    <i class="link-caret icofont icofont-double-right"></i
                  ></a>
                  <ul class="sub">
                    <li class="menu-item">
                      <a class="item-link" href="chart-widgets.html"
                        ><span class="link-text">Chart Widgets</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="data-widgets.html"
                        ><span class="link-text">Data Widgets</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="media-widgets.html"
                        ><span class="link-text">Media Widgets</span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="menu-item">
                  <span class="group-title">UI Kit</span>
                </li>
                <li class="menu-item has-sub">
                  <a class="item-link" href="#"
                    ><span class="link-icon icofont-library"></span>
                    <span class="link-text">UI Elements</span>
                    <span class="link-badge badge-sm badge badge-danger"
                      >HOT</span
                    >
                    <i class="link-caret icofont icofont-double-right"></i
                  ></a>
                  <ul class="sub">
                    <li class="menu-item">
                      <a class="item-link" href="accordions.html"
                        ><span class="link-text">Accordions</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="alerts.html"
                        ><span class="link-text">Alerts</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="autocompletes.html"
                        ><span class="link-text">Autocompletes</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="badges.html"
                        ><span class="link-text">Badges</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="buttons.html"
                        ><span class="link-text">Buttons</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="cards.html"
                        ><span class="link-text">Cards</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="checkboxes.html"
                        ><span class="link-text">Checkboxes</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="dropdowns.html"
                        ><span class="link-text">Dropdowns</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="inputs.html"
                        ><span class="link-text">Inputs</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="lists.html"
                        ><span class="link-text">Lists</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="notifications.html"
                        ><span class="link-text">Notifications</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="modals.html"
                        ><span class="link-text">Modal windows</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="progresses.html"
                        ><span class="link-text">Progresses</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="radio.html"
                        ><span class="link-text">Radion buttons</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="ratings.html"
                        ><span class="link-text">Ratings</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="selects.html"
                        ><span class="link-text">Selects</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="sliders.html"
                        ><span class="link-text">Sliders</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="switchers.html"
                        ><span class="link-text">Switcher</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="tabs.html"
                        ><span class="link-text">Tabs</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="textareas.html"
                        ><span class="link-text">Textareas</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="timelines.html"
                        ><span class="link-text">Vertical Timelines</span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="menu-item">
                  <a class="item-link" href="typography.html"
                    ><span class="link-icon icofont-pencil"></span>
                    <span class="link-text">Typography</span></a
                  >
                </li>
                <li class="menu-item">
                  <a class="item-link" href="icons.html"
                    ><span class="link-icon icofont-paint"></span>
                    <span class="link-text">Icons</span></a
                  >
                </li>
                <li class="menu-item has-sub">
                  <a class="item-link" href="#"
                    ><span class="link-icon icofont-id-card"></span>
                    <span class="link-text">Forms</span>
                    <span class="link-badge badge-sm badge badge-warning"
                      >NEW</span
                    >
                    <i class="link-caret icofont icofont-double-right"></i
                  ></a>
                  <ul class="sub">
                    <li class="menu-item">
                      <a class="item-link" href="form-elements.html"
                        ><span class="link-text">Form elements</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="form-layouts.html"
                        ><span class="link-text">Form layout</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="form-validation.html"
                        ><span class="link-text">Form validation</span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="menu-item has-sub">
                  <a class="item-link" href="#"
                    ><span class="link-icon icofont-table"></span>
                    <span class="link-text">Tables</span>
                    <i class="link-caret icofont icofont-double-right"></i
                  ></a>
                  <ul class="sub">
                    <li class="menu-item">
                      <a class="item-link" href="bootstrap-tables.html"
                        ><span class="link-text">Bootstrap tables</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="data-tables.html"
                        ><span class="link-text">Data tables</span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="menu-item has-sub">
                  <a class="item-link" href="#"
                    ><span class="link-icon icofont-map-pins"></span>
                    <span class="link-text">Maps</span>
                    <i class="link-caret icofont icofont-double-right"></i
                  ></a>
                  <ul class="sub">
                    <li class="menu-item">
                      <a class="item-link" href="google-map.html"
                        ><span class="link-text">Google maps</span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="menu-item has-sub">
                  <a class="item-link" href="#"
                    ><span class="link-icon icofont-bars"></span>
                    <span class="link-text">Charts</span>
                    <i class="link-caret icofont icofont-double-right"></i
                  ></a>
                  <ul class="sub">
                    <li class="menu-item">
                      <a class="item-link" href="chart-js.html"
                        ><span class="link-text">Chart.js</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="morris-js.html"
                        ><span class="link-text">Morris.js</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="echarts.html"
                        ><span class="link-text">Echarts</span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="menu-item">
                  <span class="group-title">Pages</span>
                </li>
                <li class="menu-item has-sub">
                  <a class="item-link" href="#"
                    ><span class="link-icon icofont-map-pins"></span>
                    <span class="link-text">Service pages</span>
                    <i class="link-caret icofont icofont-double-right"></i
                  ></a>
                  <ul class="sub">
                    <li class="menu-item">
                      <a class="item-link" href="pricing.html"
                        ><span class="link-text">Pricing</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="invoice.html"
                        ><span class="link-text">Invoice</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="FAQ.html"
                        ><span class="link-text">FAQ</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="vertical-timeline.html"
                        ><span class="link-text">Timeline</span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="menu-item has-sub">
                  <a class="item-link" href="#"
                    ><span class="link-icon icofont-bars"></span>
                    <span class="link-text">Extra pages</span>
                    <i class="link-caret icofont icofont-double-right"></i
                  ></a>
                  <ul class="sub">
                    <li class="menu-item">
                      <a class="item-link" href="log-in.html"
                        ><span class="link-text">Log in</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="sign-up.html"
                        ><span class="link-text">Sign up</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="404.html"
                        ><span class="link-text">404 Page</span></a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item-link" href="500.html"
                        ><span class="link-text">500 Page</span></a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="side-bar-overlay" id="side-bar-overlay"></div>
      </div>
      <!-- end Sidebar -->
      <main class="main">
        <div class="content-container">
          <div class="content">
            <router-view />
          </div>
        </div>
        <!-- Foooter -->
        <div class="app-footer">
          <div class="footer-wrap">
            <p>Copyright © 2020 Deron. All rights reserved.</p>
          </div>
        </div>
        <!-- end Footer -->
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/bootstrap-bundle.scss";
@import "./styles/dashboard.scss";
</style>

<script>
export default {
  created() {},
  mounted() {
    () => {
      window.addEventListener("load", (event) => {
        var body = document.body;
        console.log(body);
        body.classList.add("loaded");
        menu();
        setMenuToggle();
      });

      function setMenuToggle() {
        var overlay = document.getElementById("side-bar-overlay");
        var toggleBtn = document.getElementById("toggle-menu");
        var menu = document.getElementById("side-bar");
        var layout = document.getElementsByClassName("layout")[0];
        var closeBtn = document.getElementById("close-btn");

        if (!(menu && layout)) {
          return;
        }

        var toggleMenu = function () {
          menu.classList.toggle("opened");
          layout.classList.toggle("side-bar-opened");
        };

        if (overlay) {
          overlay.addEventListener("click", toggleMenu);
        }

        if (toggleBtn) {
          toggleBtn.addEventListener("click", toggleMenu);
        }

        if (closeBtn) {
          closeBtn.addEventListener("click", toggleMenu);
        }
      }

      function menu() {
        var elements = document
          .getElementsByClassName("app-menu")[0]
          .getElementsByClassName("menu-item has-sub");
        var menuDelegate = function () {
          // This will allow only single list item to be open
          // for (var i = 0; i < elements.length; i++) {
          // 	elements[i].classList.remove("active");
          // 	var sub = elements[i].getElementsByClassName("sub")[0];
          // 	sub.style.maxHeight = null;
          // }

          if (this.classList.contains("active")) {
            this.classList.remove("active");
            var sub = this.getElementsByClassName("sub")[0];
            sub.style.maxHeight = null;
          } else {
            this.classList.add("active");
            var sub = this.getElementsByClassName("sub")[0];
            sub.style.maxHeight = sub.scrollHeight + "px";
          }
        };

        for (var i = 0; i < elements.length; i++) {
          elements[i].addEventListener("click", menuDelegate, false);
        }
      }
    };
  },
  methods: {
    handleSubmit(e) {},
  },
};

// (function () {
//   "use strict";
//   window.addEventListener("load", (event) => {
//     var body = document.body;
//     body.classList.add("loaded");
//     menu();
//     setMenuToggle();
//   });

//   function setMenuToggle() {
//     var overlay = document.getElementById("side-bar-overlay");
//     var toggleBtn = document.getElementById("toggle-menu");
//     var menu = document.getElementById("side-bar");
//     var layout = document.getElementsByClassName("layout")[0];
//     var closeBtn = document.getElementById("close-btn");

//     if (!(menu && layout)) {
//       return;
//     }

//     var toggleMenu = function () {
//       menu.classList.toggle("opened");
//       layout.classList.toggle("side-bar-opened");
//     };

//     if (overlay) {
//       overlay.addEventListener("click", toggleMenu);
//     }

//     if (toggleBtn) {
//       toggleBtn.addEventListener("click", toggleMenu);
//     }

//     if (closeBtn) {
//       closeBtn.addEventListener("click", toggleMenu);
//     }
//   }

//   function menu() {
//     var elements = document
//       .getElementsByClassName("app-menu")[0]
//       .getElementsByClassName("menu-item has-sub");
//     var menuDelegate = function () {
//       // This will allow only single list item to be open
//       // for (var i = 0; i < elements.length; i++) {
//       // 	elements[i].classList.remove("active");
//       // 	var sub = elements[i].getElementsByClassName("sub")[0];
//       // 	sub.style.maxHeight = null;
//       // }

//       if (this.classList.contains("active")) {
//         this.classList.remove("active");
//         var sub = this.getElementsByClassName("sub")[0];
//         sub.style.maxHeight = null;
//       } else {
//         this.classList.add("active");
//         var sub = this.getElementsByClassName("sub")[0];
//         sub.style.maxHeight = sub.scrollHeight + "px";
//       }
//     };

//     for (var i = 0; i < elements.length; i++) {
//       elements[i].addEventListener("click", menuDelegate, false);
//     }
//   }
// })();
</script>
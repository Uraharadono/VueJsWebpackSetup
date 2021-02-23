import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Font awesome logic 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faAngleDoubleRight, faDatabase, faLayerGroup, faBook, faPencilAlt, faPalette,
   faChalkboardTeacher, faTable, faMapMarkedAlt, faChartBar, faSearch, faUser, faIdCard, faInbox, 
   faCalendarAlt, faSlidersH, faSignOutAlt, faBell, faThumbsUp, faUserPlus, faShareAlt, faEnvelope } 
   from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faHome, faAngleDoubleRight, faDatabase, faLayerGroup, faBook, faPencilAlt, 
            faPalette, faChalkboardTeacher, faTable, faMapMarkedAlt, faChartBar, faSearch, 
            faUser, faIdCard, faInbox, faCalendarAlt, faSlidersH, faSignOutAlt, faBell,
            faThumbsUp, faUserPlus, faShareAlt, faEnvelope );
Vue.component('font-awesome-icon', FontAwesomeIcon);


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
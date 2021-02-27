import Vue from "vue";
import Vuelidate from 'vuelidate';
import App from "./App.vue";
import router from "./router";
import 'bootstrap';



// Validation 
Vue.use(Vuelidate)

// Font awesome logic 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faAngleDoubleRight, faDatabase, faLayerGroup, faBook, faPencilAlt, faPalette,
   faChalkboardTeacher, faTable, faMapMarkedAlt, faChartBar, faSearch, faUser, faIdCard, faInbox, 
   faCalendarAlt, faSlidersH, faSignOutAlt, faBell, faThumbsUp, faUserPlus, faShareAlt, faEnvelope, faRobot } 
   from '@fortawesome/free-solid-svg-icons';
import { faJava, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faHome, faAngleDoubleRight, faDatabase, faLayerGroup, faBook, faPencilAlt, 
            faPalette, faChalkboardTeacher, faTable, faMapMarkedAlt, faChartBar, faSearch, 
            faUser, faIdCard, faInbox, faCalendarAlt, faSlidersH, faSignOutAlt, faBell,
            faThumbsUp, faUserPlus, faShareAlt, faEnvelope, faRobot, faJava, faWhatsapp );
Vue.component('font-awesome-icon', FontAwesomeIcon);


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");


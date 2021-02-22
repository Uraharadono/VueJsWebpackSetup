import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Font awesome logic 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faAngleDoubleRight, faDatabase, faLayerGroup, faBook, faPencilAlt, faPalette,
   faChalkboardTeacher, faTable, faMapMarkedAlt, faChartBar } 
      from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faHome, faAngleDoubleRight, faDatabase, faLayerGroup, faBook, faPencilAlt, 
            faPalette, faChalkboardTeacher, faTable, faMapMarkedAlt, faChartBar );
Vue.component('font-awesome-icon', FontAwesomeIcon);


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
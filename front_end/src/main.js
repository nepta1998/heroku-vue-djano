import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import Axios from "axios";

//haciendo un cambio
Vue.config.productionTip = false;
Axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://phoenixwaretestbackend.herokuapp.com/v1.0/api/"
    : "http://localhost:8000/v1.0/api/";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

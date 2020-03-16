import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;
//hola probando subir a la master
//gajkhgjkadhjkadgjkhkjgadhjdagfsfssfhsfhf
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
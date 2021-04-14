import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// Firebase
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'


Vue.use(Vuelidate)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBuzISeyN2BNuhuiDdz_4-F8eVY8oq-ZZQ",
  authDomain: "o2-proj.firebaseapp.com",
  projectId: "o2-proj",
  storageBucket: "o2-proj.appspot.com",
  messagingSenderId: "495294938001",
  appId: "1:495294938001:web:16aa4ee5720a3e8b157830",
  measurementId: "G-0GEGKF4P9W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
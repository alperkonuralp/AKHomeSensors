import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import moment from 'moment';

moment.locale('tr');

Vue.config.productionTip = false;

import {
    rtdbPlugin
} from 'vuefire';

import vuetify from './plugins/vuetify';

Vue.use(rtdbPlugin);
import './db';

import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

Vue.use(Chartkick.use(Chart));

let app = '';

firebase.auth().onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            router,
            store,
            vuetify,
            render: (h) => h(App)
        }).$mount('#app');
    }
    store.dispatch("fetchUser", user);
});
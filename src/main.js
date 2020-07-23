import Vue from 'vue';
import app from './app.vue';

import 'font-awesome/css/font-awesome.css';

import './lib/mui/dist/css/mui.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';

import axios from 'axios';
axios.defaults.baseURL='http://39.100.234.194:3000';
Vue.prototype.$ajax = axios;

import store from './store.js';

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router,
    store
})
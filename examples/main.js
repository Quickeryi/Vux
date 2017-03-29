/**
 * !Vux
 *
 * Vux test chunk
 *
 * @author yiwei
 * @data 2017-03-28
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Vux from '../src/index';
import "../src/styles/index.scss";

Vue.use(VueRouter);
Vue.use(Vux);

// router config
const router = new VueRouter({
    routes: [
        {
            path: '/tips',
            component: require('./routers/tips.vue')
        }
    ]
});

new Vue({
    el: '#vux-app',
    router,
    render: h => h(App)
});

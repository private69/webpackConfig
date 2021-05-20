import Vue from 'vue'
// import Vue from '../node_modules/vue';
import App from './App.vue'
import './global/importCss'
import './global/extendComponents'
import './global/importUI'
import router from './router'

// 全局注册
import bus from './global/base/bus'
Vue.prototype.$bus = bus;
new Vue({
    el: "#app",
    router,
    render: h => h(App),
    //    template: '<App/>',   
    //   components: { App },
})

// document.getElementsByClassName("box-img")[0].getElementsByTagName("img")[0].src
// document.getElementById("innerdiv").getElementsByTagName("img")[0].src
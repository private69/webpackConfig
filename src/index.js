import Vue from 'vue'
// import Vue from '../node_modules/vue';
import App from './App.vue'
import './global/importCss'
import './global/extendComponents'

function add(...params) {
    if (!params.length) return 0;
    let sum = 0
    params.forEach(val => {
        sum += Number(val)
    })
    return sum
}
console.log(add(1, 2, 3, 4, 5, 6))
new Vue({
    el: "#app",
    render: h => h(App),
    //    template: '<App/>',   
    //   components: { App },
})

// document.getElementsByClassName("box-img")[0].getElementsByTagName("img")[0].src
// document.getElementById("innerdiv").getElementsByTagName("img")[0].src
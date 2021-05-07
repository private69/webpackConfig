import Vue from 'vue'
// import Vue from '../node_modules/vue';
import App from './App.vue'
function add(...params) {
    if(!params.length) return 0;
    let sum = 0
    params.forEach(val => {
        sum += Number(val)
    })
    return sum
}
console.log(add(1,2,3,4,5,6))
new Vue({
   el: "#app",
   render: h => h(App) ,
//    template: '<App/>',
//   components: { App },
})
// 挂载组件
import Vue from 'vue'

import barChart from '@/components/draggable/barChart.vue'
import formChart from '@/components/draggable/formChart.vue'
import lineChart from '@/components/draggable/lineChart.vue'
import newsLists from '@/components/draggable/newsLists.vue'
import pieChart from '@/components/draggable/pieChart.vue'
import risingSunChart from '@/components/draggable/risingSunChart.vue'
import tableChart from '@/components/draggable/tableChart.vue'
import timeChart from '@/components/draggable/timeChart.vue'
import tagComponent from '@/components/draggable/tagComponent.vue'

Vue.component('bar-chart' , barChart);
Vue.component('form-chart' , formChart);
Vue.component('line-chart' , lineChart);
Vue.component('news-lists' , newsLists);
Vue.component('pie-chart' , pieChart);
Vue.component('rising-sun-chart' , risingSunChart);
Vue.component('table-chart' , tableChart);
Vue.component('time-chart' , timeChart);
Vue.component('tag-component' , tagComponent);
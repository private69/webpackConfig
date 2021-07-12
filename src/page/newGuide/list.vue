<template>
    <div class="el-new__guide">
      kncjkdcmkl
    </div>
</template>
<script>
import list from './list.js'
// import Driver from 'driver.js'
// import 'driver.js/dist/driver.min.css'
// import draggable from 'vuedraggable'
// import echarts from 'echarts'
export default {
    name:"list",
    components: {
    },
    data(){
      return {
        draggableValue: '',
        activeNames: '0',
        active: 0,
        steps: list.steps,
        id:"chart",
        width:"500px",
        height: "300px",
        driver: null,
        list: [
          {
            group: "list",
            name: "第一"
          },
          {
            group: "list",
            name: "第二"
          },
          {
            group: "list",
            name: "第三"
          },
        ],
        list2: [
          {
            group: "list",
            name: "第一"
          },
          {
            group: "list",
            name: "第二"
          },
          {
            group: "list",
            name: "第三"
          },
          {
            group: "list",
            name: "第四"
          },
        ]
      }
    },
    methods:{
      onstart(item){
        console.log(item);
      },
      handleChange(val){
        console.log(val);
        this.active = Number(val)
      },
      showTips(){
        // console.log(list.driver);
        this.driver.defineSteps(list.driver)
        this.driver.start()
      }
    },
    mounted(){
      // this.driver = new Driver({
      //   onReset: ele => {
      //     console.log(this.driver.getSteps());
      //     console.log(this.driver.getSteps()[this.driver.getSteps().length-1] == ele ); // true
      //   }
      // })
      console.log("uajshcasj");
    }
}
</script>
<style>
.el-new__guide .el-collapse-item__content {
  padding-left: 10px;
  padding-right: 10px;
}
/* 隐藏关闭按钮 */
[class*="driver-close-btn"] {
    /* visibility: hidden; */
    display: none;
}
/* 隐藏上一步按钮  */
/* [class*="driver-prev-btn"] {
    visibility: hidden;
} */
</style>

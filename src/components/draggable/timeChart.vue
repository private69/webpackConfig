<template>
  <div
    :style="'width:' + width + ';height:' + height"
    class="el-timeChart__div"
  >
    <el-time-picker
      v-if="chartData.istime"
      :is-range="chartData.isrange"
      arrow-control
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      v-model="timepicker"
    ></el-time-picker>
    <el-date-picker
      class="el-timeChart__data__picker"
      v-if="chartData.isdate"
      type="datetime"
      v-model="datepicker"
      placeholder="选择日期时间"
    ></el-date-picker>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: "400px",
    },
    height: {
      type: String,
      default: "200px",
    },
    // 2021-04-26 修改为单一的参数
    propsdata: {
      type: Object,
    },
  },
  data() {
    return {
      chartData: {},
      timepicker: "",
      datepicker: "",
    };
  },
  methods: {
    propsInit() {
      this.chartData = Object.assign({}, this.propsdata);
      // if (this.propsdata) return;
      let data = this.chartData;
      // 是否显示时间范围
      if (!("isrange" in data)) data["isrange"] = true;
      // 是否显示日期选择器
      if (!("istime" in data)) data["istime"] = true;
      // 是否显示时间选择器
      if (!("isdate" in data)) data["isdate"] = true;
    },
  },
  watch:{
    propsdata:{
      handler(){
        this.propsInit()
      },
      deep: true
    },
    width: () => {
    },
    height(){}
  },
  mounted() {
    const now = new Date();
    const YY = 1900 + now.getYear();
    const MM = 1 + now.getMonth();
    const DD = now.getDate();
    console.log(YY, MM, DD);
    this.propsInit();
  },
};
</script>
<style>
.el-timeChart__div {
  width: 60%;
}
.el-timeChart__data__picker {
  margin: 20px;
}
</style>
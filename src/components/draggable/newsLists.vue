<template>
  <div
    :style="'width:' + width + ';height:' + height"
    class="el-newsLists__div"
  >
    <el-collapse accordion v-if="chartData.iscollapse">
      <el-collapse-item v-for="(item, index) in newsData" :key="index">
        <template slot="title">
          <h5>{{ item.title }}</h5>
        </template>
        <div class="pld20 prd20">{{ item.content }}</div>
        <div class="pld20 prd20 pbd20">
          <span class="fll">{{ item.left }}</span>
          <span class="flr">
            {{ nowTime || item.right }}
          </span>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div v-if="chartData.isdriver">
      <div v-for="(item, index) in newsData" :key="index">
        <h5>{{ item.title }}</h5>
        <el-divider content-position="left">
          {{ item.left }}
          <i class="el-icon-bottom-right"></i>
        </el-divider>
        <div class="pld20 pr20">{{ item.content }}</div>
        <el-divider content-position="right">
          {{ item.right }}
          <i class="el-icon-top-left"></i>
        </el-divider>
      </div>
    </div>
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
      nowTime: "",
      newsData: [
        {
          title: "列表一  标题",
          content: `i see fire inside the mountain`,
          left: `private69`,
          right: `2021-04-10`,
        },
      ],
    };
  },
  methods: {
    propsInit() {
      this.chartData = Object.assign({}, this.propsdata);
      console.log(this.propsdata);
      // if (this.propsdata) return;
      let data = this.chartData;
      // 是否显示折叠面板
      if(!('iscollapse' in data))
        data["iscollapse"] = true;
      // 是否显示分割线
      if(!('isdriver' in data))
        data["isdriver"] = true;
      // 新闻数据
      if(!data["newsdata"])
        data["newsdata"] = this.newsData;
      console.log(this.chartData);
    },
  },
  watch:{
    propsdata:{
      handler(){
        this.propsInit()
      },
      deep: true
    }
  },
  mounted() {
    const now = new Date();
    const YY = 1900 + now.getYear();
    const MM = 1 + now.getMonth();
    const DD = now.getDate();
    this.nowTime = new Date(YY, MM, DD);
    this.propsInit();
    this.newsData = this.chartData.newsdata
  },
};
</script>
<style>
.el-newsLists__div {
}
</style>
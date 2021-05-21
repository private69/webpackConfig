<template>
  <div class="cpmCharge">
    <el-backtop target=".cpmCharge">TOP</el-backtop>
    <el-button
      @click="isPie = !isPie"
      :type="isPie ? 'success' : 'primary'"
      :icon="isPie ? 'el-icon-sunny' : 'el-icon-moon'"
      >饼图</el-button
    >
    <el-button
      @click="isBar = !isBar"
      :type="isBar ? 'success' : 'primary'"
      :icon="isBar ? 'el-icon-sunny' : 'el-icon-moon'"
      >柱状图</el-button
    >
    <el-button
      @click="isRisingSun = !isRisingSun"
      :type="isRisingSun ? 'success' : 'primary'"
      :icon="isRisingSun ? 'el-icon-sunny' : 'el-icon-moon'"
      >旭日图</el-button
    >
    <el-button
      @click="isLine = !isLine"
      :type="isLine ? 'success' : 'primary'"
      :icon="isLine ? 'el-icon-sunny' : 'el-icon-moon'"
      >折线图</el-button
    >
    <el-button
      @click="isTableChart = !isTableChart"
      :type="isTableChart ? 'success' : 'primary'"
      :icon="isTableChart ? 'el-icon-sunny' : 'el-icon-moon'"
      >默认表格图</el-button
    >
    <el-button
      @click="isFormChart = !isFormChart"
      :type="isFormChart ? 'success' : 'primary'"
      :icon="isFormChart ? 'el-icon-sunny' : 'el-icon-moon'"
      >默认表单</el-button
    >
    <el-button
      @click="isTimeChart = !isTimeChart"
      :type="isTimeChart ? 'success' : 'primary'"
      :icon="isTimeChart ? 'el-icon-sunny' : 'el-icon-moon'"
      >时间选择器</el-button
    >
    <el-button
      @click="isNewsLists = !isNewsLists"
      :type="isNewsLists ? 'success' : 'primary'"
      :icon="isNewsLists ? 'el-icon-sunny' : 'el-icon-moon'"
      >新闻列表</el-button
    >
    <!-- 组件编写 -->
    <draggable animation="500">
      <el-card shadow="hover" v-if="isPie">
        <fieldset>
          <legend>饼图</legend>
          <pie-chart />
        </fieldset>
      </el-card>
      <el-card shadow="hover" v-if="isBar">
        <fieldset>
          <bar-chart />
        </fieldset>
      </el-card>
      <el-card shadow="hover" v-if="isRisingSun">
        <fieldset>
          <legend>旭日图</legend>
          <rising-sun-chart />
        </fieldset>
      </el-card>
      <el-card shadow="hover" v-if="isLine">
        <fieldset>
          <legend>折线图</legend>
          <line-chart />
        </fieldset>
      </el-card>
      <el-card shadow="hover" v-if="isTableChart">
        <fieldset>
          <legend>默认表格</legend>
          <table-chart />
        </fieldset>
      </el-card>
      <el-card shadow="hover" v-if="isFormChart">
        <fieldset>
          <legend>默认表单</legend>
          <form-chart />
        </fieldset>
      </el-card>
      <el-card shadow="hover" v-if="isTimeChart">
        <fieldset>
          <legend>时间选择器</legend>
          <time-chart />
        </fieldset>
      </el-card>
      <el-card shadow="hover" v-if="isNewsLists">
        <fieldset>
          <legend>新闻列表</legend>
          <news-lists />
        </fieldset>
      </el-card>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data(){
    return {
      isPie: false,
      isBar: false,
      isRisingSun: false,
      isLine: false,
      isTableChart: false,
      isFormChart: false,
      isTimeChart: false,
      isNewsLists: false,
    };
  },
};
</script>
<style>
.cpmCharge .el-button {
  /* margin-top: 5px; */
  margin-bottom: 5px;
}
</style>

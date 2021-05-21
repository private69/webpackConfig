<template>
<!-- 顶部导航栏 -->
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-headernav__menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item>
        <b> buildPageImplement </b>
      </el-menu-item>
      <el-menu-item index="manage/project.html">首页</el-menu-item>
      <el-submenu index="manage">
        <template slot="title">我的工作台</template>
        <el-menu-item index="manage/project.html">作品列表</el-menu-item>
        <el-menu-item index="manage/font">字体列表</el-menu-item>
        <el-menu-item index="manage/music">音乐素材</el-menu-item>
        <el-menu-item index="manage/newGuide">新手指引</el-menu-item>
        <el-menu-item index="manage/cpmCharge">组件管理</el-menu-item>
        <el-menu-item index="manage/about">关于项目</el-menu-item>
      </el-submenu>
      <el-menu-item index="message/center" disabled>消息中心</el-menu-item>
      <!-- <el-menu-item index="code/check">代码查看</el-menu-item> -->
      <el-menu-item index="achievement">成就</el-menu-item>
      <el-menu-item index="help">帮助文档</el-menu-item>
      <span>
        <el-input style="width: 200px; cursor: pointer">
          <template slot="append">
            <i class="el-icon-search" @click="search"></i>
          </template>
        </el-input>
      </span>
      <el-menu-item index="/login" style="float:right;">退出登录</el-menu-item>
      <span class="clear:both;"></span>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    activeIndex: {
      type: String,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSelect(path) {
      if (path == null) return;
      this.$emit("handleSelect", path);
      console.log(path);
    },
    search() {
      console.log("search");
    },
  },
};
</script>
<style lang="less">
.el-headernav__menu {
  width: 100%;
  z-index: 100;
  position: fixed;
  span {
    line-height: 60px;
    padding-left: 50px;
  }
}
</style>

<template>
<!-- 侧边栏 -->
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @select="handleSelect"
      @close="handleClose"
    >
      <el-menu-item index="personal-info">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>个人资料</span>
        </template>
      </el-menu-item>
      <el-menu-item index="account-setup">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>账号设置</span>
        </template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>信息认证</span>
        </template>
      </el-menu-item>
      <el-menu-item index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>代码管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="5">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>页面管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="log-message">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>动态</span>
        </template>
      </el-menu-item>
      <hr />
      <el-submenu index="20">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>内容管理</span>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    activeIndex: {
      type: String,
      default: "personal-info"
    }
  },
  methods: {
    handleSelect(name) {
      this.$emit("handleSelect", name);
    },
    handleOpen() {},
    handleClose() {},
  },
};
</script>
<style lang="less">
</style>
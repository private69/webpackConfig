<template>
  <div>
    <fieldset class="dy-side-bar__fieldset">
      <legend>这是动态插入的组件</legend>
      <span>{{ testprops }} </span>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </fieldset>
    <ul class="layui-nav" lay-filter="">
      <li class="layui-nav-item"><a href="">最新活动</a></li>
      <li class="layui-nav-item layui-this"><a href="">产品</a></li>
      <li class="layui-nav-item"><a href="">大数据</a></li>
      <li class="layui-nav-item">
        <a href="javascript:;">解决方案</a>
        <dl class="layui-nav-child">
          <!-- 二级菜单 -->
          <dd><a href="">移动模块</a></dd>
          <dd><a href="">后台模版</a></dd>
          <dd><a href="">电商平台</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item"><a href="">社区</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["testprops"],
  mounted() {
  },
};
</script>
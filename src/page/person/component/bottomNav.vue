<template>
<!-- 底部信息 -->
  <div>
    <el-card class="el-person__bottom">
      <div class="el-bottom__message">
        <span>关于我们</span>
        <span>广告服务</span>
        <span>开发助手</span>
        <span>
          <i class="el-icon-message"></i>
          邮箱</span
        >
        <span>工作时间 9:00~18:00</span>
      </div>
      <div class="el-contact__module">
        <span>
          Related plugins: psd / html2canvas / driver / vueDraggable
        </span>
      </div>
      <div class="el-contact__module">
        <span
          >Node Development: express / Built-in module extension development
        </span>
      </div>
      <div class="el-contact__module">
        <span>UI framework: element-ui / ecahrts </span>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
.el-person__medium {
  color: #333;
}
.el-person .el-person__bottom {
  padding-top: 30px;
  background-color: #fff !important;
  text-align: center;
  span {
    cursor: pointer;
    color: #a0a0a0;
  }
  .el-bottom__message {
    span {
      font-weight: 400;
      padding: 0 10px;
    }
  }
  .el-contact__module {
    span {
      font-size: 15px;
      padding: 0 6px;
    }
  }
}
</style>
<template>
  <!-- 账号设置 -->
  <div class="el-account__setup">
    <div class="secureGrade">
      <img height="100" src="../../../assets/otherIcon/security.png" />
      <span>50</span>
      <div style="clear:both;"></div>
      <div>请继续完善个人信息</div>
    </div>
    <el-card shadow="hover">
      <h3>账号设置</h3>
      <hr />
      <el-form ref="form" :model="form" label-width="100px" align="right">
        <el-form-item label="密 码：">
          <span>{{ $store.state.username }}</span>
        </el-form-item>
        <el-form-item label="手 机：">
          <el-input v-model="form.phone" v-if="edit"></el-input>
          <span v-else>{{ form.phone }}</span>
        </el-form-item>
        <el-form-item label="邮 箱：">
          <el-input v-model="form.email" v-if="edit"></el-input>
          <span v-else>{{ form.email }}</span>
        </el-form-item>
        <el-form-item label="微信：">
          <el-input v-model="form.wechat" v-if="edit"></el-input>
          <span v-else>{{ form.wechat }}</span>
        </el-form-item>
        <el-form-item label="QQ：">
          <el-input v-model="form.qq" v-if="edit"></el-input>
          <span v-else>{{ form.qq }}</span>
        </el-form-item>
        <el-button type="text" @click="edit = !edit">
          <i class="el-icon-edit"></i>
          {{ edit?'保存':'更改' }}
        </el-button>
        <el-form-item label="登录记录：" align="left">
          <el-card shadow="always" class="el-logs__record">
            <div v-for="( val , index) in loginRecord" :key="'logs '+index">
              <span>{{ val }}</span>
              <hr>
            </div>
          </el-card>
        </el-form-item> 
      </el-form>
    </el-card>
  </div>
</template>
<script>
// import { getLogs } from "@/api/request";
export default {
  props: {
    propsdata: {
      type: Object,
    }
  },
  data() {
    return {
      form: {},
      edit: false,
      loginRecord: [],
    }
  },
  methods: {
    // 获取登录记录日志
    getLogsInfo(){
      let data = {
        username: this.$store.state.username,
        keys: "login"
      }
      // getLogs(data).then( res => {
      //   this.loginRecord = res.data.object;
      // })
    }
  },
  mounted(){
    this.form = Object.assign({} , this.propsdata)
    this.getLogsInfo();
  }
};
</script>
<style lang="less">
.el-account__setup {
  margin-left: 5%;
  .secureGrade {
    text-align: center;
    margin:0 0 20px 0;
    background: linear-gradient(rgb(252, 182, 150),#f6f6f6);
    font-size: 14px;
    span {
      position: absolute;
      font-size: 75px;
      font-weight: bold;
      // color: red;
      opacity: 0.2;
      margin-left: -6.2%;
    }
  }
  .el-logs__record {
    height: 30vh;
    overflow-y: scroll;
  }
}
</style>
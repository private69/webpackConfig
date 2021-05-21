<template>
  <!-- 动态信息（创建页面的相关信息） -->
  <div class="el-log__message">
    <el-card
      shadow="hover"
      v-for="(item, index) in message"
      :key="'message ' + index"
    >
      <div class="el-card__message">
        <span style="float: left">
          <b>
            {{ "创建人：" + $store.state.username || item.name }}
          </b>
        </span>
        <span style="float: right">
          <i>
            {{ "创建时间：" + item.createTime }}
          </i>
        </span>
      </div>
      <div style="clear: both"></div>
      <hr />
      <p>{{ item.stage }}</p>
    </el-card>
  </div>
</template>
<script>
// import { getLogs } from "@/api/request";
export default {
  props: {
    propsdata: {
      type: Object,
    },
  },
  data() {
    return {
      message: [],
    };
  },
  methods: {
    // 获取用户日志
    getUserLogs() {
      let self = this;
      const data = {
        username: this.$store.state.username,
        keys: ["login", "page"],
      };
      // getLogs(data)
      //   .then((res) => {
      //     res.data.object.forEach((val) => {
      //       let createTime = val.slice(
      //         val.indexOf(`in'`) + 3,
      //         val.indexOf(`in'`) + 21
      //       );
      //       let stage = val;
      //       self.message.unshift({
      //         name: this.$store.state.username,
      //         createTime: createTime,
      //         stage: stage,
      //       });
      //     });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
  activated() {
    this.getUserLogs();
  },
  mounted() {
    this.getUserLogs();
    // console.log(this.propsdata);
    // if (this.propsdata) {
    //   this.message = this.propsdata;
    // }
    // else {
    //     this.message.push(this.message[0] , this.message[0] , this.message[0])
    // }
  },
};
</script>
<style lang="less">
.el-log__message {
  margin-left: 5%;
  width: 100%;
  height: 70vh;
  overflow-x: scroll;
}
</style>
<style lang="less" scoped>
.el-log__message {
  .el-card {
    margin-bottom: 20px;
  }
}
.el-card__message {
  span {
    &:last-child {
      font-size: 14px;
      color: #aaa;
    }
  }
}
</style>
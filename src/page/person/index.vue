<template>
  <div class="el-person">
    <header-nav @handleSelect="handleRouterChange" />
    <el-card :shadow="'hover'">
      <div class="el-person__avator">
        <div>
          <el-avatar
            :size="80"
            :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
          >
          </el-avatar>
        </div>
        <div>
          <el-badge :value="12" is-dot>
            <span style="font-size: 22px">
              <img
                style="padding-top: 5px"
                width="20"
                height="20"
                src="@/assets/otherIcon/person 02.gif"
                alt="error"
              />
            </span>
          </el-badge>
        </div>
        <div class="amount">
          <span>
            <div>{{ userData.pageAmount }}</div>
            <div>页面数量</div>
          </span>
          <span>
            <div>{{ userData.traffic || "321" }}</div>
            <div>访问量</div>
          </span>
          <span>
            <div>{{ userData.fans }}</div>
            <div>粉丝数量</div>
          </span>
        </div>
      </div>
      <el-row>
        <el-col :span="left" class="marl50">
          <aside-nav :activeIndex="activeIndex" @handleSelect="handleSelect" />
        </el-col>
        <el-col :span="right" class="marr50">
          <content-manage :imglist="imglist" v-if="activeIndex == '5'" />
          <component :is="cpmname" :propsdata="userData"></component>
        </el-col>
      </el-row>
    </el-card>
    <bottom-nav />
    <iframe
      class="el-person__iframe"
      src="https://ghbtns.com/github-btn.html?user=private69&repo=buildPageImplement&type=watch&count=true&size=large"
      scrolling="0"
      frameborder="0"
    ></iframe>
  </div>
</template>
<script>
import headerNav from "./component/headerNav";
// import { getList, getUser } from "@/api/request";
import bottomNav from "./component/bottomNav.vue";
import asideNav from "./component/asideNav.vue";
import contentManage from "./component/contentManage";
import logMessage from "./component/logMessage";
import personalInfo from "./component/personalInfo";
import accountSetup from "./component/accountSetup";
export default {
  data() {
    return {
      left: 6,
      right: 15,
      // 默认选中的标签
      activeIndex: "personal-info",
      // 图片数组
      imglist: [],
      // 组件名称
      cpmname: "personal-info",
      cpmArray: ["personal-info", "account-setup", "log-message"],
      userData: {},
    };
  },
  methods: {
    // 导入静态图片
    exportStaticImg(name) {
      this[name].forEach((ele) => {
        ele.coverImg = require(`../../${ele.coverImg}`);
      });
      console.log(this[name]);
    },
    // 导航菜单的选择事件
    handleSelect(name) {
      this.activeIndex = name;
      this.cpmname = null;
      if (this.cpmArray.indexOf(name) !== -1) this.cpmname = name;
    },
    // 顶部导航栏跳转路由
    handleRouterChange(path) {
      if (path.indexOf("login")) {
        this.$router.replace(path);
        return;
      }
      this.$router.push(path);
    },
    // 获取用户信息
    getUserInfo() {
    },
    getPageList() {
    },
  },
  mounted() {
    this.getUserInfo();
    this.getPageList();
  },
  components: {
    "header-nav": headerNav,
    "bottom-nav": bottomNav,
    "aside-nav": asideNav,
    "content-manage": contentManage,
    "log-message": logMessage,
    "personal-info": personalInfo,
    "account-setup": accountSetup,
  },
};
</script>
<style lang="less" scoped>
.el-person {
  background-color: #f6f6f6;
  .el-card {
    padding-top: 65px;
    background-color: inherit;
  }
}
</style>
<style lang="less">
.el-person__avator {
  text-align: center;
  .amount {
    display: flex;
    justify-content: center;
    position: relative;
    span {
      padding: 10px 40px;
      &::after {
        content: "";
        position: absolute;
        top: 30%;
        width: 1px;
        height: 25px;
        margin-left: 60px;
        background-color: #ddd;
      }
      &:last-child::after {
        width: 0px;
        height: 0px;
      }
    }
  }
}

.el-carousel__indicators {
  background-color: #f0f0f0;
}
.el-person__iframe {
  position: fixed;
  left: 92vw;
  top: 90vh;
}
</style>
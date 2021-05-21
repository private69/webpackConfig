<template>
    <div class="el-new__guide">
      <el-steps
      :active="active"
      finish-status="success"
      >
        <el-step 
        v-for="(item , index) in steps" 
        :key="index"
        :title="item.title" 
        :description="item.description"
        ></el-step>
      </el-steps>
      <el-collapse 
      v-model="activeNames"
      @change="handleChange"
      accordion
      >
        <el-collapse-item title="步骤一" name="1">
          <div>输入用户信息进行登录，通过验证码进入主页</div>
          <el-collapse accordion>
            <el-collapse-item title="用户的信息" name="1">
              <div>登录完成进入主页，可以通过上部导航栏进入用户的详细信息界面</div>
              <div>用户可根据当前的权限进行相应的操作</div>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
        <el-collapse-item title="步骤二" name="2">
          <div>在作品列表页面，可以查看当前用户所保存的所有页面</div>
          <div>点击已存在的页面进行编辑，点击新建即可重新构建新的页面</div>
        </el-collapse-item>
        <el-collapse-item title="步骤三" name="3">
          <div>在设计区域对页面进行组件文本的添加、数据编辑、拖拽、删除等操作，构建符合要求的页面</div>
          <div>点击保存即可成功通过服务器记录该页面</div>
        </el-collapse-item>
        <el-collapse-item title="步骤四" name="4">
          <div>页面新建/编辑完成以后，可通过预览功能查看不同分辨率下的样式效果</div>
          <div>在作品列表页面，可通过预览生成二维码在移动端查看页面的显示情况、兼容情况</div>
        </el-collapse-item>
      </el-collapse>
      
      <el-button @click="showTips">
        新手指引
      </el-button>
      <fieldset>
        <legend>拖拽至容器一</legend>
        <draggable 
        v-model="list" 
        :options="{ group:{name:'site' , pull:'clone'} }"
        animation="500"
        @sort="onstart"
        >
          <div v-for="(item , index) in list" :key="index">
            {{item.name}}
          </div>
          <el-button slot="footer">点击</el-button>
        </draggable>
      </fieldset>
      <fieldset>
        <legend>容器一</legend>
        <draggable 
        v-model="list2" 
        group="site"
        animation="500"
        @start="onstart"
        >
          <div v-for="(item , index) in list2" :key="index">{{item.name}}</div>
        </draggable>
      </fieldset>
      <!-- 组件拖拽 -->
      <fieldset>
        <legend>拖拽组件至容器二</legend>
        <draggable 
        chooseClass=".all"
        :options="{ group:{name:'allSite' , pull:'clone'} }"
        animation="500"
        >
          <div class="all">
            <div v-for="(item , index) in list" :key="index">{{item.name}}</div>
          </div>
        </draggable>
      </fieldset>
      <fieldset>
        <legend>容器二</legend>
        <draggable 
        group="allSite"
        animation="500"
        >
          <div class="all">
            <div v-for="(item , index) in list2" :key="index">{{item.name}}</div>
          </div>
        </draggable>
      </fieldset>
    </div>
</template>
<script>
import list from './list.js'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import draggable from 'vuedraggable'
// import echarts from 'echarts'
export default {
    name:"list",
    components: {
      draggable: draggable
    },
    data(){
      return {
        draggableValue: '',
        activeNames: '0',
        active: 0,
        steps: list.steps,
        id:"chart",
        width:"500px",
        height: "300px",
        driver: null,
        list: [
          {
            group: "list",
            name: "第一"
          },
          {
            group: "list",
            name: "第二"
          },
          {
            group: "list",
            name: "第三"
          },
        ],
        list2: [
          {
            group: "list",
            name: "第一"
          },
          {
            group: "list",
            name: "第二"
          },
          {
            group: "list",
            name: "第三"
          },
          {
            group: "list",
            name: "第四"
          },
        ]
      }
    },
    methods:{
      onstart(item){
        console.log(item);
      },
      handleChange(val){
        console.log(val);
        this.active = Number(val)
      },
      showTips(){
        // console.log(list.driver);
        this.driver.defineSteps(list.driver)
        this.driver.start()
      }
    },
    mounted(){
      this.driver = new Driver({
        onReset: ele => {
          console.log(this.driver.getSteps());
          console.log(this.driver.getSteps()[this.driver.getSteps().length-1] == ele ); // true
        }
      })
    }
}
</script>
<style>
.el-new__guide .el-collapse-item__content {
  padding-left: 10px;
  padding-right: 10px;
}
/* 隐藏关闭按钮 */
[class*="driver-close-btn"] {
    /* visibility: hidden; */
    display: none;
}
/* 隐藏上一步按钮  */
/* [class*="driver-prev-btn"] {
    visibility: hidden;
} */
</style>

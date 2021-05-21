<template>
  <div class="page-about" shadow="hover">
    <!-- 这是关于项目的编写过程 -->
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in timeLineData"
        :key="index"
        :timestamp="item.time"
        placement="top"
        :type="item.status"
        :icon="
          item.status == 'success'
            ? 'el-icon-check'
            : item.status == 'primary'
            ? 'el-icon-loading'
            : 'el-icon-circle-close'
        "
      >
        <el-card shadow="hover">
          <h5>{{ item.title }}</h5>
          <p v-for="(ele, num) in item.content" :key="num">
            {{ num + 1 + "、" + ele }}
          </p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      timeLineData: [ 
        {
          time: "2021-05-18",
          title: "增加页面的标签",
          content: [
            `增加添加标签的功能`,
            `增加标签的样式（字体样式）`,
            `完成增加标签的页面保存`,
          ],
          status: "success"
        },
        {
          time: "2021-05-17",
          title: "增加构建组件的额外功能",
          content: [
            `增加组件的样式：阴影`,
            `增加组件的移除功能`,
            `完成页面编辑功能：解决编辑保存后新增页面的情况`,
            `增加组件样式--2D旋转`,
          ],
          status: "success"
        },
        {
          time: "2021-05-16",
          title: "添加页面的编辑功能",
          content: [
            `完成页面样式等信息的获取-- 获取json`,
            `通过接口的数据修改前端组件仓库，重新添加组件`,
            `样式的重新赋值(正在处理中...)`,
            `从服务器获取组件的样式数据，并完成前端样式的渲染`,
          ],
          status: "success"
        },
        {
          time: "2021-05-15",
          title: "增加组件的移动功能",
          content: [
            `增加可修改组件的左、上边距`,
            `增加可修改组件的背景、透明度`,
            `修改组件的可调整样式为实时更新`,
            `增加store。管理当前已经添加的组件`,
            `增加store中组建的数据种类style`,
            `新增接口，存放组件的详细样式数据 -- json`,
            `管理组件数据，新增json页面存取——便于提取（转化为对象/数组）`
          ],
          status: "success"
        },
        {
          time: "2021-05-14",
          content: [
            `修改express的访问地址为当前计算机的ip`,
            `增加服务器的首页`,
            `页面的尺寸由百分比修改为绝对的像素`,
          ],
          status: "success"
        },
        {
          time: "20210-05-13",
          title: "增加接口获取用户信息，获取日志",
          content: [
            `增加 userInfo 接口获取用户信息`,
            `增加 getLogs 接口获取用户日志`,
            `前台处理接口返回的数据`
          ],
          status: "success"
        },
        {
          time: "2021-05-12",
          title: "添加用户日志（手动创建添加信息）",
          content: [
            `设置相关创建日志的方法`,
            `修改前台部分接口的数据，添加日志`,
            `往日志文件中添加登录记录、页面构建记录`,
            `查找特定字段日志的方法`,
            `增加前台获取日志的接口 /info/getLogs.do`
          ],
          status: "success"
        },
        {
          time: "2021-05-12",
          title: "完善个人信息界面",
          content: [
            `完整个人界面的信息`,
            `抽离多个组件`,
          ],
          status: "success"
        },
        {
          time: "2021-05-11",
          title: '修改新手指引页面的内容，增加用户信息界面',
          content: [
            `修改新手指引(driver)的弹出信息`,
            `修改新手指引页面的显示信息`,
            `完善上部导航栏的功能模块`
          ],
          status: "success"
        },
        {
          time: "2021-05-10",
          title: "实现保存的页面的展示",
          content: [
            `重写项目获取用户保存的页面的接口：/project/list`,
            `修改该接口返回的数据种类：name、id、coverImg`,
            `解决img不能获取本地静态图片的问题：提前使用require加载`
          ],
          status: "success"
        },
        {
          time: "2020-05-09",
          title: "实现组件在画布上的动态展示以及数据更新",
          content: [
            `组件的动态渲染使用 component 插入的方式`,
            `解决图表需要选择两次才能正确渲染的问题：组件之前存在数据绑定`,
            `添加组件后的截图问题(不存在图表)：由于使用了独立的组件去生成画布的原因`,
            `增加组件的拖拽功能`,
          ],
          status: "primary"
        },
        {
          time: "2021-04-30",
          title: "个人首页的编辑功能",
          content: [
            `查看账户的权限信息`,
            `退出登录、修改用户信息`,
            ``,
          ],
          status: "primary"
        },
        {
          time: "2021-04-27",
          title: "完成部分组件的实时预览",
          content: [
            `完成饼图、柱状图、旭日图的组件的实时预览`,
            `增加预览后的数据重置`,
            `使用树形table展示旭日图的数据`,
            `解决图形数据的残留问题`,
            `解决图形重绘的数据滞后问题`
          ],
          status: "success"
        },
        {
          time: "2021-04-27",
          title: "增加抽屉——用于选择需要添加的组件",
          content: [
            `编写——添加组件时所需的参数表格、表单`,
            `增加预览的功能，实时查看修改数据后的组件样式`,
            `组件的数据替换：需要对参数进行监听`,  
            `画布的修改需要提前销毁，然后重新绘制`
          ],
          status: "success"
        },
        {
          time: "2021-04-26",
          title: "修改组件的传参方式",
          content: [
            `组件的参数统一为单个对象`,
            `新建页面抽屉——添加组件的方式统一为有个对象`,
            `动态组件的传参统一为：宽度、高度、数据对象`
          ],
          status: "success"
        },
        {
          time: "2021-04-25",
          title: "完善组件的编写",
          content: [
            `编写时间选择器、日期选择器`,
            `编写新闻列表`,
          ],
          status: "success"
        },
        {
          time: "2021-04-23",
          title: "编写组件",
          content: [
            `编写表格组件`,
            `编写表单组件`,
            `编写折线图组件`,
            `修改组件预览的样式`,
          ],
          status: "success",
        },
        {
          time: "2021-04-22",
          title: "编写用于拖拽的组件",
          content: [`编写饼图组件`, `编写柱状图组件`, `编写旭日图组件`],
          status: "success",
        },
        {
          time: "2021-04-22",
          title: "编写用于自动启动项目的批处理文件（脚本启动会修改路径,所以先作废）",
          content: [
            `单独编写批处理文件启动两个程序`,
            `隐藏或关闭项目启动时打开的DOS窗口`,
            `将运行批处理文件的命令写进package.json脚本中`,
          ],
          status: "fail",
        },
        {
          time: "2021-04-21",
          title:
            "完成响应信息的统一(code、message、object),添加全局参数用于匹配登录对象",
          content: [
            "完善响应的信息类别（登录、获取、保存）",
            "修改登录页面的数据筛选(先统一转化为小写再进行匹配)",
          ],
          status: "success",
        },
        {
          time: "2021-04-20",
          title: "服务端添加接口——保存：update.do",
          content: [
            "调用接口（将图片转换为二进制码），并在后台件二进制转化为图片保存",
            "保存的本地图片名称：用户名+时间",
            "通过将画布生成为图片，然后转化为base64码进行传输，再保存",
          ],
          status: "success",
        },
        {
          time: "2021-04-20",
          title: "主要逻辑的设计",
          content: [
            "封装不同的请求模块",
            "画布的设计，以及工具的使用（引入插件）",
            "保存：将画布生成为图片——后续更改为具体参数",
          ],
          status: "primary",
        },
        {
          time: "2021-04-16",
          title: "前台封装axios",
          content: ["封装不同的请求模块", "解决参数的传输"],
          status: "success",
        },
        {
          time: "2021-04-16",
          title: "接口联调(登录接口)",
          content: ["测试接口的访问问题", "服务端解决跨域（cors）"],
          status: "success",
        },
        {
          time: "2021-04-15",
          title: "封装express路由",
          content: [
            "封装express的特定路由——get、post以及部分操作",
            "将接口的回调操作独立封装",
          ],
          status: "success",
        },
        {
          time: "2021-04-15",
          title: `新增express服务器`,
          content: [`新增本地服务器用于获取相应的页面数据`],
          status: "primary",
        },
        {
          time: "2021-04-12",
          title: `新增登录路由`,
          content: [
            `引入验证码插件，用于匹配人工操作`,
            `验证过程结束，将用户写入store`,
          ],
          status: "success",
        },
        {
          time: "2021-04-10",
          title: `新建路由“关于项目”`,
          content: [
            `描述整个项目的构造过程`,
            `记录项目功能的创建时间以及其细节`,
          ],
          status: "primary",
        },
        {
          time: "2021-04-05",
          title: `创建路由“新手指引”`,
          content: [
            `包含操作步骤以及解析各个功能块的作用`,
            `包含部分组件的描述`,
          ],
          status: "success",
        },
        {
          time: "2021-03-20",
          title: `创建“项目列表”页面`,
          content: [`显示该账号下的所有已保存记录`, `返回的数据皆是图片`],
          status: "success",
        },
        {
          time: "2021-03-15",
          title: `配置项目基本配置`,
          content: [
            `包含基本的项目脚本命令以及服务器基本配置`,
            `配置服务器端口，解决客户端的跨域问题`,
          ],
          status: "success",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.page-about {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px;

  ol {
    padding-left: 30px;
    font-size: 16px;
    li {
      line-height: 1.5;
      list-style: decimal;
    }
  }
}
</style>
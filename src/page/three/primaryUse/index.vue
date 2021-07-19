<template>
  <div class="three-primary">
    <div style="width: 20%">
      <asider @handleSelect="handleSelect"></asider>
    </div>
    <div>
      <div id="app" ref="app"></div>
      <el-button @click="addZ(1)">镜头拉远</el-button>
      <el-button @click="addZ(0)">拉近距离</el-button>
    </div>
  </div>
</template> 
<script>
import asider from "../component/asider.vue";
import animate from "../common/animate"
import { move } from "../common/keyMove";
import { setPrimaryBoxGeometry } from "../common/BoxGeometry";
const THREE = require("E:/demo/webpackConfig/implement/three.js");
// const THREE = require("https://cdn.bootcdn.net/ajax/libs/three.js/r128/three.js");
//初始化场景
export default {
  components: {
    asider,
  },
  data() {
    return {
      camera: {},
    };
  },
  mounted() {},
  methods: {
    handleSelect(val) {
      typeof this[val] == "function" && this[val]();
    },
    // 根据鼠标移动摄像头
    movingExample() {
      move(document.getElementById("app"), this.moveCamera);
      this.firstExample();
    },
    moveCamera(x, y) {
      x > 0 && (this.camera.position.x -= 0.003);
      y > 0 && (this.camera.position.y += 0.003);
      x < 0 && (this.camera.position.x += 0.003);
      y < 0 && (this.camera.position.y -= 0.003);
    },
    addZ(type) {
      console.log(this.camera);
      if (type) this.camera.position.z += 1;
      else this.camera.position.z -= 1;
    },
    firstExample(dom = null) {
      if (!dom) dom = this.$refs["app"];
      // 建立场景
      var scene = new THREE.Scene();
      
      var camera = this.setPerspectiveCamera(dom);
      const renderer = this.setRendererSize(dom);
      
      const params = {
        location: [1,1,1],
        style: { color: 0x00ff00 }
      }
      var cube = setPrimaryBoxGeometry(params);
      // 添加到坐标为(0,0,0)的位置
      scene.add(cube);
      // 避免图形与摄像头重叠 z 轴为靠近用户的一轴
      this.camera = camera;
      camera.position.z = 10;

      animate(renderer , cube , scene , camera);
    },
    drawLine() {
      move(document.getElementById("app"), this.moveCamera);
      this.drawing(document.getElementById("app"));
    },
    // 绘制直线
    drawing(dom) {
      const renderer = this.setRendererSize(dom);

      var camera = this.setPerspectiveCamera();
      // camera.position.set(0, 0, 5);
      // 相机面向0 0 0
      camera.lookAt(0, 0, 0);
      var material = new THREE.LineBasicMaterial({ color: 0xffff00 });

      var scene = new THREE.Scene();

      var geometry = new THREE.BoxGeometry(1, 1, 1);

      var line = new THREE.Mesh(geometry, material);
      this.camera = camera;

      camera.position.z = 5;
      scene.add(line);
      animate(renderer , line , scene , camera);
    },
    setRendererSize(dom){
      dom.innerHTML && (dom.innerHTML = "");
      // 创建渲染器实例对象
      const renderer = new THREE.WebGLRenderer();
      // 设置渲染器的尺寸
      renderer.setSize(dom.clientWidth, dom.clientHeight);
      // 页面插入渲染器
      dom.appendChild(renderer.domElement);
      return renderer;
    },
    // 设置透视摄像机
    setPerspectiveCamera(dom = null , angle = 45 , farShearPlane = 1 , fastShearPlane = 500) {
      let width = dom?dom.clientWidth:window.innerWidth;
      let height = dom?dom.clientHeight:window.innerHeight;
      /**
       * 建立透视摄像机（参数一：视野高度，参数二：长宽比，参数三：远剪切面，参数四：近剪切面）
       *
       * 物体所在的位置比摄像机的远剪切面远或者所在位置比近剪切面近的时候，该物体超出的部分将不会被渲染到场景中。
       */
      return new THREE.PerspectiveCamera(angle , width / height , farShearPlane , fastShearPlane); 
    }
  },
};
</script>
<style scoped>
#app {
  width: 500px;
  height: 500px;
}
.three-primary {
  display: flex;
}
</style>
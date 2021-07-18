<template>
  <div class="three-primary">
    <div style="width: 20%">
      <asider></asider>
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
import { move } from "../common/keyMove";
const THREE = require("E:/demo/webpackConfig/implement/three.js");
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
  mounted() {
    move(document.getElementById("app"), this.moveCamera);
    this.firstExample();
  },
  methods: {
    moveCamera(x, y) {
      x > 0 && (this.camera.position.x -= 0.003);
      y > 0 && (this.camera.position.y += 0.003);
      x < 0 && (this.camera.position.x += 0.003);
      y < 0 && (this.camera.position.y -= 0.003);
    },
    addZ(type) {
      if (type) this.camera.position.z += 0.2;
      else this.camera.position.z -= 0.2;
    },
    firstExample(dom = null) {
      if (!dom) dom = this.$refs["app"];
      // 建立场景
      var scene = new THREE.Scene();
      /**
       * 建立透视摄像机（参数一：视野高度，参数二：长宽比，参数三：远剪切面，参数四：近剪切面）
       *
       * 物体所在的位置比摄像机的远剪切面远或者所在位置比近剪切面近的时候，该物体超出的部分将不会被渲染到场景中。
       */
      var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      // 创建渲染器实例
      var renderer = new THREE.WebGLRenderer();
      // 设置渲染器的尺寸大小
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
      dom.appendChild(renderer.domElement);
      // 创建立方体对象（包含立方体的顶点[vertices]、面[faces]）
      var geometry = new THREE.BoxGeometry(1, 1, 1);
      // 建立相关颜色的材质
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      /**
       * 新建一个网格
       * 网格是包含有一个几何体以及应用在在此几何体上的材质的对象，我们可以直接将网格对象放入到我们的场景中，
       * 并让它在场景中自由移动。
       */
      var cube = new THREE.Mesh(geometry, material);
      // 添加到坐标为(0,0,0)的位置
      scene.add(cube);
      // 避免图形与摄像头重叠 z 轴为靠近用户的一轴
      this.camera = camera;
      camera.position.z = 2;

      var animate = function () {
        // 创建一个循环——这使得渲染器能够在每次屏幕刷新时对场景进行绘制（在大多数屏幕上，刷新率一般是60次/秒）
        requestAnimationFrame(animate);
        /**
         * 转动网格对象
         * 每一帧时被渲染时调用（正常情况下是60次/秒），这就让立方体有了一个旋转动画
         * 默认情况下 0.01 为一度
         *  */ 
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        // 渲染操作
        renderer.render(scene, camera);
      };
      animate();
    },
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
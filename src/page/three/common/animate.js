// 旋转
function animate (renderer , cube , scene , camera) {
  var whirling = function() {
    // 创建一个循环——这使得渲染器能够在每次屏幕刷新时对场景进行绘制（在大多数屏幕上，刷新率一般是60次/秒）
    requestAnimationFrame(whirling);
    /**
     * 转动网格对象
     * 每一帧时被渲染时调用（正常情况下是60次/秒），这就让立方体有了一个旋转动画
     * 默认情况下 0.01 为一度
     *  */
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // 渲染操作
    renderer.render(scene, camera);
  }
  whirling();
}
export default animate;
const THREE = require("E:/demo/webpackConfig/implement/three.js");

/**
 * @param {*} obj 
 *    (location:Array，存放位置信息)
 *    (style:Object，存放材质相关信息)
 * @returns Object (对象，使用相应材质绘制立方体)
 */
// 创建一个基本立方体对象
exports.setPrimaryBoxGeometry = function (obj) {
  // 配置位置
  if(!obj.location || !location.length) {
    obj.location = "0000".slice(0, 3 - obj.location.length?obj.location.length:0).split("");
  }
  // 创建立方体对象（包含立方体的顶点[vertices]、面[faces]）
  const BoxGeometry = new THREE.BoxGeometry(...obj.location);
  // 建立相关颜色的材质
  const meterial = new THREE.MeshBasicMaterial(obj.style || {});
  /**
   * 新建一个网格
   * 网格是包含有一个几何体以及应用在在此几何体上的材质的对象，我们可以直接将网格对象放入到我们的场景中，
   * 并让它在场景中自由移动。
   */
  return new THREE.Mesh(BoxGeometry , meterial);
}
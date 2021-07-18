/** 
 * 监听鼠标点击和移动混合事件
 * @param win dom Object
 * @param cb callback of the user ,whose use this event
 * 
 * */ 
exports.move = function (win = null, cb = null) {
  if (!win) throw new Error("please use an valid document Object as first param!");
  win.__proto__.location = {
    x: -1,
    y: -1,
  }
  win.onmousemove = function (e) {
    if (win.__proto__.location.x < 0 || win.__proto__.location.y < 0) return ;
    let [locX , locY] = [win.__proto__.location.x , win.__proto__.location.y];
    let [x, y] = [ e.offsetX - locX, e.offsetY - locY];
    console.log(x,y);
    if(cb)
      cb(x , y);
  }
  win.onmousedown = function(e) {
    let [x, y] = [e.offsetX, e.offsetY];
    win.__proto__.location.x = Number(x || "0");
    win.__proto__.location.y = Number(y || "0");
    const divx = document.createElement('div');
    const divy = document.createElement('div');
    divx.style.backgroundColor = "#fcc";
    divy.style.backgroundColor = "#fcc";
    divx.style.width = "400px";
    divx.style.height = "2px";
    divy.style.height = "300px";
    divy.style.width = "2px";
    divx.style.zIndex = 1000;
    divy.style.zIndex = 1000;
    divx.style.position = "absolute";
    divy.style.position = "absolute";
    divx.style.top = y + "px";
    divy.style.top = "0px";
    divy.style.left = e.screenX + "px";
    divx.style.overflow = "hidden"
    divy.style.overflow = "hidden"
    win.parentNode.appendChild(divx);
    win.parentNode.appendChild(divy);
    // 移除节点
    setTimeout(() => {
      win.parentNode.removeChild(divx);
      win.parentNode.removeChild(divy);
    }, 5 * 1000);
  }
}

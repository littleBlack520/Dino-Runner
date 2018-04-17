class Game {
  constructor(id) {
    let canvas = document.getElementById(id);
    this.context = canvas.getContext("2d");
    this.canvas = canvas;
    this.buildGame();
  }
  /**
   * 加载资源
   */
  loadAssets() {
    const PATH = "../images/pic.png";
    let sprite  = new Image();
    sprite.src = PATH;
    return new Promise((resolve, reject)=>{
      sprite.onload = ()=> {
        resolve(sprite);
      };
    });
  }
  /**
   * 绘制UI
   */
  drawUI() {}
  /**
   * 绘制背景
   */
  drawBG() {}
  /**
   * 绘制玩家
   */
  drawPlayer() {}
  /**
   * 绘制敌人
   */
  drawEnemy() {}
  /**
   * 设置操作
   */
  setControll() {}
  /**
   * 构建游戏
   */
  buildGame() {
    this.loadAssets().then(sprite=>{
        new Player(this.context,0,0,sprite);
    });
  }
  /**
   * 更新游戏
   */
  updateGame() {}
  /**
   * 结束游戏
   */
  overGame() {}
}

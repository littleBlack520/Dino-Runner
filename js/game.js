const IMAGES_PATH = "../images/sprite.png";
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
    let sprite = new Image();
    sprite.src = IMAGES_PATH;
    return new Promise((resolve, reject) => {
      sprite.onload = () => {
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
    this.loadAssets().then(sprite => {
      this.player = new Player(this.context, sprite, 0, 0, 100, 100,SPRITE_DATA.player);
      this.updateGame();
    });
  }
  /**
   * 更新游戏
   */
  updateGame(timestamp) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.run(16);
    window.requestAnimationFrame(this.updateGame.bind(this));
  }
  /**
   * 结束游戏
   */
  overGame() {}
}

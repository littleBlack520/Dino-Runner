const IMAGES_PATH = "../images/sprite.png";
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 150;
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
      this.player = new Player(
        this.context,
        sprite,
        0,
        70,
        50,
        50,
        SPRITE_DATA.player
      );
      this.floors = [
        new Floor(this.context, sprite, 0, 100, 1200, 24, SPRITE_DATA.floor[0]),
        new Floor(
          this.context,
          sprite,
          1200,
          100,
          1200,
          24,
          SPRITE_DATA.floor[1]
        )
      ];
      this.enemys = [
        new Enemy(this.context, sprite, 0, 70, 34, 70, SPRITE_DATA.enemy.tree[0]),
        new Enemy(this.context, sprite, 1000, 70, 34, 70, SPRITE_DATA.enemy.tree[1]),
        new Enemy(this.context, sprite, 2000, 70, 34, 70, SPRITE_DATA.enemy.tree[2])
      ]
      this.updateGame();
    });
  }
  /**
   * 更新游戏
   */
  updateGame(timestamp) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.run();
    this.floors.forEach((item, index) => {
      this.floors[index].move();
    });
    this.enemys.forEach((item, index) => {
      this.enemys[index].move(this.player);
    });
    window.requestAnimationFrame(this.updateGame.bind(this));
  }
  /**
   * 结束游戏
   */
  overGame() {}
}

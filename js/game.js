class Game {
  constructor(id) {
    let canvas = document.getElementById(id);
    this.content = canvas.getContext("2d");
    this.canvas = canvas;
  }
  /**
   * 加载资源
   */
  loadAssets(){}
  /**
   * 绘制UI
   */
  drawUI(){}
  /**
   * 绘制背景
   */
  drawBG(){}
  /**
   * 绘制玩家
   */
  drawPlayer(){}
  /**
   * 绘制敌人
   */
  drawEnemy(){}
  /**
   * 设置操作
   */
  setControll(){}
  /**
   * 构建游戏
   */
  buildGame(){}
  /**
   * 更新游戏
   */
  updateGame(){}
  /**
   * 结束游戏
   */
  overGame(){}
}

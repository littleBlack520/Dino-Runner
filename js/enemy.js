/**
 * 玩家类
 */
class Enemy {
  /**
   * 构造函数
   * @param {绘制对象} context 
   * @param {x位置} x 
   * @param {y位置} y 
   * @param {源图像} sprite 
   */
  constructor(context, x, y, sprite) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    //不同状态的位置点
    this.spritePos = {
      small:{x:446,y:2,w:35,h:70},
      big:{x:652,y:2,w:50,h:100}
    }
    this.scale = 0.5; //源图像的缩放比例
    this.speed = 200; //速度
    this.create(this.spritePos.small.x, this.spritePos.small.y,this.spritePos.small.w,this.spritePos.small.h);
  }
  /**
   * 创建
   * @param {x位置点} sx 
   * @param {y位置点} sy 
   */
  create(sx, sy,sw,sh) {
    let source = this.sprite,
      x = this.x,
      y = this.y,
      w = sw * this.scale,
      h = sh * this.scale;
    this.context.clearRect(x, y, w, h);
    this.context.drawImage(source, sx, sy, sw, sh, x, y, w, h);
  }

}

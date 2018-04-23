/**
 * 玩家类
 */
class Floor {
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
      x:0,
      y:104,
      w:2400,
      h:18
    };
    this.scale = 0.5; //源图像的缩放比例
    this.speed = 200; //速度
    this.create(this.spritePos.x, this.spritePos.y,this.spritePos.w,this.spritePos.h);
    this.run();
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
  /**
   * 跑
   */
  run() {
    let func = () => {
      setTimeout(() => {
        let pos =  this.spritePos,
            sx = pos.x,
            sy = pos.y,
            sw = pos.w,
            sh = pos.h;
        this.x-=50;
        if(this.x+sw*this.scale<=600){
           this.x = 0;
        }
        this.create(sx,sy,sw,sh);
        func();
      }, this.speed);
    };
    func();
  }
  /**
   * 死
   */
  die(){
    this.create(this.spritePos.die.x, this.spritePos.die.y);
  }
}

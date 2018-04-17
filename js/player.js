/**
 * 玩家类
 */
class Player {
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
      body: { x: 76, y: 6 },
      run: [{ x: 1854, y: 2 }, { x: 1942, y: 2 }],
      die: { x: 2030, y: 2 }
    };
    this.width = 88; //宽度
    this.height = 95; //高度
    this.scale = 0.5; //源图像的缩放比例
    this.speed = 200; //速度
    this.create(this.spritePos.body.x, this.spritePos.body.y);
  }
  /**
   * 创建
   * @param {x位置点} sx 
   * @param {y位置点} sy 
   */
  create(sx, sy) {
    let source = this.sprite,
      sw = this.width,
      sh = this.height,
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
    let index = 0;
    let func = () => {
      setTimeout(() => {
        let pos =  this.spritePos.run[index],
            sx = pos.x,
            sy = pos.y;
        this.create(sx,sy);
        index++;
        index =  index>=this.spritePos.run.length?0:index;
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

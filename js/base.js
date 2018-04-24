class Base {
  constructor(context, sprite, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sprite = sprite;
    this.context = context;
  }
  draw(data) {
    this.context.drawImage(
      this.sprite,
      data.x,
      data.y,
      data.w,
      data.h,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
}
class Player extends Base {
  constructor(context, sprite, x, y, w, h, data) {
    super(context, sprite, x, y, w, h);
    this.data = data;
    this.index = 0;
    this.speed =  2;
  }
  start() {
    super.draw();
  }
  run(timesamp) {
    this.draw(this.data.run[this.index]);
    this.index++;
    if (this.index >= this.data.run.length) {
      this.index = 0;
    }
  }
  die(data) {
    super.draw(data);
  }
}

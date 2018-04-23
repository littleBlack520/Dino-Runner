class Base {
  constructor(context, sprite, x, y, w, h, scale) {
    this.x = x;
    this.y = y;
    this.w = h;
    this.w = h;
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
class Test extends Base {
  constructor(context, sprite, x, y, w, h, scale) {
    super(context, sprite, x, y, w, h, scale);
  }
  start(data) {
    super.draw(data);
  }
  run(data) {
    super.draw(data);
  }
  die(data) {
    super.draw(data);
  }
}

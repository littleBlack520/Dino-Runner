class Base {
  constructor(context, sprite, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sprite = sprite;
    this.context = context;
    this._ant_index = 0;
    this._ant_last_time = Date.now();
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
  drawAnimation(arr, fps = 10) {
    let now = Date.now();
    let delta = now - this._ant_last_time;
    let interval = 1000 / fps;
    this.draw(arr[this._ant_index]);
    if (delta > interval) {
      this._ant_last_time = now - delta % interval;
      this._ant_index++;
    }
    this._ant_index = this._ant_index >= arr.length ? 0 : this._ant_index;
  }
  move(x, data) {
    this.x = x;
    this.draw(data);
  }
}
class Player extends Base {
  constructor(context, sprite, x, y, w, h, data) {
    super(context, sprite, x, y, w, h);
    this.data = data;
  }
  start() {
    super.draw(this.data.start);
  }
  run(timesamp) {
    super.drawAnimation(this.data.run);
  }
  die(data) {
    super.draw(this.data.die);
  }
}
class Floor extends Base {
  constructor(context, sprite, x, y, w, h, data) {
    super(context, sprite, x, y, w, h);
    this.data = data;
    this.x = x;
    this.w = w;
  }
  draw() {
    super.draw(this.data);
  }
  move() {
    this.x -= 10;
    if (this.x + this.w <= 0) {
      return false;
    }
    super.move(this.x, this.data);
    return true;
  }
}

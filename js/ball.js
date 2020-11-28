const GRAVITY = 0.5;

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  runLogic() {
    this.speedY += GRAVITY;
  }

  draw() {
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, 15, 15);
  }
}

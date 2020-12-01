const ballImage = new Image();
ballImage.src = '../images/ball/ball.00.png';

class Ball {
  constructor(x, y) {
    this.x = canvasElement.width / 2 - 25;
    this.y = 70;

    this.speedX = (Math.random() - 0.5) * 4;
    this.speedY = 1;
  }

  runLogic() {
    this.y += this.speedY;
    this.x += this.speedX;
  }

  draw() {
    context.fillStyle = 'yellow';
    context.fillRect(this.x, this.y, 50, 50);
  }
}

const ballImage = new Image();
ballImage.src = 'images/ball.00.png';

class Ball {
  constructor(x, y, width, height, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 15;
    this.speedX = (Math.random() - 0.6) * 5;
    this.speedY = 3;
  }

  runLogic() {
    this.y += this.speedY;
    this.x += this.speedX;
  }

  draw() {
    context.fillStyle = 'yellow';
    context.drawImage(ballImage, this.x, this.y, this.width, this.height);
  }
}

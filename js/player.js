const playerImage = new Image();
playerImage.src = 'images/playerdown_12.png';

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
  }

  draw() {
    context.fillStyle = 'navy';
    context.drawImage(playerImage, this.x, this.y);
  }
}


let coordinateX = 0;
let coordinateY = 0;

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = x;
    this.width = 30;
    this.height = 30;
    this.image = new Image();
    this.image.src = 'images/playerdown_12.png';
  }

  draw() {
    context.drawImage(this.image, this.x, this.y);
  }
}


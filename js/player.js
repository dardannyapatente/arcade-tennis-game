const playerRightImage = new Image();
playerRightImage.src = 'images/playerdown_12.png';

// const playerLeftImage = new Image();
// playerleftImage.src = 'images/playerdown_15.png';

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
  }

  draw() {
    context.drawImage(playerRightImage, this.x, this.y);
  }
}
//   draw() {
//     if () {
//       context.drawImage(playerRightImage, this.x, this.y);
//     }
//     if () {
//       context.drawImage(playerLeftImage, this.x, this.y);
//     }
//   }
// }

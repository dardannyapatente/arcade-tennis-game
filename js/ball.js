const ballImage = new Image();
ballImage.src = '../images/ball/ball.00.png';

class Ball {
  constructor (x, y) {
    this.x = canvasElement.width / 2 - 25;
    this.y = 70;
    }
    
    runLogic () {
        this.y += 1
      }

    draw () {
        context.fillStyle = 'yellow';
        context.fillRect(
            this.x,
            this.y,
            50,
            50
        );
    }
}
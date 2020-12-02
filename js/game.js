class Game {
  constructor() {
    this.player = new Player(canvasElement.width / 2 - 25, 550);
    this.balls = [];
    this.lastBallTimestamp = 0;
    this.score = 0;
    this.launcher = new Launcher();
    this.setKeyBindings();
    this.launchBall();  
  }

  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp':
          if (
            this.player.y >=
            canvasElement.height - canvasElement.height / 2 + 15
          ) {
            this.player.y -= 50;
          }
          break;
        case 'ArrowDown':
          if (this.player.y <= canvasElement.height - 60) {
            this.player.y += 50;
          }
          break;
        case 'ArrowRight':
          if (this.player.x <= canvasElement.width - 60) {
            this.player.x += 50;
          }
          break;
        case 'ArrowLeft':
          if (this.player.x >= 5) {
            this.player.x -= 50;
          }
          break;
        case 'Space':
          this.hitBall();
          break;
      }
    });
  }

  hitBall() {
    if (
      this.balls[0].x >= this.player.x && this.balls[0].y >= this.player.y) {
      this.balls[0].speedY *= -1;
    }
  }

  checkIntersections() {
    if (this.balls[0].y > this.player.y) {
      this.balls[0].speedX *= 1;
    }
    if (this.balls[0].y > canvasHeight) {
      this.score += 1;
      this.balls.splice(0, 1);
      this.launchBall();
    }
    if (this.balls[0].y < 0) {
      this.balls.splice(0, 1);
      this.launchBall();
    }
  }

  launchBall() {
    this.balls.push(new Ball(canvasElement.width / 2 - 25, 50));
    const currentTimeStamp = new Date();
    if (currentTimeStamp > this.lastBallTimestamp + 2) {
      this.lastBallTimestamp = currentTimeStamp;
    }
  }

  loop() {
    this.runLogic();
    this.draw();
    window.requestAnimationFrame(() => {
      this.loop();
    });
  }

  runLogic() {
    for (let ball of this.balls) {
      ball.runLogic();
    }
    this.checkIntersections();
  }

  draw() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    this.player.draw();
    this.launcher.draw();
    for (let ball of this.balls) {
      ball.draw();
    }
  }
}

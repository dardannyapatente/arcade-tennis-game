class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.balls = [];
    this.lastBallTimestamp = 0;
    this.launcher = new Launcher(canvasWidth / 2, 10);
    this.setKeyBindings();
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
          this.launchBall();
          break;
      }
    });
  }

  launchBall() {
    const currentTimeStamp = new Date();
    if (currentTimeStamp > this.lastBallTimestamp + 2) {
      this.balls.push(new Ball(canvasElement.width / 2 - 25, 50));
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
    this.launchBall();
    for (let ball of this.balls) {
      ball.runLogic();
    }
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

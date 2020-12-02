class Game {
  constructor() {
    this.reset();
    this.setKeyBindings();
    this.launchBall();
  }

  reset() {
    this.player = new Player(canvasElement.width / 2 - 15, 400);
    this.launcher = new Launcher();
    this.balls = [];
    this.lastBallTimestamp = 0;
    this.score = 100;
    this.active = true;
  }

  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp':
          if (this.player.y >= canvasHeight - canvasHeight / 2 + 30) {
            this.player.y -= 30;
          }
          break;
        case 'ArrowDown':
          if (this.player.y <= canvasHeight - 70) {
            this.player.y += 30;
          }
          break;
        case 'ArrowRight':
          if (this.player.x <= canvasWidth - 70) {
            this.player.x += 30;
          }
          break;
        case 'ArrowLeft':
          if (this.player.x >= 20) {
            this.player.x -= 30;
          }
          break;
        case 'Space':
          this.hitBall();
          break;
      }
    });
  }

  hitBall() {
    if (this.balls[0].x >= this.player.x && this.balls[0].y >= this.player.y) {
      this.balls[0].speedY *= -1;
      this.score += 10;
    }
  }

  checkMissedBall() {
    if (this.balls[0].y > this.player.y) {
      this.balls[0].speedX *= 1;
    }
    if (this.balls[0].y > canvasHeight) {
      this.score -= 10;
      this.balls.splice(0, 1);
      this.launchBall();
    }
    if (this.balls[0].y < 0) {
      this.balls.splice(0, 1);
      this.launchBall();
    }
  }

  launchBall() {
    this.balls.push(new Ball(canvasElement.width / 2 - 10, 70));
    const currentTimeStamp = new Date();
    if (currentTimeStamp > this.lastBallTimestamp + 2) {
      this.lastBallTimestamp = currentTimeStamp;
    }
  }

  /* collectGarbage() {
    for (let ball of this.balls) {
      if (
        ball.x > canvasWidth;
        ball.y > canvasHeight;
      ) {
      const indexOfBall = this.balls.indexOf(ball);
      this.balls.splice(indexOfBall, 1);
      }
    }
  }
  */

  loop() {
    this.runLogic();
    this.draw();
    if (this.active) {
      window.requestAnimationFrame(() => {
        this.loop();
      });
    } else {
      screenPlayElement.style.display = 'none';
      screenGameOverElement.style.display = 'initial';
    }
  }

  runLogic() {
    //   this.collectGarbage();
    for (let ball of this.balls) {
      ball.runLogic();
    }
    this.checkMissedBall();
    if (this.score <= 0) {
      this.active = false;
    }
  }

  drawScore() {
    context.fillStyle = 'white';
    context.font = '55px sans-serif';
    context.fillText(this.score, 380, 690);
  }

  draw() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    this.player.draw();
    this.launcher.draw();
    for (let ball of this.balls) {
      ball.draw();
    }
    this.drawScore();
  }
}

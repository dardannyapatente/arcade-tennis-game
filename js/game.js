const hitBallSound = new Audio('sounds/hit_ball.mp3');

class Game {
  constructor() {
    this.reset();
    this.setKeyBindings();
  }

  reset() {
    this.player = new Player(canvasElement.width / 2 - 15, 400);
    this.launcher = new Launcher();
    this.balls = [];
    this.lastBallTimestamp = 0;
    this.score = 100;
    this.active = true;
    this.intervalBetweenBalls = 3000;
    this.ballStartingSpeedX = 2;
    this.ballStartingSpeedY = 2;
  }

  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp':
          if (this.player.y >= canvasHeight - canvasHeight / 2 + 10) {
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
            this.player.image.src = 'images/playerdown_12.png';
          }
          break;
        case 'ArrowLeft':
          if (this.player.x >= 20) {
            this.player.x -= 30;
            this.player.image.src = 'images/playerdown_15.png';
          }
          break;
        case 'Space':
          this.hitBall();
          break;
      }
    });
  }

  // getMousePosition(canvas, event) {
  //   let rect = canvas.getBoundingClientRect();
  //   let x = event.clientX - rect.left;
  //   let y = event.clientY - rect.top;

  //   window.addEventListener('mousedown', (event) => {
  //     this.hitBall();
  //   });
  // }

  hitBall() {
    for (let ball of this.balls) {
      if (
        this.player.x < ball.x + ball.width + 15 &&
        this.player.x + this.player.width + 15 > ball.x &&
        this.player.y < ball.y + ball.height + 15 &&
        this.player.y + this.player.height + 15 > ball.y
      ) {
        this.score += 10;
        hitBallSound.play();
        ball.speedY *= -1;
      }
    }
  }

  checkMissedBall() {
    if (this.balls[0].y > this.player.y) {
      this.balls[0].speedX *= 1;
    }
    if (this.balls[0].y > canvasHeight && this.balls[0].y > this.player.y) {
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
    const currentTimeStamp = Date.now();
    if (currentTimeStamp > this.lastBallTimestamp + this.intervalBetweenBalls) {
      const ball = new Ball(
        canvasWidth / 2 - 10,
        70,
        this.width,
        this.height,
        this.ballStartingSpeedX,
        this.ballStartingSpeedY
      );
      this.balls.push(ball);
      this.lastBallTimestamp = currentTimeStamp;
    }
  }

  collectGarbage() {
    for (let ball of this.balls) {
      if (ball.x >= this.canvasWidth || ball.x >= this.canvasHeight) {
        const indexOfBall = this.balls.indexOf(ball);
        this.balls.splice(indexOfBall, 1);
      }
    }
  }

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
    this.intervalBetweenBalls *= 0.9996;
    this.ballStartingSpeed *= 0.0001;
    this.launchBall();
    this.collectGarbage();
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

class Game {
  constructor(x, y) {
    this.player = new Player(0, 0);
    this.launcher = new Launcher(200, 0);
    this.balls = [];
    this.setKeyBindings();
  }

  setKeyBindings () {
    window.addEventListener('keydown', (event) => {
      switch(event.code) {
        case 'ArrowUp':
          if (this.player.y >= canvasElement.height - canvasElement.height / 2 + 15) {
          this.player.y -= 10};
          break;
        case 'ArrowDown':
          if (this.player.y <= canvasElement.height - 60) {
          this.player.y += 10};
          break;
        case 'ArrowRight':
          if (this.player.x <= canvasElement.width - 55) {
          this.player.x += 10};
          break;
        case 'ArrowLeft':
          if (this.player.x >= 5) {
          this.player.x -= 10};
          break;
        case 'Space':
          this.launchBall();
          break;
      }
    });
  }
  
  launchBall () {
    const x = this.launcher.x + this.launcher.width / 2;
    const y = this.launcher.y + this.launcher.height;
    const ball = new Ball(this, x, y);
    this.balls.push(ball);
  }


  loop () {
    this.runLogic();
    this.draw();
    window.requestAnimationFrame(() => {
    this.loop();
    });
  }

// Call runLogic method for every "element" in game that has it

runLogic () {

}

/* Run logic for balls --> to improve
  runLogic () {
    if (Math.random() < 0.5) {

    }
    this.launcher.push(new Ball(canvasWidth, Math.random() * canvasHeight));
  }
*/


// Call draw method for every "element" in the game
  draw () {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      for (let ball of this.balls) {
        ball.draw();
      }
      this.player.draw();
      this.launcher.draw();
  }
}
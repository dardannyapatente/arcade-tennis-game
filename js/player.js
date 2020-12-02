class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
  }

    draw () {
      context.fillStyle = 'navy';
      context.fillRect (
      this.x,
      this.y,
      this.width,
      this.height
        )
    }

    runLogic () {

    }
}
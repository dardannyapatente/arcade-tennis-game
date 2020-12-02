class Launcher {
  constructor (x, y) {
    this.x = canvasElement.width / 2 - 10;
    this.y = 50;
  }

    draw () {
        context.fillStyle = 'rgb(232, 234, 236)';
        context.fillRect (
            this.x,
            this.y,
            25,
            25
        )
    }
}
class Launcher {
  constructor (x, y) {
    this.x = canvasElement.width / 2 + 5;
    this.y = 55;
  }

    draw () {
        context.fillStyle = 'rgb(232, 234, 236)';
        context.beginPath();
        context.arc(this.x, this.y, 15, 0, 2 * Math.PI);
        context.closePath();
        context.fillStyle = 'gray';
        context.fill();
        context.beginPath();
        context.arc(this.x, this.y, 7, 0, 2 * Math.PI);
        context.closePath();
        context.fillStyle = 'yellow';
        context.fill();
    }
}
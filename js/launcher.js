class Launcher {
    constructor (x, y) {
      this.x = 400 - 10;
      this.y = 50;
    }
  
      draw () {
          context.fillStyle = 'green';
          context.fillRect (
              this.x,
              this.y,
              25,
              25
          )
      }
  }
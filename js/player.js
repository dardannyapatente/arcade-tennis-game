class Player {
    constructor(x, y) {
      this.x = 400 - 25;
      this.y = 550;
    }
  
      draw () {
        context.fillStyle = 'navy';
        context.fillRect (
        this.x,
        this.y,
          50,
          50
          )
      }
  
      runLogic () {
  
      }
  }
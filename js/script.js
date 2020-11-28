const canvasElement = document.querySelector('canvas');

const canvasWidth = canvasElement.width;
const canvasHeight = canvasElement.height;

const context = canvasElement.getContext('2d');

var backgroundImage = new Image();
backgroundImage.src = "../images/tennisfield.jpg";


const game = new Game();

game.loop();
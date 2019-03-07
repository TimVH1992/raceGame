let canvas, canvasContext;

let blueCar = new carClass();
let greenCar = new carClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width,canvas.height, 'red');
	colorText("LOADING IMAGES", canvas.width/2,canvas.height/2, "black");

	loadImages();
}

function imageLoadingDoneSoStartGame() {
	let framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();

	loadLevel(levelOne);

	
}

function loadLevel(whichLevel) {
	trackGrid = whichLevel.slice();
	blueCar.reset(carPic, "Blue Shadow");
	greenCar.reset(otherCarPic, "Green Machine");
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	blueCar.move();
	greenCar.move();
}

function drawAll() {
	drawTracks();
	blueCar.draw();
	greenCar.draw();
}
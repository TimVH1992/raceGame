const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_Q_ARROW = 81;
const KEY_Z_ARROW = 90;
const KEY_D_ARROW = 68;
const KEY_S_ARROW = 83;


let mouseX = 0;
let mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	greenCar.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_LEFT_ARROW, KEY_DOWN_ARROW);
	blueCar.setupInput(KEY_Z_ARROW, KEY_D_ARROW, KEY_Q_ARROW, KEY_S_ARROW);
}

function updateMousePos(evt) {
	let rect = canvas.getBoundingClientRect();
	let root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	// cheat / hack to test car in any position
	/*carX = mouseX;
	carY = mouseY;
	carSpeedX = 4;
	carSpeedY = -4;*/
}

function keySet(keyEvent, whichCar, setTo) {
	if(keyEvent.keyCode == whichCar.controlKeyLeft) {
		whichCar.KeyHeld_turnLeft = setTo;	
	}
	if(keyEvent.keyCode == whichCar.controlKeyRight) {
		whichCar.KeyHeld_turnRight = setTo;
			
	}
	if(keyEvent.keyCode == whichCar.controlKeyUp) {
		whichCar.KeyHeld_Gas = setTo;
			
	}
	if(keyEvent.keyCode == whichCar.controlKeyDown) {
		whichCar.KeyHeld_Reverse = setTo;
			
	}
		
}

function keyPressed(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	keySet(evt, blueCar,true);
	keySet(evt, greenCar,true);
}

function keyReleased(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	   keySet(evt, blueCar,false);
	   keySet(evt, greenCar, false);
}
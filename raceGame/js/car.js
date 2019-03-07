const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;

function carClass() {
    this.x = 75;
    this.y = 75;
    this.ang = 0;
    this.speed = 0;
    this.myCarPic; //which picture to use
    this.name = "Untitled car";

    this.KeyHeld_Gas = false;
    this.KeyHeld_Reverse = false;
    this.KeyHeld_TurnLeft = false;
    this.KeyHeld_turnRight = false;


    this.setupInput = function (upkey, rightKey, leftKey, downKey) {
        this.controlKeyUp = upkey;
        this.controlKeyRight = rightKey;
        this.controlKeyLeft = leftKey;
        this.controlKeyDown = downKey; 
    }

    this.reset = function(whichImage, carName) {
        this.name = carName;
        this.myCarPic = whichImage;
        this.speed = 0;
        this.ang = 0;
        
        for(let eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
            for(let eachCol=0;eachCol<TRACK_COLS;eachCol++) {
                let arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
                if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
                    trackGrid[arrayIndex] = TRACK_ROAD;
                    this.ang = -Math.PI/2;
                    this.x = eachCol * TRACK_W + TRACK_W/2;
                    this.y = eachRow * TRACK_H + TRACK_H/2;
                    return;
                    } // end of player start if
                } // end of col for
            } // end of row for
            console.log('NO PLAYER START FOUND');
        } // end of carReset func


    this.move = function() {
        this.speed *= GROUNDSPEED_DECAY_MULT;
        if(this.KeyHeld_Gas) {
            this.speed += DRIVE_POWER;
        }
        if(this.KeyHeld_Reverse) {
            this.speed -= REVERSE_POWER;
        }
        if(Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
        if(this.KeyHeld_turnLeft) {
            this.ang -= TURN_RATE;
        }
        if(this.KeyHeld_turnRight) {
            this.ang += TURN_RATE;
        }
    }
        this.x += Math.cos(this.ang) * this.speed;
        this.y += Math.sin(this.ang) * this.speed;

        carTrackHandling(this);
    }
    

    this.draw = function() {
            drawBitmapCenteredWithRotation(this.myCarPic, this.x,this.y, this.ang);
    }

}    
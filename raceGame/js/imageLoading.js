let carPic = document.createElement("img");
let otherCarPic = document.createElement("img");
let trackPics = [];


let picsToLoad = 0; // set automatically based on length of imageList in loadImages();


function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    //console.log(picsToLoad);
    if(picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName) {
    
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "./images/" + fileName; 
}

function loadImageForTrackCode(trackCode, fileName) {
    trackPics[trackCode] = document.createElement('img');
    beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {
    let imageList = [ 
        {varName: carPic, theFile: "player1car.png"},
        {varName: otherCarPic, theFile: "player2car.png"},
        
        {trackType: TRACK_ROAD, theFile: "track_road.png"}, 
        {trackType: TRACK_WALL, theFile: "track_wall.png"},
        {trackType: TRACK_FLAG, theFile: "track_flag.png"}, 
        {trackType: TRACK_GOAL, theFile: "track_goal.png"}, 
        {trackType: TRACK_TREE, theFile: "track_tree.png"}
        ];

        picsToLoad = imageList.length; 

    for(let i=0; i<imageList.length; i++) {
        if(imageList[i].varName != undefined) {
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
        } else {
            loadImageForTrackCode( imageList[i].trackType, imageList[i].theFile );
        }
    }
}
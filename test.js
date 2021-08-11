// Turret property
var turretNumber = [];
var turretPosX = [];
var turretPosY = [];

// all variable to add turrets
var answerPlayer;
var actualLengthArray;
var lastLengthArray;

// function to add a turret and give its position
function addTurret () {
	if (answerPlayer.includes("create" && "turret")) {
		// array.length > lastArrayLength
		turretNumber.push(prompt("Turret Name ?"));
		// on pourra mettre ensuite :
		// how many turret ? et on pourra rajouter directement le nombre sans se soucier des noms
	};
};

function playerAction () {
	answerPlayer = prompt("What's next ?");
};


// Beginning of the function
playerAction ();
addTurret ();
alert (turretNumber);


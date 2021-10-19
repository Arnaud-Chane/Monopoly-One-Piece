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
		turretPosX.push(prompt("In position X :"))
		turretPosY.push(prompt("And in position Y :"))
	};
	if (answerPlayer.includes("stop")) {
		i = 1;
	};
};

function playerAction () {
	answerPlayer = prompt("What's next ?");
};

// function boucle
var i = 0;
function boucle () {
	while (i === 0) {
		playerAction();
		addTurret();
	};
};



// function to show Name of turrets, its postion in X and Y







// Beginning of the function
boucle ();
alert (turretNumber);


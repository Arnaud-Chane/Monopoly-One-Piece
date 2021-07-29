var actualTurn = 0;
var i = 0;
i = prompt("How many player ?");

var action;

/*
("So there are " + i + " players");
mettre if player + (i+1);


*/
function actionTurn() {
	alert("It's your turn Player" + actualTurn + ".");
 	action = prompt("What are you gonna do ?");
};



var namePlayerTurn;

if (actualTurn => 1) {
	actionTurn();
	actualTurn += 1;
} if (actualTurn > i+1) {
	actionTurn();
	actualTurn = 0;
};

// mettre while ppur que les fonctions tournent en boucle



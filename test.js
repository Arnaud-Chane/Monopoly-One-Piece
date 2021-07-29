var actualTurn = 1;
var i = 0;
var action;
var n = 0;
var endGame;
var answer = true;

i = prompt("How many player ?");

function actionTurn() {
	alert("It's your turn Player " + actualTurn + ".");
 	action = prompt("What are you gonna do ?");
 	actionBreak();
};

function loopAction () { 
  while (actualTurn <= i) {
   actionTurn();
   actualTurn += 1;
  };
  actualTurn = 1;
};

function actionBreak () {
 if (answer === action.includes("break")) {
 	endGame = prompt("Should we continue ?")
  } else {
  	return;
  };
};

while (n < 1) {
	if (actualTurn <= i) {
		loopAction();
	};
};
/* 
So far :
playerTurn
dice
break



*/

var actualTurn = 1;
var i = 0;
var action;
var n = 0;
var endGame;
var answer;

i = prompt("How many player ?");

function rollDice() {
  if (action.includes("dice")) {
    function randomRoll(x, y) {
      min = Math.ceil(x);
      max = Math.floor(y);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    };

    let number1 = randomRoll(0, 6);
    let number2 = randomRoll(0, 6);
    alert(number1 + ", " + number2);
  };
};

function actionTurn() {
	alert("It's your turn Player " + actualTurn + ".");
 	action = prompt("What are you gonna do ?");
  rollDice();
 	actionBreak();
};

function loopAction () { 
  while (actualTurn <= i) {
   actionTurn();
   actualTurn += 1;
  };a
  actualTurn = 1;
};

function actionBreak () {
 if (action.includes("break")) {
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

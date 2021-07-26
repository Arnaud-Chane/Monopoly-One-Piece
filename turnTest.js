/*function premierFiltre(joueur) {
 var turnFilter = allPlayer.filter(secondFiltre);
 console.log(turnFilter);
};

function secondFiltre(turnp){
 return turnp === true;
};
*/

function premierFiltre(turnp){
	return turnp === true;
};


var allPlayer = [
	j1 = [
		pTurn = true,
		avatar = "Chien",
		money = 50
	],
	
	j2 = [
		pTurn = false,
		avatar = "Chat",
		money = 10
	],
	
	j3 = [
	 pTurn = false,
	 avatar = "Requin",
	 money = 100
	]
];

var resultat = allPlayer.forEach(premierFiltre);
console.log(resultat);




//filter

/*
function lessThanTen(number) {
  return number < 10;
}

var numbers = [
	13,
	4,
	70
];

var underTen = numbers.filter(lessThanTen);
print(underTen);
*/




// forEach

/*
let shoes = [
	"sneakers",
	"addidas"
];

function printShoes(shoe) {
	console.log(shoes);
};

shoes.forEach(printShoes);
*/
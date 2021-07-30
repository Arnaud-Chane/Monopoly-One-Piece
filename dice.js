function getRandomInt(x, y) {
  min = Math.ceil(x);
  max = Math.floor(y);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let number1 = getRandomInt(0, 6);
let number2 = getRandomInt(0, 6);
alert(number1 + ", " + number2);
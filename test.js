function lessThanTen(number) {
  return number < 10;
};

var numbers = [
	13,
	4,
	70
];

var underTen = numbers.filter(lessThanTen);
console.log(underTen);
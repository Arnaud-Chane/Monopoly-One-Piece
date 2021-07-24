function lessThanTen(number) {
  return number < 10;
};

let numbers = [
	13,
	4,
	70
];

let underTen = numbers.filter(lessThanTen);
console.log(underTen);
const add = function(a, b) {
	return (a + b);	
};

const subtract = function(a, b) {
	return (a - b);	
};

const sum = function(arr) {
	return (arr.reduce( (total, a) => {
		return (total + a);
	}, 0));
	
};

const multiply = function(arr) {
	return (arr.reduce( (total, a) => {
		return (total * a);
	}, 1));
};

const power = function(base, exponent) {
	if (exponent == 1)
		return (base);
	return (base * power(base, exponent - 1));
};

const factorial = function(pos) {
	if (pos === 0)
		return (1);
	return (pos * factorial(pos - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

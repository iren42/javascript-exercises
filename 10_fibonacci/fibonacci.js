/* A series of numbers in which each number ( Fibonacci number ) is the sum of
 * the two preceding numbers. In this exercise, the Fibonacci sequence used is
 * 1, 1, 2, 3, 5, 8, etc. 
 */

const fibonacci = function(index) {
	if (index < 0)
		return ("OOPS");
	if (index == 0)
		return (0);
	if (index == 1 || index == 2)
		return (1);
	let	firstPrecedent = fibonacci(index - 2);
	let	secondPrecedent = fibonacci(index - 1);
	return (firstPrecedent + secondPrecedent);
};

// Do not edit below this line
module.exports = fibonacci;

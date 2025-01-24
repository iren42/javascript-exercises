const reverseString = function(str) {
	let i = 0;
	let arrayStr = Array.from(str);
	let buffer = "";

	while (i < str.length / 2)
	{
		buffer = arrayStr[i]
		arrayStr[i] = arrayStr[str.length - 1 - i];
		arrayStr[str.length - 1 - i] = buffer;
		i++;
	}
	return (arrayStr.join(""));
};

// Do not edit below this line
module.exports = reverseString;

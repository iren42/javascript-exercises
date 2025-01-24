const repeatString = function(str, num) {
	if (num < 0)
		return ("ERROR");

	let res = "";
	let i = 0;
	while (i++ < num)
	{
		res += str;
	}
	return (res);
};

// Do not edit below this line
module.exports = repeatString;

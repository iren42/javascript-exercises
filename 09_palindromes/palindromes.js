function	isChar(c)
{
	return (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z');
}

function	isDigit(c)
{
	return (c >= '0' && c <= '9');
}

function	removePunctuations(str)
{
	let	res = [];
	let	arr = str.split("");
	let	i = -1;
	let	j = -1;
	while (i++ < arr.length)
	{
		if (isChar(arr[i]) || isDigit(arr[i]))
			res[++j] = arr[i];
	}
	return (res.join());
}

const palindromes = function (str) {
	let	i = -1;
	let	noPuncStr = removePunctuations(str);
	let	s = noPuncStr.toLowerCase();
	while (i++ < s.length)
	{
		if (s[i] !== s[s.length - 1 - i])
			return (false);
	}
	return (true);
};

// Do not edit below this line
module.exports = palindromes;

const sumAll = function(posIntA, posIntB) {
	if (posIntA < 0 || posIntB < 0 ||
		!Number.isInteger(posIntA) || !Number.isInteger(posIntB))
		return ("ERROR");
	let	sum = 0;
	let	i = posIntA;
	if (posIntA > posIntB)
		i = posIntB;
	while (i <= posIntB || i <= posIntA)
	{
		sum += i++;
	}
	return (sum);
};

// Do not edit below this line
module.exports = sumAll;

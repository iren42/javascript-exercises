/* x °F ≘ (x − 32) × 5/9 °C  */
const convertToCelsius = function(fahr) {
	let res = (fahr - 32) * (5 / 9);
	if (Number.isInteger(res))
		return (res);
	return (Number(res.toFixed(1)));

};

/* x °C ≘ (x × 9/5 + 32) °F */
const convertToFahrenheit = function(celcius) {
	let res = (celcius * (9 / 5) + 32);
	if (Number.isInteger(res))
		return (res);
	return (Number(res.toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

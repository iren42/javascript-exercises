const removeFromArray = function(array, ...nbToRemove) {
	for (const nb of nbToRemove)
	{
		while (array.includes(nb))
			array.splice(array.indexOf(nb), 1);
	}
	return (array);
};

// Do not edit below this line
module.exports = removeFromArray;

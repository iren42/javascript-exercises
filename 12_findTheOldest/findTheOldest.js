const date = new Date();

function sortByDescendingAge(a, b)
{
	if (b.yearOfDeath === undefined)
		b.yearOfDeath =  date.getFullYear();
	if (a.yearOfDeath === undefined)
		a.yearOfDeath =  date.getFullYear();
	return ((b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth ));
}

const findTheOldest = function(arr = []) {
	if (arr.length === 0)
		return ("Error");
	const	copyArr = arr.slice();
	let	rumoredOldest = copyArr.sort(sortByDescendingAge);
	return (rumoredOldest[0]);
};

// Do not edit below this line
module.exports = findTheOldest;

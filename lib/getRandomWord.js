'use strict';

module.exports = function getRandomWord(obj) {
	var propArr = Object.keys(obj);

	var randomProp = propArr[Math.floor(Math.random() * propArr.length)];

	return {word: randomProp};
}

// 'use strict';

// module.exports = function getRandomWord(adjObj, nounObj, verbObj) {
// 	var adjArr = Object.keys(adjObj);
// 	var nounArr = Object.keys(nounObj);
// 	var verbArr = Object.keys(verbObj);

// 	var bandName = adjArr[Math.floor(Math.random() * adjArr.length)]
// 					+ nounArr[Math.floor(Math.random() * nounArr.length)]
// 					+ verbArr[Math.floor(Math.random() * verbArr.length)];



// 	return {string: bandName};
// }

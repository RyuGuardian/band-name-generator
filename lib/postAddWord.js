'use strict';

module.exports = function postAddWord(word, obj) {
	//check if word is on object
	if(!obj.hasOwnProperty(word)) {
		//if not, add it and send message
		obj[word] = true;
		return {message: "The word " + word + " has been added."};
	}

	//if it is, send message
	return {message: "The word " + word + " is already logged."};
};
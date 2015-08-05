'use strict';

$(function () {

	//currently, there's a bug which switches the word order...
	//sometimes a word might not show up too...
	//it really randomizes the band names, though
	$("#name").click(function () {
		$.get("adjective", function (response) {
			$("#band_name").text(response.word);
		});
		$.get("noun", function (response) {
			$("#band_name").append(" " + response.word);
		});
		$.get("verb", function (response) {
			$("#band_name").append(" " + response.word);
		});
	});

	// 	$("#name").click(function() {		
	// 	$.get("band_name", function(response) {
	// 		var bandName = response.word;

	// 		$("#band_name").text(bandName);
	// 	});
	// });

	//make event handler that sends POST request to our server when submit button is pressed
	$("#submitWords").on("submit", function (e) {
		e.preventDefault();

		//get the text in the text box and save to variable
		var adj = $("input[name=adj]").val();
		var adjPost;

		var noun = $("input[name=noun]").val();
		var nounPost;

		var verb = $("input[name=verb]").val();
		var verbPost;

		if(adj) {
			adjPost = {word: adj};
			$.post('adjective', adjPost, function (response) {
				console.log(response);
				var adjResponse = response.message;
				$("#adjResponse").text(adjResponse);
			});
		}
		if(noun) {
			nounPost = {word: noun};
			$.post('noun', nounPost, function (response) {
				console.log(response);
				var nounResponse = response.message;
				$("#nounResponse").text(nounResponse);
			});
		}
		if(verb) {
			verbPost = {word: verb};
			$.post('verb', verbPost, function (response) {
				console.log(response);
				var verbResponse = response.message;
				$("#verbResponse").text(verbResponse);
			});
		}
	});
});
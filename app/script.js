'use strict'

$(document).ready(function() {

	$("#name").click(function() {
		$.get("adjective", function(response) {
			var adj = response.word;
			$("#band_name").text(adj);
		});
		$.get("noun", function(response) {
			var noun = response.word;
			$("#band_name").append(" " + noun);
		});
		$.get("verb", function(response) {
			$("#band_name").append(" " + response.word);
		});
	});

	// 	$("#name").click(function() {		
	// 	$.get("band_name", function(response) {
	// 		var bandName = response.word;

	// 		$("#band_name").text(bandName);
	// 	});
	// });

	//make event handler that sends POST request to our server
	//when submit button is pressed

	$("#submitWords").on("submit", function(e) {
		e.preventDefault();

		//get the text in the text box and save to variable
		var adj = $("input[name=adj]").val();
		var adjPost;

		if(adj) {
			adjPost = {word: adj};
			$.post('adjective', adjPost, function(response) {
				console.log(response);
				var adjResponse = response.message;
				$("#adjResponse").text(adjResponse);
			})
		}

	});
});
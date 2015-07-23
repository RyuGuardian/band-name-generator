'use strict'

$(function() {

	$("#name").click(function() {
		$.get("adjective", function(response) {
			var adj = response.word;
			$("#adjective").text(adj);
		});
	});
});
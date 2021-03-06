jQuery(document).ready(function() {
	jQuery("button#DoIt").click(function() {
		var numParagraphs = jQuery("input#NumParagraphs").val();
		var numWords = jQuery("input#NumWords").val();
		
		jQuery("div#Ipsum").empty();
		jQuery("div#Message").text("Getting Dino Ipsum...");

		jQuery.ajax({
			url: "http://dinoipsum.herokuapp.com/api/?",
			type: "GET",
			data: { 
				format: "json",
				paragraphs: numParagraphs,
				words: numWords
			},
			success: function(response) {
				jQuery.each(response, function(paragraphNum, paragraphWords) {
					jQuery("div#Ipsum").append("<p>");
					
					jQuery.each(paragraphWords, function (wordNum, word) {
						jQuery("div#Ipsum").append(word + " ");
					});
					
					jQuery("div#Ipsum").append("</p>");
				});
				
				jQuery("div#Message").text("Dino Ipsum retrieved successfully");
			},
			error: function() {
				jQuery("div#Message").text("An error occurred while getting Dino Ipsum (use the console to see the error)");
			}
		});
	});
});
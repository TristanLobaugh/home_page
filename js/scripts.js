$(document).ready(function(){

	$('a').smoothScroll();

	$(function(){
		$("#Container").mixItUp({
			animation: {
				duration: 2000
			}
		});
	});


	$.firefly({
		color: '#ff0000',
		minPixel: 1,
		maxPixel: 3,
		total : 65,
		on: 'header'
	});

	$("#page-wrapper").css("margin-left", "16.666666%");

	$("#contact-form-btn").click(function(){
		$("#contact-form").submit();
	});

});

















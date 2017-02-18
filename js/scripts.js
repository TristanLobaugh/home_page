$(document).ready(() => {
	$('a').smoothScroll();

	$(() => {
		$('#Container').mixItUp({
			animation: {
				duration: 2000
			}
		});
	});

	$('#dev-photo').click(() => {
		if ($('#chewie').is(':visible')) {
			$('#chewie').hide();
			$('#tristan').show();
		} else {
			$('#tristan').animate({
				height: 'toggle'
			}, 500);
		}
	});

	$('#help-photo').click(() => {
		if ($('#tristan').is(':visible')) {
			$('#tristan').hide();
			$('#chewie').show();
		} else {
			$('#tristan').hide();
			$('#chewie').animate({
				height: 'toggle'
			}, 500);
		}
	});

	$('#contact-form-btn').click(() => {
		$('#contact-form').submit();
	});
});

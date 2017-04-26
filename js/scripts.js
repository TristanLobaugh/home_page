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

	$('#contact-form').submit((event) => {
		event.preventDefault();
		$('#contact-form').submit();
	});

	$(window).load(() => {
		$('body').addClass('load');
		$('.slide-in').delay(5000).addClass('slide-active');
	});

	$(document).on('click', '.navbar-nav li', function() {
		console.log(this);
		$('.navbar-nav li a').removeClass('active');
		$(this.firstChild).addClass('active');
	});
});

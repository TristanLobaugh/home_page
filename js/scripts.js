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

	$('#contact-form').submit(event => {
		$('#contact-form').submit();
		$('#contact-form')[0].reset();
		event.preventDefault();
	});

	$(window).load(() => {
		$('body').addClass('load');
		$('.slide-in').delay(5000).addClass('slide-active');
		const qs = (function(a) {
			if (a === '') return {};
			const b = {};
			for (let i = 0; i < a.length; ++i) {
				const p = a[i].split('=', 2);
				if (p.length === 1) {
					b[p[0]] = '';
				} else {
					b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
				}
			}
			return b;
		}(window.location.search.substr(1).split('&')));

		if (qs.captchaPass === 'true') {
			console.log('cap is true');
			$('#message').text('Message Sent!');
		} else if (qs.captchaPass === 'false') {
			console.log('cap is false');
			$('#message').text('Captcha failed. Are you a bot?');
		}
	});

	$(document).on('click', '.navbar-nav li', function() {
		$('.navbar-nav li a').removeClass('active');
		$(this.firstChild).addClass('active');
	});
});

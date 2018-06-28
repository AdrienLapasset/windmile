$(document).ready(function () {

	// Intro //
	var i = 0;
	var letters = ['W', 'I1', 'N', 'D', 'M', 'I2', 'L', 'E'];

	// Mix letters randomly 
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	};
	shuffle(letters);

	// Show letters one by one with delay
	function showLetters() {
		setTimeout(function () {
			$('.' + letters[i]).css("opacity", "1");
			i++;
			if (i < 8) {
				showLetters();
			}

			else {
				setTimeout(function () {

					//Intro fade out 
					$('.intro').fadeOut(1000, function () {

						// Home fade in
						$('.home').fadeIn(1000, function () {

							setTimeout(function () {
								showNewsletter()

								setTimeout(function () {
									hideNewsletter()
								}, 4000);

							}, 6000);

						});
					});
				}, 2000);

			}
		}, 400);
	}
	showLetters();

	// Movable Background //
	var mouseX;
	var mouseY;
	$(document).mousemove(function (e) {
		mouseX = -e.pageX / 2;
		mouseY = -e.pageY / 2;
		$('h1').css({ 'background-position': mouseX + "px " + mouseY + "px" });
	});

	// Open-Close button //
	$('.menu__btn').click(function () {
		$(this).toggleClass('open');
		$('.content__bio').toggleClass('open');

		// Menu
		if ($('.menu__list').hasClass('open') || $('.menu__list').hasClass('close')) {
			$('.menu__list').toggleClass('open');
			$('.menu__list').toggleClass('close');
		}
		else {
			$('.menu__list').toggleClass('open');
		}

		// Darkening
		$('.home__darken').fadeToggle();

		// Socials
		if ($('.home__socials').hasClass('home__socials--show') || $('.home__socials').hasClass('home__socials--hide')) {
			$('.home__socials').toggleClass('home__socials--show');
			$('.home__socials').toggleClass('home__socials--hide');
		}
		else {
			$('.home__socials').toggleClass('home__socials--show');
		}

		// Close all pages
		$('.content__bio').css('display', 'none');
	});

	// Pages
	$('.menu__bio').click(function () {
		$(this).addClass('active');
		$('.content__bio').css('display', 'flex');
	});

	// Newsletter
	function showNewsletter() {
		$('.home__newsletter').addClass('home__newsletter--show');
	}

	function hideNewsletter() {
		$('.home__newsletter').addClass('home__newsletter--hide');
	}
});
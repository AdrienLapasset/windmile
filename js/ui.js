$(document).ready(function() {
		
		// Intro //
		var i = 0;   
		var letters = ['W','I1','N','D','M','I2','L','E'];
		
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
				$('.' + letters[i]).fadeIn().css("opacity","1");
				i++;                     
				if (i < 8) {            
					showLetters();              
				} 
				// Then show Home
				else {
					$('.intro').fadeOut(1000, function(){
						$('.home').css("opacity","1");
					}); 
				}             
			}, 300);
		}
		showLetters();  

		// Movable Background //
		var mouseX;
		var mouseY;
		$(document).mousemove( function(e) {
			mouseX = -e.pageX/2; 
			mouseY = -e.pageY/2;
			$('h1').css({'background-position': mouseX + "px " + mouseY + "px"});
		});

		// Open-Close button //
		$('.menu-button').click(function() {
			$(this).toggleClass('open');
			$('.menu').toggleClass('open');    
		});
	});
$(document).ready(() => {

	$('audio')[0].volume = 0;
  
	/* Vertical Slider */
	$('#slider.slider-vertical .knob').draggable({axis: 'y', containment: '#slider', scroll: false}).mousedown(function() {
		$(this).addClass('active');
	});
	setInterval(function() {
		var value = Math.abs(parseInt($('#slider.slider-vertical .knob').css('top'))/358 - 1);
		if (value > 0.01) $('audio')[0].volume = value;
		else $('audio')[0].volume = 0;
	}, 25);
	
	$('body').mouseup(function() {
		$('#slider.slider-vertical .knob').animate({top: 358}, 500, 'easeOutBounce');
	});

});



			
		var INVISIBLE = 'none', VISIBLE = 'block';
		var statutVideoDesproges = INVISIBLE;
		function afficheVideoDesproges(obj){
			
			if (statutVideoDesproges == INVISIBLE) {
				obj.value = "Cacher cette vidéo";
				statutVideoDesproges = VISIBLE;
			}
			else {
				obj.value = "Afficher la vidéo";
				statutVideoDesproges = INVISIBLE
			}
			document.getElementById('videoCache').style.display = statutVideoDesproges;
		}
		function telechargerRessourcesSonVideo (lien) {
			var select = document.getElementById("selectSonVideo");
			var choice = select.selectedIndex;
			var adresse = select.options[choice].text;
			lien.path = "./IUT/Chapitre5/" + adresse ;
			//texte = select.options[choice].text;
			document.getElementById('debugLien').innerHTML = "lien = " + lien.path;
		}

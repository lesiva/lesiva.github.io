var main = function(){
	$('#open-menu-button').click(function(){
		$('#menu').animate({
			left: '0px'
		}, 250);
		$('#header').hide(500);
	});

	$('#close-menu-button').click(function(){
		$('#menu').animate({
			left: '-100%'
		}, 250);
		$('#header').show(500);
	});
}

$(document).ready(main);
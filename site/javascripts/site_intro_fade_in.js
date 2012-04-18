$(document).ready(function(){
	$(".lucha_home, .footer").css({'overflow' : 'hidden', 'display' : 'none'});
	$(".intro_vid").delay(4000).queue(function( frst ) {
		$(this).animate({top: '100%'}, {duration:300, easing:'linear'});	
	frst();
	});
	$(".lucha_home, .footer").delay(4300).queue(function( nxt ) {
		$(this).fadeIn(1000).css({'overflow' : 'auto'});
	nxt();
	});
});
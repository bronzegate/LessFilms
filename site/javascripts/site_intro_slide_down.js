$(document).ready(function(){
	$(".lucha_home, .footer").css({'position' : 'relative', 'top' : '100%', 'overflow' : 'hidden', 'display' : 'none'});
	$(".intro_vid").delay(4000).queue(function( frst ) {
		$(this).animate({top: '100%'}, {duration:300, easing:'linear'});	
	frst();
	});
	$(".lucha_home, .footer").delay(4300).queue(function( nxt ) {
		$(this).css({'display' : 'block'}).animate({top: '0' }, {duration:1000, easing:'easeOutBounce'}).css({'overflow' : 'auto'});
	nxt();
	});
});
$(document).ready(function(){
	$(".lucha_home, .footer").css({'position' : 'relative', 'top' : '100%', 'overflow' : 'hidden'});
	$(".lucha_home, .footer").delay(4000).queue(function( nxt ) {
		$(".intro_vid").animate({top: '-100%'}, {duration:350, easing:'linear'});	
		$(this).animate({top: '0' }, {duration:1000, easing:'easeOutBounce'}).css({'overflow' : 'auto'});
	nxt();
	});
});
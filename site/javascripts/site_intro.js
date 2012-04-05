$(document).ready(function(){
	$("body").css({'position' : 'relative', 'top' : '100%', 'overflow' : 'hidden'});
	$("body").stop().animate({top: '0' }, {queue:false, duration:1000, easing:'easeOutBounce'});
	$("body").css({'overflow' : 'auto'});
});
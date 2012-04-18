$(document).ready(function(){
	$(".lucha_home").css({'position' : 'relative', 'top' : '100%', 'overflow' : 'hidden'});
	$(".lucha_home").stop().animate({top: '0' }, {queue:false, duration:1000, easing:'easeOutBounce'});
	$(".lucha_home").css({'overflow' : 'auto'});
});
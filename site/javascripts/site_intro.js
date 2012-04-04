$(document).ready(function(){
	$("body").css('position', 'relative');
	$("body").css('top', '100%');
	$("body").css('overflow', 'hidden');
	$("body").stop().animate({top: '0' }, {queue:false, duration:1000, easing:'easeOutBounce'});
});
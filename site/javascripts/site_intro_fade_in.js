$(document).ready(function(){
	if($.cookie("viewed_intro") == null)
    {

		$(".lucha_home, .wrapper, .footer").css({'overflow' : 'hidden', 'display' : 'none'});
		$(".intro_vid").delay(4600).queue(function( frst ) {
			$(this).fadeOut("fast");	
		frst();
		});
		$(".lucha_home").delay(4900).queue(function( nxt ) {
			$(this).fadeIn(1000).css({'overflow' : 'auto', 'background-position' : 'center 24px'});
			$('#fancybox-overlay').css({'margin-top' : '0'});
			$(".wrapper, .footer").css({'display' : 'none'});
		nxt();
		});
		$(".wrapper, .footer").delay(5200).queue(function( trd ) {
			$(this).fadeIn(1000).css({'overflow' : 'auto'});
		trd();
		});
		
      	$.cookie('viewed_intro', true);
    }
    else
    {
    	$(".intro_vid").css({'display' : 'none'});
    }
});
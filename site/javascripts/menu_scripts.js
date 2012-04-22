$(document).ready(function(){ 
	$('.vid_nav .current').prepend('<div class="triangle" />');
  
	$(".vid_category").click(function(){
		$(".triangle").remove();
		$(".vid_category").removeClass('current');
		$(".vid_category").addClass('closed');
		$(this).prepend('<div class="triangle" />');
		$(this).removeClass('closed');
		$(this).addClass('current');
		
		fadeOutSpeed = 1000
		fadeInSpeed = 1000
		
		$(".vid_thumbs").fadeOut(fadeOutSpeed).delay(fadeOutSpeed - 1);
		
		if($(this).hasClass('vid_nav_promos')){
			$('.vid_cat_promos').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_conferences')){
			$('.vid_cat_conferences').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_documentaries')){
			$('.vid_cat_documentaries').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_office_culture')){
			$('.vid_cat_office_culture').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_web_commercials')){
			$('.vid_cat_web_commercials').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_animation')){
			$('.vid_cat_animation').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_motion_graphics')){
			$('.vid_cat_motion_graphics').fadeIn(fadeInSpeed);
		}
	
	});
});



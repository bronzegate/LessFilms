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
		
		$(".vid_thumbs, .new_vid").fadeOut(fadeOutSpeed).delay(fadeOutSpeed);
		
		if($(this).hasClass('vid_nav_promos')){
			$('.vid_cat_promos, .vid_cat_promos .new_vid').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_conferences')){
			$('.vid_cat_conferences, .vid_cat_conferences .new_vid').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_documentaries')){
			$('.vid_cat_documentaries, .vid_cat_documentaries .new_vid').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_office_culture')){
			$('.vid_cat_office_culture, .vid_cat_office_culture .new_vid').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_web_commercials')){
			$('.vid_cat_web_commercials, .vid_cat_web_commercials .new_vid').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_animation')){
			$('.vid_cat_animation, .vid_cat_animation .new_vid').fadeIn(fadeInSpeed);
		}
		if($(this).hasClass('vid_nav_motion_graphics')){
			$('.vid_cat_motion_graphics, .vid_cat_motion_graphics .new_vid').fadeIn(fadeInSpeed);
		}
	
	});
});



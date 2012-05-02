$(document).ready(function(){

  $(".lucha_home, .wrapper, .footer").css({'overflow' : 'hidden', 'display' : 'none'});  	
  
  if($.cookie("viewed_intro") == null)    {        
    
    $('#lucha').css({'height' : ($(window).height())+'px'});
    
    $("#lucha").bind('ended', function(){				
      $('.intro_vid').fadeOut("fast");	    
      $(".lucha_home").fadeIn(1000).css({'overflow' : 'auto', 'background-position' : 'center 24px'});    
      $('#fancybox-overlay').css({'margin-top' : '0'});    
      $(".wrapper, .footer").css({'display' : 'none'});		
      $(".wrapper, .footer").delay(500).queue(function( trd ) {			
        $(this).fadeIn(1000).css({'overflow' : 'auto'});		
        trd();		
      });      	
      $.cookie('viewed_intro', true);            
      });    
      }    
      else{    	
        $(".intro_vid").css({'display' : 'none'});            
        $(".lucha_home, .wrapper, .footer").css({'overflow' : 'auto', 'display' : 'block'});    
      }
});
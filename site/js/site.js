function animUp() {
  $("#arrow").animate({ top: "1px" }, "slow", "swing", animDown);
}
  
function animDown() {
  $("#arrow").animate({ top: "10px" }, "slow", "swing", animUp);
}

$(document).ready(function() {
  animUp();
  
  $(window).scroll(function() {
    $('#arrow-wrapper').fadeOut("fast");
  });
  
  $(".fancyYouTube").fancybox({
  'transitionIn' : 'elastic',
  'padding' : 0,
  'autoScale' : false,
  'transitionOut' : 'fade',
  'width' : 640,
  'height' : 390,
  'type' : 'swf'
  });

});
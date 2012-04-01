$(document).ready(function(){
  $(".vid_category ul").hide();
  
  $(".vid_category h3").click(function(){
    if ($(this).parent().hasClass('closed')){
      $(this).parent().children("ul").slideToggle(200);
      $(this).parent().children(".triangle").rotate('90deg');
      $(this).parent().removeClass('closed');
      $(this).parent().addClass('opened');
    }
    else {
      $(this).parent().children("ul").slideToggle(200);
      $(this).parent().children(".triangle").rotate('0deg');
      $(this).parent().removeClass('opened');
      $(this).parent().addClass('closed');
    }
  });
});

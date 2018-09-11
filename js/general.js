$(document).ready(function(){
    var sticky = $("nav").offset().top;

  	$(window).scroll(function(){
        if ($(window).scrollTop() >= sticky) {
          	$("nav").addClass("sticky")
        } else {
          	$("nav").removeClass("sticky");
        }
    });
});
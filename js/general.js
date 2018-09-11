$(document).ready(function(){
	// Get the position value from the top
    var sticky = $("nav").offset().top;

  	$(window).scroll(function(){
  		// Compare the pixel value that the current document has 
  		// been scrolled to the sticky position, then add sticky 
  		// class according to the result.
        if ($(window).scrollTop() >= sticky) {
          	$("nav").addClass("sticky")
        } else {
          	$("nav").removeClass("sticky");
        }
    });
});
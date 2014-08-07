$(document).ready(function() {
    $('.lugares a').on('touchstart touchend', function() {
        $(this).toggleClass('activo');
    });

	if ($(".bxslider").length > 0){
	  $('.bxslider').bxSlider();
	}

	
	$('#videodestacado').fitVids();
    
});
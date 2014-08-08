$(document).ready(function() {

	MBP.scaleFix();

	MBP.hideUrlBarOnLoad();

	if ($(".mensaje").length > 0){
	  new MBP.autogrow(document.getElementById('mensaje'), 14);
	}

    

    MBP.enableActive();

    MBP.preventZoom();

    MBP.startupImage();

    $('.lugares a').on('touchstart touchend', function() {
        $(this).toggleClass('activo');
    });

	if ($(".bxslider").length > 0){
	  $('.bxslider').bxSlider();
	}

	if ($("#videodestacado").length > 0){
	  $('#videodestacado').fitVids(); 
	}

});
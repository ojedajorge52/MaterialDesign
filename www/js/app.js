$(document).ready(function(){
    $('.carousel').carousel();
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    

    $('#mode').click(function() {
        if($(this).is(':checked')){
			$('#stylesheet').attr('href', 'css/index1.css');
			$('#theme-color').attr('content', '#ffffff');
		}else{
			$('#stylesheet').attr('href', 'css/night-mode.css');
			$('#theme-color').attr('content', '#555555');
		}
    });
});

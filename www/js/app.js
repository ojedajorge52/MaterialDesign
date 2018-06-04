$(document).ready(function(){
    $('.carousel').carousel();
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    

});

/**

    $('#get').click(function(){
    	$.ajax({
    	url:'users_validate.php',
    	data:"",
    	dataType:'json',
    	success: function(data){
    		console.log(data);
    		
    		}
    	});

    });
    


  });
*/
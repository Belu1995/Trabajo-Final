$(document).ready(function(){
	var popoverId;
	$('[data-toggle="popover"]').popover();
  
  $('.pop').popover({
	  trigger: 'focus'
	});

	$('.pop').click(function(){
		$('.pop').popover('hide');
		$(this).popover('show');
	});
	
	
	$("#pequeñoRita").click(function(){
	  $("#sabana").css("display","block");
	  $("#ventana").css("display","block");
    });
	
	$("#pequeñoFabian").click(function(){
	  $("#sabana2").css("display","block");
	  $("#ventana2").css("display","block");
    });
	
	$("#pequeñoSebastian").click(function(){
	  $("#sabana3").css("display","block");
	  $("#ventana3").css("display","block");
    });
	
	$("#pequeñoSantiago").click(function(){
	  $("#sabana4").css("display","block");
	  $("#ventana4").css("display","block");
    });
	
	
	
	
});



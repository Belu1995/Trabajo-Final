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
	
	
	
	
	
	
});



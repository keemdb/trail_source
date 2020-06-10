$('.hsAddItem').click(function(){

	var hsItem = '';

		hsItem += '<li class="hsItem">';
			hsItem += '<span class="hsHandleCell"> ';
				hsItem += '<div class="hsHandle"><i class="fa fa-angle-double-right"></i></div> ';
			hsItem += '</span> ';
			hsItem += '<span class="hsImageCell"></span> ';
			hsItem += '<input type="text" class="hsName" placeholder="Name"> ';
			hsItem += '<input type="text" class="hsDescription" placeholder="Description"> ';
			hsItem += '<span class="hsActionCell"> ';
				hsItem += '<i class="fa fa-camera"></i> ';
				hsItem += '<i class="fa fa-link"></i> ';
				hsItem += '<i class="fa fa-star"></i> ';
			hsItem += '</span> ';
			hsItem += '<span class="hsWeightCell"> ';
				hsItem += '<input type="text" placeholder="0"> ';
			hsItem += '</span> ';
		hsItem += '</li>';
		
	$('.hsFooter').before(hsItem);
	
});
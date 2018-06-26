// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	var rows = $('#inputHeight').val();
	var cols = $('#inputWeight').val();

	$('#inputHeight').val(rows);
	$('#inputWeight').val(cols);
	var grid = $('table');
	for (var r = 0; r < rows; r++) {
		grid.append($('<tr></tr>'));
	}
	$('tr').each(function(){
	  	for (var c = 0; c < cols; c++){
	  		$(this).append($('<td></td>'));
	  	}
	});
}

$('#sizePicker').on('submit', function(event){
	event.preventDefault();
	$('table').html('');
	makeGrid();
	$('#inputHeight').val(1);
	$('#inputWeight').val(1);
});

$(document).on('click', 'td', function(event){
	event.preventDefault();
	$(this).css('background-color', $('#colorPicker').val());
});

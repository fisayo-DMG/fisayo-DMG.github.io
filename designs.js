// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	const rows = $('#inputHeight').val();
	const cols = $('#inputWeight').val();

	$('#inputHeight').val(rows);
	$('#inputWeight').val(cols);
	var grid = $('table');
	for (let r = 0; r < rows; r++) {
		grid.append("<tr id='" + r + "'></tr>")

		for (let c = 0; c < cols; c++){
			let tableRow = grid.find("#"+r);
			tableRow.append('<td></td>');
		}
	}
}

//event when submit is clicked
$('#sizePicker').on('submit', function(event){
	event.preventDefault();
	$('table').html('');
	makeGrid();
	$('#inputHeight').val(1);
	$('#inputWeight').val(1);
});

//event when a grid is clicked
$(document).on('click', 'td', function(event){
	event.preventDefault();
	$(this).css('background-color', $('#colorPicker').val());
});
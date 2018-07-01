// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	//using const here because the values passed in the variables would
	//be constant within the scope of the function everytime it is called.
	const rows = $('#inputHeight').val();
	const cols = $('#inputWeight').val();

	$('#inputHeight').val(rows);
	$('#inputWeight').val(cols);
	let grid = $('table');
	for (let r = 0; r < rows; r++) {
		grid.append('<tr id="row' + r + '"></tr>')

		for (let c = 0; c < cols; c++){
			let tableRow = grid.find('#row'+r);
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

//event to add or remove background colour when a grid is clicked
$(document).on('click', 'td', function(event){
	event.preventDefault();
	if($(this).attr('style')){
		$(this).removeAttr('style')
	} else {
		$(this).css('background-color', $('#colorPicker').val());
	}
});
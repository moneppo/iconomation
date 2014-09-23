var code = ['i','d','d','q','d'];


// Add the icons
for (var i in code) {
	$('.playspace').append('<i class="hidden em key-' + code[i] + 
		'" id="type-' + i + '"></i>');
	$('#type-' + i).css({
		top: Math.random() * 400,
		left: Math.random() * 600
	});
}

function calcCentered(index) {
	var width = (code.length + 1) * 64;
	return 300 - width / 2 + index * 64;
}

$('.playspace').append('<i class="hidden em em-godmode"></i>');
$('.em-godmode').css({
	top: 200 - 32,
	left: calcCentered(code.length)
})

var codeItem = 0;
function animate() {
	var current = codeItem;
	codeItem++;
	if (current < code.length) {
		$('#' + 'type-' + current).animate({
			opacity: 1.0,
			top: 200 - 32,
			left: calcCentered(current)
		}, 1000, animate);
	} else {
		$('.em-godmode').animate({
			opacity: 1.0
		}, 2000);
	}
}

animate();
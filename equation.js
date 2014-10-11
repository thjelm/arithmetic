function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

generateEquation = function(operator, number) {
	var other_number = randomIntFromInterval(1,9),
		number_pos = randomIntFromInterval(0,1);

	if (operator === '-') {
		other_number = parseInt(number) + other_number;
		number_pos = 1;
	} else if (operator === "\u00F7") {
		other_number = parseInt(number) * other_number;
		number_pos = 1;
	}

	if (number_pos) {
		return other_number + ' ' + operator + ' ' + number + ' = ______';
	} else {
		return number + ' ' + operator + ' ' + other_number + ' = ______';
	}
}

generateWorksheet = function(operator, number) {
	$('#worksheet li').each(function() {
		$(this).html(generateEquation(operator, number));
	});
}

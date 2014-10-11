function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

generateEquation = function(operator, number) {
	var other_number = randomIntFromInterval(1,9),
		number_pos = randomIntFromInterval(0,1);

	if (number_pos) {
		return other_number + ' ' + operator + ' ' + number + ' = ';
	} else {
		return number + ' ' + operator + ' ' + other_number + ' = ';
	}
}


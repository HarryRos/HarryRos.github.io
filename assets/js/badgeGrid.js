function getRandomSize(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

var x = document.getElementsByClassName("badgeToDecorate");
var bgColors = ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-dark'];
var i;
for (i = 0; i < x.length; i++) {
	x[i].style.fontSize = getRandomSize(20, 30)+'px';
	// x[i].style.textDecoration = 'None';
	x[i].className += ' ' +bgColors[i%bgColors.length];
}

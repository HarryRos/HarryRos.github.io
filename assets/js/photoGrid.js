function getRandomSize(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getBadge() {
	var fontSize = getRandomSize(20, 40);
	// return <span class="badge-pill badge-secondary text-nowrap flex-wrap bg-success" style="font-size:'+fontSize+'px;">skill</span>
	return fontSize;
}

// var allBadges = "";
//
// for (var i = 0; i < 25; i++) {
// 	var fontSize = getRandomSize(20, 40);
// 	// allImages += '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
// 	allBadges += '<span class="badge-pill badge-secondary text-nowrap flex-wrap bg-primary" style="font-size:'+fontSize+'px;">Attention to detail</span>';
// }

// $('#skillBardgeGrid').append(allBadges);

document.getElementById("badgeToDecorate").innerHTML = getBadge();

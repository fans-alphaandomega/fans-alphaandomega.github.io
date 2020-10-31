function showMore(character) {
	var x = document.querySelectorAll('.bio');
	x[0].id=character;
	console.log("div's new id is " + x[0].id);
	x[0].style.display = "block";
	x[0].scrollIntoView({behavior: "smooth"});
}

function rollUp() {
	var x = document.querySelectorAll('.bio');
	x[0].style.display = "none";
	document.getElementById('avatar-section').scrollIntoView({behavior: "smooth"});
}	
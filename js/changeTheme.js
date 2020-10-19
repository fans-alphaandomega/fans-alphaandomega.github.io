function darkMode() {
	var i, j;
	// background
	var w = document.body;
	w.classList.toggle("dark");
	// teal elements
	var x = document.querySelectorAll('.w3-teal');
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(/\bw3-teal\b/g, "w3-indigo");
	}
	// buttons
	var y = document.querySelectorAll('.w3-white');
	for (j = 0; j < y.length; j++) {
		y[j].className = y[j].className.replace(/\bw3-white\b/g, "w3-dark-grey");
	}
	// side
	var z = document.getElementById("side");
	z.style.color = "yellow";
}

function lightMode() {
	var i, j;
	// background
	var w = document.body;
	w.classList.toggle("dark");
	// indigo elements
	var x = document.querySelectorAll('.w3-indigo');
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(/\bw3-indigo\b/g, "w3-teal");
	}
	//buttons
	var y = document.querySelectorAll('.w3-dark-grey');
	for (j = 0; j < y.length; j++) {
		y[j].className = y[j].className.replace(/\bw3-dark-grey\b/g, "w3-white");
	}
	//side
	var z = document.getElementById("side");
	z.style.color = "white";
}
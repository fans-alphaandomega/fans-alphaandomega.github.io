function darkMode() {
	var i, j, k, l;
	// background
	var v = document.body;
	v.classList.toggle("dark");
	// teal elements
	var w = document.querySelectorAll('.w3-teal');
	for (i = 0; i < w.length; i++) {
		w[i].className = w[i].className.replace(/\bw3-teal\b/g, "w3-indigo");
	}
	// mobile icons
	var x = document.querySelectorAll('[id=sun]');
	for (j = 0; j < x.length; j++) {
		x[j].style.display = "none";
	}
	var y = document.querySelectorAll('[id=moon]');
	for (k = 0; k < y.length; k++) {
		y[k].style.display = "block";
	}
	// buttons
	var z = document.querySelectorAll('.w3-white');
	for (l = 0; l < z.length; l++) {
		z[l].className = z[l].className.replace(/\bw3-white\b/g, "w3-dark-grey");
	}
}

function lightMode() {
	var i, j, k, l;
	// background
	var v = document.body;
	v.classList.toggle("dark");
	// indigo elements
	var w = document.querySelectorAll('.w3-indigo');
	for (i = 0; i < w.length; i++) {
		w[i].className = w[i].className.replace(/\bw3-indigo\b/g, "w3-teal");
	}
	// mobile icons
	var x = document.querySelectorAll('[id=moon]');
	for (j = 0; j < x.length; j++) {
		x[j].style.display = "none";
	}
	var y = document.querySelectorAll('[id=sun]');
	for (k = 0; k < y.length; k++) {
		y[k].style.display = "block";
	}
	//buttons
	var z = document.querySelectorAll('.w3-dark-grey');
	for (l = 0; l < z.length; l++) {
		z[l].className = z[l].className.replace(/\bw3-dark-grey\b/g, "w3-white");
	}
}
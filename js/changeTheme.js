function darkMode() {
	var i, j, k, l;
	// background
	var u = document.body;
	u.classList.toggle("dark");
	// teal elements
	var v = document.querySelectorAll('.w3-teal');
	for (i = 0; i < v.length; i++) {
		v[i].className = v[i].className.replace(/\bw3-teal\b/g, "w3-indigo");
	}
	// mobile icons
	var w = document.querySelectorAll('[id=sun]');
	for (j = 0; j < w.length; j++) {
		w[j].style.display = "none";
	}
	var x = document.querySelectorAll('[id=moon]');
	for (k = 0; k < x.length; k++) {
		x[k].style.display = "block";
	}
	// buttons
	var y = document.querySelectorAll('.w3-white');
	for (l = 0; l < y.length; i++) {
		y[l].className = y[l].className.replace(/\bw3-white\b/g, "w3-dark-grey");
	}
	// side
	var z = document.getElementById("side");
	z.style.color = "yellow";
}

function lightMode() {
	var i, j, k, l;
	// background
	var u = document.body;
	u.classList.toggle("dark");
	// indigo elements
	var v = document.querySelectorAll('.w3-indigo');
	for (i = 0; i < w.length; i++) {
		v[i].className = v[i].className.replace(/\bw3-indigo\b/g, "w3-teal");
	}
	// mobile icons
	var w = document.querySelectorAll('[id=moon]');
	for (j = 0; j < w.length; j++) {
		w[j].style.display = "none";
	}
	var x = document.querySelectorAll('[id=sun]');
	for (k = 0; k < x.length; k++) {
		x[k].style.display = "block";
	}
	//buttons
	var y = document.querySelectorAll('.w3-dark-grey');
	for (l = 0; l < y.length; l++) {
		y[l].className = y[l].className.replace(/\bw3-dark-grey\b/g, "w3-white");
	}
	//side
	var z = document.getElementById("side");
	z.style.color = "white";
}
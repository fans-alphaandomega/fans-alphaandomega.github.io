function darkMode() {
	var i, j, k;
	// background
	var u = document.body;
	u.classList.toggle("dark");
	// teal elements
	var v = document.querySelectorAll('.w3-teal');
	for (i = 0; i < v.length; i++) {
		v[i].className = v[i].className.replace(/\bw3-teal\b/g, "w3-indigo");
		v[i].classList.toggle("text-yellow");
	}
	// switch button
	var w = document.getElementById('moon');
	w.style.display = "none";
	var x = document.getElementById('sun');
	x.style.display = "block";
	// buttons
	var y = document.querySelectorAll('.w3-white');
	for (j = 0; j < y.length; j++) {
		y[j].className = y[j].className.replace(/\bw3-white\b/g, "w3-dark-grey");
		y[j].classList.toggle("text-orange");
	}
	// side
	var z = document.querySelectorAll('.side');
	for (k = 0; k < z.length; k++) {
		z[k].classList.toggle("text-yellow");
	}	
}

function lightMode() {
	var i, j, k;
	// background
	var u = document.body;
	u.classList.toggle("dark");
	// teal elements
	var v = document.querySelectorAll('.w3-indigo');
	for (i = 0; i < v.length; i++) {
		v[i].className = v[i].className.replace(/\bw3-indigo\b/g, "w3-teal");
		v[i].classList.toggle("text-yellow");
	}
	// switch button
	var w = document.getElementById('sun');
	w.style.display = "none";
	var x = document.getElementById('moon');
	x.style.display = "block";
	// buttons
	var y = document.querySelectorAll('.w3-dark-grey');
	for (j = 0; j < y.length; j++) {
		y[j].className = y[j].className.replace(/\bw3-dark-grey\b/g, "w3-white");
		y[j].classList.toggle("text-orange");
	}
	// side
	var z = document.querySelectorAll('.side');
	for (k = 0; k < z.length; k++) {
		z[k].classList.toggle("text-yellow");
	}	
}
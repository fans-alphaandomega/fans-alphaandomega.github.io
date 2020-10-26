function darkMode() {
	var i, j, k, l, m;
	var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	// background
	var u = document.body;
	if (isIOS) {u.classList.toggle("idark");}
	else {u.classList.toggle("dark");}
	// teal elements
	var v = document.querySelectorAll('.w3-teal');
	for (i = 0; i < v.length; i++) {
		v[i].className = v[i].className.replace("w3-teal", "w3-indigo");
		v[i].classList.toggle("text-yellow");
	}
	// switch theme
	var w = document.querySelectorAll('#sun');
	for (j = 0; j < w.length; j++) {
		w[j].style.display = "none";
	}	
	var x = document.querySelectorAll('#moon');
	for (k = 0; k < x.length; k++) {
		x[k].style.display = "block";
	}	
	// buttons
	var y = document.querySelectorAll('.w3-white');
	for (l = 0; l < y.length; l++) {
		y[l].className = y[l].className.replace("w3-white", "w3-dark-grey");
		y[l].classList.toggle("text-orange");
	}
	// side
	var z = document.querySelectorAll('.side');
	for (m = 0; m < z.length; m++) {
		z[m].classList.toggle("text-yellow");
	}	
}

function lightMode() {
	var i, j, k, l, m;
	var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	// background
	var u = document.body;
	if (isIOS) {u.classList.toggle("idark");}
	else {u.classList.toggle("dark");}
	// teal elements
	var v = document.querySelectorAll('.w3-indigo');
	for (i = 0; i < v.length; i++) {
		v[i].className = v[i].className.replace("w3-indigo", "w3-teal");
		v[i].classList.toggle("text-yellow");
	}
	// switch button
	var w = document.querySelectorAll('#moon');
	for (j = 0; j < w.length; j++) {
		w[j].style.display = "none";
	}	
	var x = document.querySelectorAll('#sun');
	for (k = 0; k < x.length; k++) {
		x[k].style.display = "block";
	}	
	// buttons
	var y = document.querySelectorAll('.w3-dark-grey');
	for (l = 0; l < y.length; l++) {
		y[l].className = y[l].className.replace("w3-dark-grey", "w3-white");
		y[l].classList.toggle("text-orange");
	}
	// side
	var z = document.querySelectorAll('.side');
	for (m = 0; m < z.length; m++) {
		z[m].classList.toggle("text-yellow");
	}	
}
function showMore(character) {
	var t = 1;
	var u = document.querySelectorAll('.bio');
	for (i = 0; i < u.length; i++) {
		u[i].style.display = "none";  
	}
	var v = document.querySelectorAll('.slide');
	for (j = 0; j < v.length; j++) {
		v[j].style.display = "none";  
	}
	var w = document.querySelectorAll('.demo');
	for (i = 0; i < w.length; i++) {
		w[i].style.display = "none";  
	}
	document.getElementById('slider-section').scrollIntoView({behavior: "smooth"});
	var x = document.querySelectorAll(character);
	for (k = 0; k < x.length; k++) {
		x[k].style.display = "block";
	}
	var y = document.querySelectorAll(character + 'Slide');
	for (k = 0; k < y.length; k++) {
		y[k].style.display = "block";
	}
	var z = document.querySelectorAll(character + 'Demo');
	for (k = 0; k < z.length; k++) {
		z[k].style.display = "block";
	}
	currentDiv(n = t, name = character);
}
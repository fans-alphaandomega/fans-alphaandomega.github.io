function darkMode() {
	var w = document.querySelectorAll('.w3-teal');
	for (i = 0; i < w.length; i++) {
		w[i].className = w[i].className.replace(/\bw3-teal\b/g, "w3-indigo");
	}
	var x = document.body;
	x.classList.toggle("dark");
	var y = document.getElementById("moon");
	y.style.display = "none";
	document.getElementById("sun").style.display = "block";
	var z = document.querySelectorAll('.w3-white');
	for (j = 0; j < z.length; j++) {
		z[j].className = z[j].className.replace(/\bw3-white\b/g, "w3-dark-grey");
	}
	var a = document.getElementsByClassName('side');
	a.style.color = "yellow";
}
function lightMode() {
	var w = document.querySelectorAll('.w3-indigo');
	for (i = 0; i < w.length; i++) {
		w[i].className = w[i].className.replace(/\bw3-indigo\b/g, "w3-teal");
	}
	var x = document.body;
	x.classList.toggle("dark");
	var y = document.getElementById("sun");
	y.style.display = "none";
	document.getElementById("moon").style.display = "block";
	var z = document.querySelectorAll('.w3-dark-grey');
	for (j = 0; j < z.length; j++) {
		z[j].className = z[j].className.replace(/\bw3-dark-grey\b/g, "w3-white");
	}
	var a = document.getElementsByClassName('side');
	a.style.color = "white";
}
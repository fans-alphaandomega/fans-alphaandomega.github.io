function openPage(pageName) {
	var x = document.querySelectorAll('.page-left');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	document.getElementById(pageName).style.display = "block";  
}
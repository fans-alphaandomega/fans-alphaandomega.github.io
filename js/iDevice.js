function iDevice() {	
	var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	var x = document.body;
	if (isIOS) {
		x.classList.remove("body");
		x.classList.add("ibody");
	}
}
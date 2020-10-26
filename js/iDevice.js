function iDevice() {	
	var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	var x = document.body;
	if (isIOS) {
		console.log("Apple device")
		x.classList.remove("body");
		x.classList.add("ibody");
	}
	else {
		console.log("Not Apple device");
	}	
}
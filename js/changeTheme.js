function changeTheme() {
  var element = document.getElementByClass("w3-teal");
  element.className = element.className.replace(/\bw3-teal\b/g, "w3-indigo");
}
function reportSize() {
  document.getElementById("width").innerHTML = window.innerWidth;
  document.getElementById("height").innerHTML = window.innerHeight;
}

reportSize();
window.onresize = reportSize;
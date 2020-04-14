function menuToggler(x) {
  x.classList.toggle("change");
  var element = document.getElementById("MenuContent");
     element.classList.toggle("menu-style");
  var overlay = document.getElementById("olay");
  	overlay.classList.toggle("menu-overlay");
}

function closeNav() {
	var item = document.getElementById("MenuContent");
	   item.classList.toggle("menu-style");
	var item2 = document.getElementById("olay");
  	item2.classList.toggle("menu-overlay");
  	var item3 = document.getElementById("menuBars");
  	item3.classList.toggle("change");
}
var header = document.getElementById("NextPrev");
var btns = header.getElementsByClassName("btn-number");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("btn-active");
		current[0].className = current[0].className.replace(" btn-active", "");
		this.className += " btn-active";
	});
}

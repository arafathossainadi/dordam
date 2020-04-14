window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var mobileheader = document.getElementById("mobileHeader");
var mobilenav = document.getElementById("navBar");
var sticky = header.offsetTop;
var sticky2 = mobileheader.offsetTop;
var sticky3 = mobilenav.offsetTop;
function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}

	if (window.pageYOffset > sticky2) {
		mobileheader.classList.add("mobile-sticky");
	} else {
		mobileheader.classList.remove("mobile-sticky");
	}

	if (window.pageYOffset > sticky3) {
		mobilenav.classList.add("mobile-sticky");
	} else {
		mobilenav.classList.remove("mobile-sticky");
	}
}
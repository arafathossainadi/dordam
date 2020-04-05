function openItem(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabHeaderName");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-btn-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " tab-btn-active";
}

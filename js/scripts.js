function openNav() {

  var x =  document.getElementById("navigation");

  if (x.className === "navigation") {
      x.className += " menujs";
      document.getElementById("triline-icon").innerHTML = "&#10006;";

  } else {
      x.className = "navigation";
      document.getElementById("triline-icon").innerHTML = "&#x2630;";

  } 





}

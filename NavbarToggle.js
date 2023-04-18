/*================= navbar toggle =====================*/
function clicked() {
  var x = document.getElementById("nav");
  var y = document.getElementById("toggle");
  if (x.style.left == "0px") {
    x.style.left = "-20rem";
    
    y.style.position = "relative";
    x.style.transition = "none";
    y.style.left = "20.5rem";
    y.style.top = "11px";

    // x.style.transition = "all .1s linear";
    document
      .getElementsByClassName("toggle-btn")[0]
      .classList.add("navbar-toggle");
    document
      .getElementsByClassName("toggle-btn")[0]
      .classList.remove("fa-xmark");
  } else {
    // x.style.position = 'absolute';
    x.style.left = "0";
    // x.style.height = '100%';
    // x.style.transition = "all .5s linear";
    y.style.position = "relative";
    y.style.left = "17rem";
    y.style.top = "1rem";
    document
      .getElementsByClassName("toggle-btn")[0]
      .classList.remove("navbar-toggle");
    document.getElementsByClassName("toggle-btn")[0].classList.add("fa-xmark");
    document.getElementsByClassName("toggle-btn")[0].style.fontSize = "2rem";
  }
}

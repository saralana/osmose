var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function myNavFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("mobilenav");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.height = "65px";
    y.style.background = "transparent";
  } else {
    x.style.display = "block";
    y.style.height = "230px";
    y.style.background = "white";
  }
}

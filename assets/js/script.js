const ele = document.getElementById("ele1")
function pintar(a, b = "green") {
  a.style.backgroundColor = b;
}
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});
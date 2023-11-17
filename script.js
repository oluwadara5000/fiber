// NAVIGATION
const open = document.getElementById("open");
const close = document.getElementById("close");
const panel = document.getElementById("panel");
const panelList = document.getElementById("panel-list");
const buttonDiv = document.getElementById("button-div");

close.style.display = "none";

open.addEventListener("click", function () {
  open.style.display = "none";
  close.style.display = "block";
  panel.style.width = "250px";
  panel.style.padding = "40px 30px";
  panelList.style.display = "flex";
  buttonDiv.style.display = "flex";
  panel.style.border = "2px solid #4d13d1";
});

close.addEventListener("click", function () {
  open.style.display = "block";
  close.style.display = "none";
  panel.style.width = "0";
  panel.style.padding = "0";
  panelList.style.display = "none";
  buttonDiv.style.display = "none";
  panel.style.border = "none";
});

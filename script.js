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



// SHOW/HIDE PASSWORD
const showPassword = document.querySelector("#show-password");
const hidePassword = document.querySelector("#hide-password");
// const confirmShowPassword = document.querySelector("#confirm-show-password");
// const confirmHidePassword = document.querySelector("#confirm-hide-password");
const passwordField = document.querySelector("#password");
// const confirmPassword = document.querySelector("#confirm-password");

document.getElementById("hide-password").style.display = "none";
// document.getElementById("confirm-hide-password").style.display = "none";

showPassword.addEventListener("click", function () {
  document.getElementById("show-password").style.display = "none";
  document.getElementById("hide-password").style.display = "block";
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});

hidePassword.addEventListener("click", function () {
  document.getElementById("hide-password").style.display = "none";
  document.getElementById("show-password").style.display = "block";

  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});

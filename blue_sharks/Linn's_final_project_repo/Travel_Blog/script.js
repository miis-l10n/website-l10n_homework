
var body = document.querySelector("body")
var button = document.querySelector(".change_button")

button.addEventListener("click", changeBackground);

function changeBackground () {
body.style.backgroundImage = "url(images/sea.jpg)";
alert("Welcome to Linn's Travel Blog! You can refresh to reset the background image :)");
}

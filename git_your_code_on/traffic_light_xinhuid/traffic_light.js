var red = document.querySelector(".red")
var yellow = document.querySelector(".yellow")
var green = document.querySelector(".green")

var stop = document.querySelector(".stop")
var slow = document.querySelector(".slow")
var go = document.querySelector(".go")

stop.addEventListener("click", turnLightsRed)
slow.addEventListener("click", turnLightsYellow)
go.addEventListener("click", turnLightsGreen)

function turnLightsRed() {
	red.style.backgroundColor = "red";
	yellow.style.backgroundColor = "black";
	green.style.backgroundColor = "black";
}

function turnLightsYellow() {
	yellow.style.backgroundColor = "yellow";
	red.style.backgroundColor = "black";
	green.style.backgroundColor = "black";
}

function turnLightsGreen() {
	green.style.backgroundColor = "green";
	red.style.backgroundColor = "black";
	yellow.style.backgroundColor = "black";
}
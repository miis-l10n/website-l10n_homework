var buttonStop = document.querySelector(".stop")
var buttonSlow = document.querySelector(".slow")
var buttonGo = document.querySelector(".go")

var lightRed = document.querySelector(".red")
var lightYellow = document.querySelector(".yellow")
var	lightGreen = document.querySelector(".green")

buttonStop.addEventListener("click", turnLightRed)
buttonSlow.addEventListener("click", turnLightYellow)
buttonGo.addEventListener("click", turnLightGreen)

function turnLightRed() {
	lightRed.style.backgroundColor = "red"
	lightYellow.style.backgroundColor = "black"
	lightGreen.style.backgroundColor = "black"

}

function turnLightYellow() {
	lightRed.style.backgroundColor = "black"
	lightYellow.style.backgroundColor = "yellow"
	lightGreen.style.backgroundColor = "black"
}

function turnLightGreen() {
	lightRed.style.backgroundColor = "black"
	lightYellow.style.backgroundColor = "black"
	lightGreen.style.backgroundColor = "green"
}
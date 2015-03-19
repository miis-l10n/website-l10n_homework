	var Stop = document.querySelector(".Stop")
	var Slow = document.querySelector(".Slow")
	var Go = document.querySelector(".Go")
	var red = document.querySelector(".red")
	var yellow = document.querySelector(".yellow")
	var green = document.querySelector(".green")

	Stop.addEventListener("click", turnLightRed)
	Slow.addEventListener("click", turnLightYellow)
	Go.addEventListener("click", turnLightGreen)

	function turnLightRed() {
  	red.style.backgroundColor = "red"
  	yellow.style.backgroundColor = "black"
  	green.style.backgroundColor = "black"
}
	
	function turnLightYellow() {
  	red.style.backgroundColor = "black"
  	yellow.style.backgroundColor = "yellow"
  	green.style.backgroundColor = "black"
}
	function turnLightGreen() {
  	red.style.backgroundColor = "black"
  	yellow.style.backgroundColor = "black"
  	green.style.backgroundColor = "green"
}
var Stop=document.querySelector(".Stop")
	var Slow=document.querySelector(".Slow")
	var Go=document.querySelector(".Go")
	var red=document.querySelector(".red")
	var yellow=document.querySelector(".yellow")
	var green=document.querySelector(".green")

	Stop.addEventListener("click",turnRedRed)
	Slow.addEventListener("click",turnYellowYellow)
	Go.addEventListener("click",turnGreenGreen)

	function turnRedRed() {

		red.style.backgroundColor="red"
		yellow.style.backgroundColor="black"
		green.style.backgroundColor="black"
	}

	function turnYellowYellow() {
		yellow.style.backgroundColor="yellow"
		red.style.backgroundColor="black"
		green.style.backgroundColor="black"
	}
	function turnGreenGreen() {
		green.style.backgroundColor="green"
		red.style.backgroundColor="black"
		yellow.style.backgroundColor="black"
	}

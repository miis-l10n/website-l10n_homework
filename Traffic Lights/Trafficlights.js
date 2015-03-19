var red = document.querySelector(".red")
var stop = document.querySelector(".stop")

var yellow = document.querySelector(".yellow")
var slow = document.querySelector(".slow")

var green = document.querySelector(".green")
var go = document.querySelector(".go")



stop.addEventListener("click", Red);
slow.addEventListener("click", Yellow);
go.addEventListener("click", Green)



function Red () {
		red.style.backgroundColor = "red";
		yellow.style.backgroundColor = "black";
		green.style.backgroundColor = "black";
	}

function Yellow () {
		yellow.style.backgroundColor = "yellow";
		red.style.backgroundColor = "black";
		green.style.backgroundColor = "black";
	}

function Green () {
		green.style.backgroundColor = "green";
		red.style.backgroundColor = "black";
		yellow.style.backgroundColor = "black";
		
	}




document.getElementById( 'stop' ).onclick = Stop;
document.getElementById( 'slow' ).onclick = Slow;
document.getElementById( 'go' ).onclick = Go;

function Lightsoff() {
  document.getElementById('1').style.backgroundColor = "black";
  document.getElementById('2').style.backgroundColor = "black";
  document.getElementById('3').style.backgroundColor = "black";
}

function Stop() {
  Lightsoff(); document.getElementById('1').style.backgroundColor = "red";
}

function Slow() {
  Lightsoff(); document.getElementById('2').style.backgroundColor = "yellow";
}

function Go() {
  Lightsoff(); document.getElementById('3').style.backgroundColor = "green";
}



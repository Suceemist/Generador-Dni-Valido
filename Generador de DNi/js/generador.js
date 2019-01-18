//generador de DNIs válidos: math.random * 100.000.000 y el resto de / 23 
function generarDni()
{
    var num = Math.floor(Math.random() * 100000000) + 1;
    var numDni = num.toString();
	
		while (numDni.length<8)
		   {
		   numDni = "0"+numDni;
		   }
		   
	var resto =	numDni%23;
	var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
	var letraDni = letras.charAt(resto);
	var DniCompleto = numDni+letraDni;
	
	document.getElementById("campoDni").innerHTML = DniCompleto;
}

function mouseOver() {
  document.getElementById("boton").style.backgroundColor = "rgba(119,119,119,0.6)";
}

function mouseOut() {
  document.getElementById("boton").style.backgroundColor = "rgba(187,187,187,0.8)";
}

document.getElementById("boton").onmouseover = mouseOver;

document.getElementById("boton").onmouseout = mouseOut;

/* FORMA 1 
<button onclick="generarNum()">Try it</button>

<p id="demo"></p>

<script>
function generarNum() 
{
var num = Math.floor(Math.random() * 10000000) + 1;
var n = num.toString();
while (n.length<8)
{
n = "0"+n;
}
document.getElementById("demo").innerHTML = n;
}
</script>


/* FORMA 2 
//String vacío
aux="";
for (i=0; i<8; i++) //for loop para que se repita la acción 8 veces 
{
	var numero = Math.floor(Math.random() * 10); //Este metodo da un número del 0 al 9
	var numDni = aux+numero;
} 
0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22;
*/

/*
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math</h2>

<p>Math.floor(Math.random() * 100) + 1) returns a random integer between 1 and 100 (both included):</p>

<button onclick="generarNum()">Try it</button>

<p id="demo"></p>

<script>
function generarNum() 
{
var num = Math.floor(Math.random() * 100000000) + 1;
var n = num.toString();
while (n.length<8)
{
n = "0"+n;
}
document.getElementById("demo").innerHTML = n;
}
</script>
</body>
</html>
*/
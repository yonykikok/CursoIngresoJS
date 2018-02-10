function Mostrar()
{
//tomo la edad  

var edad

edad=document.getElementById('edad').value;
edad=parseInt(edad);

if (edad<13||edad>18) {

alert("usted no es adolescente");
}

else{
	alert("haga lo que quiera");
}

}//FIN DE LA FUNCIÓN
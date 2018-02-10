function Mostrar()
{
//tomo la edad  
var edad

edad=document.getElementById('edad').value;
edad=parseInt(edad);

if (edad>18) {

	alert("es mayor, puede ingresar");

}

else  {

alert("Lo siento vuelve en un par de años");
}

}//FIN DE LA FUNCIÓN
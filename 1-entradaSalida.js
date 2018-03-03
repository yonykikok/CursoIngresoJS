//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
			

/*1-Realizar el algoritmo que al presionar el botón "Mostrar" lea la base de un triangulo equilatero por ID,
 e informar el perímetro del mismo por alert */

 	var base;
 	var perimetro;

 	base=document.getElementById('lado').value;
 	base=parseInt(base);

 	perimetro=base*3

 	alert(perimetro);
	
}


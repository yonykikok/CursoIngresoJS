	//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*2-Realizar el algoritmo que al presionar el botón "Mostrar" lea un importe de un producto por prompt 
	y muestre el importe final sumándole el IVA (21%)*/
	var importe;
	var resultado;

	importe=prompt("ingrese un importe");
	importe=parseInt(importe);

	resultado=importe+importe*0.21;

	document.getElementById('importe').value=resultado;

	
}


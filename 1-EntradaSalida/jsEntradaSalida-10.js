/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{

	var sueldo;
	var resultado;

	sueldo=document.getElementById('importe').value;
	sueldo=parseInt(sueldo);

	// usando la regla de 3 simples podemos obtener el resultado.
	resultado=sueldo-sueldo/100*25;

	document.getElementById('resultado').value=resultado;


}

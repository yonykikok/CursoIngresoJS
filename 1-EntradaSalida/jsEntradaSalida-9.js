/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo;
	var resultado;

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	// para aumenter un % se puede utilizar *0.1 (10%); *0.25(25%).
	resultado=sueldo*0.1;

	document.getElementById('resultado').value=resultado;


}

/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo1
	var sueldo2
	var resultado1

	sueldo1=document.getElementById('sueldo').value;
	sueldo1=parseInt(sueldo1);// paso "sueldo1" a numerico para poder operar
	sueldo2= sueldo1+(sueldo1*0.1);

	

	document.getElementById('resultado').value=sueldo2;


}

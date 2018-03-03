//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*Enunciado:

3-Realizar el algoritmo que al presionar el botón "Mostrar" tome por ID dos datos,
 el largo y ancho de un terreno y luego que muestre cuantos metros 
 de alambre se necesitan para colocarle 6 hilos de alambrado a su perímetro*/
	
	var alambrado;
	var ancho;
	var largo;
	var perimetro;

	ancho=document.getElementById('ancho').value;
	largo=document.getElementById('largo').value;

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=largo*2+ancho*2;
	alambrado=perimetro*6;

	alert("necesita "+perimetro+" de alambre para dar 6 vueltas a su perimetro")


}


function Mostrar()
{
/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y 
luego que muestre cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro*/

	var largo;
	var Ancho;
	var perimetro;
	var metrosdealambre;

	
	Ancho=document.getElementById('ancho').value;
	Ancho=parseInt(Ancho);

	largo=document.getElementById('alrgo').value;
	largo=parseInt(largo);

	perimetro=largo+Ancho;
	metrosdealambre=perimetro*3


	alert("necesita "+metrosdealambre +" metros de alambre para todo el perimetro.");

}

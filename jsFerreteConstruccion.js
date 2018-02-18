/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var radio;
	var cal;
	var cemento;
	var metrocuadrado;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	perimetro=largo*2+ancho*2;

	document.getElementById('Radio').value=perimetro;

}
function Circulo () 
{
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	radio=radio*2*3.14;	

	alert("necesita "+radio+" metros para cubrir 3 vueltas de alambre al perimetro");
}
function Materiales () 
{
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	metrocuadrado=largo*ancho;
	
	cal=
	cemento=

	

	alert("necesita "+cal+" bolsas de cal y "+cemento+" bolsas de cemento para cubrir el area");

}
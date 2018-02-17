/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var resultado;

	preciouno=document.getElementById('PrecioUno').value;
	preciouno=parseInt(preciouno);

	preciodos=document.getElementById('PrecioDos').value;
	preciodos=parseInt(preciodos);

	preciotres=document.getElementById('PrecioTres').value;
	preciotres=parseInt(preciotres);

	resultado=preciouno+preciodos+preciotres;

	alert(resultado);

}
function Promedio () 
{
	preciouno=document.getElementById('PrecioUno').value;
	preciouno=parseInt(preciouno);

	preciodos=document.getElementById('PrecioDos').value;
	preciodos=parseInt(preciodos);

	preciotres=document.getElementById('PrecioTres').value;
	preciotres=parseInt(preciotres);

	resultado=preciouno+preciodos+preciotres;

	alert(resultado/3);
}
function PrecioFinal () 
{
	preciouno=document.getElementById('PrecioUno').value;
	preciouno=parseInt(preciouno);

	preciodos=document.getElementById('PrecioDos').value;
	preciodos=parseInt(preciodos);

	preciotres=document.getElementById('PrecioTres').value;
	preciotres=parseInt(preciotres);

	resultado=preciouno+preciodos+preciotres;

	alert(resultado+resultado*0.21);
}
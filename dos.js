function Mostrar()
{
  
  /*Enunciado:
Bienvenidos. 
Realiazar el algoritmo que lea un importe de un producto por prompt y 
muestre el importe final por ID sumándole el IVA (21%).*/

	var importe;
	var resultado;

	importe=prompt("ingrese un importe","ejemplo 50");
	importe=parseInt(importe);

	resultado=importe+importe*0.25;

	alert("si tu ingreso es "+importe+" y le sumamos 21% del iva, te queda como resultado final a pagar "+resultado);
}
